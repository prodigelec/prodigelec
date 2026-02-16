"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function ServiceServices({ title, subtitle, description, features, theme = "electricite" }) {
  const themeConfig = {
    electricite: {
      highlightColor: "text-accent",
      cardHoverBorder: "hover:border-accent/50",
      iconBgHover: "group-hover:bg-accent/10",
      iconColor: "text-accent",
      checkColor: "text-accent",
      cardBg: "bg-[#0f172a]",
      cardBorder: "border-white/5"
    },
    serrurerie: {
      highlightColor: "text-primary",
      cardHoverBorder: "hover:border-primary/50",
      iconBgHover: "hover:bg-white/[0.07]", // Specific style from original SerrurerieServices
      iconColor: "text-primary",
      checkColor: "text-primary",
      cardBg: "bg-white/[0.03] backdrop-blur-xl", // Specific style from original SerrurerieServices
      cardBorder: "border-white/10"
    }
  };

  const config = themeConfig[theme];

  return (
    <div className="mb-16 md:mb-32">
      <div className="text-center mb-8 md:mb-16 px-6">
        <h2 className="text-2xl md:text-5xl font-black text-white mb-4 uppercase italic tracking-tighter">
          {title} <span className={`${config.highlightColor} italic`}>{subtitle}</span>
        </h2>
        <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto">
          {description}
        </p>
      </div>

      <div className={`grid grid-cols-1 md:grid-cols-2 ${theme === 'electricite' ? 'lg:grid-cols-3' : 'lg:grid-cols-2'} gap-4 md:gap-8 lg:gap-10 px-6`}>
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            whileHover={{ y: -10 }}
            className={`relative overflow-hidden group ${config.cardBg} ${config.cardBorder} rounded-3xl p-6 md:p-8 lg:p-10 ${config.cardHoverBorder} transition-all duration-300 flex flex-col`}
          >
            {theme === 'serrurerie' && (
               <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-[80px] group-hover:bg-primary/20 transition-colors duration-700" />
            )}

            <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 md:mb-8 ${config.iconBgHover} transition-colors relative z-10`}>
              <feature.icon className={`w-6 h-6 md:w-8 md:h-8 ${config.iconColor}`} />
            </div>

            <h3 className="text-lg md:text-2xl lg:text-3xl font-bold text-white mb-4 md:mb-6 relative z-10">{feature.title}</h3>
            
            <p className="text-gray-400 mb-6 md:mb-8 text-sm md:text-base lg:text-lg leading-relaxed relative z-10">
              {feature.description}
            </p>

            {theme === 'serrurerie' && (
                <div className="w-full h-px bg-gradient-to-r from-white/10 to-transparent mb-6 md:mb-8 relative z-10" />
            )}

            <ul className="space-y-3 md:space-y-4 relative z-10">
              {feature.items.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <div className={theme === 'serrurerie' ? "w-5 h-5 md:w-6 md:h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover/item:bg-primary/20 transition-colors" : ""}>
                    <Check className={`w-4 h-4 md:w-5 md:h-5 ${config.checkColor} shrink-0`} />
                  </div>
                  <span className="text-xs md:text-sm lg:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
