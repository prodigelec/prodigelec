"use client";
import { m } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function AboutValues() {
  const values = [
    {
      title: "Garantie Décennale",
      desc: "Toutes mes interventions bénéficient d'une assurance décennale à jour pour votre totale sérénité."
    },
    {
      title: "Normes NF C 15-100",
      desc: "Le respect strict des normes de sécurité électrique en vigueur est ma priorité sur chaque chantier."
    },
    {
      title: "Rigueur & Propreté",
      desc: "Précision technique et respect de votre domicile : je laisse votre chantier aussi propre qu'à mon arrivée."
    },
    {
      title: "Transparence",
      desc: "Mes devis sont clairs et détaillés. Aucune mauvaise surprise, tout est expliqué avant l'intervention."
    },
    {
      title: "Proximité",
      desc: "Basé à Broué, j'interviens rapidement en Eure (27) et Eure-et-Loir (28) pour un suivi local de qualité."
    },
    {
      title: "Conseil & Écoute",
      desc: "Chaque projet est unique. Je vous accompagne avec des conseils personnalisés pour optimiser votre confort."
    }
  ];

  return (
    <div className="mb-12 md:mb-24">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 md:mb-12 text-center">Mes Engagements & Garanties</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {values.map((item, idx) => (
          <m.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-[#020617] border border-white/10 p-6 md:p-8 rounded-3xl text-center relative group hover:border-primary/50 transition-colors"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary/20 p-3 rounded-full border border-primary/50 group-hover:scale-110 transition-transform">
              <CheckCircle2 className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-white mb-4 mt-4">{item.title}</h3>
            <p className="text-sm md:text-base text-gray-100">
              {item.desc}
            </p>
          </m.div>
        ))}
      </div>
    </div>
  );
}
