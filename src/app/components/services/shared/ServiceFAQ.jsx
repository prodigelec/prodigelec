"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { HiChevronDown } from "react-icons/hi2";

export default function ServiceFAQ({ title, subtitle, description, faqs, theme = "electricite" }) {
  const [openIndex, setOpenIndex] = useState(null);

  const themeConfig = {
    electricite: {
      highlightColor: "text-accent",
      hoverBorder: "hover:border-accent/30",
      iconColor: "text-accent",
      gradientFrom: "from-accent/50",
      gradientVia: "via-accent/20",
      buttonBg: "bg-accent/10",
      buttonText: "text-accent",
      buttonBorder: "border-accent/30",
      buttonHoverBg: "hover:bg-accent"
    },
    serrurerie: {
      highlightColor: "text-primary",
      hoverBorder: "hover:border-primary/30",
      iconColor: "text-primary",
      gradientFrom: "from-primary/50",
      gradientVia: "via-primary/20",
      buttonBg: "bg-primary/10",
      buttonText: "text-primary",
      buttonBorder: "border-primary/30",
      buttonHoverBg: "hover:bg-primary"
    }
  };

  const config = themeConfig[theme];

  return (
    <div className="mb-32">
      <div className="text-center mb-16 px-6">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase italic tracking-tighter">
          {title} <span className={`${config.highlightColor} italic`}>{subtitle}</span>
        </h2>
        <p className="text-gray-200 text-lg max-w-2xl mx-auto">
          {description}
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className={`bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden ${config.hoverBorder} transition-colors`}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 md:px-8 py-6 flex items-center justify-between gap-4 text-left group"
            >
              <h3 className={`text-lg md:text-xl font-bold text-white group-hover:${config.highlightColor} transition-colors`}>
                {faq.question}
              </h3>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="shrink-0"
              >
                <HiChevronDown className={`w-6 h-6 ${config.iconColor}`} />
              </motion.div>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 md:px-8 pb-6 pt-2">
                    <div className={`w-full h-px bg-gradient-to-r ${config.gradientFrom} ${config.gradientVia} to-transparent mb-4`} />
                    <p className="text-gray-200 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12 px-6">
        <p className="text-gray-200 mb-6">
          Vous ne trouvez pas la réponse à votre question ?
        </p>
        <a
          href="tel:0638194752"
          className={`inline-flex items-center gap-2 px-8 py-4 ${config.buttonBg} ${config.buttonText} border ${config.buttonBorder} rounded-full font-bold ${config.buttonHoverBg} hover:text-background transition-all hover:scale-105`}
        >
          Contactez-moi directement
        </a>
      </div>
    </div>
  );
}
