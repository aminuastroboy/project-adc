import { DATA_PLANS, NETWORKS } from "@/lib/constants";
import { ok } from "@/lib/server-response";

export async function GET() {
  return ok({ networks: NETWORKS, plans: DATA_PLANS });
}
