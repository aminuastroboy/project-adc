import { ObjectId } from "mongodb";
import { getDb } from "@/lib/db";
import { requireUser } from "@/lib/auth";
import { ok, fail } from "@/lib/server-response";

export async function PATCH(request) {
  const user = await requireUser();
  if (!user) return fail("Unauthorized.", 401);

  try {
    const body = await request.json();
    const name = String(body.name || "").trim();
    const phone = String(body.phone || "").trim();

    if (!name || !phone) {
      return fail("Name and phone are required.", 400);
    }

    const db = await getDb();
    await db.collection("users").updateOne(
      { _id: new ObjectId(String(user._id)) },
      { $set: { name, phone, updatedAt: new Date() } }
    );

    return ok({ message: "Profile updated successfully." });
  } catch (error) {
    return fail(error.message || "Profile update failed.", 500);
  }
}
