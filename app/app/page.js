"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import AppFrame from "@/components/AppFrame";
import AppHeader from "@/components/AppHeader";
import StatusBadge from "@/components/StatusBadge";
import AuthGuard from "@/components/AuthGuard";
import { useAuth } from "@/components/useAuth";
import { apiFetch } from "@/lib/api";
import { formatNaira } from "@/lib/utils";

export default function HomeAppPage() {
  const { user, refresh } = useAuth();
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    refresh();
    apiFetch("/api/transactions").then((data) => setTransactions(data.transactions.slice(0, 3))).catch(() => {});
  }, [refresh]);

  return (
    <AuthGuard>
      <AppFrame current="/app">
        <AppHeader title={`Hi, ${user?.name?.split(" ")[0] || "there"}`} subtitle="Your quick dashboard for data and airtime purchases." actionHref="/app/wallet" actionLabel="View wallet" />

        <section className="wallet-card card">
          <div className="balance-row">
            <div>
              <div className="small-muted">Available balance</div>
              <div className="balance-amount">{formatNaira(user?.walletBalance || 0)}</div>
              <div className="small-muted">Provider mode: mock purchase</div>
            </div>
            <Link href="/app/wallet" className="btn btn-soft">Fund wallet</Link>
          </div>
        </section>

        <section className="section action-grid">
          <Link href="/app/data" className="action-tile card">
            <strong>Buy Data</strong>
            <span className="small-muted">Choose network and bundle fast.</span>
          </Link>
          <Link href="/app/airtime" className="action-tile card">
            <strong>Buy Airtime</strong>
            <span className="small-muted">Recharge your line or someone else.</span>
          </Link>
        </section>

        <section className="section">
          <div className="small-muted" style={{ marginBottom: ".7rem", fontWeight: 700 }}>Networks</div>
          <div className="network-row">
            {["MTN", "Airtel", "Glo", "9mobile"].map((item) => (
              <div className="network-chip" key={item}>{item}</div>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="row" style={{ justifyContent: "space-between", marginBottom: ".7rem" }}>
            <div style={{ fontWeight: 800 }}>Recent activity</div>
            <Link href="/app/history" className="small-muted" style={{ color: "var(--primary)", fontWeight: 700 }}>See all</Link>
          </div>
          <div className="list">
            {transactions.length === 0 ? (
              <div className="history-card card">
                <div className="small-muted">No transactions yet. Fund your wallet and buy data or airtime.</div>
              </div>
            ) : transactions.map((tx) => (
              <div className="history-card card" key={tx.reference}>
                <div className="transaction-row">
                  <div>
                    <div style={{ fontWeight: 800 }}>{tx.type} • {tx.network || "Wallet"}</div>
                    <div className="small-muted" style={{ marginTop: ".25rem" }}>{tx.detail}</div>
                    <div className="small-muted" style={{ marginTop: ".35rem" }}>{new Date(tx.createdAt).toLocaleString()}</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontWeight: 800 }}>{formatNaira(tx.amount)}</div>
                    <div style={{ marginTop: ".45rem" }}><StatusBadge status={tx.status} /></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </AppFrame>
    </AuthGuard>
  );
}
