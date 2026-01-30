"use client";
import { motion } from "framer-motion";
import { ClipboardList, Award, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: <Award className="w-8 h-8 text-primary" />,
    title: "Norme NF C 15-100",
    description: "Toutes mes interventions respectent strictement les normes de sécurité en vigueur pour votre protection.",
    gradient: "from-primary/20 to-primary/5",
    border: "group-hover:border-primary/50"
  },
  {
    icon: <HeartHandshake className="w-8 h-8 text-accent" />,
    title: "Chantier Propre",
    description: "Je m'engage à laisser votre domicile aussi propre qu'à mon arrivée. Pas de poussière, pas de traces.",
    gradient: "from-accent/20 to-accent/5",
    border: "group-hover:border-accent/50"
  },
  {
    icon: <ClipboardList className="w-8 h-8 text-primary-light" />,
    title: "Zéro Surprise",
    description: "Le prix du devis est ferme et définitif. Aucune facturation supplémentaire imprévue en fin de chantier.",
    gradient: "from-primary-light/20 to-primary-light/5",
    border: "group-hover:border-primary-light/50"
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className={`bg-gradient-to-b from-white/10 via-white/5 to-black/30 backdrop-blur-md border border-white/10 ring-1 ring-white/10 p-8 rounded-3xl transition-all duration-300 group ${feature.border} shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_12px_30px_rgba(0,0,0,0.45)] hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.35),0_16px_40px_rgba(0,0,0,0.55)]`}
            >
              <div className={`mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} ring-1 ring-white/20 shadow-[inset_0_1px_2px_rgba(255,255,255,0.35)] group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4 transition-all group-hover:text-primary">
                {feature.title}
              </h3>
              <p className="text-gray-300/80 leading-relaxed group-hover:text-gray-200 transition-colors">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
