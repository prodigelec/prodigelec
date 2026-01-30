"use client";
import { motion } from "framer-motion";
import Logo from "../Logo";

export default function MobileTopBar() {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="md:hidden fixed top-0 w-full z-40 bg-gradient-to-b from-[#020617] via-[#020617]/80 to-transparent pt-6 pb-12 px-6 pointer-events-none"
    >
      <div className="pointer-events-auto flex justify-center">
        <Logo />
      </div>
    </motion.div>
  );
}
