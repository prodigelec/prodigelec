"use client";
import { m } from "framer-motion";
import { Layers } from "lucide-react";
import { fadeUp } from "./motion";

export default function BrandGammes({ brand }) {
  return (
    <section className="max-w-7xl mx-auto px-6 mb-10 md:mb-20">
      <m.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-8">
        <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "var(--primary)" }}>
          Gammes rencontrées
        </p>
        <h2 className="text-3xl font-bold">
          Les modèles <span style={{ color: "var(--primary)" }}>{brand.name}</span> sur le terrain
        </h2>
      </m.div>

      <div className="grid md:grid-cols-2 gap-4">
        {brand.gammes.map((gamme, i) => (
          <m.div
            key={gamme.name}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            className="rounded-2xl p-5 grid grid-cols-[auto_1fr] gap-4 items-start"
            style={{ background: "var(--card)", border: "1px solid var(--border)" }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: "rgba(201,162,39,0.12)", border: "1px solid rgba(201,162,39,0.3)" }}
            >
              <Layers size={18} style={{ color: "var(--primary)" }} />
            </div>
            <div>
              <h3 className="font-bold text-base mb-1.5">{gamme.name}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--foreground-subtle)" }}>
                {gamme.description}
              </p>
            </div>
          </m.div>
        ))}
      </div>
    </section>
  );
}
