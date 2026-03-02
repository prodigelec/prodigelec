"use client";
// v2
import { m } from "framer-motion";
import { MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

function FilledStar({ className = "" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#c9a227"
        stroke="#c9a227"
        strokeWidth="0.5"
        d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
      />
    </svg>
  );
}

const FALLBACK_TESTIMONIALS = [
  {
    id: 1,
    name: "Sophie M.",
    location: "Dreux",
    rating: 5,
    text: "Intervention très rapide pour une panne de courant totale. L'électricien a été ponctuel, très professionnel et a pris le temps d'expliquer le problème. Je recommande vivement !",
    date: "Il y a 2 semaines",
    profilePhoto: null,
  },
  {
    id: 2,
    name: "Pierre L.",
    location: "Chartres",
    rating: 5,
    text: "Serrure bloquée un dimanche matin... Arrivé en 30 minutes comme annoncé. Le prix était clair dès le départ, pas de mauvaise surprise. Travail propre et soigné.",
    date: "Il y a 1 mois",
    profilePhoto: null,
  },
  {
    id: 3,
    name: "Marie & Thomas",
    location: "Broué",
    rating: 4,
    text: "Nous avons fait appel à Prodigelec pour la rénovation de notre tableau électrique. Excellent travail. Un artisan de confiance.",
    date: "Il y a 3 semaines",
    profilePhoto: null,
  },
];

export default function Testimonials() {
  const googleReviewLink = process.env.NEXT_PUBLIC_GOOGLE_REVIEW_URL ?? "https://g.page/r/Cc7ec3hVcz95EBM/review";
  const [testimonials, setTestimonials] = useState(FALLBACK_TESTIMONIALS);

  useEffect(() => {
    fetch("/api/reviews")
      .then((r) => r.json())
      .then(({ reviews }) => {
        if (reviews?.length > 0) setTestimonials(reviews);
      })
      .catch(() => {});
  }, []);

  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Fond décoratif */}
      <div className="absolute inset-0 bg-primary/5 -skew-y-3 transform origin-top-left scale-110" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium"
          >
            <FilledStar className="w-4 h-4" />
            <span>Avis Clients Vérifiés</span>
          </m.div>

          <m.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-white"
          >
            Ce qu&apos;ils pensent de <span className="text-primary">PRODIGELEC</span>
          </m.h2>

          <m.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            La satisfaction de mes clients est ma meilleure carte de visite.
            Transparence, qualité et propreté sont mes engagements au quotidien.
          </m.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <m.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              className="group relative flex flex-col h-full overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-white/[0.07] to-white/2 backdrop-blur-sm transition-all duration-500 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
            >
              {/* Barre accent haut */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-linear-to-r from-transparent via-primary/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Halo glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-primary/15 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Guillemet décoratif */}
              <div className="pointer-events-none select-none absolute right-5 top-5 font-serif text-[80px] leading-none text-primary/10 transition-colors duration-500 group-hover:text-primary/20">
                &ldquo;
              </div>

              <div className="relative z-10 flex flex-col flex-1 p-6">
                {/* Stars + Date */}
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <FilledStar
                        key={i}
                        className="h-4 w-4 drop-shadow-[0_0_5px_rgba(201,162,39,0.7)]"
                      />
                    ))}
                  </div>
                  <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-white/40">
                    {testimonial.date}
                  </span>
                </div>

                {/* Texte */}
                <p className="mb-6 min-h-[96px] max-h-[96px] overflow-hidden text-[15px] leading-relaxed text-gray-300 line-clamp-4">
                  {testimonial.text}
                </p>

                {/* Séparateur dégradé */}
                <div className="mt-auto mb-5 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

                {/* Footer : Avatar + Nom + Google */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-3">
                    {/* Avatar : photo Google ou initiale */}
                    {testimonial.profilePhoto ? (
                      <Image
                        src={testimonial.profilePhoto}
                        alt={testimonial.name}
                        width={36}
                        height={36}
                        className="h-9 w-9 shrink-0 rounded-full ring-1 ring-primary/30 object-cover"
                      />
                    ) : (
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-primary/40 to-primary/10 text-sm font-black text-primary ring-1 ring-primary/30">
                        {testimonial.name.charAt(0)}
                      </div>
                    )}
                    <div className="min-w-0">
                      <div className="truncate text-sm font-bold text-white">{testimonial.name}</div>
                      {testimonial.location && (
                        <div className="mt-0.5 flex items-center gap-1 text-xs text-white/40">
                          <MapPin className="h-3 w-3 shrink-0" />
                          <span className="truncate">{testimonial.location}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Badge Google */}
                  <div className="shrink-0 flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1">
                    <img
                      src="/google-logo.svg"
                      alt="Google"
                      className="h-3 w-3"
                      onError={(e) => { e.target.style.display = "none"; }}
                    />
                    <span className="text-[11px] font-semibold text-white/40">Google</span>
                  </div>
                </div>
              </div>
            </m.div>
          ))}
        </div>

        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <a
            href={googleReviewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-background font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-lg shadow-white/10 group"
          >
            <img src="/google-logo.svg" alt="Google" className="w-6 h-6" onError={(e) => e.target.style.display = "none"} />
            <span className="group-hover:translate-x-1 transition-transform">
              Lire plus d&apos;avis ou laisser le vôtre
            </span>
            <FilledStar className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          </a>
          <p className="mt-4 text-sm text-gray-500">
            Votre avis compte ! Scannez le QR Code ou cliquez sur le bouton pour partager votre expérience.
          </p>
        </m.div>
      </div>
    </section>
  );
}
