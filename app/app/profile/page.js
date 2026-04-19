"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import AppFrame from "@/components/AppFrame";
import AppHeader from "@/components/AppHeader";
import AuthGuard from "@/components/AuthGuard";
import Toast from "@/components/Toast";
import { apiFetch } from "@/lib/api";
import { useAuth } from "@/components/useAuth";

export default function ProfilePage() {
  const { user, refresh, setUser } = useAuth();
  const router = useRouter();
  const [form, setForm] = useState({ name: user?.name || "", phone: user?.phone || "" });
  const [toast, setToast] = useState({ message: "", type: "success" });
  const [saving, setSaving] = useState(false);

  async function saveProfile() {
    setSaving(true);
    try {
      await apiFetch("/api/profile", {
        method: "PATCH",
        body: JSON.stringify(form)
      });
      await refresh();
      setToast({ message: "Profile updated.", type: "success" });
    } catch (error) {
      setToast({ message: error.message, type: "error" });
    } finally {
      setSaving(false);
    }
  }

  async function logout() {
    await apiFetch("/api/auth/logout", { method: "POST" });
    setUser(null);
    router.push("/login");
  }

  return (
    <AuthGuard>
      <AppFrame current="/app/profile">
        <Toast message={toast.message} type={toast.type} onClose={() => setToast({ message: "", type: "success" })} />
        <AppHeader title="Profile" subtitle="Your account details and quick access settings." />

        <section className="section profile-list">
          <div className="mini-card card">
            <div className="small-muted">Full name</div>
            <input className="input" value={form.name} onChange={(e) => setForm((c) => ({ ...c, name: e.target.value }))} style={{ marginTop: ".5rem", marginBottom: 0 }} />
          </div>
          <div className="mini-card card">
            <div className="small-muted">Phone number</div>
            <input className="input" value={form.phone} onChange={(e) => setForm((c) => ({ ...c, phone: e.target.value }))} style={{ marginTop: ".5rem", marginBottom: 0 }} />
          </div>
          <div className="mini-card card">
            <div className="small-muted">Email</div>
            <div style={{ fontWeight: 800, marginTop: ".25rem" }}>{user?.email}</div>
          </div>
        </section>

        <section className="section action-grid">
          <button className="btn btn-primary" style={{ textAlign: "center" }} onClick={saveProfile} disabled={saving}>
            {saving ? "Saving..." : "Save changes"}
          </button>
          <button className="btn btn-ghost" style={{ textAlign: "center" }} onClick={logout}>Logout</button>
        </section>
      </AppFrame>
    </AuthGuard>
  );
}
