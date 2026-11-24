export default function ReviewsSchema({ reviews, rating, totalRatings, pageUrl }) {
  if (!reviews || reviews.length === 0 || !rating) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.prodigelec.fr/#business",
    "name": "PRODIGELEC",
    "url": pageUrl,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": rating,
      "bestRating": 5,
      "worstRating": 1,
      "ratingCount": totalRatings,
      "reviewCount": reviews.length,
    },
    "review": reviews.map((r) => ({
      "@type": "Review",
      "author": { "@type": "Person", "name": r.author },
      "datePublished": r.timestamp ? new Date(r.timestamp * 1000).toISOString().split("T")[0] : undefined,
      "reviewBody": r.text,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": r.rating,
        "bestRating": 5,
        "worstRating": 1,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
