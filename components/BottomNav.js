import Link from "next/link";

const items = [
  { href: "/app", label: "Home", icon: "⌂" },
  { href: "/app/data", label: "Data", icon: "◌" },
  { href: "/app/airtime", label: "Airtime", icon: "◔" },
  { href: "/app/history", label: "History", icon: "☰" },
  { href: "/app/profile", label: "Profile", icon: "☺" }
];

export default function BottomNav({ current }) {
  return (
    <nav className="bottom-nav">
      <div className="nav-grid">
        {items.map((item) => (
          <Link key={item.href} href={item.href} className={`nav-item ${current === item.href ? "active" : ""}`}>
            <span className="nav-icon">{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
