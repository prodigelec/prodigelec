"use client";
import Image from "next/image";
import { m } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.4, delay: i * 0.08 } }),
};

// Galerie optionnelle d'un chantier : `photos` n'existe que sur les
// réalisations qui ont un vrai avant/après à montrer. Sur les autres, la
// section disparaît et la page reste identique à ce qu'elle était.
export default function RealisationGallery({ photos }) {
  if (!photos || photos.length === 0) return null;

  return (
    <m.section
      variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
      className="mb-10"
    >
      <h2 className="text-xl font-bold mb-5">En images</h2>
      <div className="grid gap-5 md:grid-cols-3">
        {photos.map((photo, i) => (
          <m.figure
            key={photo.src}
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
            className="rounded-2xl overflow-hidden flex flex-col"
            style={{ background: "var(--card)", border: "1px solid var(--border)" }}
          >
            {/* Cadre carré + object-contain : les photos de chantier arrivent en
                portrait comme en paysage, et un cadre portrait en object-cover
                amputait les vues de pièce de la moitié de leur largeur. Ici
                rien n'est rogné, seule la lettre-boîte varie. */}
            <div
              className="relative w-full aspect-square"
              style={{ background: "var(--background)" }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                loading="lazy"
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 288px"
              />
            </div>
            <figcaption
              className="p-4 text-sm leading-relaxed"
              style={{ color: "var(--foreground-subtle)" }}
            >
              {photo.legende}
            </figcaption>
          </m.figure>
        ))}
      </div>
    </m.section>
  );
}
