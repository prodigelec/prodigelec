import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";
import { getGoogleReviews } from "@/lib/reviews";
import ReviewCard from "@/app/components/reviews/ReviewCard";
import ReviewsSchema from "@/app/components/reviews/ReviewsSchema";

export const revalidate = 3600;

const REVIEW_URL = process.env.NEXT_PUBLIC_GOOGLE_REVIEW_URL || "#";
const PAGE_URL = "https://www.prodigelec.fr/avis";

export async function generateMetadata() {
  const { rating, totalRatings } = await getGoogleReviews();
  const hasReviews = rating && totalRatings > 0;

  const title = hasReviews
    ? `Avis clients PRODIGELEC — ${rating}/5 sur ${totalRatings} avis Google`
    : "Avis clients — PRODIGELEC électricien Broué";
  const description = hasReviews
    ? `Découvrez les ${totalRatings} avis Google vérifiés de mes clients : note moyenne ${rating}/5. Témoignages d'interventions en électricité, sécurité et automatismes en Eure-et-Loir.`
    : "Découvrez les avis clients de PRODIGELEC, artisan électricien à Broué. Interventions en électricité, sécurité et automatismes en Eure-et-Loir, Eure et Yvelines.";

  return {
    title,
    description,
    alternates: { canonical: PAGE_URL },
    openGraph: {
      title,
      description,
      url: PAGE_URL,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function AvisPage() {
  const { reviews, rating, totalRatings, name } = await getGoogleReviews();
  const hasReviews = reviews && reviews.length > 0;

  return (
    <>
      <ReviewsSchema reviews={reviews} rating={rating} totalRatings={totalRatings} pageUrl={PAGE_URL} />

      <main className="min-h-screen bg-background text-foreground pt-28 md:pt-36 pb-20 overflow-x-hidden">
        <section className="max-w-5xl mx-auto px-6 mb-12 md:mb-16 text-center">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "var(--primary)" }}>
            Avis vérifiés Google
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Ce que disent mes clients
          </h1>

          {hasReviews ? (
            <div className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl mb-6"
                 style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
              <div className="flex flex-col leading-none">
                <span className="text-4xl font-extrabold" style={{ color: "var(--primary)" }}>
                  {rating.toFixed(1).replace(".", ",")}
                </span>
                <span className="text-[10px] uppercase tracking-widest mt-1" style={{ color: "var(--foreground-subtle)" }}>
                  sur 5
                </span>
              </div>
              <div className="flex flex-col gap-1 items-start">
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={20}
                          className={i <= Math.round(rating) ? "fill-[#fbbc04] text-[#fbbc04]" : "text-white/20"} />
                  ))}
                </div>
                <span className="text-sm" style={{ color: "var(--foreground-subtle)" }}>
                  {totalRatings} avis vérifiés Google
                </span>
              </div>
            </div>
          ) : null}

          <p className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto" style={{ color: "var(--foreground-subtle)" }}>
            Tous les avis affichés ici sont des avis Google authentifiés, laissés par des clients après une intervention réelle. Aucun avis n'est sélectionné ni filtré.
          </p>
        </section>

        {hasReviews ? (
          <section className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {reviews.map((r) => (
                <ReviewCard key={r.id} review={r} />
              ))}
            </div>
          </section>
        ) : (
          <section className="max-w-3xl mx-auto px-6 text-center py-12">
            <p className="text-base mb-6" style={{ color: "var(--foreground-subtle)" }}>
              Les avis seront affichés dès que l'API Google sera connectée. En attendant, retrouvez-les directement sur ma fiche Google.
            </p>
          </section>
        )}

        <section className="max-w-3xl mx-auto px-6 mt-12 md:mt-20 text-center">
          <div className="rounded-2xl p-6 md:p-10"
               style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Une intervention récente ?
            </h2>
            <p className="text-base mb-6" style={{ color: "var(--foreground-subtle)" }}>
              Votre retour aide d'autres clients à me trouver — et ça me motive énormément. Merci de mentionner votre ville et le type d'intervention dans votre avis.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:brightness-110"
                style={{ background: "var(--primary)", color: "var(--background)", boxShadow: "0 4px 24px rgba(201,162,39,0.3)" }}
              >
                Laisser un avis Google <Star size={14} className="fill-current" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:bg-white/10"
                style={{ border: "1px solid rgba(255,255,255,0.15)", color: "var(--foreground)" }}
              >
                Une autre demande ? <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
