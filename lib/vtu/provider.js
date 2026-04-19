export async function processAirtimePurchase({ network, phone, amount, reference }) {
  const mode = process.env.VTU_PROVIDER || "mock";

  if (mode === "mock") {
    await new Promise((resolve) => setTimeout(resolve, 900));
    return {
      ok: true,
      status: "success",
      providerReference: `MOCK-AIR-${Date.now()}`,
      message: `Airtime purchase successful for ${phone}`,
      meta: { network, amount, reference }
    };
  }

  return {
    ok: false,
    status: "failed",
    providerReference: null,
    message: "Live VTU provider is not configured yet.",
    meta: { network, amount, reference }
  };
}

export async function processDataPurchase({ network, phone, plan, reference }) {
  const mode = process.env.VTU_PROVIDER || "mock";

  if (mode === "mock") {
    await new Promise((resolve) => setTimeout(resolve, 1100));
    return {
      ok: true,
      status: "success",
      providerReference: `MOCK-DATA-${Date.now()}`,
      message: `${plan.name} delivered successfully to ${phone}`,
      meta: { network, plan, reference }
    };
  }

  return {
    ok: false,
    status: "failed",
    providerReference: null,
    message: "Live VTU provider is not configured yet.",
    meta: { network, plan, reference }
  };
}
