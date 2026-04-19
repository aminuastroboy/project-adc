"use client";

import { useEffect, useMemo, useState } from "react";
import AppFrame from "@/components/AppFrame";
import AppHeader from "@/components/AppHeader";
import AuthGuard from "@/components/AuthGuard";
import Toast from "@/components/Toast";
import { apiFetch } from "@/lib/api";
import { formatNaira } from "@/lib/utils";
import { useAuth } from "@/components/useAuth";

export default function DataPage() {
  const { refresh } = useAuth();
  const [plans, setPlans] = useState({});
  const [form, setForm] = useState({ network: "MTN", phone: "", planCode: "" });
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState({ message: "", type: "success" });

  useEffect(() => {
    apiFetch("/api/plans")
      .then((data) => {
        setPlans(data.plans);
        const first = data.plans.MTN?.[0]?.code || "";
        setForm((current) => ({ ...current, planCode: first }));
      })
      .catch(() => {});
  }, []);

  const selectedPlans = plans[form.network] || [];
  const selectedPlan = useMemo(() => selectedPlans.find((plan) => plan.code === form.planCode), [selectedPlans, form.planCode]);

  useEffect(() => {
    const networkPlans = plans[form.network] || [];
    if (!networkPlans.find((plan) => plan.code === form.planCode)) {
      setForm((current) => ({ ...current, planCode: networkPlans[0]?.code || "" }));
    }
  }, [form.network, form.planCode, plans]);

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitting(true);
    try {
      const data = await apiFetch("/api/purchase/data", {
        method: "POST",
        body: JSON.stringify(form)
      });
      setToast({ message: data.message, type: "success" });
      await refresh();
      setForm((current) => ({ ...current, phone: "" }));
    } catch (error) {
      setToast({ message: error.message, type: "error" });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <AuthGuard>
      <AppFrame current="/app/data">
        <Toast message={toast.message} type={toast.type} onClose={() => setToast({ message: "", type: "success" })} />
        <AppHeader title="Buy Data" subtitle="Pick a network, enter a number and choose a bundle." />

        <form className="section form-card card" onSubmit={handleSubmit}>
          <label>Network</label>
          <select className="select" value={form.network} onChange={(e) => setForm((c) => ({ ...c, network: e.target.value }))}>
            {Object.keys(plans).map((network) => <option key={network}>{network}</option>)}
          </select>

          <label>Phone number</label>
          <input className="input" placeholder="0803 123 4567" value={form.phone} onChange={(e) => setForm((c) => ({ ...c, phone: e.target.value }))} />

          <label>Data bundle</label>
          <select className="select" value={form.planCode} onChange={(e) => setForm((c) => ({ ...c, planCode: e.target.value }))}>
            {selectedPlans.map((plan) => (
              <option key={plan.code} value={plan.code}>{plan.name} — {formatNaira(plan.price)}</option>
            ))}
          </select>

          <button className="btn btn-primary" style={{ width: "100%" }} disabled={submitting}>
            {submitting ? "Processing..." : "Buy data"}
          </button>
        </form>

        <section className="section summary-card card">
          <div style={{ fontWeight: 800, marginBottom: ".35rem" }}>Order summary</div>
          <div className="summary-item"><span>Service</span><strong>Data Purchase</strong></div>
          <div className="summary-item"><span>Recipient</span><strong>{form.phone || "—"}</strong></div>
          <div className="summary-item"><span>Bundle</span><strong>{selectedPlan?.name || "—"}</strong></div>
          <div className="summary-item"><span>Total</span><strong>{selectedPlan ? formatNaira(selectedPlan.price) : "—"}</strong></div>
        </section>
      </AppFrame>
    </AuthGuard>
  );
}
