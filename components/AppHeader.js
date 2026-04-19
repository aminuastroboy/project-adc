import Link from "next/link";

export default function AppHeader({ title, subtitle, actionHref, actionLabel }) {
  return (
    <header>
      <div className="brand-row">
        <div className="logo-mark">M</div>
        <div>
          <p className="kicker">MT-Sub</p>
          <h1 className="page-title">{title}</h1>
        </div>
      </div>
      {subtitle ? <p className="small-muted" style={{ marginTop: ".75rem" }}>{subtitle}</p> : null}
      {actionHref && actionLabel ? (
        <div className="top-space">
          <Link href={actionHref} className="btn btn-soft" style={{ display: "inline-block" }}>{actionLabel}</Link>
        </div>
      ) : null}
    </header>
  );
}
