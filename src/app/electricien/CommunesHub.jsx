"use client";
import Link from "next/link";
import { m } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import DepartmentGroup from "./DepartmentGroup";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.4, delay: i * 0.08 } }),
};

export default function CommunesHub({ groups, total }) {
  return (
    <main className="min-h-screen bg-background text-foreground pt-20 pb-16 mt-16 md:pt-24 md:mt-16 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <m.header variants={fadeUp} initial="hidden" animate="visible" className="mb-10 md:mb-14">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "var(--primary)" }}>
            Zones d&apos;intervention
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5">
            Électricien en{" "}
            <span style={{ background: "linear-gradient(135deg, #c9a227, #ffd60a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Eure-et-Loir, Eure et Yvelines
            </span>
          </h1>
          <p className="text-sm md:text-base max-w-2xl leading-relaxed" style={{ color: "var(--foreground-subtle)" }}>
            Je suis basé à Broué (28410) et j&apos;interviens dans {total} communes d&apos;Eure-et-Loir,
            de l&apos;Eure et des Yvelines — électricité générale, sécurité électronique et
            automatismes. Le devis est gratuit jusqu&apos;à 30 km de Broué. Choisissez votre
            commune pour voir ce que j&apos;y fais et les chantiers déjà réalisés.
          </p>
        </m.header>

        <m.div
          variants={fadeUp} initial="hidden" animate="visible" custom={1}
          className="flex flex-wrap gap-3 mb-12"
        >
          {groups.map((g) => (
            <a
              key={g.department}
              href={`#${g.code}`}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all hover:brightness-110"
              style={{ background: "var(--card)", border: "1px solid var(--border)" }}
            >
              <MapPin size={14} style={{ color: "var(--primary)" }} />
              {g.department} ({g.code})
              <span style={{ color: "var(--foreground-subtle)" }}>· {g.list.length}</span>
            </a>
          ))}
        </m.div>

        {groups.map((g) => (
          <DepartmentGroup key={g.department} group={g} />
        ))}

        <m.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="mt-14 rounded-3xl p-8 md:p-12 text-center"
          style={{ background: "linear-gradient(135deg, rgba(201,162,39,0.12) 0%, rgba(201,162,39,0.04) 100%)", border: "1px solid rgba(201,162,39,0.25)" }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Votre commune n&apos;est pas dans la liste ?</h2>
          <p className="text-sm mb-8 max-w-md mx-auto" style={{ color: "var(--foreground-subtle)" }}>
            Appelez-moi, je vous dirai si je peux me déplacer chez vous.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm transition-all hover:brightness-110"
            style={{ background: "var(--primary)", color: "var(--background)" }}
          >
            Me contacter <ArrowRight size={16} />
          </Link>
        </m.div>
      </div>
    </main>
  );
}
