"use client";
import { motion } from "framer-motion";
import { ClipboardList, Award, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: <ClipboardList className="w-8 h-8 text-emerald-400" />,
    title: "Devis Gratuit & Transparent",
    description: "Aucune mauvaise surprise. Je vous fournis une estimation claire et détaillée avant chaque intervention.",
    gradient: "from-emerald-500/20 to-emerald-500/5",
    border: "group-hover:border-emerald-500/50"
  },
  {
    icon: <Award className="w-8 h-8 text-amber-500" />,
    title: "Expertise Confirmée",
    description: "Plus de 20 ans d'expérience terrain en électricité et serrurerie, combinés à 3 ans d'expérience en développement web.",
    gradient: "from-amber-500/20 to-amber-500/5",
    border: "group-hover:border-amber-500/50"
  },
  {
    icon: <HeartHandshake className="w-8 h-8 text-primary" />,
    title: "Solutions Sur-Mesure",
    description: "Je prends le temps de vous écouter pour vous proposer la solution la plus adaptée à votre situation et à votre budget.",
    gradient: "from-primary/20 to-primary/5",
    border: "group-hover:border-primary/50"
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-[#020617] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-amber-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]" />
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
              className={`bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl transition-all duration-300 group ${feature.border}`}
            >
              <div className={`mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
