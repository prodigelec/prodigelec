"use client";

export default function BrandName({ className = "" }) {
  return (
    <span className={`inline-flex ${className}`}>
      <span className="text-metallic">PRODIG</span>
      <span className="text-gold-shine">ELEC</span>
    </span>
  );
}
