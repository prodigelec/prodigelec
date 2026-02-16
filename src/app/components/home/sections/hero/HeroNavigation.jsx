"use client";
import { m } from 'framer-motion';

export default function HeroNavigation({ prevSlide, nextSlide }) {
  return (
    <>
      <m.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={prevSlide}
        className="hidden md:block absolute left-6 top-1/2 transform -translate-y-1/2 z-30 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white p-3 rounded-full border border-white/10 transition-colors duration-200"
        aria-label="Slide précédente"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </m.button>

      <m.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={nextSlide}
        className="hidden md:block absolute right-6 top-1/2 transform -translate-y-1/2 z-30 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white p-3 rounded-full border border-white/10 transition-colors duration-200"
        aria-label="Slide suivante"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </m.button>
    </>
  );
}
