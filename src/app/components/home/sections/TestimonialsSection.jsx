"use client";
import { m } from "framer-motion";
import { Star, Quote, MapPin } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sophie M.",
    location: "Dreux",
    rating: 5,
    text: "Intervention très rapide pour une panne de courant totale. L'électricien a été ponctuel, très professionnel et a pris le temps d'expliquer le problème. Je recommande vivement !",
    date: "Il y a 2 semaines"
  },
  {
    id: 2,
    name: "Pierre L.",
    location: "Chartres",
    rating: 5,
    text: "Serrure bloquée un dimanche matin... Arrivé en 30 minutes comme annoncé. Le prix était clair dès le départ, pas de mauvaise surprise. Travail propre et soigné.",
    date: "Il y a 1 mois"
  },
  {
    id: 3,
    name: "Marie & Thomas",
    location: "Broué",
    rating: 5,
    text: "Nous avons fait appel à Prodigelec pour la rénovation de notre tableau électrique. Excellent travail, chantier laissé impeccable chaque soir. Un artisan de confiance.",
    date: "Il y a 3 semaines"
  }
];

export default function TestimonialsSection() {
  const googleReviewLink = "https://g.page/r/Cc7ec3hVcz95EBM/review";

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
            <Star className="w-4 h-4 fill-primary" />
            <span>Avis Clients Vérifiés</span>
          </m.div>
          
          <m.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-white"
          >
            Ce qu'ils pensent de <span className="text-primary">PRODIGELEC</span>
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
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <m.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:border-primary/30 transition-all group relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-white/5 group-hover:text-primary/10 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                ))}
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed italic relative z-10">
                "{testimonial.text}"
              </p>

              <div className="flex items-center justify-between pt-6 border-t border-white/10">
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3" />
                    {testimonial.location}
                  </div>
                </div>
                <div className="text-xs text-gray-600 font-medium px-2 py-1 rounded bg-white/5">
                  {testimonial.date}
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
            <img src="/google-logo.svg" alt="Google" className="w-6 h-6" onError={(e) => e.target.style.display = 'none'} /> 
            <span className="group-hover:translate-x-1 transition-transform">
              Lire plus d'avis ou laisser le vôtre
            </span>
            <Star className="w-5 h-5 text-primary fill-primary group-hover:rotate-12 transition-transform" />
          </a>
          <p className="mt-4 text-sm text-gray-500">
            Votre avis compte ! Scannez le QR Code ou cliquez sur le bouton pour partager votre expérience.
          </p>
        </m.div>
      </div>
    </section>
  );
}
