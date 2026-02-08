"use client";
import { motion } from "framer-motion";

export default function PartnersSection() {
  return (
    <section className="py-12 bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-8">
          Nos Partenaires
        </p>

        <div className="flex flex-wrap justify-center items-center gap-12 opacity-70 hover:opacity-100 transition-opacity duration-500">
          {/* Placeholder for future partners */}
          <p className="text-gray-500 italic text-sm">
            Aucun partenaire pour le moment.
          </p>
        </div>
      </div>
    </section>
  );
}
