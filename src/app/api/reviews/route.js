export const revalidate = 3600; // cache 1h

export async function GET() {
  const placeId = process.env.GOOGLE_PLACE_ID;
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (!placeId || !apiKey) {
    return Response.json({ reviews: [] });
  }

  try {
    // CID (Customer ID) = all digits → use `cid` param
    // Place ID (ChIJ... format) → use `place_id` param
    const isCid = /^\d+$/.test(placeId);
    const idParam = isCid ? `cid=${placeId}` : `place_id=${placeId}`;

    const res = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?${idParam}&fields=reviews,rating&language=fr&key=${apiKey}`,
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) {
      return Response.json({ reviews: [] });
    }

    const data = await res.json();

    if (data.status !== "OK") {
      console.error("[reviews] Places API error:", data.status, data.error_message);
      return Response.json({ reviews: [] });
    }

    const reviews = (data.result?.reviews ?? []).map((r, i) => ({
      id: i + 1,
      name: r.author_name,
      rating: r.rating,
      text: r.text,
      date: r.relative_time_description,
      profilePhoto: r.profile_photo_url ?? null,
      location: null,
    }));

    return Response.json({ reviews });
  } catch (err) {
    console.error("[reviews] Fetch failed:", err);
    return Response.json({ reviews: [] });
  }
}
