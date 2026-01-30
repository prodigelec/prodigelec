"use client";
import { motion } from 'framer-motion';

export default function HeroProgress({ currentSlide, totalSlides }) {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-30">
      <motion.div
        className="h-full bg-gradient-to-r from-blue-400 to-purple-500"
        initial={{ width: "0%" }}
        animate={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
}
