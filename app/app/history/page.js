"use client";

import { useEffect, useState } from "react";
import AppFrame from "@/components/AppFrame";
import AppHeader from "@/components/AppHeader";
import StatusBadge from "@/components/StatusBadge";
import AuthGuard from "@/components/AuthGuard";
import { apiFetch } from "@/lib/api";
import { formatNaira } from "@/lib/utils";

export default function HistoryPage() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    apiFetch("/api/transactions")
      .then((data) => setTransactions(data.transactions))
      .catch(() => {});
  }, []);

  return (
    <AuthGuard>
      <AppFrame current="/app/history">
        <AppHeader title="History" subtitle="Track your recent data and airtime transactions." />
        <section className="section list">
          {transactions.length === 0 ? (
            <div className="history-card card">
              <div className="small-muted">No transactions yet.</div>
            </div>
          ) : transactions.map((tx) => (
            <div className="history-card card" key={tx.reference}>
              <div className="transaction-row">
                <div>
                  <div style={{ fontWeight: 800 }}>{tx.type} • {tx.network || "Wallet"}</div>
                  <div className="small-muted" style={{ marginTop: ".25rem" }}>{tx.detail}</div>
                  <div className="small-muted" style={{ marginTop: ".35rem" }}>{tx.reference} • {new Date(tx.createdAt).toLocaleString()}</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontWeight: 800 }}>{formatNaira(tx.amount)}</div>
                  <div style={{ marginTop: ".45rem" }}><StatusBadge status={tx.status} /></div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </AppFrame>
    </AuthGuard>
  );
}
