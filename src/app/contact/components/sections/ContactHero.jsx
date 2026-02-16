"use client";
import { m } from "framer-motion";
import { MessageSquare, ArrowDown } from "lucide-react";

export default function ContactHero() {
  return (
    <div className="relative mt-18 mb-8 py-8 md:mb-12 md:py-12 overflow-hidden rounded-3xl bg-linear-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] border border-white/5">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] -ml-32 -mb-32" />

      <div className="relative z-10 text-center px-4 md:px-6">
        <m.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-linear-to-br from-primary to-primary-light mb-4 md:mb-6 shadow-lg shadow-primary/20 transform rotate-3"
        >
          <MessageSquare className="w-6 h-6 md:w-8 md:h-8 text-white" />
        </m.div>

        <m.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-5xl font-black text-white mb-4 tracking-tight"
        >
          Discutons de <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-primary-light to-primary">
            Votre Projet
          </span>
        </m.h1>

        <m.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-sm md:text-lg text-foreground-subtle max-w-2xl mx-auto leading-relaxed mb-6 md:mb-8"
        >
          Une urgence ou un projet ? Fort de 23 ans d&apos;expertise terrain, je suis à votre écoute pour vous apporter une réponse rapide et personnalisée en Eure (27) et Eure-et-Loir (28).
        </m.p>

        <m.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <ArrowDown className="w-6 h-6 text-foreground-subtle mx-auto animate-bounce" />
        </m.div>
      </div>
    </div>
  );
}
