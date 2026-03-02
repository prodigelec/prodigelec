"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Zap, Lock, AlertTriangle, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#0b1a2a] relative overflow-hidden px-4">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-accent/5 rounded-full blur-[100px]" />
      </div>

      {/* Floating Icons Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4"
        >
          <Zap size={64} className="text-primary" />
        </motion.div>
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/3 right-1/4"
        >
          <Lock size={64} className="text-accent" />
        </motion.div>
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 text-center max-w-2xl mx-auto"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8 relative inline-block"
        >
          <h1 className="text-[150px] md:text-[200px] font-black leading-none text-transparent bg-clip-text bg-linear-to-b from-primary to-primary-dark opacity-20 select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-3xl shadow-2xl">
              <AlertTriangle size={64} className="text-primary animate-pulse" />
            </div>
          </div>
        </motion.div>

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Page introuvable
        </h2>
        
        <p className="text-foreground-subtle text-lg mb-8 max-w-md mx-auto">
          Oups ! La page que vous recherchez semble avoir été déconnectée du réseau ou n'existe pas.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-background bg-primary rounded-xl overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(201,162,39,0.4)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Home size={20} />
              Retour à l'accueil
            </span>
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="group inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all hover:scale-105"
          >
            <span className="flex items-center gap-2">
              <ArrowLeft size={20} />
              Page précédente
            </span>
          </button>
        </div>
      </motion.div>

      {/* Footer Text */}
      <div className="absolute bottom-8 text-foreground-subtle text-sm">
        Prodigelec - Électricité & Serrurerie
      </div>
    </div>
  );
}
