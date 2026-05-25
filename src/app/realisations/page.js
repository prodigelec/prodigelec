import RealisationsContent from "./RealisationsContent";
import { realisations } from "@/app/data/realisations";

export const metadata = {
  title: "Réalisations — Chantiers électricité & sécurité | PRODIGELEC",
  description: "Découvrez les réalisations de PRODIGELEC : installation électrique, sécurité électronique et automatismes en Eure-et-Loir, Eure et Yvelines.",
  alternates: { canonical: "https://www.prodigelec.fr/realisations" },
  openGraph: {
    title: "Réalisations PRODIGELEC — Électricité & Sécurité",
    description: "Photos de chantiers réels : tableaux électriques, sonnettes, four, prises — interventions en 27, 28 et 78.",
    url: "https://www.prodigelec.fr/realisations",
    images: [
      {
        url: "https://www.prodigelec.fr/tableau-electrique-marchezais.jpg",
        width: 1200,
        height: 630,
        alt: "Réalisations PRODIGELEC — Chantiers électricité et sécurité",
      },
    ],
  },
};

const BASE_URL = "https://www.prodigelec.fr";

export default function RealisationsPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Réalisations PRODIGELEC — Chantiers électricité & sécurité",
    description:
      "Galerie de chantiers réels réalisés par PRODIGELEC en Eure-et-Loir (28), Eure (27) et Yvelines (78).",
    url: `${BASE_URL}/realisations`,
    numberOfItems: realisations.length,
    itemListElement: realisations.map((r, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: r.titre,
      description: r.description,
      image: {
        "@type": "ImageObject",
        url: `${BASE_URL}${r.image}`,
        description: r.imageAlt,
      },
      url: `${BASE_URL}/realisations#${r.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <RealisationsContent />
    </>
  );
}
