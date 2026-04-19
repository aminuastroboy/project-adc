import { getDb } from "@/lib/db";
import { requireUser } from "@/lib/auth";
import { ok, fail } from "@/lib/server-response";

export async function GET() {
  const user = await requireUser();
  if (!user) return fail("Unauthorized.", 401);

  const db = await getDb();
  const transactions = await db.collection("transactions")
    .find({ userId: String(user._id) })
    .sort({ createdAt: -1 })
    .limit(50)
    .toArray();

  return ok({ transactions });
}
