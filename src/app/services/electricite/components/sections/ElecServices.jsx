"use client";
import { motion } from "framer-motion";
import { Check, Shield, Lightbulb, Lock } from "lucide-react";

export default function ElecServices() {
  const features = [
    {
      icon: Shield,
      title: "Installation & Mise en Sécurité",
      description: "Je prends en charge les travaux d'installation électrique et de mise en sécurité. Du tableau de répartition aux prises de courant, tout est réalisé selon la norme NF C 15-100.",
      items: [
        "Remplacement de tableau électrique",
        "Mise à la terre",
        "Ajout de prises et interrupteurs",
        "Ajout de circuits spécialisés"
      ]
    },
    {
      icon: Lightbulb,
      title: "Éclairage & Confort",
      description: "Modernisez votre intérieur avec des solutions d'éclairage LED économes et esthétiques.",
      items: [
        "Installation spots encastrés",
        "Éclairage extérieur et détecteurs",
        "Pose de VMC et chauffage électrique",
        "Domotique simple"
      ]
    },
    {
      icon: Lock,
      title: "Contrôle d'Accès",
      description: "Sécurisez vos accès avec des solutions modernes de contrôle d'entrée.",
      items: [
        "Installation de digicode",
        "Interphonie (Audio/Vidéo)",
        "Vidéophonie connectée",
        "Gestion d'accès par badge"
      ]
    }
  ];

  return (
    <div className="mb-24">
      <h2 className="text-3xl font-bold text-white mb-12 text-center">Mes Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 group flex flex-col"
          >
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors">
              <feature.icon className="w-7 h-7 text-amber-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 min-h-[64px] flex items-center">{feature.title}</h3>
            <p className="text-gray-400 mb-8 flex-grow">
              {feature.description}
            </p>
            <ul className="space-y-3">
              {feature.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                  <Check className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
