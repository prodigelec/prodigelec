"use client";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import BrandName from "@/app/components/ui/BrandName";

export default function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[35%] h-[35%] bg-primary/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[35%] h-[35%] bg-accent/10 rounded-full blur-[140px]" />
      </div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-4 md:mb-6">
              L&apos;artisanat au service de votre confort et votre sécurité : <br />
              <span className="text-primary font-semibold">Une Expertise Unique</span>
            </h2>

            <div className="space-y-4 md:space-y-6 text-sm md:text-base lg:text-lg text-gray-200 leading-relaxed">
              <p>
                L&apos;artisanat est avant tout une histoire de famille et de transmission. J&apos;ai exercé le métier d&apos;électricien serrurier pendant <strong className="text-primary font-bold">23 ans</strong> au sein de notre société familiale à Paris, travaillant aux côtés de mes parents et de mes frères. En tant qu&apos;aîné, c&apos;est là que j&apos;ai forgé mon exigence et ma passion du métier.
              </p>
              <p>
                Aujourd&apos;hui, j&apos;interviens en <strong className="text-primary font-bold">Eure (27) et Eure-et-Loir (28)</strong>. Fort de cette expérience familiale, je porte désormais les couleurs de <BrandName /> avec la même rigueur et la même exigence de qualité qui ont toujours guidé mon travail.
              </p>
            </div>

            <div className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {[
                "Garantie Décennale incluse",
                "Normes NF C 15-100 & CE",
                "Chantier propre garanti",
                "Assurance pro à jour"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 md:gap-3 group">
                  <div className="p-1.5 rounded-full bg-white/10 ring-1 ring-white/10 group-hover:ring-primary/30 transition-colors shadow-[inset_0_1px_2px_rgba(255,255,255,0.2)]">
                    <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                  </div>
                  <span className="text-xs md:text-sm font-medium text-gray-200 group-hover:text-white transition-colors">{item}</span>
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
            <div className="relative aspect-square md:aspect-4/3 rounded-3xl overflow-hidden border border-white/10 bg-linear-to-b from-white/10 via-white/5 to-black/30 ring-1 ring-white/10 shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_18px_50px_rgba(0,0,0,0.5)] group">
              <div className="absolute inset-0 bg-linear-to-br from-primary/15 via-transparent to-accent/15 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 p-1 rounded-3xl bg-linear-to-br from-primary/30 via-transparent to-accent/30" />

              <div className="absolute inset-0 flex items-center justify-center text-center p-8">
                <div className="relative z-10">
                  <span className="block text-7xl font-black text-primary mb-2 drop-shadow-[0_4px_12px_rgba(0,0,0,0.7)]">23</span>
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
