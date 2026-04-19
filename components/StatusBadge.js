export default function StatusBadge({ status }) {
  const normalized = String(status || "pending").toLowerCase();
  return <span className={`badge ${normalized}`}>{normalized}</span>;
}
