import BottomNav from "@/components/BottomNav";

export default function AppFrame({ current, children }) {
  return (
    <main className="app-shell">
      {children}
      <BottomNav current={current} />
      <p className="desktop-note">MT-Sub is optimized first for mobile screens and installable PWA use.</p>
    </main>
  );
}
