"use client";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export default function WebCTA() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-[#0f172a] rounded-3xl p-12 text-center border border-white/10 relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-cyan-500/5 to-transparent pointer-events-none" />
      
      <div className="relative z-10 max-w-2xl mx-auto">
        <h3 className="text-3xl font-bold text-white mb-6">Besoin d'aide avec votre ordinateur ?</h3>
        <p className="text-gray-400 mb-8 text-lg">
          N'attendez pas que la situation empire. Contactez-moi pour un diagnostic ou une séance de formation.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:0638194752" className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-400 text-[#020617] rounded-full font-bold hover:bg-cyan-300 transition-colors w-full sm:w-auto justify-center">
            <Phone size={20} /> Appeler maintenant
            </a>
            <a href="/contact#contact-form" className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white rounded-full font-bold hover:bg-white/20 transition-colors w-full sm:w-auto justify-center">
            Demander un devis <ArrowRight size={20} />
            </a>
        </div>
      </div>
    </motion.div>
  );
}
