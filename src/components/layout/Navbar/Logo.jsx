"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Logo({ className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className={`flex items-center gap-3 group cursor-pointer ${className}`}
    >
      <div className="relative w-10 h-10 sm:w-12 sm:h-12 overflow-hidden rounded-xl bg-white/5 p-1 group-hover:bg-primary/10 transition-colors">
        <Image
          src="/logo.png"
          alt="Beaver'aid Logo"
          fill
          className="object-contain"
        />
      </div>
      <div className="flex flex-col -gap-1">
        <span className="text-lg sm:text-xl font-black tracking-tighter leading-none text-white">
          <span className="text-primary">BEAVER</span>'AID
        </span>
        <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-secondary font-bold">
          Expertise Technique
        </span>
      </div>
    </motion.div>
  );
}
