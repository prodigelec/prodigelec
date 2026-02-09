"use client";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export default function ContactCTASection() {
  return (
    <section id="contact-cta" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 bg-linear-to-r from-primary/10 to-accent/10" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[140px] animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="bg-gradient-to-b from-white/10 via-white/5 to-black/30 backdrop-blur-xl border border-white/10 ring-1 ring-white/10 rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden relative shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_18px_50px_rgba(0,0,0,0.5)]">

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left Column: Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
                Un projet ? <br />
                <span className="text-primary">
                  Parlons-en dès aujourd&apos;hui.
                </span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
                Que ce soit pour une urgence électrique ou un besoin en serrurerie, je suis à votre écoute pour vous apporter une solution rapide et sur-mesure.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:0638194752"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-background rounded-full font-bold text-lg hover:bg-primary-light transition-colors shadow-lg shadow-primary/30 hover:shadow-primary-light/25 group"
                >
                  <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  <span>06 38 19 47 52</span>
                </a>
                <a
                  href="/public/contact#contact-form"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 text-white border border-white/10 rounded-full font-bold text-lg hover:bg-white/10 transition-colors group"
                >
                  <span>Demander un devis</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-primary" />
                </a>
              </div>
            </motion.div>

            {/* Right Column: Contact Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 gap-6"
            >
              {/* Email Card */}
              <div className="flex items-start gap-6 p-6 rounded-2xl bg-background/50 border border-white/10 ring-1 ring-white/10 hover:border-primary/30 transition-colors group shadow-[inset_0_1px_2px_rgba(255,255,255,0.15)]">
                <div className="p-4 rounded-xl bg-primary/10 text-primary ring-1 ring-white/10 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Email</h3>
                  <p className="text-gray-400 text-sm mb-2">Réponse sous 24h garantie</p>
                  <a href="mailto:contact@prodigelec.fr" className="text-primary hover:text-primary-light transition-colors font-medium">contact@prodigelec.fr</a>
                </div>
              </div>

              {/* Location Card */}
              <div className="flex items-start gap-6 p-6 rounded-2xl bg-background/50 border border-white/10 ring-1 ring-white/10 hover:border-primary/30 transition-colors group shadow-[inset_0_1px_2px_rgba(255,255,255,0.15)]">
                <div className="p-4 rounded-xl bg-primary/10 text-primary ring-1 ring-white/10 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Zone d&apos;intervention</h3>
                  <p className="text-gray-400 text-sm mb-2">Déplacement gratuit &lt; 5km</p>
                  <span className="text-gray-200 font-medium">Chartres, Broué, Dreux, Anet, Nonancourt, Évreux, Ezy-sur-Eure & leurs alentours (28/27)</span>
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
