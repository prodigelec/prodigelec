"use client";
import Link from "next/link";
import { m } from "framer-motion";
import { Phone, ArrowRight, MapPin } from "lucide-react";
import BrandInterventions from "./BrandInterventions";
import BrandGammes from "./BrandGammes";
import BrandPannes from "./BrandPannes";
import BrandRealisations from "./BrandRealisations";
import BrandFaq from "./BrandFaq";
import { fadeUp } from "./motion";

// Villes reliées depuis chaque page marque. C'est ce maillage qui donne une
// chance sur les requêtes « <marque> + ville » : la page marque porte le
// sujet, les pages villes portent le lieu, les liens font le lien.
const MAIN_CITIES = [
  { name: "Dreux", slug: "dreux" },
  { name: "Chartres", slug: "chartres" },
  { name: "Évreux", slug: "evreux" },
  { name: "Anet", slug: "anet" },
  { name: "Nogent-le-Roi", slug: "nogent-le-roi" },
];

export default function BrandPageContent({ brand }) {
  return (
    <main className="min-h-screen bg-background text-foreground pt-20 pb-8 mt-16 md:pt-24 md:pb-20 md:mt-16 overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative max-w-7xl mx-auto px-6 mb-10 md:mb-20">
        <div
          className="absolute -top-20 -left-20 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{ background: "var(--primary)" }}
        />
        <div className="relative max-w-3xl">
          <m.p
            variants={fadeUp} initial="hidden" animate="visible" custom={0}
            className="text-xs font-bold uppercase tracking-widest mb-4"
            style={{ color: "var(--primary)" }}
          >
            {brand.category}
          </m.p>

          <m.h1
            variants={fadeUp} initial="hidden" animate="visible" custom={1}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
          >
            Installateur &amp; dépanneur{" "}
            <span style={{ background: "linear-gradient(135deg, #c9a227, #ffd60a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              {brand.name}
            </span>
          </m.h1>

          <m.p
            variants={fadeUp} initial="hidden" animate="visible" custom={2}
            className="text-base md:text-lg leading-relaxed mb-8"
            style={{ color: "var(--foreground-subtle)" }}
          >
            {brand.intro}
          </m.p>

          <m.div
            variants={fadeUp} initial="hidden" animate="visible" custom={3}
            className="flex flex-wrap gap-3"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:brightness-110"
              style={{ background: "var(--primary)", color: "var(--background)", boxShadow: "0 4px 24px rgba(201,162,39,0.3)" }}
            >
              Devis gratuit <ArrowRight size={16} />
            </Link>
            <a
              href="tel:+33638194752"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:bg-white/10"
              style={{ border: "1px solid rgba(255,255,255,0.15)", color: "var(--foreground)" }}
            >
              <Phone size={15} className="shrink-0" /> 06 38 19 47 52
            </a>
          </m.div>
        </div>
      </section>

      <BrandInterventions brand={brand} />
      <BrandGammes brand={brand} />
      <BrandPannes brand={brand} />
      <BrandRealisations brand={brand} />

      {/* ── ZONE & MAILLAGE ── */}
      <section className="max-w-7xl mx-auto px-6 mb-10 md:mb-20">
        <div className="rounded-2xl p-6 md:p-8 grid md:grid-cols-[auto_1fr] gap-4 items-start" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: "rgba(201,162,39,0.12)", border: "1px solid rgba(201,162,39,0.3)" }}
          >
            <MapPin size={20} style={{ color: "var(--primary)" }} />
          </div>
          <div>
            <p className="font-bold mb-2 text-base">
              Où j&apos;interviens sur le matériel <span style={{ color: "var(--primary)" }}>{brand.name}</span>
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--foreground-subtle)" }}>
              Basé à Broué (28410), j&apos;interviens en Eure-et-Loir, dans l&apos;Eure et dans les Yvelines —
              notamment à{" "}
              {MAIN_CITIES.map((city, i) => (
                <span key={city.slug}>
                  {i > 0 && (i === MAIN_CITIES.length - 1 ? " et " : ", ")}
                  <Link href={`/electricien/${city.slug}`} className="font-medium underline underline-offset-2 hover:opacity-80 transition-opacity" style={{ color: "var(--primary)" }}>
                    {city.name}
                  </Link>
                </span>
              ))}
              .
            </p>
            <div className="flex flex-wrap gap-2">
              {brand.services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold transition-all hover:brightness-110"
                  style={{ background: "rgba(201,162,39,0.1)", border: "1px solid rgba(201,162,39,0.25)", color: "var(--primary)" }}
                >
                  {service.label} <ArrowRight size={11} />
                </Link>
              ))}
              <Link
                href="/marques"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold transition-all hover:bg-white/10"
                style={{ border: "1px solid rgba(255,255,255,0.15)", color: "var(--foreground-subtle)" }}
              >
                Toutes les marques <ArrowRight size={11} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <BrandFaq brand={brand} />

      {/* ── CTA ── */}
      <section className="max-w-7xl mx-auto px-6">
        <m.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="rounded-3xl p-8 md:p-12 text-center"
          style={{ background: "linear-gradient(135deg, rgba(201,162,39,0.12) 0%, rgba(201,162,39,0.04) 100%)", border: "1px solid rgba(201,162,39,0.25)" }}
        >
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "var(--primary)" }}>
            Devis gratuit
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Une panne {brand.name} à faire diagnostiquer ?
          </h2>
          <p className="text-sm mb-8 max-w-md mx-auto" style={{ color: "var(--foreground-subtle)" }}>
            Décrivez-moi le symptôme, je vous dis ce qu&apos;il en est. Tarifs annoncés avant toute intervention.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-sm transition-all hover:brightness-110"
              style={{ background: "var(--primary)", color: "var(--background)" }}
            >
              Demander un devis gratuit <ArrowRight size={16} />
            </Link>
            <a
              href="tel:+33638194752"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-sm transition-all hover:bg-white/10"
              style={{ border: "1px solid rgba(255,255,255,0.2)", color: "var(--foreground)" }}
            >
              <Phone size={15} /> 06 38 19 47 52
            </a>
          </div>
        </m.div>
      </section>

    </main>
  );
}
