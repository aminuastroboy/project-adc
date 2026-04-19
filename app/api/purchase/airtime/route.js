import { ObjectId } from "mongodb";
import { getDb } from "@/lib/db";
import { requireUser } from "@/lib/auth";
import { isValidNigerianPhone, sanitizePhone, transactionRef } from "@/lib/utils";
import { processAirtimePurchase } from "@/lib/vtu/provider";
import { ok, fail } from "@/lib/server-response";
import { NETWORKS } from "@/lib/constants";

export async function POST(request) {
  const user = await requireUser();
  if (!user) return fail("Unauthorized.", 401);

  try {
    const body = await request.json();
    const network = String(body.network || "").trim();
    const phone = sanitizePhone(body.phone || "");
    const amount = Number(body.amount || 0);

    if (!NETWORKS.includes(network)) return fail("Invalid network selected.", 400);
    if (!isValidNigerianPhone(phone)) return fail("Enter a valid Nigerian phone number.", 400);
    if (!amount || amount < 50) return fail("Minimum airtime amount is ₦50.", 400);
    if ((user.walletBalance || 0) < amount) return fail("Insufficient wallet balance.", 400);

    const db = await getDb();
    const reference = transactionRef("AIR");
    const provider = await processAirtimePurchase({ network, phone, amount, reference });

    const status = provider.ok ? "success" : "failed";
    const tx = {
      userId: String(user._id),
      reference,
      type: "airtime",
      category: "vtu",
      network,
      phone,
      amount,
      detail: `₦${amount} airtime to ${phone}`,
      providerReference: provider.providerReference,
      providerMessage: provider.message,
      status,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    if (provider.ok) {
      await db.collection("users").updateOne(
        { _id: new ObjectId(String(user._id)), walletBalance: { $gte: amount } },
        { $inc: { walletBalance: -amount }, $set: { updatedAt: new Date() } }
      );
    }

    await db.collection("transactions").insertOne(tx);

    return ok({
      message: provider.message,
      transaction: tx,
      walletBalance: provider.ok ? (user.walletBalance || 0) - amount : (user.walletBalance || 0)
    }, provider.ok ? 201 : 400);
  } catch (error) {
    return fail(error.message || "Airtime purchase failed.", 500);
  }
}
