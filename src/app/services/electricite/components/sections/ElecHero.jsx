"use client";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export default function ElecHero() {
  return (
    <div className="text-center mb-16">
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-amber-500/10 mb-8 border border-amber-500/20 shadow-[0_0_30px_-5px_rgba(245,158,11,0.3)]"
      >
        <Zap className="w-12 h-12 text-amber-500" />
      </motion.div>
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-black text-white mb-6"
      >
        Électricité <span className="text-amber-500">Générale</span>
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
      >
        Mise aux normes, rénovation et dépannage. Une expertise certifiée pour votre sécurité et votre confort.
      </motion.p>
    </div>
  );
}
