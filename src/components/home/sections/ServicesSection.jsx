"use client";
import Link from "next/link";

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 px-4 sm:py-20 sm:px-6 lg:py-24 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 text-center md:text-left">Nos Domaines d'Intervention</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {/* Electricity */}
          <div className="p-4 sm:p-6 md:p-8 rounded-2xl border border-white/5 bg-gradient-to-b from-white/5 to-transparent hover:border-amber-500/50 transition-all duration-300 group overflow-hidden relative flex flex-col h-full">
            <div className="absolute inset-0 bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:bg-amber-500/20 transition-all mx-auto md:mx-0 relative z-10">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-center md:text-left text-white group-hover:text-amber-400 transition-colors relative z-10">Électricité</h3>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base text-center md:text-left relative z-10 group-hover:text-gray-300 mb-6 flex-grow">
              Dépannage et installation.
            </p>
            <div className="relative z-10 text-center md:text-left mt-auto">
              <Link href="/services/electricite" className="inline-flex items-center text-sm font-semibold text-amber-500 hover:text-amber-400 transition-colors group/link">
                En savoir plus
                <svg className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
             </Link>
            </div>
          </div>

          {/* Locksmithing */}
          <div className="p-4 sm:p-6 md:p-8 rounded-2xl border border-white/5 bg-gradient-to-b from-white/5 to-transparent hover:border-blue-500/50 transition-all duration-300 group overflow-hidden relative flex flex-col h-full">
            <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all mx-auto md:mx-0 relative z-10">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-center md:text-left text-white group-hover:text-blue-400 transition-colors relative z-10">Serrurerie</h3>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base text-center md:text-left relative z-10 group-hover:text-gray-300 mb-6 flex-grow">
              Ouverture de porte et sécurisation.
            </p>
            <div className="relative z-10 text-center md:text-left mt-auto">
              <Link href="/services/serrurerie" className="inline-flex items-center text-sm font-semibold text-blue-500 hover:text-blue-400 transition-colors group/link">
                En savoir plus
                <svg className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* IT */}
          <div className="p-4 sm:p-6 md:p-8 rounded-2xl border border-white/5 bg-gradient-to-b from-white/5 to-transparent hover:border-primary/50 transition-all duration-300 group overflow-hidden relative flex flex-col h-full">
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all mx-auto md:mx-0 relative z-10">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-center md:text-left text-white group-hover:text-primary transition-colors relative z-10">Site Vitrine</h3>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base text-center md:text-left relative z-10 group-hover:text-gray-300 mb-6 flex-grow">
              Création de votre site vitrine pour présenter votre activité (3 ans d'expérience).
            </p>
            <div className="relative z-10 text-center md:text-left mt-auto">
              <Link href="/services/web" className="inline-flex items-center text-sm font-semibold text-primary hover:text-cyan-400 transition-colors group/link">
                En savoir plus
                <svg className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}