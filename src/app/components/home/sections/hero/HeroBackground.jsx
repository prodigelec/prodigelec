"use client";
"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroBackground({ slides, currentSlide }) {
  const isFirstRender = useRef(true);

  useEffect(() => {
    isFirstRender.current = false;
  }, []);

  return (
    <div className="absolute inset-0 bg-black">
      {/* Rendu statique pour le premier slide afin d'optimiser le LCP (z-index 0) */}
      {isFirstRender.current && (
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <Image
            src={slides[0].image}
            alt={slides[0].title}
            fill
            priority
            fetchPriority="high"
            loading="eager"
            sizes="100vw"
            quality={55}
            className="object-cover"
          />
        </div>
      )}

      {/* Couche d'animation qui prend le relais après l'hydratation (z-index 20) */}
      {!isFirstRender.current && (
        <AnimatePresence mode='wait' initial={false}>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 z-20"
          >
            <div className="absolute inset-0 bg-black/40 z-10" />
            <Image
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              fill
              priority={currentSlide === 0}
              loading={currentSlide === 0 ? "eager" : "lazy"}
              sizes="100vw"
              quality={55}
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
