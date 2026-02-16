"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ServiceCTA({ title, description, buttonText, theme = "electricite" }) {
  const themeConfig = {
    electricite: {
      buttonBg: "bg-accent",
      buttonHover: "hover:bg-accent-glow",
      buttonText: "text-black"
    },
    serrurerie: {
      buttonBg: "bg-primary",
      buttonHover: "hover:bg-primary-light",
      buttonText: "text-background"
    }
  };

  const config = themeConfig[theme];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center bg-[#0f172a] rounded-3xl p-6 md:p-12 border border-white/5"
    >
      <h2 className="text-xl md:text-3xl font-bold text-white mb-4 md:mb-6">{title}</h2>
      <p className="text-sm md:text-base text-gray-200 mb-6 md:mb-8 max-w-2xl mx-auto">
        {description}
      </p>
      <a href="/contact#contact-form" className={`inline-flex items-center gap-2 px-5 py-3 md:px-8 md:py-4 ${config.buttonBg} ${config.buttonText} rounded-full font-medium md:font-bold ${config.buttonHover} transition-colors text-sm md:text-base`}>
        {buttonText} <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
      </a>
    </motion.div>
  );
}
