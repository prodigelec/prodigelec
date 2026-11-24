import { notFound } from "next/navigation";
import { brandPages, getBrandPageBySlug } from "@/app/data/brandPages";
import BrandPageContent from "./BrandPageContent";

const BASE_URL = "https://www.prodigelec.fr";

export function generateStaticParams() {
  return brandPages.map((b) => ({ marque: b.slug }));
}

export async function generateMetadata({ params }) {
  const { marque } = await params;
  const brand = getBrandPageBySlug(marque);
  if (!brand) return {};

  const url = `${BASE_URL}/marques/${brand.slug}`;

  return {
    title: brand.metaTitle,
    description: brand.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: brand.metaTitle,
      description: brand.metaDescription,
      url,
    },
    twitter: {
      card: "summary_large_image",
      title: brand.metaTitle,
      description: brand.metaDescription,
    },
  };
}

export default async function BrandPage({ params }) {
  const { marque } = await params;
  const brand = getBrandPageBySlug(marque);
  if (!brand) notFound();

  const url = `${BASE_URL}/marques/${brand.slug}`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: `${BASE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Marques", item: `${BASE_URL}/marques` },
      { "@type": "ListItem", position: 3, name: brand.name, item: url },
    ],
  };

  // Même logique que les pages villes : le business n'est décrit qu'une fois,
  // dans le JSON-LD global du layout, et on le référence par @id. Ce qui est
  // propre à la page, c'est `about` — c'est lui qui rattache explicitement la
  // page à l'entité marque, et donc à une requête « installateur <marque> ».
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Installation et dépannage ${brand.name}`,
    description: brand.metaDescription,
    url,
    provider: { "@id": `${BASE_URL}/#business` },
    about: { "@type": "Brand", name: brand.name },
    areaServed: [
      { "@type": "City", name: "Dreux" },
      { "@type": "City", name: "Chartres" },
      { "@type": "City", name: "Évreux" },
      { "@type": "City", name: "Anet" },
      { "@type": "City", name: "Nogent-le-Roi" },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: brand.faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BrandPageContent brand={brand} />
    </>
  );
}
