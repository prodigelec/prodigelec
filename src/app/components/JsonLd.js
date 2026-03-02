export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "PRODIGELEC",
    "image": "https://www.prodigelec.fr/prodigelec-logo.svg",
    "url": "https://www.prodigelec.fr",
    "telephone": "+33638194752",
    "email": "contact@prodigelec.fr",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "10 Rue Georges Bréant",
      "addressLocality": "Broué",
      "postalCode": "28410",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 48.7492,
      "longitude": 1.5234
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "08:00",
        "closes": "20:00"
      }
    ],
    "priceRange": "€€",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services PRODIGELEC",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Électricité Générale",
            "description": "Dépannage, mise aux normes NF C 15-100, éclairage LED, chauffage, VMC, domotique."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Serrurerie Électronique",
            "description": "Serrures connectées, digicodes, vidéophonie, volets motorisés, dépannage électronique."
          }
        }
      ]
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Broué"
      },
      {
        "@type": "City",
        "name": "Dreux"
      },
      {
        "@type": "City",
        "name": "Chartres"
      },
      {
        "@type": "City",
        "name": "Évreux"
      },
      {
        "@type": "City",
        "name": "Anet"
      },
      {
        "@type": "City",
        "name": "Nonancourt"
      },
      {
        "@type": "City",
        "name": "Nogent-le-Roi"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Eure-et-Loir"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Eure"
      }
    ],
    "sameAs": [
      "https://www.google.com/search?q=prodigelec",
      "https://www.facebook.com/prodigelec/",
      "https://www.instagram.com/prodigelec/"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
