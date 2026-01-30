"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function ElecPricing() {
  const prices = [
    {
      title: "Dépannage Électrique",
      price: "À partir de 120€ TTC",
      description: "Recherche de panne et réparation rapide sur votre installation.",
      features: [
        "Diagnostic complet inclus",
        "1h de main d'œuvre incluse",
        "Déplacement zone 1 offert",
        "Hors zone : Frais déplacement +"
      ],
      highlight: true,
      tag: "Urgence"
    },
    {
      title: "Mise en Sécurité",
      price: "Sur Devis",
      description: "Conformité et protection des personnes et des biens.",
      features: [
        "Tableau électrique aux normes",
        "Mise à la terre certifiée",
        "Protection 30mA installée",
        "Attestation de conformité"
      ],
      highlight: false
    },
    {
      title: "Vidéo & Alarme",
      price: "Sur Devis",
      description: "Installation de systèmes de surveillance et alarme.",
      features: [
        "Caméras Haute Définition",
        "Alarmes anti-intrusion",
        "Configuration smartphone",
        "Étude personnalisée"
      ],
      highlight: false
    },
    {
      title: "Installation & Rénov",
      price: "Sur Devis",
      description: "Projets complets d'installation ou rénovation électrique.",
      features: [
        "Étude & Devis personnalisés",
        "Norme NF C 15-100",
        "Matériel Legrand / Schneider",
        "Garantie décennale 10 ans"
      ],
      highlight: false
    }
  ];

  return (
    <section className="mb-32 relative">
      <div className="text-center mb-16 px-6">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase italic tracking-tighter">
          Mes Tarifs <span className="text-accent italic">Électricité</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Une tarification transparente et sans surprise pour toutes vos interventions électriques.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12 px-6 max-w-5xl mx-auto">
        {prices.map((plan, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            whileHover={{ y: -10 }}
            className="relative group h-full"
          >
            {/* Urgence Badge Sitting on the border */}
            {plan.tag && (
              <div className="absolute -top-[18px] left-1/2 -translate-x-1/2 bg-accent text-background font-black px-5 py-2 rounded-full text-[10px] uppercase tracking-widest shadow-[0_0_20px_rgba(var(--color-accent-rgb),0.6)] whitespace-nowrap z-50">
                {plan.tag}
              </div>
            )}

            <div className={`relative h-full overflow-hidden bg-white/[0.03] backdrop-blur-xl border ${plan.highlight ? 'border-accent/40 shadow-[0_0_40px_-15px_rgba(var(--color-accent-rgb),0.3)]' : 'border-white/10'
              } rounded-[40px] p-8 transition-all duration-500 hover:border-accent/50 flex flex-col z-10`}
            >
              {/* Background Decor (Clipped) */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/10 rounded-full blur-[80px] group-hover:bg-accent/20 transition-colors duration-700 pointer-events-none" />

              <div className="relative z-20 flex flex-col h-full">
                <h3 className="text-lg lg:text-xl font-black text-white mb-2 uppercase tracking-tight min-h-[56px] flex items-center leading-tight">
                  {plan.title}
                </h3>

                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-2xl lg:text-3xl font-black text-accent drop-shadow-[0_0_10px_rgba(var(--color-accent-rgb),0.3)]">
                    {plan.price === "Sur Devis" ? plan.price : plan.price.split(' ').slice(-2).join(' ')}
                  </span>
                  <span className="text-gray-400 font-medium text-xs">
                    {plan.price === 'Sur Devis' ? '' : '/ intervention'}
                  </span>
                </div>
                {plan.price !== "Sur Devis" && plan.price.includes("À partir de") && (
                  <div className="text-accent/70 text-[10px] font-bold uppercase tracking-tight -mt-5 mb-4">
                    À partir de
                  </div>
                )}

                <p className="text-gray-400 text-xs leading-relaxed mb-8 min-h-[48px]">
                  {plan.description}
                </p>

                <div className="w-full h-px bg-gradient-to-r from-white/10 to-transparent mb-8" />

                <ul className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-gray-300 group/item">
                      <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0 group-hover/item:bg-accent/20 transition-colors">
                        <Check className="w-3 h-3 text-accent" />
                      </div>
                      <span className="text-xs font-medium transition-colors group-hover/item:text-white">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/public/contact#contact-form"
                  className={`w-full py-4 rounded-2xl font-black text-xs uppercase tracking-wider transition-all duration-300 text-center ${plan.highlight
                    ? 'bg-accent text-background hover:scale-[1.02] shadow-[0_10px_20px_-10px_rgba(var(--color-accent-rgb),0.5)]'
                    : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
                    }`}
                >
                  Demander un devis
                </a>
              </div>

              {/* Glow Effect */}
              <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent ${plan.highlight ? 'via-accent/50' : 'via-accent/0'
                } to-transparent group-hover:via-accent/50 transition-all duration-700`} />
            </div>
          </motion.div>
        ))}
      </div>

      <p className="text-center text-gray-500 text-xs mt-12 px-6">
        Main d&apos;oeuvre supplémentaire : 50€/h. <br />
        Majoration possible soirs (après 19h), week-ends et jours fériés.
      </p>
    </section>
  );
}
