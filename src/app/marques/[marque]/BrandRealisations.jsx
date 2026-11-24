"use client";
import { getRealisationBySlug } from "@/app/data/realisations";
import RealisationsGrid from "@/app/components/realisations/RealisationsGrid";

export default function BrandRealisations({ brand }) {
  const items = brand.realisationSlugs.map(getRealisationBySlug).filter(Boolean);

  return (
    <RealisationsGrid
      items={items}
      title={
        <>
          Mes interventions{" "}
          <span style={{ color: "var(--primary)" }}>{brand.name}</span>
        </>
      }
    />
  );
}
