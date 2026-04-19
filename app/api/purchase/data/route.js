import { ObjectId } from "mongodb";
import { getDb } from "@/lib/db";
import { requireUser } from "@/lib/auth";
import { isValidNigerianPhone, sanitizePhone, transactionRef } from "@/lib/utils";
import { processDataPurchase } from "@/lib/vtu/provider";
import { ok, fail } from "@/lib/server-response";
import { DATA_PLANS, NETWORKS } from "@/lib/constants";

function findPlan(network, code) {
  const plans = DATA_PLANS[network] || [];
  return plans.find((item) => item.code === code);
}

export async function POST(request) {
  const user = await requireUser();
  if (!user) return fail("Unauthorized.", 401);

  try {
    const body = await request.json();
    const network = String(body.network || "").trim();
    const phone = sanitizePhone(body.phone || "");
    const planCode = String(body.planCode || "").trim();

    if (!NETWORKS.includes(network)) return fail("Invalid network selected.", 400);
    if (!isValidNigerianPhone(phone)) return fail("Enter a valid Nigerian phone number.", 400);

    const plan = findPlan(network, planCode);
    if (!plan) return fail("Invalid data plan selected.", 400);

    if ((user.walletBalance || 0) < plan.price) return fail("Insufficient wallet balance.", 400);

    const db = await getDb();
    const reference = transactionRef("DATA");
    const provider = await processDataPurchase({ network, phone, plan, reference });

    const status = provider.ok ? "success" : "failed";
    const tx = {
      userId: String(user._id),
      reference,
      type: "data",
      category: "vtu",
      network,
      phone,
      amount: plan.price,
      planCode: plan.code,
      planName: plan.name,
      detail: `${plan.name} to ${phone}`,
      providerReference: provider.providerReference,
      providerMessage: provider.message,
      status,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    if (provider.ok) {
      await db.collection("users").updateOne(
        { _id: new ObjectId(String(user._id)), walletBalance: { $gte: plan.price } },
        { $inc: { walletBalance: -plan.price }, $set: { updatedAt: new Date() } }
      );
    }

    await db.collection("transactions").insertOne(tx);

    return ok({
      message: provider.message,
      transaction: tx,
      walletBalance: provider.ok ? (user.walletBalance || 0) - plan.price : (user.walletBalance || 0)
    }, provider.ok ? 201 : 400);
  } catch (error) {
    return fail(error.message || "Data purchase failed.", 500);
  }
}
