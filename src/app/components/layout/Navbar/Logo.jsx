"use client";
import Link from "next/link";
import ProdigelecMonogram from "@/app/components/ui/ProdigelecMonogram";

export default function Logo({ className = "" }) {
  return (
    <Link href="/" aria-label="PRODIGELEC - Retour à l'accueil">
      <div className={`flex items-center gap-3 group cursor-pointer ${className}`}>
        {/* Monogramme P + éclair */}
        <div className="shrink-0 transition-transform group-hover:scale-105">
          <ProdigelecMonogram size={80} light={false} />
        </div>

        {/* Wordmark + tagline */}
        <div className="flex flex-col gap-1 leading-none">
          <span
            style={{
              fontFamily: "'Sora', var(--font-sora), sans-serif",
              fontWeight: 800,
              fontSize: "1.45rem",
              letterSpacing: "-0.015em",
              lineHeight: 1,
              color: "#ffffff",
            }}
          >
            PRODIG
            <span style={{ color: "#ffd60a" }}>ELEC</span>
          </span>
          <span
            style={{
              fontFamily: "var(--font-sora), 'Sora', sans-serif",
              fontSize: "0.6rem",
              letterSpacing: "0.22em",
              color: "rgba(255,255,255,0.5)",
              textTransform: "uppercase",
            }}
          >
            Électricité · Sécurité · Automatisme
          </span>
        </div>
      </div>
    </Link>
  );
}
