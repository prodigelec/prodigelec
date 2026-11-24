"use client";

export default function BrandName({ className = "" }) {
  return (
    <span
      className={`inline-flex font-black ${className}`}
      style={{ fontFamily: "'Sora', var(--font-sora), sans-serif" }}
    >
      <span>PRODIG</span>
      <span style={{ color: "#ffd60a" }}>ELEC</span>
    </span>
  );
}
