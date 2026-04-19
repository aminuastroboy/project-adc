"use client";

import { useEffect, useState } from "react";
import AppFrame from "@/components/AppFrame";
import AppHeader from "@/components/AppHeader";
import AuthGuard from "@/components/AuthGuard";
import Toast from "@/components/Toast";
import { apiFetch } from "@/lib/api";
import { useAuth } from "@/components/useAuth";
import { formatNaira } from "@/lib/utils";

export default function WalletPage() {
  const { user, refresh } = useAuth();
  const [amount, setAmount] = useState("1000");
  const [history, setHistory] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState({ message: "", type: "success" });

  async function loadWallet() {
    try {
      const data = await apiFetch("/api/wallet");
      setHistory(data.fundingHistory);
      await refresh();
    } catch {}
  }

  useEffect(() => {
    loadWallet();
  }, []);

  async function fundWallet() {
    setSubmitting(true);
    try {
      const data = await apiFetch("/api/wallet", {
        method: "POST",
        body: JSON.stringify({ amount: Number(amount) })
      });
      setToast({ message: data.message, type: "success" });
      setAmount("1000");
      await loadWallet();
    } catch (error) {
      setToast({ message: error.message, type: "error" });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <AuthGuard>
      <AppFrame current="/app/profile">
        <Toast message={toast.message} type={toast.type} onClose={() => setToast({ message: "", type: "success" })} />
        <AppHeader title="Wallet" subtitle="Check your balance and recent wallet activity." />

        <section className="wallet-card card">
          <div className="small-muted">Current balance</div>
          <div className="balance-amount">{formatNaira(user?.walletBalance || 0)}</div>
          <label style={{ marginTop: ".8rem" }}>Add funds (mock)</label>
          <input className="input" value={amount} onChange={(e) => setAmount(e.target.value)} />
          <div className="action-grid">
            <button className="btn btn-primary" onClick={fundWallet} disabled={submitting}>{submitting ? "Funding..." : "Fund wallet"}</button>
            <button className="btn btn-ghost" onClick={loadWallet}>Refresh</button>
          </div>
        </section>

        <section className="section list">
          {history.length === 0 ? (
            <div className="history-card card"><div className="small-muted">No wallet funding history yet.</div></div>
          ) : history.map((item) => (
            <div className="history-card card" key={item.reference}>
              <div className="transaction-row">
                <div>
                  <div style={{ fontWeight: 800 }}>Wallet funded</div>
                  <div className="small-muted" style={{ marginTop: ".25rem" }}>{item.reference}</div>
                  <div className="small-muted" style={{ marginTop: ".35rem" }}>{new Date(item.createdAt).toLocaleString()}</div>
                </div>
                <div style={{ fontWeight: 800 }}>{formatNaira(item.amount)}</div>
              </div>
            </div>
          ))}
        </section>
      </AppFrame>
    </AuthGuard>
  );
}
