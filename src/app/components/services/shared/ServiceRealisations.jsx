"use client";
import Link from "next/link";
import { ArrowRight, Camera } from "lucide-react";
import { realisations, categoryColors } from "@/app/data/realisations";
import RealisationsGrid from "@/app/components/realisations/RealisationsGrid";

// Les pages services ne montraient aucun chantier : la preuve par la photo et
// le maillage vers les réalisations s'arrêtaient aux pages villes et marques,
// alors que ces pages-ci sont celles sur lesquelles un visiteur décide.
export default function ServiceRealisations({ categorie, theme = "electricite", limit = 4 }) {
  const color =
    theme === "electricite" ? "var(--accent)" :
    theme === "borne" ? "#10b981" :
    "var(--primary)";

  // `realisations` arrive déjà trié du chantier le plus récent au plus ancien :
  // la section se renouvelle donc toute seule à chaque nouveau chantier publié.
  const items = realisations.filter((r) => r.categorie === categorie).slice(0, limit);
  const label = (categoryColors[categorie]?.label ?? "").toLowerCase();

  return (
    <RealisationsGrid
      items={items}
      accent={color}
      clamp
      className="mb-8 md:mb-16"
      titleClassName="text-xl md:text-2xl font-bold text-white"
      eyebrow="Chantiers réalisés"
      title={
        <span className="flex items-center gap-2">
          <Camera size={20} style={{ color }} className="shrink-0" />
          <span>
            Mes derniers chantiers en <span style={{ color }}>{label}</span>
          </span>
        </span>
      }
      footer={
        <Link
          href="/realisations"
          className="inline-flex items-center gap-1 text-sm font-bold hover:gap-2 transition-all"
          style={{ color }}
        >
          Voir tous mes chantiers <ArrowRight size={14} />
        </Link>
      }
    />
  );
}
