"use client";
import { m } from "framer-motion";

export default function PartnersSection() {
  return (
    <section className="py-8 md:py-12 bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-xs md:text-sm font-medium text-foreground-subtle uppercase tracking-widest mb-6 md:mb-8">
          Nos Partenaires
        </p>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70 hover:opacity-100 transition-opacity duration-500">
          {/* Placeholder for future partners */}
          <p className="text-foreground-subtle italic text-xs md:text-sm">
            Aucun partenaire pour le moment.
          </p>
        </div>
      </div>
    </section>
  );
}
