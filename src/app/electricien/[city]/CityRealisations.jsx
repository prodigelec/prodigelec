"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getRealisationsByVille } from "@/app/data/realisations";
import RealisationsGrid from "@/app/components/realisations/RealisationsGrid";

export default function CityRealisations({ city }) {
  return (
    <RealisationsGrid
      items={getRealisationsByVille(city.name)}
      title={
        <>
          Ce que j&apos;ai déjà fait à{" "}
          <span style={{ color: "var(--primary)" }}>{city.name}</span>
        </>
      }
      footer={
        <Link
          href="/realisations"
          className="inline-flex items-center gap-1 text-sm font-bold hover:gap-2 transition-all"
          style={{ color: "var(--primary)" }}
        >
          Voir tous mes chantiers <ArrowRight size={14} />
        </Link>
      }
    />
  );
}
