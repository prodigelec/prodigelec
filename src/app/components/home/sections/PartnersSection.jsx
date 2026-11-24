"use client";
import { m } from "framer-motion";
import Image from "next/image";

const partners = [
  {
    name: "Artisan",
    label: "Certification officielle",
    logo: "/artisan.png",
    url: "https://www.cma-france.fr",
    width: 72,
    height: 72,
    accent: "primary",
  },
  {
    name: "Pages Jaunes",
    label: "Annuaire professionnel",
    logo: "/logo-pagesjaunes.svg",
    url: "https://www.pagesjaunes.fr",
    width: 120,
    height: 36,
    accent: "accent",
  },
  {
    name: "Habitat Presto",
    label: "Plateforme de mise en relation",
    logo: "/logo-habitatpresto.svg",
    url: "https://www.habitatpresto.com",
    width: 140,
    height: 36,
    accent: "primary",
  },
  {
    name: "Allo Voisin Pro",
    label: "Réseau local de confiance",
    logo: "/logo-allovoisin-pro.svg",
    url: "https://www.allovoisin.com",
    width: 140,
    height: 36,
    accent: "accent",
  },
];

const accentMap = {
  primary: {
    glow: "hover:shadow-[0_0_24px_rgba(var(--color-primary-rgb,180,140,60),0.25),inset_0_1px_2px_rgba(255,255,255,0.15)]",
    border: "hover:border-primary/40",
    dot: "bg-primary",
  },
  accent: {
    glow: "hover:shadow-[0_0_24px_rgba(var(--color-accent-rgb,220,100,30),0.25),inset_0_1px_2px_rgba(255,255,255,0.15)]",
    border: "hover:border-accent/40",
    dot: "bg-accent",
  },
};

export default function PartnersSection() {
  return (
    <section className="py-14 md:py-20 bg-background relative overflow-hidden">
      {/* Background blurs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[40%] h-[40%] bg-primary/8 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[40%] bg-accent/8 rounded-full blur-[140px]" />
      </div>

      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <m.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-14"
        >
          <p className="text-xs font-semibold text-primary uppercase tracking-[0.3em] mb-3">
            Présence & Certifications
          </p>
          <h2 className="text-xl md:text-2xl font-bold text-white">
            Retrouvez-nous sur vos plateformes
          </h2>
          <div className="mt-4 mx-auto w-16 h-0.5 bg-linear-to-r from-primary/0 via-primary to-primary/0 rounded-full" />
        </m.div>

        {/* Cards grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {partners.map((partner, i) => {
            const a = accentMap[partner.accent];
            return (
              <m.a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className={`group flex flex-col items-center gap-4 p-5 md:p-6 rounded-2xl bg-linear-to-b from-white/8 via-white/4 to-black/20 backdrop-blur-sm border border-white/10 ${a.border} shadow-[inset_0_1px_2px_rgba(255,255,255,0.1),0_8px_24px_rgba(0,0,0,0.35)] ${a.glow} transition-all duration-300 cursor-pointer`}
                aria-label={`Voir notre profil sur ${partner.name}`}
              >
                {/* Logo container */}
                <div className="flex items-center justify-center bg-white rounded-xl w-full py-4 px-3 min-h-[72px] shadow-[0_2px_12px_rgba(0,0,0,0.15)] group-hover:shadow-[0_4px_16px_rgba(0,0,0,0.2)] transition-shadow duration-300">
                  <Image
                    src={partner.logo}
                    alt={`Logo ${partner.name}`}
                    width={partner.width}
                    height={partner.height}
                    className="object-contain max-h-12 w-auto"
                  />
                </div>

                {/* Label */}
                <div className="text-center space-y-1">
                  <p className="text-xs md:text-sm font-semibold text-white/90 group-hover:text-white transition-colors">
                    {partner.name}
                  </p>
                  <div className="flex items-center justify-center gap-1.5">
                    <span className={`w-1 h-1 rounded-full ${a.dot} opacity-70`} />
                    <p className="text-[10px] md:text-xs text-white/40 group-hover:text-white/60 transition-colors leading-tight">
                      {partner.label}
                    </p>
                  </div>
                </div>
              </m.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
