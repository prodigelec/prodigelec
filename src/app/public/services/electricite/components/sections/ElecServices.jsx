"use client";
import { motion } from "framer-motion";
import {
  HiShieldCheck,
  HiOutlineLightBulb,
  HiLockClosed,
  HiOutlineWrenchScrewdriver,
  HiOutlineHomeModern,
  HiOutlineVideoCamera,
} from "react-icons/hi2";
import { Check } from "lucide-react";

export default function ElecServices() {
  const features = [
    {
      icon: HiOutlineWrenchScrewdriver,
      title: "Dépannage Urgent",
      description:
        "Intervention rapide pour toutes vos pannes électriques : coupures, courts-circuits ou défaillances.",
      items: [
        "Recherche de panne",
        "Diagnostic immédiat",
        "Réparation de circuits",
        "Remise en route sécurisée",
      ],
    },
    {
      icon: HiShieldCheck,
      title: "Mise en Sécurité",
      description:
        "Mise en conformité de votre tableau de répartition et de l'installation selon la norme NF C 15-100.",
      items: [
        "Remplacement de tableau",
        "Mise à la terre certifiée",
        "Protection 30mA",
        "Attestation CONSUEL",
      ],
    },
    {
      icon: HiOutlineLightBulb,
      title: "Éclairage LED",
      description:
        "Solutions d'éclairage modernes hautes performances pour transformer votre intérieur et extérieur.",
      items: [
        "Spots encastrés design",
        "Éclairage extérieur",
        "Détecteurs de mouvement",
        "Régulateurs d'intensité",
      ],
    },
    {
      icon: HiOutlineHomeModern,
      title: "Chauffage & VMC",
      description:
        "Installation et maintenance de vos systèmes de confort thermique et renouvellement d'air.",
      items: [
        "Radiateurs à inertie",
        "VMC Simple & Double flux",
        "Sèche-serviette",
        "Maintenance préventive",
      ],
    },
    {
      icon: HiOutlineVideoCamera,
      title: "Vidéo & Alarme",
      description:
        "Installation de systèmes de surveillance et d'alarme pour une protection optimale de vos biens.",
      items: [
        "Caméras IP Haute Définition",
        "Alarmes anti-intrusion",
        "Détection incendie",
        "Paramétrage smartphone",
      ],
    },
    {
      icon: HiLockClosed,
      title: "Sécurité & Accès",
      description:
        "Protégez vos accès avec des technologies modernes de contrôle d’entrée et de surveillance.",
      items: [
        "Vidéophonie connectée",
        "Interphonie intelligente",
        "Contrôle par badge",
        "Digicodes robustes",
      ],
    },
  ];

  return (
    <div className="mb-32">
      <div className="text-center mb-16 px-6">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase italic tracking-tighter">
          Mes <span className="text-accent italic">Prestations</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Une expertise certifiée pour des installations électriques sûres,
          modernes et adaptées à vos besoins.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 px-6">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            whileHover={{ y: -10 }}
            className="relative overflow-hidden group bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[40px] p-8 lg:p-10 transition-all duration-500 hover:border-accent/50 hover:bg-white/[0.07] flex flex-col"
          >
            {/* Animated Background Decor */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/10 rounded-full blur-[80px] group-hover:bg-accent/20 transition-colors duration-700" />

            <div className="relative z-10 flex flex-col h-full">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-accent/30 transition-all duration-500">
                <feature.icon className="w-8 h-8 text-accent group-hover:drop-shadow-[0_0_8px_rgba(var(--color-accent-rgb),0.8)]" />
              </div>

              <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-tight flex items-center">
                {feature.title}
              </h3>

              <p className="text-gray-400 leading-relaxed mb-8 text-base min-h-[72px]">
                {feature.description}
              </p>

              <div className="w-full h-px bg-gradient-to-r from-white/10 to-transparent mb-8" />

              <ul className="space-y-4 mb-8 flex-grow">
                {feature.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-4 text-gray-300 group/item"
                  >
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 group-hover/item:bg-accent/20 transition-colors">
                      <Check className="w-3.5 h-3.5 text-accent" />
                    </div>
                    <span className="text-sm font-medium transition-colors group-hover/item:text-white line-clamp-1">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Glow Effect */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/0 to-transparent group-hover:via-accent/50 transition-all duration-700" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
