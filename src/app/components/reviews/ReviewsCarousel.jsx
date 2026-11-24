"use client";

import { useCallback, useSyncExternalStore } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ReviewCard from "./ReviewCard";

export default function ReviewsCarousel({ reviews, clamp = false }) {
  // Sur mobile le carousel est desactivé : Embla retire ses transformations
  // et les avis s'empilent en colonne. Un defilement horizontal sur telephone
  // oblige a swiper pour decouvrir les avis suivants, alors qu'un empilement
  // les donne tous au scroll naturel de la page.
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    slidesToScroll: 1,
    active: false,
    breakpoints: {
      "(min-width: 768px)": { active: true },
    },
  });
  // Embla est un système externe : on s'abonne à ses événements plutôt que
  // de recopier son état dans du useState depuis un effet. L'ancienne
  // version appelait setState synchronement dans l'effet — ce que React
  // déconseille — et n'appelait jamais off(), laissant les écouteurs en
  // place au démontage.
  const subscribe = useCallback(
    (onStoreChange) => {
      if (!emblaApi) return () => {};
      emblaApi.on("select", onStoreChange);
      emblaApi.on("reInit", onStoreChange);
      return () => {
        emblaApi.off("select", onStoreChange);
        emblaApi.off("reInit", onStoreChange);
      };
    },
    [emblaApi]
  );

  // Chaque valeur est lue séparément : useSyncExternalStore compare les
  // instantanés par identité, donc renvoyer des primitives évite la boucle
  // de rendu qu'un objet recréé provoquerait.
  const selectedIndex = useSyncExternalStore(subscribe, () => emblaApi?.selectedScrollSnap() ?? 0, () => 0);
  const canPrev = useSyncExternalStore(subscribe, () => emblaApi?.canScrollPrev() ?? false, () => false);
  const canNext = useSyncExternalStore(subscribe, () => emblaApi?.canScrollNext() ?? false, () => false);
  const snapCount = useSyncExternalStore(subscribe, () => emblaApi?.scrollSnapList().length ?? 0, () => 0);

  if (!reviews || reviews.length === 0) return null;

  return (
    <div className="relative">
      <div className="md:overflow-hidden" ref={emblaRef}>
        <div className="flex flex-col gap-4 md:-ml-6 md:flex-row md:gap-0">
          {reviews.map((r) => (
            <div key={r.id} className="min-w-0 md:shrink-0 md:grow-0 md:basis-1/2 md:pl-6 lg:basis-1/3">
              <ReviewCard review={r} clamp={clamp} />
            </div>
          ))}
        </div>
      </div>

      {/* Fleches et puces n'ont plus d'objet en colonne : masquees sous md */}
      <div className="mt-6 hidden items-center justify-center gap-6 md:flex">
        <button
          type="button"
          onClick={() => emblaApi?.scrollPrev()}
          disabled={!canPrev}
          aria-label="Avis précédent"
          className="flex h-10 w-10 items-center justify-center rounded-full transition-all disabled:opacity-30 hover:enabled:brightness-125"
          style={{ background: "var(--card)", border: "1px solid var(--border)", color: "var(--foreground)" }}
        >
          <ChevronLeft size={18} />
        </button>

        <div className="flex items-center gap-2">
          {Array.from({ length: snapCount }, (_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Aller à l'avis ${i + 1}`}
              className="rounded-full transition-all"
              style={{
                width: i === selectedIndex ? 20 : 6,
                height: 6,
                background: i === selectedIndex ? "var(--primary)" : "var(--border-light)",
              }}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => emblaApi?.scrollNext()}
          disabled={!canNext}
          aria-label="Avis suivant"
          className="flex h-10 w-10 items-center justify-center rounded-full transition-all disabled:opacity-30 hover:enabled:brightness-125"
          style={{ background: "var(--card)", border: "1px solid var(--border)", color: "var(--foreground)" }}
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
