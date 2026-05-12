import { notFound } from "next/navigation";
import { cities, getCityBySlug } from "@/app/data/cities";
import CityPageContent from "./CityPageContent";

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }) {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  if (!city) return {};

  const title = `Électricien ${city.name} (${city.postalCode}) - Dépannage & Sécurité | PRODIGELEC`;
  const description = `Artisan électricien & sécurité électronique à ${city.name} (${city.postalCode}). Dépannage, mise aux normes, digicode, alarme, motorisation. ${city.freeZone ? "Devis gratuit." : "Devis sur demande."}`;
  const url = `https://www.prodigelec.fr/electricien/${city.slug}`;

  return {
    title,
    description,
    keywords: [
      `Électricien ${city.name}`,
      `Électricien ${city.postalCode}`,
      `Dépannage électricité ${city.name}`,
      `Sécurité électronique ${city.name}`,
      `Digicode ${city.name}`,
      `Alarme ${city.name}`,
      `Motorisation volet ${city.name}`,
      `Artisan électricien ${city.departmentCode}`,
      `PRODIGELEC ${city.name}`,
    ],
    alternates: { canonical: url },
    openGraph: {
      title: `Électricien & Sécurité à ${city.name} — PRODIGELEC`,
      description,
      url,
      images: [{ url: "https://www.prodigelec.fr/logo_camera.png", width: 800, height: 600, alt: "PRODIGELEC" }],
    },
    twitter: {
      card: "summary_large_image",
      title: `Électricien & Sécurité à ${city.name} — PRODIGELEC`,
      description,
      images: ["https://www.prodigelec.fr/logo_camera.png"],
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
    "@type": "LocalBusiness",
    name: "PRODIGELEC",
    url: "https://www.prodigelec.fr",
    telephone: "+33638194752",
    email: "contact@prodigelec.fr",
    address: {
      "@type": "PostalAddress",
      streetAddress: "10 Rue Georges Bréant",
      addressLocality: "Broué",
      postalCode: "28410",
      addressCountry: "FR",
    },
    areaServed: [
      { "@type": "City", name: city.name },
      ...city.nearby.map((n) => ({ "@type": "City", name: n })),
    ],
    priceRange: city.freeZone ? "€€ (devis gratuit)" : "€€",
    sameAs: [
      "https://www.facebook.com/prodigelec/",
      "https://www.instagram.com/prodigelec/",
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <CityPageContent city={city} />
    </>
  );
}
