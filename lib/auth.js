import crypto from "crypto";
import { ObjectId } from "mongodb";
import { cookies } from "next/headers";
import { getDb } from "@/lib/db";

const COOKIE_NAME = "mt_sub_session";

function base64url(input) {
  return Buffer.from(input).toString("base64url");
}

function sign(value, secret) {
  return crypto.createHmac("sha256", secret).update(value).digest("base64url");
}

export async function hashPassword(password, salt = crypto.randomBytes(16).toString("hex")) {
  const derived = crypto.scryptSync(password, salt, 64).toString("hex");
  return `${salt}:${derived}`;
}

export async function verifyPassword(password, storedHash) {
  const [salt, original] = String(storedHash || "").split(":");
  if (!salt || !original) return false;
  const derived = crypto.scryptSync(password, salt, 64).toString("hex");
  return crypto.timingSafeEqual(Buffer.from(original, "hex"), Buffer.from(derived, "hex"));
}

export function createSessionPayload(user) {
  return JSON.stringify({
    id: String(user._id),
    email: user.email,
    name: user.name,
    phone: user.phone,
    role: user.role || "user"
  });
}

export function createSessionToken(payload) {
  const secret = process.env.APP_SECRET;
  if (!secret) throw new Error("Missing APP_SECRET.");
  const encoded = base64url(payload);
  const signature = sign(encoded, secret);
  return `${encoded}.${signature}`;
}

export function readSessionToken(token) {
  if (!token || !token.includes(".")) return null;
  const secret = process.env.APP_SECRET;
  if (!secret) throw new Error("Missing APP_SECRET.");
  const [encoded, signature] = token.split(".");
  const expected = sign(encoded, secret);
  if (signature !== expected) return null;
  try {
    const payload = Buffer.from(encoded, "base64url").toString("utf8");
    return JSON.parse(payload);
  } catch {
    return null;
  }
}

export function setSession(user) {
  const token = createSessionToken(createSessionPayload(user));
  cookies().set(COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 14
  });
}

export function clearSession() {
  cookies().set(COOKIE_NAME, "", { path: "/", expires: new Date(0) });
}

export function getSession() {
  const token = cookies().get(COOKIE_NAME)?.value;
  return readSessionToken(token);
}

export async function requireUser() {
  const session = getSession();
  if (!session?.id) return null;
  const db = await getDb();
  const user = await db.collection("users").findOne(
    { _id: new ObjectId(session.id) },
    { projection: { passwordHash: 0 } }
  );
  return user;
}
