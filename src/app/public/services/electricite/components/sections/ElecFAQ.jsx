"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { HiChevronDown } from "react-icons/hi2";

export default function ElecFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Quels sont les tarifs pour un dépannage électrique ?",
      answer:
        "Les tarifs varient selon la nature de l'intervention. Je fournis un devis gratuit avant toute intervention. Si vous acceptez le devis et que j'effectue les travaux, la facturation inclut au minimum 1 heure de main d'œuvre et un déplacement, sans surprise.",
    },
    {
      question: "Intervenez-vous en urgence le week-end ?",
      answer:
        "Oui, j'interviens sur rendez-vous le samedi et en urgence après 19h ainsi que le dimanche pour les pannes nécessitant une intervention immédiate (court-circuit, coupure totale, etc.).",
    },
    {
      question: "Qu'est-ce que la norme NF C 15-100 ?",
      answer:
        "La norme NF C 15-100 régit toutes les installations électriques en France. Elle garantit la sécurité des personnes et des biens. Je m'assure que toutes mes installations respectent cette norme avec protection différentielle 30mA, mise à la terre et tableaux conformes.",
    },
    {
      question: "Quelle est la durée de garantie sur vos interventions ?",
      answer:
        "Pour les travaux de mise en conformité, je garantis 2 ans selon les normes en vigueur. Pour les dépannages, je garantis la main d'œuvre et le matériel installé, mais je ne peux pas garantir contre une nouvelle panne indépendante. Le matériel installé bénéficie de la garantie constructeur (2 à 5 ans selon les équipements).",
    },
    {
      question: "Faut-il couper le courant avant votre arrivée ?",
      answer:
        "Pour une panne totale, le courant est déjà coupé. Pour un problème localisé (prise qui chauffe, disjoncteur qui saute), vous pouvez couper uniquement le circuit concerné par sécurité. Je vous conseillerai par téléphone selon votre situation.",
    },
  ];

  return (
    <div className="mb-32">
      <div className="text-center mb-16 px-6">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase italic tracking-tighter">
          Questions <span className="text-accent italic">Fréquentes</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Vous avez des questions ? Retrouvez ici les réponses aux
          interrogations les plus courantes sur mes services électriques.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-accent/30 transition-colors"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 md:px-8 py-6 flex items-center justify-between gap-4 text-left group"
            >
              <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-accent transition-colors">
                {faq.question}
              </h3>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="shrink-0"
              >
                <HiChevronDown className="w-6 h-6 text-accent" />
              </motion.div>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 md:px-8 pb-6 pt-2">
                    <div className="w-full h-px bg-gradient-to-r from-accent/50 via-accent/20 to-transparent mb-4" />
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12 px-6">
        <p className="text-gray-400 mb-6">
          Vous ne trouvez pas la réponse à votre question ?
        </p>
        <a
          href="tel:0638194752"
          className="inline-flex items-center gap-2 px-8 py-4 bg-accent/10 text-accent border border-accent/30 rounded-full font-bold hover:bg-accent hover:text-background transition-all hover:scale-105"
        >
          Contactez-moi directement
        </a>
      </div>
    </div>
  );
}
