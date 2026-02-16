"use client";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, ArrowUpRight, Calculator } from "lucide-react";
import dynamic from 'next/dynamic';

const InterventionMap = dynamic(() => import('@/app/components/ui/InterventionMap'), {
  ssr: false,
  loading: () => <div className="h-full w-full bg-white/5 animate-pulse rounded-3xl" />
});

export default function ContactInfo() {
  const contacts = [
    {
      icon: Phone,
      title: "Par Téléphone",
      value: "06 38 19 47 52",
      sub: "Laissez un message si indisponible",
      link: "tel:0638194752",
      gradient: "from-primary/20 to-primary-light/20",
      text: "text-primary"
    },
    {
      icon: Mail,
      title: "Par Email",
      value: "contact@prodigelec.fr",
      sub: "Réponse sous 24h garantie",
      link: "mailto:contact@prodigelec.fr",
      gradient: "from-accent/20 to-accent-glow/20",
      text: "text-accent"
    },
    {
      icon: Clock,
      title: "Horaires d'ouverture",
      value: "Lundi - Vendredi (9h-18h)",
      sub: "Samedi uniquement sur RDV",
      link: null,
      gradient: "from-primary/20 to-primary-dark/20",
      text: "text-primary-light"
    },
    {
      icon: MapPin,
      title: "Adresse",
      value: "10 Rue Georges Bréant",
      sub: "28410 Broué",
      link: "https://waze.com/ul?ll=48.7492,1.5234&navigate=yes&q=10+Rue+Georges+Bréant+28410+Broué",
      gradient: "from-accent/20 to-primary/20",
      text: "text-primary"
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-16">
      {/* Contact Cards Column */}
      <div className="lg:col-span-1 flex flex-col gap-4 md:gap-6">
        {contacts.map((item, idx) => (
          <motion.a
            key={idx}
            href={item.link}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={`relative overflow-hidden p-4 md:p-6 rounded-3xl bg-[#0f172a] border border-white/5 hover:border-white/20 transition-all group flex-1 ${!item.link ? 'cursor-default' : 'cursor-pointer'}`}
          >
            <div className={`absolute top-0 right-0 w-32 h-32 bg-linear-to-br ${item.gradient} rounded-full blur-[60px] -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

            <div className="relative z-10 flex items-center gap-4">
              <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className={`w-6 h-6 ${item.text}`} />
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">{item.title}</h3>
                <div className="text-xs sm:text-sm font-bold text-white truncate">{item.value}</div>
                <div className="text-xs text-gray-500 font-medium truncate">{item.sub}</div>
              </div>

              {item.link && (
                <div className="p-2 rounded-full bg-white/5 text-white opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              )}
            </div>
          </motion.a>
        ))}
      </div>

      {/* Map & Travel Rates Column */}
      <div className="lg:col-span-2 flex flex-col gap-4 md:gap-6">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative h-[550px] md:h-[550px] w-full rounded-3xl overflow-hidden border border-white/10 bg-[#0f172a]"
        >
          <InterventionMap />
        </motion.div>

        {/* Travel Rates Summary Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="p-6 rounded-3xl bg-[#0f172a]/80 backdrop-blur-xl border border-white/10 shadow-2xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Calculator className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="text-white font-bold uppercase tracking-tight leading-none text-base">Tarifs de déplacement</h3>
              <p className="text-gray-500 text-[10px] sm:text-xs font-medium mt-1 uppercase tracking-widest italic">Intervention (27 & 28)</p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: 'Zone 1', sub: '< 10km', price: 'Gratuit', color: '#22c55e' },
              { label: 'Zone 2', sub: '< 30km', price: 'Gratuit', color: '#3b82f6' },
              { label: 'Zone 3', sub: '< 40km', price: '50€*', color: '#f97316' },
              { label: 'Zone 4', sub: '< 60km', price: '70€*', color: '#ef4444' }
            ].map((zone, idx) => (
              <div
                key={idx}
                className="p-3 bg-white/5 rounded-2xl border border-white/5 flex flex-col items-center text-center transition-all hover:bg-white/[0.08]"
              >
                <div className="flex items-center gap-1.5 mb-1.5">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: zone.color }} />
                  <span className="text-gray-400 text-[10px] font-black uppercase tracking-tight">{zone.label}</span>
                </div>
                <div className="text-white font-bold text-lg leading-tight">{zone.price}</div>
                <div className="text-gray-500 text-[9px] font-medium leading-tight">{zone.sub}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-white/5 flex flex-col gap-2">
             <div className="flex items-start gap-2">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <p className="text-[11px] text-gray-300 leading-relaxed">
                  <span className="text-white font-bold">Frais de déplacement offerts</span> jusqu&apos;à 30km autour de Broué.
                </p>
             </div>
             <div className="flex items-start gap-2">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <p className="text-[11px] text-gray-300 leading-relaxed">
                  <span className="text-white font-bold">* Déductibles :</span> Les frais de déplacement (Zone 3 & 4) sont <span className="text-primary font-bold">intégralement déduits</span> de la facture finale si le devis est accepté.
                </p>
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}