import { getDb } from "@/lib/db";
import { setSession, verifyPassword } from "@/lib/auth";
import { ok, fail } from "@/lib/server-response";

export async function POST(request) {
  try {
    const body = await request.json();
    const identifier = String(body.identifier || "").trim().toLowerCase();
    const password = String(body.password || "");

    if (!identifier || !password) {
      return fail("Email/phone and password are required.", 400);
    }

    const db = await getDb();
    const user = await db.collection("users").findOne({
      $or: [{ email: identifier }, { phone: identifier }]
    });

    if (!user) {
      return fail("Invalid login credentials.", 401);
    }

    const valid = await verifyPassword(password, user.passwordHash);
    if (!valid) {
      return fail("Invalid login credentials.", 401);
    }

    setSession(user);

    return ok({
      message: "Login successful.",
      user: {
        id: String(user._id),
        name: user.name,
        email: user.email,
        phone: user.phone,
        walletBalance: user.walletBalance || 0
      }
    });
  } catch (error) {
    return fail(error.message || "Login failed.", 500);
  }
}
