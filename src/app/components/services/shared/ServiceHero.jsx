"use client";
import { m } from "framer-motion";

export default function ServiceHero({ icon: Icon, title, subtitle, description, theme = "electricite" }) {
  const themeConfig = {
    electricite: {
      iconBg: "bg-white/5",
      iconBorder: "border-white/10",
      iconShadow: "shadow-[0_0_30px_-5px_rgba(255,215,0,0.3)]",
      highlightColor: "text-accent",
      iconColor: "text-white" // Default icon color unless specified otherwise
    },
    serrurerie: {
      iconBg: "bg-primary/10",
      iconBorder: "border-primary/20",
      iconShadow: "shadow-[0_0_30px_-5px_rgba(201,162,39,0.3)]",
      highlightColor: "text-primary",
      iconColor: "text-primary"
    }
  };

  const config = themeConfig[theme];

  return (
    <div className="text-center my-8 md:my-16">
      <m.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className={`inline-flex items-center justify-center w-16 h-16 md:w-24 md:h-24 rounded-full mb-6 md:mb-8 border ${config.iconBg} ${config.iconBorder} ${config.iconShadow}`}
      >
        <Icon className={`w-8 h-8 md:w-14 md:h-14 ${config.iconColor}`} />
      </m.div>
      <m.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-6xl font-black text-white mb-4 md:mb-6"
      >
        {title} <span className={config.highlightColor}>{subtitle}</span>
      </m.h1>
      <m.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-sm md:text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed"
      >
        {description}
      </m.p>
    </div>
  );
}
