import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";
import { getGoogleReviews } from "@/lib/reviews";
import ReviewCard from "./ReviewCard";

const REVIEW_URL = process.env.NEXT_PUBLIC_GOOGLE_REVIEW_URL || "#";

export default async function ReviewsSection({ limit = 3, variant = "home" }) {
  const { reviews, rating, totalRatings } = await getGoogleReviews();

  if (!reviews || reviews.length === 0) {
    return null;
  }

  const visible = reviews.slice(0, limit);
  const isHome = variant === "home";

  return (
    <section
      id="avis"
      className="py-12 md:py-20 px-4 sm:px-6 relative overflow-hidden"
      style={{ background: isHome ? "rgba(11,26,42,0.4)" : "transparent" }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8 md:mb-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "var(--primary)" }}>
              Avis clients vérifiés Google
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-foreground">
              {isHome ? "Ce que disent mes clients" : `${totalRatings} avis Google — note ${rating}/5`}
            </h2>
          </div>

          {rating !== null && (
            <div
              className="flex items-center gap-4 px-5 py-3 rounded-2xl shrink-0"
              style={{ background: "var(--card)", border: "1px solid var(--border)" }}
            >
              <div className="flex flex-col leading-none">
                <span className="text-3xl font-extrabold" style={{ color: "var(--primary)" }}>
                  {rating.toFixed(1).replace(".", ",")}
                </span>
                <span className="text-[10px] uppercase tracking-widest mt-1" style={{ color: "var(--foreground-subtle)" }}>
                  sur 5
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-0.5" aria-label={`${rating} étoiles sur 5`}>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i <= Math.round(rating) ? "fill-[#fbbc04] text-[#fbbc04]" : "text-white/20"}
                    />
                  ))}
                </div>
                <span className="text-xs" style={{ color: "var(--foreground-subtle)" }}>
                  {totalRatings} avis vérifiés
                </span>
              </div>
            </div>
          )}
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {visible.map((r) => (
            <ReviewCard key={r.id} review={r} clamp={isHome} />
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-8 md:mt-12">
          {isHome && reviews.length > limit && (
            <Link
              href="/avis"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all hover:bg-white/10"
              style={{ border: "1px solid rgba(255,255,255,0.15)", color: "var(--foreground)" }}
            >
              Voir tous les avis <ArrowRight size={14} />
            </Link>
          )}
          <a
            href={REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all hover:brightness-110"
            style={{ background: "var(--primary)", color: "var(--background)", boxShadow: "0 4px 24px rgba(201,162,39,0.3)" }}
          >
            Laisser un avis Google <Star size={14} className="fill-current" />
          </a>
        </div>
      </div>
    </section>
  );
}
