const PLACES_ENDPOINT = "https://maps.googleapis.com/maps/api/place/details/json";

export async function getGoogleReviews() {
  const placeId = process.env.GOOGLE_PLACE_ID;
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (!placeId || !apiKey) {
    return { reviews: [], rating: null, totalRatings: 0, name: null };
  }

  try {
    const isCid = /^\d+$/.test(placeId);
    const idParam = isCid ? `cid=${placeId}` : `place_id=${placeId}`;

    const res = await fetch(
      `${PLACES_ENDPOINT}?${idParam}&fields=reviews,rating,user_ratings_total,name&language=fr&reviews_sort=newest&key=${apiKey}`,
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) return empty();

    const data = await res.json();
    if (data.status !== "OK" || !data.result) {
      if (data.error_message) {
        console.error("[reviews] Places API error:", data.status, data.error_message);
      }
      return empty();
    }

    const r = data.result;
    const reviews = (r.reviews ?? []).map((rv, i) => ({
      id: i + 1,
      author: rv.author_name,
      rating: rv.rating,
      text: rv.text,
      relativeDate: rv.relative_time_description,
      timestamp: rv.time,
      profilePhoto: rv.profile_photo_url ?? null,
      authorUrl: rv.author_url ?? null,
    }));

    return {
      reviews,
      rating: r.rating ?? null,
      totalRatings: r.user_ratings_total ?? reviews.length,
      name: r.name ?? null,
    };
  } catch (err) {
    console.error("[reviews] Fetch failed:", err);
    return empty();
  }
}

function empty() {
  return { reviews: [], rating: null, totalRatings: 0, name: null };
}
