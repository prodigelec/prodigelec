"use client";
import { motion } from "framer-motion";
import { Check, ShieldCheck, Lock, Blinds } from "lucide-react";
import { IoKey } from "react-icons/io5";

export default function SerrurerieServices() {
  const features = [
    {
      icon: IoKey,
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
        "Cornières anti-pinces",
        "Barre de pivotement",
        "Protections de cylindre"
      ]
    },
    {
      icon: Blinds,
      title: "Fermetures & Volets",
      description: "Réparation et installation de vos systèmes de fermeture extérieurs.",
      items: [
        "Volets roulants (Acier, Alu, PVC)",
        "Réglage portes & fenêtres",
        "Motorisation de volets",
        "Remplacement de manivelles"
      ]
    }
  ];

  return (
    <div className="mb-32">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase italic tracking-tighter">
          Mes <span className="text-primary italic">Prestations</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Un savoir-faire artisanal combiné aux technologies de sécurité les plus modernes pour votre sérénité.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            whileHover={{ y: -10 }}
            className="relative overflow-hidden group bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[40px] p-8 lg:p-10 transition-all duration-500 hover:border-primary/50 hover:bg-white/[0.07] flex flex-col"
          >
            {/* Animated Background Decor */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-[80px] group-hover:bg-primary/20 transition-colors duration-700" />

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-primary/30 transition-all duration-500">
                <feature.icon className="w-8 h-8 text-primary group-hover:drop-shadow-[0_0_8px_rgba(201,162,39,0.8)]" />
              </div>

              <h3 className="text-2xl lg:text-3xl font-black text-white mb-6 uppercase tracking-tight flex items-center">
                {feature.title}
              </h3>

              <p className="text-gray-400 leading-relaxed mb-8 text-base lg:text-lg min-h-[60px]">
                {feature.title === "Clés & Badges" ? (
                  <>
                    Service de reproduction et copie de badges en collaboration avec mon partenaire <a href="https://www.atelierfreresdantan.fr/" target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline">L&apos;Atelier des Frères d&apos;Antan</a> situé à Montfort-l&apos;Amaury.
                  </>
                ) : feature.description}
              </p>

              <div className="w-full h-px bg-gradient-to-r from-white/10 to-transparent mb-8" />

              <ul className="space-y-4 flex-grow">
                {feature.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-gray-300 group/item">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover/item:bg-primary/20 transition-colors">
                      <Check className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span className="text-sm lg:text-base font-medium transition-colors group-hover/item:text-white">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Glow Effect */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/50 transition-all duration-700" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
