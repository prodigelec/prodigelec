"use client";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import BrandName from "@/components/ui/BrandName";

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
                L&apos;artisanat est avant tout une histoire de famille et de transmission. J&apos;ai exercé le métier d&apos;électricien serrurier pendant <strong className="text-primary font-bold">23 ans</strong> au sein de notre société familiale à Paris, travaillant aux côtés de mes parents et de mes frères. En tant qu&apos;aîné, c&apos;est là que j&apos;ai forgé mon exigence et ma passion du métier.
              </p>
              <p>
                Aujourd&apos;hui, j&apos;interviens en <strong className="text-primary font-bold">Eure (27) et Eure-et-Loir (28)</strong>, tout en collaborant régulièrement avec mes frères de <a href="https://www.atelierfreresdantan.fr/" target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline">L&apos;Atelier des Frères d&apos;Antan</a> situés à Montfort-l&apos;Amaury (78). Ils rayonnent sur les Yvelines et interviennent également très régulièrement sur le secteur proche de l&apos;Eure-et-Loir, nous permettant d&apos;unir nos forces sur des projets communs avec une exigence fraternelle. Je porte les couleurs de <BrandName /> avec cette même rigueur.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Garantie Décennale incluse",
                "Normes NF C 15-100 & CE",
                "Chantier propre garanti",
                "Assurance pro à jour"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <div className="p-1.5 rounded-full bg-white/10 ring-1 ring-white/10 group-hover:ring-primary/30 transition-colors shadow-[inset_0_1px_2px_rgba(255,255,255,0.2)]">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">{item}</span>
                </div>
              ))}
            </div>

            {/* Announcement / Offer */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-10 p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 ring-1 ring-primary/10 relative overflow-hidden group hover:bg-primary/15 transition-colors"
            >
              <div className="absolute top-0 right-0 p-2 bg-primary text-background font-bold text-[10px] uppercase tracking-tighter rounded-bl-lg shadow-sm">
                Annonce
              </div>
              <h3 className="text-white font-bold text-lg mb-2 flex items-center gap-2">
                Offre Découverte <span className="text-primary">-10%</span>
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed mb-3">
                Pour fêter le lancement de notre activité sur le secteur, profitez de <span className="text-white font-medium">-10% sur votre première intervention</span> (dépannage ou installation).
              </p>
              <div className="flex items-center justify-between mt-4">
                <div className="inline-flex items-center gap-2 bg-background/50 px-3 py-1.5 rounded border border-white/10">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-wider">Code promo :</span>
                  <span className="text-sm font-mono font-bold text-white tracking-widest">PRODIG2026</span>
                </div>
                <span className="text-[10px] text-gray-400 font-medium italic">
                  *Valable pour les 100 premiers clients (à mentionner lors du contact)
                </span>
              </div>
            </motion.div>
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
