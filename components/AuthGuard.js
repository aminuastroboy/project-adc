"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/useAuth";

export default function AuthGuard({ children }) {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/login");
    }
  }, [loading, user, router]);

  if (loading) {
    return <main className="auth-shell"><div className="card" style={{ padding: "1rem" }}>Loading...</div></main>;
  }

  if (!user) return null;
  return children;
}
