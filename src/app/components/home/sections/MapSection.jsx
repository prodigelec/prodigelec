"use client";
import { m } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";

export default function MapSection() {
  return (
    <section className="py-14 md:py-20 bg-background relative overflow-hidden">
      {/* Blurs décoratifs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[35%] h-[35%] bg-primary/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[35%] h-[35%] bg-accent/6 rounded-full blur-[120px]" />
      </div>

      {/* Séparateur haut */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <m.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-14"
        >
          <p className="text-xs font-semibold text-primary uppercase tracking-[0.3em] mb-3">
            Zone d&apos;intervention
          </p>
          <h2 className="text-xl md:text-2xl font-bold text-white">
            Où intervenons-nous ?
          </h2>
          <div className="mt-4 mx-auto w-16 h-0.5 bg-linear-to-r from-primary/0 via-primary to-primary/0 rounded-full" />
        </m.div>

        {/* Grille : carte + infos */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">

          {/* Carte Google Maps */}
          <m.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 rounded-2xl overflow-hidden border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.45)] min-h-[300px] md:min-h-[380px]"
          >
            <iframe
              title="PRODIGELEC — Localisation Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.84!2d1.5127265!3d48.7627173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40ad536c8e957f6b%3A0x793f73557873dece!2sProdigelec!5e0!3m2!1sfr!2sfr!4v1716890000000!5m2!1sfr!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0, display: "block", minHeight: "340px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </m.div>

          {/* Infos contact */}
          <m.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            {/* Adresse */}
            <div className="flex-1 flex flex-col gap-3 p-6 rounded-2xl bg-linear-to-b from-white/8 via-white/4 to-black/20 border border-white/10 shadow-[inset_0_1px_2px_rgba(255,255,255,0.08),0_8px_24px_rgba(0,0,0,0.3)]">
              <div className="flex items-center gap-3 mb-1">
                <div className="w-8 h-8 rounded-lg bg-primary/15 border border-primary/25 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <span className="text-xs font-semibold text-primary uppercase tracking-widest">Adresse</span>
              </div>
              <p className="text-white font-semibold text-sm leading-relaxed">
                10 Rue Georges Bréant<br />
                28410 Broué
              </p>
              <p className="text-white/40 text-xs">
                Eure-et-Loir (28)
              </p>
            </div>

            {/* Horaires */}
            <div className="flex-1 flex flex-col gap-3 p-6 rounded-2xl bg-linear-to-b from-white/8 via-white/4 to-black/20 border border-white/10 shadow-[inset_0_1px_2px_rgba(255,255,255,0.08),0_8px_24px_rgba(0,0,0,0.3)]">
              <div className="flex items-center gap-3 mb-1">
                <div className="w-8 h-8 rounded-lg bg-primary/15 border border-primary/25 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-primary" />
                </div>
                <span className="text-xs font-semibold text-primary uppercase tracking-widest">Disponibilité</span>
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-white/70 text-sm">Lun – Sam</span>
                  <span className="text-white font-semibold text-sm">24h / 24</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/70 text-sm">Dimanche</span>
                  <span className="text-white/40 text-sm">Répondeur</span>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_6px_rgba(74,222,128,0.8)]" />
                <span className="text-green-400 text-xs font-semibold">Disponible maintenant</span>
              </div>
            </div>

            {/* Zones */}
            <div className="p-5 rounded-2xl bg-linear-to-b from-white/8 via-white/4 to-black/20 border border-white/10 shadow-[inset_0_1px_2px_rgba(255,255,255,0.08),0_8px_24px_rgba(0,0,0,0.3)]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-accent/15 border border-accent/25 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-accent" />
                </div>
                <span className="text-xs font-semibold text-accent uppercase tracking-widest">Zones</span>
              </div>
              <p className="text-white/55 text-xs leading-relaxed">
                Chartres · Dreux · Évreux · Anet · Houdan · Nonancourt · Nogent-le-Roi · Rambouillet · Plaisir
              </p>
              <p className="text-white/35 text-[10px] mt-2 font-medium tracking-wide">
                Eure-et-Loir (28) · Eure (27) · Yvelines (78)
              </p>
            </div>
          </m.div>

        </div>
      </div>
    </section>
  );
}
