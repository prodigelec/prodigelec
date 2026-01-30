"use client";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function AboutValues() {
  const values = [
    {
      title: "Rigueur",
      desc: "Que ce soit pour câbler un tableau électrique ou coder une fonctionnalité, la précision est ma priorité."
    },
    {
      title: "Transparence",
      desc: "Pas de mauvaises surprises. Mes devis sont clairs, détaillés et expliqués avant toute intervention."
    },
    {
      title: "Proximité",
      desc: "Basé près de Dreux, je privilégie la relation humaine et le suivi local de mes clients (Chartres, Évreux, Anet...)."
    }
  ];

  return (
    <div className="mb-24">
      <h2 className="text-3xl font-bold text-white mb-12 text-center">Mes Engagements</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {values.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-[#020617] border border-white/10 p-8 rounded-3xl text-center relative group hover:border-primary/50 transition-colors"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary/20 p-3 rounded-full border border-primary/50 group-hover:scale-110 transition-transform">
              <CheckCircle2 className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 mt-4">{item.title}</h3>
            <p className="text-gray-400">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
