"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { apiFetch } from "@/lib/api";
import { useAuth } from "@/components/useAuth";
import Toast from "@/components/Toast";

export default function RegisterPage() {
  const router = useRouter();
  const { refresh } = useAuth();
  const [form, setForm] = useState({ name: "", phone: "", email: "", password: "" });
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState({ message: "", type: "success" });

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitting(true);
    try {
      await apiFetch("/api/auth/register", {
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
            <p className="kicker">Get started</p>
            <h1 className="page-title">Create your MT-Sub account</h1>
          </div>
        </div>
      </div>

      <form className="auth-card card" onSubmit={handleSubmit}>
        <label>Full name</label>
        <input className="input" placeholder="Aminu Musa" value={form.name} onChange={(e) => setForm((c) => ({ ...c, name: e.target.value }))} />
        <label>Phone number</label>
        <input className="input" placeholder="0803 000 0000" value={form.phone} onChange={(e) => setForm((c) => ({ ...c, phone: e.target.value }))} />
        <label>Email</label>
        <input className="input" placeholder="you@example.com" value={form.email} onChange={(e) => setForm((c) => ({ ...c, email: e.target.value }))} />
        <label>Password</label>
        <input className="input" type="password" placeholder="Create password" value={form.password} onChange={(e) => setForm((c) => ({ ...c, password: e.target.value }))} />
        <button className="btn btn-primary" disabled={submitting} style={{ display: "block", textAlign: "center", width: "100%" }}>
          {submitting ? "Creating account..." : "Create account"}
        </button>
        <div className="auth-links">
          Already have an account? <Link href="/login" style={{ color: "var(--primary)", fontWeight: 700 }}>Login</Link>
        </div>
      </form>
    </main>
  );
}
