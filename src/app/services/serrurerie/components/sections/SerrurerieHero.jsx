"use client";
import { motion } from "framer-motion";
import { IoKeyOutline } from "react-icons/io5";

export default function SerrurerieHero() {
  return (
    <div className="text-center my-16">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-8 border border-primary/20 shadow-[0_0_30px_-5px_rgba(201,162,39,0.3)]"
      >
        <IoKeyOutline className="w-12 h-12 text-primary" />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-black text-white mb-6"
      >
        Serrurerie & <span className="text-primary">Sécurité</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
      >
        Ouverture de porte, sécurisation et blindage. Une expertise certifiée pour protéger votre domicile.
      </motion.p>
    </div>
  );
}
