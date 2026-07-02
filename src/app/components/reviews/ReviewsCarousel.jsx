"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ReviewCard from "./ReviewCard";

export default function ReviewsCarousel({ reviews, clamp = false }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 1 },
    },
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const onSelect = useCallback((api) => {
    setSelectedIndex(api.selectedScrollSnap());
    setCanPrev(api.canScrollPrev());
    setCanNext(api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  if (!reviews || reviews.length === 0) return null;

  const scrollSnaps = emblaApi?.scrollSnapList() ?? [];

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="-ml-4 flex md:-ml-6">
          {reviews.map((r) => (
            <div key={r.id} className="min-w-0 shrink-0 grow-0 basis-[85%] pl-4 sm:basis-[60%] md:basis-1/2 md:pl-6 lg:basis-1/3">
              <ReviewCard review={r} clamp={clamp} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-6">
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
          {scrollSnaps.map((_, i) => (
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
