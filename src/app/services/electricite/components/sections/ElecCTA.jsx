"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ElecCTA() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center bg-[#0f172a] rounded-3xl p-12 border border-white/5"
    >
      <h2 className="text-3xl font-bold text-white mb-6">Un projet de rénovation ou d'installation ?</h2>
      <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
        Discutons de votre projet. Je vous accompagne de la conception à la réalisation avec des conseils personnalisés.
      </p>
      <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-colors">
        Demander un devis gratuit <ArrowRight size={20} />
      </a>
    </motion.div>
  );
}
