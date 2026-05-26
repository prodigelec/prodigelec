import { getGoogleReviews } from "@/lib/reviews";

export const revalidate = 3600;

export async function GET() {
  const { reviews, rating, totalRatings } = await getGoogleReviews();
  return Response.json({
    reviews: reviews.map((r) => ({
      id: r.id,
      name: r.author,
      rating: r.rating,
      text: r.text,
      date: r.relativeDate,
      profilePhoto: r.profilePhoto,
      location: null,
    })),
    rating,
    totalRatings,
  });
}
