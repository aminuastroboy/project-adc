import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="auth-shell">
      <section className="hero-card card">
        <div className="brand-row">
          <div className="logo-mark light">M</div>
          <div>
            <div style={{ fontWeight: 800, fontSize: "1.2rem" }}>MT-Sub</div>
            <div style={{ opacity: 0.86, fontSize: ".9rem" }}>By Musatech Solutions Ltd</div>
          </div>
        </div>
        <h1 style={{ margin: "1rem 0 .6rem", fontSize: "2rem", lineHeight: 1.1 }}>Buy data and airtime fast.</h1>
        <p style={{ margin: 0, lineHeight: 1.65, opacity: 0.94 }}>
          Mobile-first wallet app for simple VTU purchases. Fund your wallet, choose a network and buy in seconds.
        </p>
      </section>

      <section className="section card" style={{ padding: "1rem" }}>
        <div className="network-row">
          {["MTN", "Airtel", "Glo", "9mobile"].map((item) => (
            <div className="network-chip" key={item}>{item}</div>
          ))}
        </div>
      </section>

      <section className="section action-grid">
        <Link href="/login" className="btn btn-primary" style={{ textAlign: "center" }}>Login</Link>
        <Link href="/register" className="btn btn-ghost" style={{ textAlign: "center" }}>Create account</Link>
      </section>
    </main>
  );
}
