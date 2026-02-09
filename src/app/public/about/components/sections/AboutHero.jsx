"use client";
import { motion } from "framer-motion";
import { User } from "lucide-react";

export default function AboutHero() {
  return (
    <div className="text-center mb-16">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-8 border border-primary/20 shadow-[0_0_30px_-5px_rgba(255,255,255,0.1)]"
      >
        <User className="w-12 h-12 text-primary" />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-black text-white mb-6"
      >
        Qui suis-je <span className="text-primary">?</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
      >
        De l&apos;artisanat traditionnel à la sécurité et l&apos;électricité.
        Découvrez mon parcours au service de vos projets.
      </motion.p>
    </div>
  );
}
