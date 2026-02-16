"use client";
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function HeroBackground({ slides, currentSlide }) {
  return (
    <AnimatePresence mode='wait' initial={false}>
      <motion.div
        key={currentSlide}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay sombre */}
        <Image
          src={slides[currentSlide].image}
          alt={slides[currentSlide].title}
          fill
          priority
          className="object-cover"
        />
      </motion.div>
    </AnimatePresence>
  );
}
