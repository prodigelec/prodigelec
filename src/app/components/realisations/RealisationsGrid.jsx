"use client";
import Link from "next/link";
import Image from "next/image";
import { m } from "framer-motion";
import { Calendar } from "lucide-react";
import { categoryColors, formatRealisationDate } from "@/app/data/realisations";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
};

// Grille de chantiers partagée par les pages ville, marque et service. La même
// carte y était copiée deux fois et allait l'être une troisième : seuls le
// titre, la couleur d'accent et le pied de section changent d'un appel à
// l'autre, le reste est identique.
export default function RealisationsGrid({
  items,
  title,
  eyebrow = "Chantiers réalisés",
  accent = "var(--primary)",
  footer = null,
  clamp = false,
  className = "max-w-7xl mx-auto px-6 mb-10 md:mb-20",
  // Les pages services placent leurs h2 un cran plus bas que les pages villes
  // et marques : le titre suit la page qui l'accueille.
  titleClassName = "text-3xl font-bold",
}) {
  // Une commune sans chantier publié, une marque sur laquelle rien n'a encore
  // été montré : la section disparaît plutôt que d'afficher un bloc vide.
  if (!items || items.length === 0) return null;

  return (
    <section className={className}>
      <m.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-8">
        <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: accent }}>
          {eyebrow}
        </p>
        <h2 className={titleClassName}>{title}</h2>
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
                  <h3
                    className="font-bold text-base mb-2 leading-snug transition-colors group-hover:text-(--accent-hover)]"
                    style={{ "--accent-hover": accent }}
                  >
                    {r.titre}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed mb-4 flex-1 ${clamp ? "line-clamp-4" : ""}`}
                    style={{ color: "var(--foreground-subtle)" }}
                  >
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

      {footer && (
        <m.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-6">
          {footer}
        </m.div>
      )}
    </section>
  );
}
