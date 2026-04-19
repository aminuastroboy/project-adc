export function formatNaira(amount) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0
  }).format(Number(amount || 0));
}

export function sanitizePhone(phone = "") {
  return phone.replace(/\D/g, "").trim();
}

export function isValidNigerianPhone(phone = "") {
  const normalized = sanitizePhone(phone);
  return /^(234|0)?[789][01]\d{8}$/.test(normalized);
}

export function transactionRef(prefix = "MTS") {
  const now = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).slice(2, 7).toUpperCase();
  return `${prefix}-${now}-${random}`;
}

export async function sha256(value) {
  const encoder = new TextEncoder();
  const data = encoder.encode(value);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, "0")).join("");
}
