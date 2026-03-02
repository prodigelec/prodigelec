"use client";
import Image from "next/image";
import { m, AnimatePresence } from "framer-motion";

export default function HeroBackground({ slides, currentSlide }) {
  return (
    <div className="absolute inset-0 bg-black">
      <AnimatePresence mode='wait'>
        <m.div
          key={currentSlide}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-black/20 z-10" />
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            fill
            priority={currentSlide === 0}
            fetchPriority={currentSlide === 0 ? "high" : "low"}
            sizes="100vw"
            quality={85}
            className="object-cover"
          />
        </m.div>
      </AnimatePresence>
    </div>
  );
}
