"use client";
import Image from "next/image";
import Link from "next/link";
import { m } from "framer-motion";
import { MapPin } from "lucide-react";
import { categoryColors } from "@/app/data/realisations";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.4, delay: i * 0.08 } }),
};

export default function RelatedRealisations({ items }) {
  if (!items || items.length === 0) return null;

  return (
    <m.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
      <h2 className="text-xl font-bold mb-5">Autres chantiers</h2>
      <div className="grid sm:grid-cols-3 gap-4">
        {items.map((r, i) => {
          const cat = categoryColors[r.categorie] ?? categoryColors.electricite;
          return (
            <m.div key={r.slug} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}>
              <Link
                href={`/realisations/${r.slug}`}
                className="group block rounded-2xl overflow-hidden h-full transition-colors"
                style={{ background: "var(--card)", border: "1px solid var(--border)" }}
              >
                <div className="relative h-32 overflow-hidden">
                  <Image
                    src={r.image}
                    alt={r.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
                <div className="p-4">
                  <span className="text-[11px] font-bold" style={{ color: cat.text }}>{cat.label}</span>
                  <h3 className="font-bold text-sm leading-snug mt-1 mb-2 group-hover:text-primary transition-colors">
                    {r.titre}
                  </h3>
                  <span className="flex items-center gap-1 text-xs" style={{ color: "var(--foreground-subtle)" }}>
                    <MapPin size={11} style={{ color: "var(--primary)" }} />
                    {r.ville}
                  </span>
                </div>
              </Link>
            </m.div>
          );
        })}
      </div>
    </m.section>
  );
}
