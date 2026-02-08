"use client";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";
import dynamic from 'next/dynamic';

const InterventionMap = dynamic(() => import('@/app/(public)/components/ui/InterventionMap'), {
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
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
      {/* Contact Cards Column */}
      <div className="lg:col-span-1 flex flex-col gap-6">
        {contacts.map((item, idx) => (
          <motion.a
            key={idx}
            href={item.link}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={`relative overflow-hidden p-6 rounded-3xl bg-[#0f172a] border border-white/5 hover:border-white/20 transition-all group flex-1 ${!item.link ? 'cursor-default' : 'cursor-pointer'}`}
          >
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.gradient} rounded-full blur-[60px] -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

            <div className="relative z-10 flex items-center gap-4">
              <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className={`w-6 h-6 ${item.text}`} />
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">{item.title}</h3>
                <div className="text-lg font-bold text-white truncate">{item.value}</div>
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

      {/* Map Column */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="lg:col-span-2 relative h-[400px] lg:h-auto rounded-3xl overflow-hidden border border-white/10 bg-[#0f172a]"
      >
        <InterventionMap />
      </motion.div>
    </div>
  );
}
