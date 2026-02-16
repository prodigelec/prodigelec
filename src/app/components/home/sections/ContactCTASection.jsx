"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export default function ContactCTASection() {
  return (
    <section id="contact-cta" className="pt-12 pb-0 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 bg-linear-to-r from-primary/10 to-accent/10" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[140px] animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 pb-6 md:pb-0">
        <div className="bg-linear-to-b from-white/10 via-white/5 to-black/30 backdrop-blur-xl border border-white/10 ring-1 ring-white/10 rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden relative shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_18px_50px_rgba(0,0,0,0.5)]">

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left Column: Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 md:space-y-8"
            >
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
                Un projet ? <br />
                <span className="text-primary">
                  Parlons-en dès aujourd&apos;hui.
                </span>
              </h2>
              <p className="text-sm md:text-lg text-gray-300 leading-relaxed max-w-xl">
                Que ce soit pour une urgence électrique ou un besoin en serrurerie, je suis à votre écoute pour vous apporter une solution rapide et sur-mesure.
              </p>

              <div className="flex justify-center flex-wrap gap-4">
                <a
                  href="tel:0638194752"
                  className="inline-flex items-center gap-2 px-5 py-3 md:px-8 md:py-4 bg-primary text-background rounded-full font-bold text-sm md:text-lg hover:bg-primary-light transition-colors shadow-lg shadow-primary/30 hover:shadow-primary-light/25 group"
                >
                  <Phone className="w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform" />
                  <span>06 38 19 47 52</span>
                </a>
                <Link
                  href="/contact#contact-form"
                  className="inline-flex items-center gap-2 px-5 py-3 md:px-8 md:py-4 bg-white/10 text-white rounded-full font-bold text-sm md:text-base hover:bg-white/20 transition-colors w-full sm:w-auto justify-center"
                >
                  <span>Demander un devis</span>
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform text-primary" />
                </Link>
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
              <div className="flex flex-col text-center items-center md:flex-row md:text-left md:items-start gap-6 p-6 rounded-2xl bg-background/50 border border-white/10 ring-1 ring-white/10 hover:border-primary/30 transition-colors group shadow-[inset_0_1px_2px_rgba(255,255,255,0.15)]">
                <div className="p-4 rounded-xl bg-primary/10 text-primary ring-1 ring-white/10 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="hidden md:block text-xl font-bold text-white mb-1">Email</h3>
                  <p className="text-gray-400 text-sm mb-2">Réponse sous 24h garantie</p>
                  <a href="mailto:contact@prodigelec.fr" className="text-base md:text-lg text-primary hover:text-primary-light transition-colors font-medium">contact@prodigelec.fr</a>
                </div>
              </div>

              {/* Location Card */}
              <div className="flex flex-col text-center items-center md:flex-row md:text-left md:items-start gap-6 p-6 rounded-2xl bg-background/50 border border-white/10 ring-1 ring-white/10 hover:border-primary/30 transition-colors group shadow-[inset_0_1px_2px_rgba(255,255,255,0.15)]">
                <div className="p-4 rounded-xl bg-primary/10 text-primary ring-1 ring-white/10 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Zone d&apos;intervention</h3>
                  <p className="text-gray-400 text-sm mb-2">Devis gratuit jusqu&apos;à 30km (Zone 2)</p>
                  <span className="text-sm md:text-base text-gray-200 font-medium">Chartres, Broué, Dreux, Anet, Nonancourt, Évreux, Ezy-sur-Eure & leurs alentours (28/27)</span>
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
