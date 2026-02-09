"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function SerrurerieCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center bg-[#0f172a] rounded-3xl p-12 border border-white/5"
    >
      <h2 className="text-3xl font-bold text-white mb-6">Besoin de sécuriser votre domicile ?</h2>
      <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
        Demandez un audit sécurité gratuit. Je vous conseillerai sur les meilleures solutions pour protéger votre maison.
      </p>
      <a href="/public/contact#contact-form" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-background rounded-full font-bold hover:bg-primary-light transition-colors">
        Demander mon devis <ArrowRight size={20} />
      </a>
    </motion.div>
  );
}
