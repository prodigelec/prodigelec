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
    ? city.photo
    : "https://www.prodigelec.fr/img_carousel_hero_home/tableau-electrique.optimized.jpg";

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `Électricien & Sécurité à ${city.name} — PRODIGELEC`,
      description,
      url,
      images: [{ url: ogImage, width: 960, height: 640, alt: `Électricien à ${city.name} — PRODIGELEC` }],
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

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Electrician",
    "@id": `https://www.prodigelec.fr/electricien/${city.slug}#business`,
    name: "PRODIGELEC",
    url: "https://www.prodigelec.fr",
    telephone: "+33638194752",
    email: "contact@prodigelec.fr",
    address: {
      "@type": "PostalAddress",
      streetAddress: "10 Rue Georges Bréant",
      addressLocality: "Broué",
      postalCode: "28410",
      addressRegion: "Eure-et-Loir",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 48.76271,
      longitude: 1.51530,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    areaServed: [
      { "@type": "City", name: city.name },
      ...city.nearby.map((n) => ({ "@type": "City", name: n })),
    ],
    priceRange: "€€",
    sameAs: [
      "https://www.prodigelec.fr/#business",
      "https://www.facebook.com/prodigelec/",
      "https://www.instagram.com/prodigelec/",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <CityPageContent city={city} />
    </>
  );
}
