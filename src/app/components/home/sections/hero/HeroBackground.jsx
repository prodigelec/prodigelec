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
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            fill
            priority={currentSlide === 0}
            fetchPriority={currentSlide === 0 ? "high" : "low"}
            sizes="(max-width: 1536px) 1536px, 100vw"
            quality={60}
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
