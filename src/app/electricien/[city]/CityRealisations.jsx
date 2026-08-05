"use client";
import Link from "next/link";
import Image from "next/image";
import { m } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import {
  getRealisationsByVille,
  categoryColors,
  formatRealisationDate,
} from "@/app/data/realisations";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
};

export default function CityRealisations({ city }) {
  const items = getRealisationsByVille(city.name);

  // La majorité des communes n'a pas encore de chantier publié :
  // dans ce cas la section disparaît entièrement.
  if (items.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-6 mb-10 md:mb-20">
      <m.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-8">
        <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "var(--primary)" }}>
          Chantiers réalisés
        </p>
        <h2 className="text-3xl font-bold">
          Ce que j&apos;ai déjà fait à <span style={{ color: "var(--primary)" }}>{city.name}</span>
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
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={r.image}
                  alt={r.imageAlt}
                  fill
                  className="object-cover"
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
            </m.article>
          );
        })}
      </div>

      <m.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-6">
        <Link
          href="/realisations"
          className="inline-flex items-center gap-1 text-sm font-bold hover:gap-2 transition-all"
          style={{ color: "var(--primary)" }}
        >
          Voir tous mes chantiers <ArrowRight size={14} />
        </Link>
      </m.div>
    </section>
  );
}
