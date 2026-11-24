"use client";
import { m } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { fadeUp } from "./motion";

export default function BrandInterventions({ brand }) {
  return (
    <section className="max-w-7xl mx-auto px-6 mb-10 md:mb-20">
      <m.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-8">
        <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "var(--primary)" }}>
          Prestations
        </p>
        <h2 className="text-3xl font-bold">
          Ce que je fais sur le matériel{" "}
          <span style={{ color: "var(--primary)" }}>{brand.name}</span>
        </h2>
      </m.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {brand.interventions.map((item, i) => (
          <m.div
            key={item.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            className="rounded-2xl p-5 flex flex-col gap-3"
            style={{ background: "var(--card)", border: "1px solid var(--border)" }}
          >
            <div className="flex items-start gap-2">
              <CheckCircle size={16} className="shrink-0 mt-1" style={{ color: "var(--primary)" }} />
              <h3 className="font-bold text-base leading-snug">{item.title}</h3>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "var(--foreground-subtle)" }}>
              {item.description}
            </p>
          </m.div>
        ))}
      </div>
    </section>
  );
}
