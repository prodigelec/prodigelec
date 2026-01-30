"use client";
import Link from "next/link";
import { Zap, Key, ArrowRight } from "lucide-react";

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 px-4 sm:py-20 sm:px-6 lg:py-24 bg-card/30 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-15%] right-[-10%] w-[40%] h-[40%] bg-accent/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-15%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[140px]" />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 text-center md:text-left text-foreground">Nos Domaines d&apos;Intervention</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {/* Electricity */}
          <div className="p-4 sm:p-6 md:p-8 rounded-3xl border border-white/10 ring-1 ring-white/10 bg-gradient-to-b from-white/10 via-white/5 to-black/30 hover:border-accent/50 transition-all duration-300 group overflow-hidden relative flex flex-col h-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_12px_30px_rgba(0,0,0,0.45)] hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.35),0_16px_40px_rgba(0,0,0,0.55)]">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/15 via-transparent to-primary/10 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-accent/10 ring-1 ring-white/20 shadow-[inset_0_1px_2px_rgba(255,255,255,0.35)] flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:bg-accent/20 transition-all mx-auto md:mx-0 relative z-10">
              <Zap className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-center md:text-left text-foreground group-hover:text-accent transition-all relative z-10">Électricité</h3>
            <p className="text-gray-300/80 leading-relaxed text-sm sm:text-base text-center md:text-left relative z-10 group-hover:text-gray-200 mb-5 flex-grow">
              Dépannage électrique, mise aux normes, tableaux, prises, éclairage LED.
            </p>
            <div className="relative z-10 mb-6">
              <ul className="grid grid-cols-1 gap-2 text-xs sm:text-sm text-gray-300/80">
                {["Intervention rapide", "Devis clair", "Travail soigné"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent/80" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative z-10 text-center md:text-left mt-auto">
              <Link href="/public/services/electricite" className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary-light transition-colors group/link">
                En savoir plus
                <ArrowRight className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Locksmithing */}
          <div className="p-4 sm:p-6 md:p-8 rounded-3xl border border-white/10 ring-1 ring-white/10 bg-gradient-to-b from-white/10 via-white/5 to-black/30 hover:border-primary/50 transition-all duration-300 group overflow-hidden relative flex flex-col h-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_12px_30px_rgba(0,0,0,0.45)] hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.35),0_16px_40px_rgba(0,0,0,0.55)]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-accent/10 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary/10 ring-1 ring-white/20 shadow-[inset_0_1px_2px_rgba(255,255,255,0.35)] flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all mx-auto md:mx-0 relative z-10">
              <Key className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-center md:text-left text-foreground group-hover:text-primary transition-all relative z-10">Serrurerie</h3>
            <p className="text-gray-300/80 leading-relaxed text-sm sm:text-base text-center md:text-left relative z-10 group-hover:text-gray-200 mb-5 flex-grow">
              Ouverture de porte, changement de serrure, blindage, sécurisation.
            </p>
            <div className="relative z-10 mb-6">
              <ul className="grid grid-cols-1 gap-2 text-xs sm:text-sm text-gray-300/80">
                {["Déplacement rapide", "Serrures certifiées", "Conseils sécurité"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary/80" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative z-10 text-center md:text-left mt-auto">
              <Link href="/public/services/serrurerie" className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary-light transition-colors group/link">
                En savoir plus
                <ArrowRight className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
