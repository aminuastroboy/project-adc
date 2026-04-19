"use client";

export default function Toast({ message, type = "success", onClose }) {
  if (!message) return null;

  return (
    <div className={`toast toast-${type}`}>
      <div>{message}</div>
      <button type="button" onClick={onClose} aria-label="Close message">×</button>
    </div>
  );
}
