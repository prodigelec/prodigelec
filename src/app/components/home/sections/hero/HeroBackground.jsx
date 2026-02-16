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
    <AnimatePresence mode='wait' initial={false}>
      <motion.div
        key={currentSlide}
        initial={{ opacity: isFirstRender.current && currentSlide === 0 ? 1 : 0 }}
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
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
    </AnimatePresence>
  );
}
