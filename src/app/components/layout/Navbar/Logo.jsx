"use client";
import Link from "next/link";
import ProdigelecMonogram from "@/app/components/ui/ProdigelecMonogram";

// Le logo tenait sur une seule taille, monogramme de 80 px et baseline
// comprise : 366 px de large, quelle que soit la place disponible. Sur un
// portable de 1280 px la navbar debordait, et sur un telephone de 360 px il ne
// restait presque rien pour le bouton menu.
//
// `variant` decide de l'encombrement selon l'endroit : la barre mobile a de la
// place a cote de son seul bouton, la navbar desktop doit loger sept entrees de
// menu et deux boutons.
const VARIANTS = {
  mobile: {
    monogramme: { petit: 52, grand: 80, bascule: "sm" },
    tagline: "hidden truncate sm:block",
    wordmark: "text-[1.1rem] sm:text-[1.45rem]",
  },
  desktop: {
    monogramme: { petit: 56, grand: 72, bascule: "xl" },
    // La baseline ne reapparait qu'une fois les sept entrees de menu logees.
    tagline: "hidden truncate 2xl:block",
    wordmark: "text-[1.15rem] xl:text-[1.35rem]",
  },
};

export default function Logo({ className = "", variant = "mobile" }) {
  const v = VARIANTS[variant] ?? VARIANTS.mobile;
  const { petit, grand, bascule } = v.monogramme;

  return (
    <Link href="/" aria-label="PRODIGELEC - Retour à l'accueil">
      <div className={`flex items-center gap-2 sm:gap-3 group cursor-pointer ${className}`}>
        {/* Monogramme P + éclair */}
        <div className="shrink-0 transition-transform group-hover:scale-105">
          <span className={bascule === "sm" ? "block sm:hidden" : "block xl:hidden"}>
            <ProdigelecMonogram size={petit} light={false} />
          </span>
          <span className={bascule === "sm" ? "hidden sm:block" : "hidden xl:block"}>
            <ProdigelecMonogram size={grand} light={false} />
          </span>
        </div>

        {/* Wordmark + tagline */}
        <div className="flex min-w-0 flex-col gap-1 leading-none">
          <span
            className={v.wordmark}
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
            className={v.tagline}
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
