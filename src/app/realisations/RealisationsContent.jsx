"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { m } from "framer-motion";
import { MapPin, Calendar, ArrowRight } from "lucide-react";
import { realisations, categories } from "@/app/data/realisations";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.4, delay: i * 0.08 } }),
};

const categoryColors = {
  electricite: { bg: "rgba(255,193,7,0.12)", border: "rgba(255,193,7,0.35)", text: "#ffc107", label: "Électricité" },
  securite:    { bg: "rgba(201,162,39,0.12)", border: "rgba(201,162,39,0.35)", text: "#c9a227", label: "Sécurité" },
  automatismes:{ bg: "rgba(201,162,39,0.12)", border: "rgba(201,162,39,0.35)", text: "#c9a227", label: "Automatismes" },
};

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("fr-FR", { month: "long", year: "numeric" });
}

export default function RealisationsContent() {
  const [filtre, setFiltre] = useState("tous");

  const filtered = filtre === "tous"
    ? realisations
    : realisations.filter((r) => r.categorie === filtre);

  return (
    <main className="min-h-screen bg-background text-foreground pt-20 pb-16 mt-16 md:pt-24 md:mt-16 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <m.div
          variants={fadeUp} initial="hidden" animate="visible"
          className="mb-10 md:mb-14"
        >
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "var(--primary)" }}>
            Chantiers réalisés
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Nos <span style={{ background: "linear-gradient(135deg, #c9a227, #ffd60a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>réalisations</span>
          </h1>
          <p className="text-sm md:text-base max-w-xl" style={{ color: "var(--foreground-subtle)" }}>
            Photos de chantiers réels — électricité, sécurité et automatismes en Eure-et-Loir, Eure et Yvelines.
          </p>
        </m.div>

        {/* Filtres */}
        <m.div
          variants={fadeUp} initial="hidden" animate="visible" custom={1}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setFiltre(cat.slug)}
              className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200"
              style={filtre === cat.slug
                ? { background: "var(--primary)", color: "var(--background)" }
                : { background: "var(--card)", color: "var(--foreground-subtle)", border: "1px solid var(--border)" }
              }
            >
              {cat.label}
            </button>
          ))}
        </m.div>

        {/* Grille */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((r, i) => {
            const cat = categoryColors[r.categorie];
            return (
              <m.article
                key={r.slug}
                id={r.slug}
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
                className="rounded-2xl overflow-hidden flex flex-col"
                style={{ background: "var(--card)", border: "1px solid var(--border)" }}
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={r.image}
                    alt={r.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Contenu */}
                <div className="p-5 flex flex-col flex-1">
                  {/* Badge catégorie */}
                  <div
                    className="self-start px-3 py-1 rounded-full text-xs font-bold mb-3"
                    style={{ background: cat.bg, border: `1px solid ${cat.border}`, color: cat.text }}
                  >
                    {cat.label}
                  </div>
                  <h2 className="font-bold text-base mb-2 leading-snug">{r.titre}</h2>
                  <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: "var(--foreground-subtle)" }}>
                    {r.description}
                  </p>
                  <div className="flex items-center justify-between text-xs" style={{ color: "var(--foreground-subtle)" }}>
                    <span className="flex items-center gap-1">
                      <MapPin size={12} style={{ color: "var(--primary)" }} />
                      {r.ville} ({r.departementCode})
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {formatDate(r.date)}
                    </span>
                  </div>
                </div>
              </m.article>
            );
          })}
        </div>

        {/* CTA */}
        <m.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="mt-16 rounded-3xl p-8 md:p-12 text-center"
          style={{ background: "linear-gradient(135deg, rgba(201,162,39,0.12) 0%, rgba(201,162,39,0.04) 100%)", border: "1px solid rgba(201,162,39,0.25)" }}
        >
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "var(--primary)" }}>Votre projet</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Un chantier à réaliser ?</h2>
          <p className="text-sm mb-8 max-w-md mx-auto" style={{ color: "var(--foreground-subtle)" }}>
            Contactez-moi pour un devis gratuit jusqu&apos;à 30 km de Broué.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm transition-all hover:brightness-110"
            style={{ background: "var(--primary)", color: "var(--background)" }}
          >
            Demander un devis <ArrowRight size={16} />
          </Link>
        </m.div>
      </div>
    </main>
  );
}
