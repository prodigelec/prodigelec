import { notFound } from "next/navigation";
import {
  realisations,
  getRealisationBySlug,
  getRelatedRealisations,
  categoryColors,
  formatRealisationDate,
} from "@/app/data/realisations";
import { getCityByName } from "@/app/data/cities";
import RealisationDetail from "./RealisationDetail";

const BASE_URL = "https://www.prodigelec.fr";

export function generateStaticParams() {
  return realisations.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const r = getRealisationBySlug(slug);
  if (!r) return {};

  const title = `${r.titre} — ${r.ville} (${r.departementCode})`;
  const url = `${BASE_URL}/realisations/${r.slug}`;
  const image = `${BASE_URL}${r.image}`;

  return {
    title,
    description: r.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${r.titre} à ${r.ville} — PRODIGELEC`,
      description: r.description,
      url,
      type: "article",
      images: [{ url: image, width: 1200, height: 630, alt: r.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${r.titre} à ${r.ville} — PRODIGELEC`,
      description: r.description,
      images: [image],
    },
  };
}

export default async function RealisationPage({ params }) {
  const { slug } = await params;
  const r = getRealisationBySlug(slug);
  if (!r) notFound();

  const url = `${BASE_URL}/realisations/${r.slug}`;
  const city = getCityByName(r.ville);
  const related = getRelatedRealisations(r);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: `${BASE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Réalisations", item: `${BASE_URL}/realisations` },
      { "@type": "ListItem", position: 3, name: r.titre, item: url },
    ],
  };

  // Même approche que les pages villes : le business complet est déclaré une
  // seule fois dans le JSON-LD global, on s'y réfère par @id au lieu de le
  // redupliquer sur chaque chantier.
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: r.titre,
    description: r.description,
    url,
    serviceType: categoryColors[r.categorie]?.label ?? "Électricité",
    provider: { "@id": `${BASE_URL}/#business` },
    areaServed: { "@type": "City", name: r.ville },
    image: {
      "@type": "ImageObject",
      url: `${BASE_URL}${r.image}`,
      description: r.imageAlt,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <RealisationDetail
        realisation={r}
        citySlug={city?.slug ?? null}
        related={related}
        dateLabel={formatRealisationDate(r.date)}
      />
    </>
  );
}
