"use client";
import { motion } from "framer-motion";
import { FcFlashOn } from "react-icons/fc";

export default function ElecHero() {
  return (
    <div className="text-center my-16">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/5 mb-8 border border-white/10 shadow-[0_0_30px_-5px_rgba(255,215,0,0.3)]"
      >
        <FcFlashOn className="w-14 h-14" />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-black text-white mb-6"
      >
        Électricité <span className="text-accent">Générale</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
      >
        Mise aux normes, rénovation et dépannage. Une expertise qualifiée pour
        votre sécurité et votre confort.
      </motion.p>
    </div>
  );
}
