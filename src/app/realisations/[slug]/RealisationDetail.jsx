"use client";
import Image from "next/image";
import Link from "next/link";
import { m } from "framer-motion";
import { MapPin, Calendar, ArrowLeft, ArrowRight } from "lucide-react";
import { categoryColors } from "@/app/data/realisations";
import RelatedRealisations from "./RelatedRealisations";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.4, delay: i * 0.08 } }),
};

const SERVICE_PAGES = {
  electricite: { href: "/services/electricite", label: "Électricité générale" },
  securite: { href: "/services/securite", label: "Sécurité électronique" },
  automatismes: { href: "/services/automatismes", label: "Automatismes & motorisations" },
};

export default function RealisationDetail({ realisation: r, citySlug, related, dateLabel }) {
  const cat = categoryColors[r.categorie] ?? categoryColors.electricite;
  const service = SERVICE_PAGES[r.categorie] ?? SERVICE_PAGES.electricite;

  return (
    <main className="min-h-screen bg-background text-foreground pt-20 pb-16 mt-16 md:pt-24 md:mt-16 overflow-x-hidden">
      <article className="max-w-4xl mx-auto px-6">

        <m.div variants={fadeUp} initial="hidden" animate="visible" className="mb-8">
          <Link
            href="/realisations"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:brightness-125"
            style={{ color: "var(--primary)" }}
          >
            <ArrowLeft size={16} /> Toutes les réalisations
          </Link>
        </m.div>

        <m.header variants={fadeUp} initial="hidden" animate="visible" custom={1} className="mb-8">
          <div
            className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4"
            style={{ background: cat.bg, border: `1px solid ${cat.border}`, color: cat.text }}
          >
            {cat.label}
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">{r.titre}</h1>
          <div className="flex flex-wrap items-center gap-4 text-sm" style={{ color: "var(--foreground-subtle)" }}>
            <span className="flex items-center gap-1.5">
              <MapPin size={14} style={{ color: "var(--primary)" }} />
              {r.ville} — {r.departement} ({r.departementCode})
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              {dateLabel}
            </span>
          </div>
        </m.header>

        <m.div
          variants={fadeUp} initial="hidden" animate="visible" custom={2}
          className="relative w-full aspect-[3/2] rounded-2xl overflow-hidden mb-8"
          style={{ border: "1px solid var(--border)" }}
        >
          <Image
            src={r.image}
            alt={r.imageAlt}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 896px) 100vw, 896px"
          />
        </m.div>

        <m.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-10">
          <h2 className="text-xl font-bold mb-3">Le chantier</h2>
          <p className="text-base leading-relaxed" style={{ color: "var(--foreground-subtle)" }}>
            {r.description}
          </p>
        </m.section>

        <m.section
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="rounded-2xl p-6 mb-10"
          style={{ background: "var(--card)", border: "1px solid var(--border)" }}
        >
          <h2 className="text-lg font-bold mb-4">Intervention</h2>
          <dl className="grid sm:grid-cols-2 gap-4 text-sm">
            <div>
              <dt className="font-semibold mb-1">Commune</dt>
              <dd style={{ color: "var(--foreground-subtle)" }}>
                {citySlug ? (
                  <Link href={`/electricien/${citySlug}`} className="underline underline-offset-2 hover:text-primary transition-colors">
                    Électricien à {r.ville} ({r.departementCode})
                  </Link>
                ) : (
                  `${r.ville} (${r.departementCode})`
                )}
              </dd>
            </div>
            <div>
              <dt className="font-semibold mb-1">Prestation</dt>
              <dd style={{ color: "var(--foreground-subtle)" }}>
                <Link href={service.href} className="underline underline-offset-2 hover:text-primary transition-colors">
                  {service.label}
                </Link>
              </dd>
            </div>
            <div>
              <dt className="font-semibold mb-1">Département</dt>
              <dd style={{ color: "var(--foreground-subtle)" }}>{r.departement} ({r.departementCode})</dd>
            </div>
            <div>
              <dt className="font-semibold mb-1">Date</dt>
              <dd style={{ color: "var(--foreground-subtle)" }}>{dateLabel}</dd>
            </div>
          </dl>
        </m.section>

        <RelatedRealisations items={related} />

        <m.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="mt-12 rounded-3xl p-8 md:p-10 text-center"
          style={{ background: "linear-gradient(135deg, rgba(201,162,39,0.12) 0%, rgba(201,162,39,0.04) 100%)", border: "1px solid rgba(201,162,39,0.25)" }}
        >
          <h2 className="text-2xl font-bold mb-3">Un chantier similaire chez vous ?</h2>
          <p className="text-sm mb-8 max-w-md mx-auto" style={{ color: "var(--foreground-subtle)" }}>
            J&apos;interviens à {r.ville} et dans un rayon de 30 km autour de Broué. Devis gratuit.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm transition-all hover:brightness-110"
            style={{ background: "var(--primary)", color: "var(--background)" }}
          >
            Demander un devis <ArrowRight size={16} />
          </Link>
        </m.div>
      </article>
    </main>
  );
}
