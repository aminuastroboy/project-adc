import { clearSession } from "@/lib/auth";
import { ok } from "@/lib/server-response";

export async function POST() {
  clearSession();
  return ok({ message: "Logged out successfully." });
}
