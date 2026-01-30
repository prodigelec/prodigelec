"use client";
import { motion } from "framer-motion";

export default function PartnersSection() {
  return (
    <section className="py-12 bg-[#020617] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-8">
          Nos Partenaires
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-70 hover:opacity-100 transition-opacity duration-500">
            {/* Atelier des frères d'antan */}
            <motion.a 
                href="https://atelierfreresdantan.fr"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center group cursor-pointer"
            >
                <div className="text-2xl font-serif italic font-bold text-amber-500/80 group-hover:text-amber-500 transition-colors">
                    L'Atelier des Frères d'Antan
                </div>
                <div className="h-0.5 w-12 bg-amber-500/30 mt-2 group-hover:w-full transition-all duration-500" />
            </motion.a>

            {/* Placeholder for future partners */}
            {/* <div className="...">...</div> */}
        </div>
      </div>
    </section>
  );
}
