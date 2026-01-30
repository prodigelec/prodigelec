"use client";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[35%] h-[35%] bg-primary/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[35%] h-[35%] bg-accent/10 rounded-full blur-[140px]" />
      </div>
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
              L&apos;artisanat au service de votre confort et votre sécurité : <br />
              <span className="text-primary font-semibold">Une Expertise Unique</span>
            </h2>

            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                Mon parcours est atypique et c&apos;est ce qui fait ma force. Pendant plus de <strong className="text-primary font-bold">20 ans</strong>, j&apos;ai exercé en tant qu&apos;artisan électricien et serrurier. Ces années de terrain m&apos;ont appris la rigueur, la précision et le sens du service client.
              </p>
              <p>
                Aujourd&apos;hui, je mets cette solide expérience technique au service de vos installations électriques et de la sécurité de votre domicile.
              </p>
              <p>
                Que ce soit pour sécuriser votre habitation ou rénover votre installation électrique, je vous apporte une solution concrète, fiable et professionnelle.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Plus de 20 ans d&apos;expérience",
                "Interlocuteur unique",
                "Travail soigné",
                "Polyvalence technique"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <div className="p-1.5 rounded-full bg-white/10 ring-1 ring-white/10 group-hover:ring-primary/30 transition-colors shadow-[inset_0_1px_2px_rgba(255,255,255,0.2)]">
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
            <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/10 via-white/5 to-black/30 ring-1 ring-white/10 shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_18px_50px_rgba(0,0,0,0.5)] group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-accent/15 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 p-[1px] rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-accent/30" />

              <div className="absolute inset-0 flex items-center justify-center text-center p-8">
                <div className="relative z-10">
                  <span className="block text-7xl font-black text-primary mb-2 drop-shadow-[0_4px_12px_rgba(0,0,0,0.7)]">20+</span>
                  <span className="block text-3xl font-bold text-foreground mb-2 tracking-wide">Années</span>
                  <span className="block text-lg text-foreground-muted font-medium tracking-widest uppercase">d&apos;Expérience</span>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 top-[-20px] right-[-20px] w-40 h-40 bg-primary/20 rounded-full blur-[90px] animate-pulse" />
            <div className="absolute -z-10 bottom-[-20px] left-[-20px] w-40 h-40 bg-accent/20 rounded-full blur-[90px] animate-pulse delay-700" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
