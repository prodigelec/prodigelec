import { cities } from "@/app/data/cities";
import CommunesHub from "./CommunesHub";

const BASE_URL = "https://www.prodigelec.fr";
const URL = `${BASE_URL}/electricien`;

// L'ordre d'affichage des départements : le 28 d'abord, c'est celui de
// Broué et celui où se trouvent la majorité des communes desservies.
const DEPARTMENT_ORDER = ["Eure-et-Loir", "Yvelines", "Eure"];

export const metadata = {
  title: "Électricien en Eure-et-Loir, Eure et Yvelines — 41 communes",
  description:
    "Les 41 communes où j'interviens en électricité, sécurité électronique et automatismes, depuis Broué (28). Eure-et-Loir, Eure et Yvelines — devis gratuit jusqu'à 30 km.",
  alternates: { canonical: URL },
  openGraph: {
    title: "Zones d'intervention — Électricien 28, 27 & 78 | PRODIGELEC",
    description:
      "41 communes desservies en Eure-et-Loir, Eure et Yvelines depuis Broué. Électricité générale, sécurité électronique et automatismes.",
    url: URL,
    images: [
      {
        url: `${BASE_URL}/tableau-electrique-marchezais.jpg`,
        width: 1200,
        height: 630,
        alt: "Intervention électrique PRODIGELEC en Eure-et-Loir",
      },
    ],
  },
};

function groupByDepartment() {
  return DEPARTMENT_ORDER.map((department) => ({
    department,
    code: cities.find((c) => c.department === department)?.departmentCode ?? "",
    list: cities.filter((c) => c.department === department),
  })).filter((g) => g.list.length > 0);
}

export default function ElectricienHubPage() {
  const groups = groupByDepartment();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: `${BASE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Zones d'intervention", item: URL },
    ],
  };

  // Liste des 41 pages villes : c'est le rôle de cette page hub, donner à
  // Google un point d'entrée unique vers des pages qui n'étaient jusqu'ici
  // atteignables que par le footer.
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Communes desservies par PRODIGELEC",
    description:
      "Communes d'Eure-et-Loir, de l'Eure et des Yvelines où PRODIGELEC intervient en électricité, sécurité électronique et automatismes.",
    url: URL,
    numberOfItems: cities.length,
    itemListElement: cities.map((c, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: `Électricien ${c.name} (${c.postalCode})`,
      url: `${BASE_URL}/electricien/${c.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <CommunesHub groups={groups} total={cities.length} />
    </>
  );
}
