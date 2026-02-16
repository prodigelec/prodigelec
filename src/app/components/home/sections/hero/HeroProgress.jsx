"use client";
import { motion } from 'framer-motion';

export default function HeroProgress({ currentSlide, totalSlides }) {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-30">
      <motion.div
        className="h-full bg-gradient-to-r from-primary to-accent origin-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: (currentSlide + 1) / totalSlides }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
}
