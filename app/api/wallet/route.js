import { ObjectId } from "mongodb";
import { getDb } from "@/lib/db";
import { requireUser } from "@/lib/auth";
import { transactionRef } from "@/lib/utils";
import { ok, fail } from "@/lib/server-response";

export async function GET() {
  const user = await requireUser();
  if (!user) return fail("Unauthorized.", 401);

  const db = await getDb();
  const fundingHistory = await db.collection("transactions")
    .find({ userId: String(user._id), type: "funding" })
    .sort({ createdAt: -1 })
    .limit(20)
    .toArray();

  return ok({
    walletBalance: user.walletBalance || 0,
    fundingHistory
  });
}

export async function POST(request) {
  const user = await requireUser();
  if (!user) return fail("Unauthorized.", 401);

  try {
    const body = await request.json();
    const amount = Number(body.amount || 0);

    if (!amount || amount < 100) {
      return fail("Minimum wallet funding is ₦100.", 400);
    }

    const db = await getDb();
    const reference = transactionRef("FUND");
    const transaction = {
      userId: String(user._id),
      reference,
      type: "funding",
      category: "wallet",
      network: null,
      phone: null,
      amount,
      status: "success",
      detail: "Manual mock wallet funding",
      createdAt: new Date(),
      updatedAt: new Date()
    };

    await db.collection("users").updateOne(
      { _id: new ObjectId(String(user._id)) },
      {
        $inc: { walletBalance: amount },
        $set: { updatedAt: new Date() }
      }
    );

    await db.collection("transactions").insertOne(transaction);

    return ok({
      message: "Wallet funded successfully.",
      walletBalance: (user.walletBalance || 0) + amount,
      transaction
    }, 201);
  } catch (error) {
    return fail(error.message || "Wallet funding failed.", 500);
  }
}
