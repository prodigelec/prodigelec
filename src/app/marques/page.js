import { brandPages } from "@/app/data/brandPages";
import MarquesHub from "./MarquesHub";

const BASE_URL = "https://www.prodigelec.fr";
const URL = `${BASE_URL}/marques`;

export const metadata = {
  title: "Marques installées & dépannées — Somfy, Bubendorff, FAAC, Legrand",
  description:
    "PRODIGELEC installe et dépanne le matériel Somfy, Bubendorff, FAAC, Legrand, Schneider, Aiphone, EZVIZ et bien d'autres en Eure-et-Loir, Eure et Yvelines. Aucune marque imposée : le choix se fait selon le chantier.",
  alternates: { canonical: URL },
  openGraph: {
    title: "Marques installées & dépannées — PRODIGELEC",
    description:
      "Somfy, Bubendorff, FAAC, Legrand, Schneider, Aiphone, EZVIZ… Le matériel que j'installe et que je dépanne en Eure-et-Loir, Eure et Yvelines.",
    url: URL,
  },
};

export default function MarquesPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: `${BASE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Marques", item: URL },
    ],
  };

  // ItemList plutôt qu'une simple page : c'est ce qui signale à Google que
  // cette page est un index de pages marque, et non un contenu isolé.
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Marques installées et dépannées par PRODIGELEC",
    itemListElement: brandPages.map((brand, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: brand.name,
      url: `${BASE_URL}/marques/${brand.slug}`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <MarquesHub />
    </>
  );
}
