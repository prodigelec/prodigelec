"use client";
import Link from "next/link";
import Image from "next/image";
import { m } from "framer-motion";
import { Calendar } from "lucide-react";
import { getRealisationBySlug, categoryColors, formatRealisationDate } from "@/app/data/realisations";
import { fadeUp } from "./motion";

export default function BrandRealisations({ brand }) {
  const items = brand.realisationSlugs.map(getRealisationBySlug).filter(Boolean);

  // Toutes les marques n'ont pas encore de chantier publié : la section
  // disparaît plutôt que d'afficher un bloc vide.
  if (items.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-6 mb-10 md:mb-20">
      <m.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-8">
        <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "var(--primary)" }}>
          Chantiers réalisés
        </p>
        <h2 className="text-3xl font-bold">
          Mes interventions <span style={{ color: "var(--primary)" }}>{brand.name}</span>
        </h2>
      </m.div>

      <div className="grid md:grid-cols-2 gap-5">
        {items.map((r, i) => {
          const cat = categoryColors[r.categorie] ?? categoryColors.electricite;
          return (
            <m.article
              key={r.slug}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="rounded-2xl overflow-hidden flex flex-col"
              style={{ background: "var(--card)", border: "1px solid var(--border)" }}
            >
              <Link href={`/realisations/${r.slug}`} className="group flex flex-col flex-1">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={r.image}
                    alt={r.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div
                    className="self-start px-3 py-1 rounded-full text-xs font-bold mb-3"
                    style={{ background: cat.bg, border: `1px solid ${cat.border}`, color: cat.text }}
                  >
                    {cat.label}
                  </div>
                  <h3 className="font-bold text-base mb-2 leading-snug">{r.titre}</h3>
                  <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: "var(--foreground-subtle)" }}>
                    {r.description}
                  </p>
                  <span className="flex items-center gap-1 text-xs" style={{ color: "var(--foreground-subtle)" }}>
                    <Calendar size={12} />
                    {formatRealisationDate(r.date)}
                  </span>
                </div>
              </Link>
            </m.article>
          );
        })}
      </div>
    </section>
  );
}
