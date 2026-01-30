"use client";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[#020617] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              De l'Artisanat au Numérique : <br />
              <span className="text-primary">Une Expertise Unique</span>
            </h2>
            
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                Mon parcours est atypique et c'est ce qui fait ma force. Pendant plus de <strong className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600 font-bold">20 ans</strong>, j'ai exercé en tant qu'artisan électricien et serrurier. Ces années de terrain m'ont appris la rigueur, la précision et le sens du service client.
              </p>
              <p>
                Aujourd'hui, j'allie cette solide expérience technique à ma nouvelle compétence de <strong className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 font-bold">Développeur Web (Titre Pro DWWM)</strong>.
              </p>
              <p>
                Que ce soit pour sécuriser votre domicile, rénover votre installation électrique ou créer votre site vitrine, je vous apporte une solution concrète, fiable et professionnelle.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Plus de 20 ans d'expérience",
                "Développeur Web (3 ans)",
                "Interlocuteur unique",
                "Polyvalence technique"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <div className="p-1.5 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual / Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 bg-[#020617] group">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-primary/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Animated Gradient Border */}
                <div className="absolute inset-0 p-[1px] rounded-3xl bg-gradient-to-br from-amber-500/20 via-transparent to-primary/20" />

                <div className="absolute inset-0 flex items-center justify-center text-center p-8">
                    <div className="relative z-10">
                        <span className="block text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-white/50 mb-2 drop-shadow-2xl">20+</span>
                        <span className="block text-3xl font-bold text-white mb-2 tracking-wide">Années</span>
                        <span className="block text-lg text-primary font-medium tracking-widest uppercase">d'Expérience</span>
                    </div>
                </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 top-[-20px] right-[-20px] w-40 h-40 bg-amber-500/20 rounded-full blur-[80px] animate-pulse" />
            <div className="absolute -z-10 bottom-[-20px] left-[-20px] w-40 h-40 bg-primary/20 rounded-full blur-[80px] animate-pulse delay-700" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
