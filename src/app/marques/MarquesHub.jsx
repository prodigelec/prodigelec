"use client";
import Link from "next/link";
import { m } from "framer-motion";
import { ArrowRight, Phone, Wrench } from "lucide-react";
import { brandCategories } from "@/app/data/brands";
import { brandPages, getBrandPageSlugByName } from "@/app/data/brandPages";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
};

// Le bandeau de l'accueil affiche ces mêmes marques en `aria-hidden`, sans
// contexte : illisible pour un moteur. Ici chaque marque est du texte réel,
// rattaché à une famille et à une phrase qui explique ce qu'on en fait.
function BrandName({ name }) {
  const slug = getBrandPageSlugByName(name);
  if (!slug) {
    return (
      <span className="px-3 py-1.5 rounded-full text-sm" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid var(--border)", color: "var(--foreground-subtle)" }}>
        {name}
      </span>
    );
  }
  return (
    <Link
      href={`/marques/${slug}`}
      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-bold transition-all hover:brightness-110"
      style={{ background: "rgba(201,162,39,0.12)", border: "1px solid rgba(201,162,39,0.3)", color: "var(--primary)" }}
    >
      {name} <ArrowRight size={11} />
    </Link>
  );
}

export default function MarquesHub() {
  return (
    <main className="min-h-screen bg-background text-foreground pt-20 pb-8 mt-16 md:pt-24 md:pb-20 md:mt-16 overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative max-w-7xl mx-auto px-6 mb-10 md:mb-16">
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none" style={{ background: "var(--primary)" }} />
        <div className="relative max-w-3xl">
          <m.p variants={fadeUp} initial="hidden" animate="visible" custom={0} className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "var(--primary)" }}>
            Matériel professionnel
          </m.p>
          <m.h1 variants={fadeUp} initial="hidden" animate="visible" custom={1} className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Les{" "}
            <span style={{ background: "linear-gradient(135deg, #c9a227, #ffd60a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              marques
            </span>{" "}
            que j&apos;installe
          </m.h1>
          <m.p variants={fadeUp} initial="hidden" animate="visible" custom={2} className="text-base md:text-lg leading-relaxed" style={{ color: "var(--foreground-subtle)" }}>
            J&apos;installe, je raccorde et je dépanne le matériel des fabricants ci-dessous — y compris
            les installations que je n&apos;ai pas posées. Aucune marque n&apos;est imposée : le choix se
            fait selon le besoin du chantier et le budget.
          </m.p>
        </div>
      </section>

      {/* ── MARQUES AVEC PAGE DEDIEE ── */}
      <section className="max-w-7xl mx-auto px-6 mb-10 md:mb-20">
        <m.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-8">
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "var(--primary)" }}>Dépannage spécialisé</p>
          <h2 className="text-3xl font-bold">Les marques que je dépanne le plus</h2>
        </m.div>

        <div className="grid md:grid-cols-3 gap-5">
          {brandPages.map((brand, i) => (
            <m.div key={brand.slug} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}>
              <Link
                href={`/marques/${brand.slug}`}
                className="group flex flex-col h-full rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02]"
                style={{ background: "var(--card)", border: "1px solid var(--border)" }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(201,162,39,0.12)", border: "1px solid rgba(201,162,39,0.3)" }}>
                  <Wrench size={18} style={{ color: "var(--primary)" }} />
                </div>
                <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "var(--primary)" }}>{brand.category}</p>
                <h3 className="font-extrabold text-2xl mb-2">{brand.name}</h3>
                <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--foreground-subtle)" }}>{brand.tagline}</p>
                <span className="mt-4 text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all" style={{ color: "var(--primary)" }}>
                  Voir la page {brand.name} <ArrowRight size={12} />
                </span>
              </Link>
            </m.div>
          ))}
        </div>
      </section>

      {/* ── TOUTES LES MARQUES PAR FAMILLE ── */}
      <section className="max-w-7xl mx-auto px-6 mb-10 md:mb-20">
        <m.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-8">
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "var(--primary)" }}>Catalogue complet</p>
          <h2 className="text-3xl font-bold">Toutes les marques, par famille</h2>
        </m.div>

        <div className="space-y-5">
          {brandCategories.map((cat, i) => (
            <m.div
              key={cat.name}
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
              className="rounded-2xl p-6"
              style={{ background: "var(--card)", border: "1px solid var(--border)" }}
            >
              <h3 className="font-bold text-lg mb-1">{cat.name}</h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--foreground-subtle)" }}>{cat.summary}</p>
              <div className="flex flex-wrap gap-2">
                {cat.brands.map((name) => (
                  <BrandName key={`${cat.name}-${name}`} name={name} />
                ))}
              </div>
            </m.div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="max-w-7xl mx-auto px-6">
        <m.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="rounded-3xl p-8 md:p-12 text-center"
          style={{ background: "linear-gradient(135deg, rgba(201,162,39,0.12) 0%, rgba(201,162,39,0.04) 100%)", border: "1px solid rgba(201,162,39,0.25)" }}
        >
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "var(--primary)" }}>Devis gratuit</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Une marque en particulier ?</h2>
          <p className="text-sm mb-8 max-w-md mx-auto" style={{ color: "var(--foreground-subtle)" }}>
            Dites-moi le matériel que vous avez ou celui que vous souhaitez, je vous oriente sans engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-sm transition-all hover:brightness-110" style={{ background: "var(--primary)", color: "var(--background)" }}>
              Demander un devis gratuit <ArrowRight size={16} />
            </Link>
            <a href="tel:+33638194752" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-sm transition-all hover:bg-white/10" style={{ border: "1px solid rgba(255,255,255,0.2)", color: "var(--foreground)" }}>
              <Phone size={15} /> 06 38 19 47 52
            </a>
          </div>
        </m.div>
      </section>

    </main>
  );
}
