"use client";
import { motion } from "framer-motion";
import { MessageSquare, ArrowDown } from "lucide-react";

export default function ContactHero() {
  return (
    <div className="relative mb-12 py-12 overflow-hidden rounded-3xl bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] border border-white/5">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] -ml-32 -mb-32" />

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-light mb-6 shadow-lg shadow-primary/20 transform rotate-3"
        >
          <MessageSquare className="w-8 h-8 text-white" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight"
        >
          Discutons de <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-primary">
            Votre Projet
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed mb-8"
        >
          Une urgence ou un projet ? Fort de 23 ans d&apos;expertise terrain, je
          suis à votre écoute pour vous apporter une réponse rapide et
          personnalisée en Eure (27) et Eure-et-Loir (28).
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <ArrowDown className="w-6 h-6 text-gray-500 mx-auto animate-bounce" />
        </motion.div>
      </div>
    </div>
  );
}
