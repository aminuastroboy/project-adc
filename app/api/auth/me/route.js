import { requireUser } from "@/lib/auth";
import { ok, fail } from "@/lib/server-response";

export async function GET() {
  const user = await requireUser();
  if (!user) {
    return fail("Unauthorized.", 401);
  }

  return ok({
    user: {
      id: String(user._id),
      name: user.name,
      email: user.email,
      phone: user.phone,
      walletBalance: user.walletBalance || 0,
      createdAt: user.createdAt
    }
  });
}
