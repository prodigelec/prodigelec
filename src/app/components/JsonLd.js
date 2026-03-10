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
            "name": "Sécurité & Automatismes",
            "description": "Digicode, vidéophonie, alarmes, vidéosurveillance, motorisation de tous types de volets, fermetures automatiques."
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
      "https://www.google.com/maps/place/prodigelec/@48.7627173,1.5127265,17z/data=!3m1!4b1!4m6!3m5!1s0x40ad536c8e957f6b:0x793f73557873dece!8m2!3d48.7627138!4d1.5153014!16s%2Fg%2F11yzb2y_y6",
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
