"use client";
import Link from "next/link";
import { m } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { getRealisationsByVille } from "@/app/data/realisations";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.35, delay: Math.min(i, 8) * 0.03 } }),
};

export default function DepartmentGroup({ group }) {
  return (
    <section id={group.code} className="mb-12 scroll-mt-32">
      <m.h2
        variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
        className="text-2xl font-bold mb-1"
      >
        {group.department} <span style={{ color: "var(--primary)" }}>({group.code})</span>
      </m.h2>
      <p className="text-sm mb-6" style={{ color: "var(--foreground-subtle)" }}>
        {group.list.length} commune{group.list.length > 1 ? "s" : ""} desservie{group.list.length > 1 ? "s" : ""}
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {group.list.map((city, i) => {
          const chantiers = getRealisationsByVille(city.name);
          return (
            <m.div key={city.slug} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}>
              <Link
                href={`/electricien/${city.slug}`}
                className="group flex flex-col justify-between h-full gap-2 px-4 py-3 rounded-xl transition-all hover:scale-[1.02]"
                style={{ background: "var(--card)", border: "1px solid var(--border)" }}
              >
                <span className="flex items-start justify-between gap-2">
                  <span className="flex flex-col leading-tight">
                    <span className="text-white font-semibold text-sm group-hover:text-primary transition-colors">
                      {city.name}
                    </span>
                    <span className="text-xs" style={{ color: "var(--foreground-subtle)" }}>
                      {city.postalCode} · {city.distance} km
                    </span>
                  </span>
                  <ArrowRight
                    size={13}
                    className="shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: "var(--primary)" }}
                  />
                </span>

                {/* Signale les communes où il y a déjà des photos de chantier :
                    c'est ce qui distingue une page ville nourrie d'une autre. */}
                {chantiers.length > 0 && (
                  <span
                    className="self-start px-2 py-0.5 rounded-full text-[11px] font-bold"
                    style={{ background: "rgba(201,162,39,0.12)", border: "1px solid rgba(201,162,39,0.35)", color: "var(--primary)" }}
                  >
                    {chantiers.length} chantier{chantiers.length > 1 ? "s" : ""}
                  </span>
                )}
              </Link>
            </m.div>
          );
        })}
      </div>
    </section>
  );
}
