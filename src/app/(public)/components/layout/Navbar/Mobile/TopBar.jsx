"use client";
import { motion } from "framer-motion";
import Logo from "../Logo";

export default function MobileTopBar() {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="lg:hidden fixed top-0 w-full z-40 bg-[#020617]/95 backdrop-blur-xl border-b border-white/5 py-4 px-6"
    >
      <div className="pointer-events-auto flex justify-center">
        <Logo />
      </div>
    </motion.div>
  );
}
