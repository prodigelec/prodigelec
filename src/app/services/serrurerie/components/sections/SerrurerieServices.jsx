"use client";
import { motion } from "framer-motion";
import { Check, ShieldCheck, Lock, KeyRound, Blinds } from "lucide-react";

export default function SerrurerieServices() {
  const features = [
    {
      icon: KeyRound,
      title: "Clés & Badges",
      description: "Service de reproduction de clés et copie de badges en collaboration avec notre partenaire.",
      items: [
        "Reproduction de clés toutes marques",
        "Copie de badges d'immeuble",
        "Service assuré avec l'Atelier des Frères d'Antan",
        "Clés brevetées et sécurisées"
      ]
    },
    {
      icon: Lock,
      title: "Remplacement & Installation",
      description: "Installation de serrures toutes marques pour votre porte d'entrée, garage ou portail.",
      items: [
        "Changement de cylindre",
        "Serrure multipoints",
        "Installation de verrous",
        "Poignées de sécurité"
      ]
    },
    {
      icon: ShieldCheck,
      title: "Haute Sécurité",
      description: "Renforcez la résistance de votre habitation contre les tentatives d'effraction.",
      items: [
        "Installation serrure A2P*",
        "Blindage de porte",
        "Cornières anti-pinces",
        "Barre de pivotement"
      ]
    },
    {
      icon: Blinds,
      title: "Fermetures & Volets",
      description: "Réparation et installation de vos systèmes de fermeture extérieurs.",
      items: [
        "Volets roulants (Acier, Alu, PVC)",
        "Systèmes de fermeture tout matériaux",
        "Motorisation de volets",
        "Réglage porte de garage"
      ]
    }
  ];

  return (
    <div className="mb-24">
      <h2 className="text-3xl font-bold text-white mb-12 text-center">Mes Prestations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 group flex flex-col"
          >
            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
              <feature.icon className="w-7 h-7 text-blue-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 min-h-[64px] flex items-center">{feature.title}</h3>
            <p className="text-gray-400 mb-8 flex-grow">
              {feature.description}
            </p>
            <ul className="space-y-3">
              {feature.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                  <Check className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
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
