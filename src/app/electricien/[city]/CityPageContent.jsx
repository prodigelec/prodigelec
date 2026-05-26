"use client";
import Link from "next/link";
import Image from "next/image";
import { m } from "framer-motion";
import { Phone, MapPin, Zap, Shield, Settings, CheckCircle, ArrowRight, Clock } from "lucide-react";
import { getCityByName } from "@/app/data/cities";
import CityFaq from "./CityFaq";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
};

const services = [
  {
    icon: Zap,
    title: "Électricité Générale",
    image: "/img_carousel_hero_home/tableau-electrique.optimized.jpg",
    items: ["Dépannage & mise aux normes NF C 15-100", "Tableau électrique & disjoncteurs", "Éclairage LED & domotique", "VMC & chauffage électrique"],
    href: "/services/electricite",
    color: "#ffc107",
  },
  {
    icon: Shield,
    title: "Sécurité Électronique",
    image: "/img_carousel_securite_page/videophonie_digicode.jpg",
    items: ["Digicode & contrôle d'accès", "Vidéophonie & visiophone", "Alarme & détection intrusion", "Caméras & vidéosurveillance HD"],
    href: "/services/securite",
    color: "#c9a227",
  },
  {
    icon: Settings,
    title: "Automatismes",
    image: "/img_carousel_hero_home/Volet_Battant.avif",
    items: ["Motorisation volets roulants & battants", "Portails automatiques", "Portes de garage sectionnelles", "Domotique Somfy & pilotage smartphone"],
    href: "/services/automatismes",
    color: "#c9a227",
  },
];

const trustPoints = [
  "23 ans d'expérience terrain",
  "Devis gratuit & transparent",
  "Matériel garanti 2 à 5 ans",
  "Intervention rapide",
  "Artisan indépendant & réactif",
  "Tarifs annoncés avant intervention",
];

function NearbyList({ nearby, color }) {
  return nearby.map((name, i) => {
    const linked = getCityByName(name);
    return (
      <span key={name}>
        {i > 0 && ", "}
        {linked ? (
          <Link
            href={`/electricien/${linked.slug}`}
            className="font-medium underline underline-offset-2 hover:opacity-80 transition-opacity"
            style={{ color: color ?? "white" }}
          >
            {name}
          </Link>
        ) : (
          <span className="text-white font-medium">{name}</span>
        )}
      </span>
    );
  });
}

export default function CityPageContent({ city }) {
  const stats = [
    { value: "23 ans", label: "d'expérience" },
    { value: "3", label: "expertises" },
    { value: `${city.distance} km`, label: city.freeZone ? "devis gratuit" : "depuis Broué" },
    { value: city.departmentCode, label: city.department },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground pt-20 pb-8 mt-16 md:pt-24 md:pb-20 md:mt-16 overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative max-w-7xl mx-auto px-6 mb-10 md:mb-20">
        <div
          className="absolute -top-20 -left-20 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{ background: "var(--primary)" }}
        />

        <div className="relative grid lg:grid-cols-2 gap-10 items-center">
          {/* Texte */}
          <div>
            <m.p
              variants={fadeUp} initial="hidden" animate="visible" custom={0}
              className="text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: "var(--primary)" }}
            >
              Artisan électricien — {city.department} ({city.departmentCode})
            </m.p>

            <m.h1
              variants={fadeUp} initial="hidden" animate="visible" custom={1}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
            >
              Électricien &amp;<br />
              Sécurité à{" "}
              <span style={{ background: "linear-gradient(135deg, #c9a227, #ffd60a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                {city.name}
              </span>
            </m.h1>

            <m.p
              variants={fadeUp} initial="hidden" animate="visible" custom={2}
              className="text-base md:text-lg leading-relaxed mb-8"
              style={{ color: "var(--foreground-subtle)" }}
            >
              {city.description}
            </m.p>

            <m.div
              variants={fadeUp} initial="hidden" animate="visible" custom={3}
              className="flex flex-wrap gap-3 mb-8"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:brightness-110"
                style={{ background: "var(--primary)", color: "var(--background)", boxShadow: "0 4px 24px rgba(201,162,39,0.3)" }}
              >
                Devis gratuit <ArrowRight size={16} />
              </Link>
              <a
                href="tel:+33638194752"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:bg-white/10"
                style={{ border: "1px solid rgba(255,255,255,0.15)", color: "var(--foreground)" }}
              >
                <Phone size={15} className="shrink-0" /> 06 38 19 47 52
              </a>
            </m.div>

            <m.div
              variants={fadeUp} initial="hidden" animate="visible" custom={4}
              className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3"
            >
              {stats.map((stat, i) => (
                <div key={i} className="rounded-2xl p-4 flex flex-col gap-1" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
                  <span className="text-xl font-extrabold" style={{ color: "var(--primary)" }}>{stat.value}</span>
                  <span className="text-xs" style={{ color: "var(--foreground-subtle)" }}>{stat.label}</span>
                </div>
              ))}
            </m.div>
          </div>

          {/* Image hero — photo de la ville */}
          <m.div
            variants={fadeUp} initial="hidden" animate="visible" custom={2}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
              <Image
                src={city.photo}
                alt={city.photoAlt || `Intervention PRODIGELEC à ${city.name} — électricien & sécurité`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 0px, 50vw"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 50%, rgba(11,26,42,0.8) 100%)" }} />
              {city.freeZone && (
                <div
                  className="absolute bottom-4 left-4 right-4 flex items-center gap-2 px-4 py-3 rounded-2xl text-sm font-bold"
                  style={{ background: "rgba(201,162,39,0.15)", backdropFilter: "blur(12px)", border: "1px solid rgba(201,162,39,0.4)", color: "var(--primary)" }}
                >
                  <CheckCircle size={16} />
                  Devis gratuit à {city.name}
                </div>
              )}
            </div>
          </m.div>
        </div>
      </section>

      {/* ── CONTEXTE LOCAL ── */}
      <section className="max-w-7xl mx-auto px-6 mb-10 md:mb-20">
        <m.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="rounded-2xl p-6 md:p-8 grid md:grid-cols-[auto_1fr] gap-4 items-start"
          style={{ background: "var(--card)", border: "1px solid var(--border)" }}
        >
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: "rgba(201,162,39,0.12)", border: "1px solid rgba(201,162,39,0.3)" }}
          >
            <MapPin size={20} style={{ color: "var(--primary)" }} />
          </div>
          <div>
            <p className="font-bold mb-2 text-base">
              Pourquoi j&apos;interviens à <span style={{ color: "var(--primary)" }}>{city.name}</span>
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--foreground-subtle)" }}>
              {city.localContext}
            </p>
            {city.freeZone ? (
              <p className="mt-3 text-sm font-medium" style={{ color: "var(--primary)" }}>
                Déplacement inclus dans le devis — aucun frais caché.
              </p>
            ) : (
              <p className="mt-3 text-sm" style={{ color: "var(--foreground-subtle)" }}>
                Déplacement facturé — tarif annoncé avant toute intervention.
              </p>
            )}
          </div>
        </m.div>
      </section>

      {/* ── SERVICES ── */}
      <section className="max-w-7xl mx-auto px-6 mb-10 md:mb-20">
        <m.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-10">
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "var(--primary)" }}>Prestations</p>
          <h2 className="text-3xl font-bold">
            Ce que je fais à <span style={{ color: "var(--primary)" }}>{city.name}</span>
          </h2>
        </m.div>

        <div className="grid md:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <m.div key={s.href} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}>
                <Link
                  href={s.href}
                  className="group flex flex-col h-full rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                  style={{ background: "var(--card)", border: "1px solid var(--border)" }}
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 30%, rgba(11,26,42,0.9) 100%)" }} />
                    <div
                      className="absolute bottom-3 left-4 w-9 h-9 rounded-xl flex items-center justify-center"
                      style={{ background: `${s.color}25`, border: `1px solid ${s.color}50` }}
                    >
                      <Icon size={18} style={{ color: s.color }} />
                    </div>
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-bold text-base mb-3">{s.title}</h3>
                    <ul className="space-y-2 flex-1">
                      {s.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "var(--foreground-subtle)" }}>
                          <CheckCircle size={13} className="shrink-0 mt-0.5" style={{ color: s.color }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-4 text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all" style={{ color: s.color }}>
                      En savoir plus <ArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              </m.div>
            );
          })}
        </div>
      </section>

      {/* ── CONFIANCE ── */}
      <section className="max-w-7xl mx-auto px-6 mb-10 md:mb-20">
        <div
          className="rounded-3xl p-8 md:p-10 grid md:grid-cols-2 gap-8 items-center"
          style={{ background: "linear-gradient(135deg, #0d1f32 0%, #112438 100%)", border: "1px solid var(--border)" }}
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "var(--primary)" }}>Pourquoi me choisir</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Un artisan de confiance<br />près de <span style={{ color: "var(--primary)" }}>{city.name}</span>
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "var(--foreground-subtle)" }}>
              Basé à Broué (28410), j&apos;interviens à {city.name} et dans toutes les communes voisines :{" "}
              <NearbyList nearby={city.nearby} />.{" "}
              {city.freeZone ? "Le déplacement pour le devis est 100% gratuit." : "Déplacement facturé — tarif annoncé avant intervention."}
            </p>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {trustPoints.map((point) => (
              <li
                key={point}
                className="flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-xl"
                style={{ background: "rgba(201,162,39,0.08)", color: "var(--foreground-muted)" }}
              >
                <CheckCircle size={14} style={{ color: "var(--primary)", flexShrink: 0 }} />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── ZONE ── */}
      <section className="max-w-7xl mx-auto px-6 mb-10 md:mb-20">
        <div className="flex items-start gap-3 rounded-2xl p-6" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
          <Clock size={20} className="shrink-0 mt-0.5" style={{ color: "var(--primary)" }} />
          <div>
            <p className="font-bold mb-1">Zone d&apos;intervention — {city.name} &amp; environs</p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--foreground-subtle)" }}>
              J&apos;interviens à <strong className="text-white">{city.name}</strong>, <NearbyList nearby={city.nearby} /> et leurs communes voisines.
              Eure-et-Loir (28), Eure (27) et Yvelines (78).
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <CityFaq city={city} />

      {/* ── CTA ── */}
      <section className="max-w-7xl mx-auto px-6">
        <m.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="rounded-3xl p-8 md:p-12 text-center"
          style={{ background: "linear-gradient(135deg, rgba(201,162,39,0.12) 0%, rgba(201,162,39,0.04) 100%)", border: "1px solid rgba(201,162,39,0.25)" }}
        >
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "var(--primary)" }}>
            {city.freeZone ? "Devis 100% gratuit" : "Contactez-moi"}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Un projet ou une urgence à {city.name} ?
          </h2>
          <p className="text-sm mb-8 max-w-md mx-auto" style={{ color: "var(--foreground-subtle)" }}>
            Réponse rapide garantie. Tarifs annoncés avant toute intervention.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-sm transition-all hover:brightness-110"
              style={{ background: "var(--primary)", color: "var(--background)" }}
            >
              Demander un devis gratuit <ArrowRight size={16} />
            </Link>
            <a
              href="tel:+33638194752"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-sm transition-all hover:bg-white/10"
              style={{ border: "1px solid rgba(255,255,255,0.2)", color: "var(--foreground)" }}
            >
              <Phone size={15} /> 06 38 19 47 52
            </a>
          </div>
        </m.div>
      </section>

    </main>
  );
}
