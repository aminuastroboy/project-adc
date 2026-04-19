import { getDb } from "@/lib/db";
import { hashPassword, setSession } from "@/lib/auth";
import { ok, fail } from "@/lib/server-response";

export async function POST(request) {
  try {
    const body = await request.json();
    const name = String(body.name || "").trim();
    const phone = String(body.phone || "").trim();
    const email = String(body.email || "").trim().toLowerCase();
    const password = String(body.password || "");

    if (!name || !phone || !email || !password) {
      return fail("All fields are required.", 400);
    }

    if (password.length < 6) {
      return fail("Password must be at least 6 characters.", 400);
    }

    const db = await getDb();
    const existing = await db.collection("users").findOne({
      $or: [{ email }, { phone }]
    });

    if (existing) {
      return fail("An account already exists with that email or phone.", 409);
    }

    const passwordHash = await hashPassword(password);
    const doc = {
      name,
      phone,
      email,
      passwordHash,
      role: "user",
      walletBalance: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const result = await db.collection("users").insertOne(doc);
    const user = { ...doc, _id: result.insertedId };
    delete user.passwordHash;

    setSession(user);

    return ok({
      message: "Account created successfully.",
      user: {
        id: String(user._id),
        name: user.name,
        email: user.email,
        phone: user.phone,
        walletBalance: user.walletBalance
      }
    }, 201);
  } catch (error) {
    return fail(error.message || "Registration failed.", 500);
  }
}
