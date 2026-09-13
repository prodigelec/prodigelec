"use client";
import Link from "next/link";
import ProdigelecMonogram from "@/app/components/ui/ProdigelecMonogram";

// Le logo tenait sur une seule taille, monogramme de 80 px et baseline
// comprise. Sur un écran de 360 px il ne restait presque rien pour le bouton
// menu posé à côté : le monogramme se réduit donc sous `sm`, et la baseline
// n'apparaît qu'à partir du moment où il y a la place de la lire.
export default function Logo({ className = "" }) {
  return (
    <Link href="/" aria-label="PRODIGELEC - Retour à l'accueil">
      <div className={`flex items-center gap-2 sm:gap-3 group cursor-pointer ${className}`}>
        {/* Monogramme P + éclair */}
        <div className="shrink-0 transition-transform group-hover:scale-105">
          <span className="block sm:hidden">
            <ProdigelecMonogram size={52} light={false} />
          </span>
          <span className="hidden sm:block">
            <ProdigelecMonogram size={80} light={false} />
          </span>
        </div>

        {/* Wordmark + tagline */}
        <div className="flex min-w-0 flex-col gap-1 leading-none">
          <span
            className="text-[1.1rem] sm:text-[1.45rem]"
            style={{
              fontFamily: "'Sora', var(--font-sora), sans-serif",
              fontWeight: 800,
              letterSpacing: "-0.015em",
              lineHeight: 1,
              color: "#ffffff",
            }}
          >
            PRODIG
            <span style={{ color: "#ffd60a" }}>ELEC</span>
          </span>
          <span
            className="hidden truncate sm:block"
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
