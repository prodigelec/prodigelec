"use client";
import Link from "next/link";
import { m } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";

// Deux contraintes de placement :
// - hors de l'AnimatePresence du hero, sinon le badge clignoterait à chaque
//   changement de slide ;
// - hors du flux et ancré au bas du hero, sinon sa hauteur varierait avec la
//   longueur du titre du slide courant.
// Le positionnement est porté par un div simple : framer-motion écrit
// transform en style et écraserait un -translate-x-1/2 de Tailwind.
export default function HeroRatingBadge({ rating, totalRatings }) {
  if (rating === null || rating === undefined) return null;

  const rounded = Math.round(rating);

  // Mobile : barre large, calée sur les marges de la page.
  // Desktop : pastille compacte centrée.
  return (
    <div className="absolute bottom-6 md:bottom-10 left-4 right-4 md:left-1/2 md:right-auto md:-translate-x-1/2 z-30">
    <m.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.1 }}
    >
      <Link
        href="/avis"
        className="group flex w-full items-center justify-center gap-3 rounded-full bg-black/40 backdrop-blur-md px-5 py-3 border border-white/15 transition-all hover:border-white/30 hover:bg-black/60 md:inline-flex md:w-auto md:gap-2.5 md:px-4 md:py-2"
        aria-label={`Note ${rating} sur 5 — voir les ${totalRatings} avis Google`}
      >
        <span className="flex items-center gap-0.5" aria-hidden>
          {[1, 2, 3, 4, 5].map((i) => (
            <Star
              key={i}
              className={`h-4 w-4 md:h-3.5 md:w-3.5 ${i <= rounded ? "fill-[#fbbc04] text-[#fbbc04]" : "text-white/25"}`}
            />
          ))}
        </span>
        <span className="text-base font-bold text-white md:text-sm">
          {rating.toFixed(1).replace(".", ",")}/5
        </span>
        <span className="text-sm text-white/70 md:text-xs">
          · {totalRatings} avis Google
        </span>
        <ArrowRight className="h-4 w-4 text-white/60 transition-transform group-hover:translate-x-0.5 md:h-3.5 md:w-3.5" />
      </Link>
      </m.div>
    </div>
  );
}
