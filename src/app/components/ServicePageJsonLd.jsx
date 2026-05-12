export default function ServicePageJsonLd({ service, breadcrumbName, pageUrl, faqs }) {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.prodigelec.fr/" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.prodigelec.fr/#services" },
      { "@type": "ListItem", "position": 3, "name": breadcrumbName, "item": pageUrl }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "url": pageUrl,
    "provider": {
      "@type": "LocalBusiness",
      "name": "PRODIGELEC",
      "url": "https://www.prodigelec.fr",
      "telephone": "+33638194752",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Broué",
        "postalCode": "28410",
        "addressCountry": "FR"
      }
    },
    "areaServed": [
      { "@type": "City", "name": "Broué" },
      { "@type": "City", "name": "Dreux" },
      { "@type": "City", "name": "Chartres" },
      { "@type": "City", "name": "Évreux" },
      { "@type": "City", "name": "Houdan" },
      { "@type": "City", "name": "Anet" },
      { "@type": "City", "name": "Nonancourt" },
      { "@type": "City", "name": "Nogent-le-Roi" },
      { "@type": "AdministrativeArea", "name": "Eure-et-Loir" },
      { "@type": "AdministrativeArea", "name": "Eure" },
      { "@type": "AdministrativeArea", "name": "Yvelines" }
    ],
    "offers": {
      "@type": "Offer",
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock",
      "description": "Devis gratuit jusqu'à 30 km"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(({ question, answer }) => ({
      "@type": "Question",
      "name": question,
      "acceptedAnswer": { "@type": "Answer", "text": answer }
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
