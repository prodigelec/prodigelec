import { notFound } from "next/navigation";
import { cities, getCityBySlug } from "@/app/data/cities";
import { buildCityFaqs } from "@/app/data/cityFaqs";
import CityPageContent from "./CityPageContent";

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }) {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  if (!city) return {};

  const title = `Électricien ${city.name} (${city.postalCode}) — Dépannage & Sécurité`;
  const description = `Artisan électricien & sécurité électronique à ${city.name} (${city.postalCode}). Dépannage, mise aux normes NF C 15-100, digicode, alarme, motorisation. Devis gratuit, intervention rapide.`;
  const url = `https://www.prodigelec.fr/electricien/${city.slug}`;
  const ogImage = city.photo
    ? (city.photo.startsWith("http") ? city.photo : `https://www.prodigelec.fr${city.photo}`)
    : "https://www.prodigelec.fr/img_carousel_hero_home/tableau-electrique.optimized.jpg";
  const ogImageAlt = city.photoAlt || `Électricien & sécurité PRODIGELEC à ${city.name}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `Électricien & Sécurité à ${city.name} — PRODIGELEC`,
      description,
      url,
      images: [{ url: ogImage, width: 960, height: 640, alt: ogImageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: `Électricien & Sécurité à ${city.name} — PRODIGELEC`,
      description,
      images: [ogImage],
    },
  };
}

export default async function CityPage({ params }) {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  if (!city) notFound();

  const url = `https://www.prodigelec.fr/electricien/${city.slug}`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.prodigelec.fr/" },
      { "@type": "ListItem", position: 2, name: `Électricien ${city.name}`, item: url },
    ],
  };

  // Référence le business canonique (déjà déclaré en entier dans le JSON-LD
  // global du layout) au lieu de redupliquer adresse/geo/horaires sur les
  // ~33 pages villes. Seul areaServed est spécifique à chaque page.
  const serviceAreaSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Électricien & Sécurité à ${city.name}`,
    url,
    provider: { "@id": "https://www.prodigelec.fr/#business" },
    areaServed: [
      { "@type": "City", name: city.name },
      ...city.nearby.map((n) => ({ "@type": "City", name: n })),
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: buildCityFaqs(city).map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceAreaSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <CityPageContent city={city} />
    </>
  );
}
