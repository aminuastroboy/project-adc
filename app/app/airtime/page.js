"use client";

import { useState } from "react";
import AppFrame from "@/components/AppFrame";
import AppHeader from "@/components/AppHeader";
import AuthGuard from "@/components/AuthGuard";
import Toast from "@/components/Toast";
import { apiFetch } from "@/lib/api";
import { useAuth } from "@/components/useAuth";

export default function AirtimePage() {
  const { refresh } = useAuth();
  const [form, setForm] = useState({ network: "MTN", phone: "", amount: "" });
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState({ message: "", type: "success" });

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitting(true);
    try {
      const data = await apiFetch("/api/purchase/airtime", {
        method: "POST",
        body: JSON.stringify({ ...form, amount: Number(form.amount) })
      });
      setToast({ message: data.message, type: "success" });
      await refresh();
      setForm((current) => ({ ...current, phone: "", amount: "" }));
    } catch (error) {
      setToast({ message: error.message, type: "error" });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <AuthGuard>
      <AppFrame current="/app/airtime">
        <Toast message={toast.message} type={toast.type} onClose={() => setToast({ message: "", type: "success" })} />
        <AppHeader title="Buy Airtime" subtitle="Recharge any supported network in a few taps." />

        <form className="section form-card card" onSubmit={handleSubmit}>
          <label>Network</label>
          <select className="select" value={form.network} onChange={(e) => setForm((c) => ({ ...c, network: e.target.value }))}>
            <option>MTN</option>
            <option>Airtel</option>
            <option>Glo</option>
            <option>9mobile</option>
          </select>

          <label>Phone number</label>
          <input className="input" placeholder="0706 241 3355" value={form.phone} onChange={(e) => setForm((c) => ({ ...c, phone: e.target.value }))} />

          <label>Amount</label>
          <input className="input" placeholder="500" value={form.amount} onChange={(e) => setForm((c) => ({ ...c, amount: e.target.value }))} />

          <button className="btn btn-primary" style={{ width: "100%" }} disabled={submitting}>
            {submitting ? "Processing..." : "Buy airtime"}
          </button>
        </form>

        <section className="section summary-card card">
          <div style={{ fontWeight: 800, marginBottom: ".35rem" }}>Quick note</div>
          <div className="small-muted" style={{ lineHeight: 1.65 }}>
            Airtime purchase is fully connected in mock provider mode. Your wallet gets debited only when the purchase succeeds.
          </div>
        </section>
      </AppFrame>
    </AuthGuard>
  );
}
