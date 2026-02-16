"use client";
import { m } from "framer-motion";
import { User } from "lucide-react";

export default function AboutHero() {
  return (
    <div className="text-center mb-8 md:mb-16">
      <m.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="inline-flex items-center justify-center w-16 h-16 md:w-24 md:h-24 rounded-full bg-primary/10 mb-6 md:mb-8 border border-primary/20 shadow-[0_0_30px_-5px_rgba(255,255,255,0.1)]"
      >
        <User className="w-8 h-8 md:w-12 md:h-12 text-primary" />
      </m.div>
      <m.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-6xl font-black text-white mb-4 md:mb-6"
      >
        Qui suis-je <span className="text-primary">?</span>
      </m.h1>
      <m.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-sm md:text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed"
      >
        De l&apos;artisanat traditionnel à la sécurité et l&apos;électricité. Découvrez mon parcours au service de vos projets.
      </m.p>
    </div>
  );
}
