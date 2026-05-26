import { getGoogleReviews } from "@/lib/reviews";

export default async function JsonLd() {
  const { rating, totalRatings } = await getGoogleReviews();
  const hasRating = rating && totalRatings > 0;

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "Electrician",
    "@id": "https://www.prodigelec.fr/#business",
    "name": "PRODIGELEC",
    "legalName": "Petaccia Sébastien EI",
    "description": "Artisan électricien & sécurité électronique en Eure-et-Loir (28), Eure (27) et Yvelines (78). Dépannage électrique, mise aux normes NF C 15-100, alarmes, vidéosurveillance, contrôle d'accès, volets motorisés et portails automatiques. 23 ans d'expérience. Devis gratuit.",
    "url": "https://www.prodigelec.fr",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.prodigelec.fr/favicon.svg",
      "width": 512,
      "height": 512
    },
    "image": "https://www.prodigelec.fr/favicon.svg",
    "telephone": "+33638194752",
    "email": "contact@prodigelec.fr",
    "foundingDate": "2001",
    "founder": {
      "@type": "Person",
      "name": "Petaccia Sébastien",
      "jobTitle": "Artisan Électricien"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "10 Rue Georges Bréant",
      "addressLocality": "Broué",
      "postalCode": "28410",
      "addressRegion": "Eure-et-Loir",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 48.76271,
      "longitude": 1.51530
    },
    "hasMap": "https://www.google.com/maps/place/prodigelec/@48.7627173,1.5127265,17z/data=!3m1!4b1!4m6!3m5!1s0x40ad536c8e957f6b:0x793f73557873dece!8m2!3d48.7627138!4d1.5153014!16s%2Fg%2F11yzb2y_y6",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday",
          "Thursday", "Friday", "Saturday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+33638194752",
        "contactType": "customer service",
        "availableLanguage": "French",
        "areaServed": ["FR"]
      }
    ],
    "priceRange": "€€",
    "paymentAccepted": "Espèces, Virement bancaire, Chèque",
    "currenciesAccepted": "EUR",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services PRODIGELEC",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Électricité Générale",
            "description": "Dépannage électrique, mise aux normes NF C 15-100, éclairage LED, chauffage électrique, VMC, repérage disjoncteurs."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sécurité Électronique",
            "description": "Digicode, contrôle d'accès, vidéophonie, interphonie, alarmes intrusion, détection incendie, vidéosurveillance."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Automatismes & Motorisations",
            "description": "Volets motorisés, portails automatiques, portes de garage, domotique Somfy Tahoma Switch."
          }
        }
      ]
    },
    "areaServed": [
      { "@type": "City", "name": "Broué" },
      { "@type": "City", "name": "Dreux" },
      { "@type": "City", "name": "Chartres" },
      { "@type": "City", "name": "Évreux" },
      { "@type": "City", "name": "Anet" },
      { "@type": "City", "name": "Nonancourt" },
      { "@type": "City", "name": "Nogent-le-Roi" },
      { "@type": "City", "name": "Houdan" },
      { "@type": "City", "name": "Vernon" },
      { "@type": "City", "name": "Ivry-la-Bataille" },
      { "@type": "City", "name": "Rambouillet" },
      { "@type": "City", "name": "Mantes-la-Jolie" },
      { "@type": "AdministrativeArea", "name": "Eure-et-Loir" },
      { "@type": "AdministrativeArea", "name": "Eure" },
      { "@type": "AdministrativeArea", "name": "Yvelines" }
    ],
    "sameAs": [
      "https://www.google.com/maps/place/prodigelec/@48.7627173,1.5127265,17z/data=!3m1!4b1!4m6!3m5!1s0x40ad536c8e957f6b:0x793f73557873dece!8m2!3d48.7627138!4d1.5153014!16s%2Fg%2F11yzb2y_y6",
      "https://www.facebook.com/prodigelec/",
      "https://www.instagram.com/prodigelec/"
    ],
    ...(hasRating ? {
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": rating,
        "bestRating": 5,
        "worstRating": 1,
        "ratingCount": totalRatings,
        "reviewCount": totalRatings,
      }
    } : {})
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.prodigelec.fr/#website",
    "url": "https://www.prodigelec.fr",
    "name": "PRODIGELEC",
    "description": "Artisan électricien & sécurité électronique en Eure-et-Loir, Eure et Yvelines.",
    "publisher": { "@id": "https://www.prodigelec.fr/#business" },
    "inLanguage": "fr-FR"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
