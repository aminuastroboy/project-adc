"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { apiFetch } from "@/lib/api";
import { useAuth } from "@/components/useAuth";
import Toast from "@/components/Toast";

export default function LoginPage() {
  const router = useRouter();
  const { refresh } = useAuth();
  const [form, setForm] = useState({ identifier: "", password: "" });
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState({ message: "", type: "success" });

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitting(true);
    try {
      await apiFetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify(form)
      });
      await refresh();
      router.push("/app");
    } catch (error) {
      setToast({ message: error.message, type: "error" });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="auth-shell">
      <Toast message={toast.message} type={toast.type} onClose={() => setToast({ message: "", type: "success" })} />
      <div className="auth-head">
        <div className="brand-row">
          <div className="logo-mark">M</div>
          <div>
            <p className="kicker">Welcome back</p>
            <h1 className="page-title">Login to MT-Sub</h1>
          </div>
        </div>
      </div>

      <form className="auth-card card" onSubmit={handleSubmit}>
        <label>Email or phone</label>
        <input
          className="input"
          placeholder="you@example.com"
          value={form.identifier}
          onChange={(e) => setForm((current) => ({ ...current, identifier: e.target.value }))}
        />
        <label>Password</label>
        <input
          className="input"
          type="password"
          placeholder="••••••••"
          value={form.password}
          onChange={(e) => setForm((current) => ({ ...current, password: e.target.value }))}
        />
        <button className="btn btn-primary" disabled={submitting} style={{ display: "block", textAlign: "center", width: "100%" }}>
          {submitting ? "Signing in..." : "Login"}
        </button>
        <div className="auth-links">
          New here? <Link href="/register" style={{ color: "var(--primary)", fontWeight: 700 }}>Create account</Link>
        </div>
      </form>
    </main>
  );
}
