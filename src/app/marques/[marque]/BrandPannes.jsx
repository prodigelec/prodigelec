"use client";
import { m } from "framer-motion";
import { AlertTriangle, ArrowRight } from "lucide-react";
import { fadeUp } from "./motion";

// Chaque panne est formulée comme le client la décrit, pas comme un
// technicien la nomme : c'est la formulation qui sera tapée dans Google ou
// posée à ChatGPT, et donc celle qui peut être citée telle quelle.
export default function BrandPannes({ brand }) {
  return (
    <section className="max-w-7xl mx-auto px-6 mb-10 md:mb-20">
      <m.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-8">
        <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "var(--primary)" }}>
          Pannes courantes
        </p>
        <h2 className="text-3xl font-bold">
          Les symptômes <span style={{ color: "var(--primary)" }}>{brand.name}</span> les plus fréquents
        </h2>
      </m.div>

      <div className="grid md:grid-cols-2 gap-4">
        {brand.pannes.map((panne, i) => (
          <m.div
            key={panne.symptome}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            className="rounded-2xl p-5"
            style={{ background: "var(--card)", border: "1px solid var(--border)" }}
          >
            <div className="flex items-start gap-2 mb-3">
              <AlertTriangle size={16} className="shrink-0 mt-0.5" style={{ color: "var(--primary)" }} />
              <h3 className="font-bold text-base leading-snug">{panne.symptome}</h3>
            </div>
            <p className="text-sm leading-relaxed flex items-start gap-2" style={{ color: "var(--foreground-subtle)" }}>
              <ArrowRight size={13} className="shrink-0 mt-1 opacity-50" />
              <span>{panne.cause}</span>
            </p>
          </m.div>
        ))}
      </div>
    </section>
  );
}
