"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { HiChevronDown } from "react-icons/hi2";

export default function SerrurerieFAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "Combien coûte l'ouverture d'une porte claquée ?",
            answer: "Le tarif pour une ouverture de porte est annoncé directement par téléphone selon votre situation (type de serrure, heure d'intervention). Aucun frais caché, le prix convenu au téléphone est celui que vous paierez."
        },
        {
            question: "Peut-on ouvrir une porte sans casser la serrure ?",
            answer: "Pour une porte simplement claquée, oui ! J'utilise des techniques d'ouverture fine qui préservent la serrure. En revanche, en cas de perte de clé, clé cassée dans le cylindre ou clé bloquée, le remplacement de la serrure est nécessaire. Je vous informe toujours du tarif avant d'intervenir."
        },
        {
            question: "Proposez-vous le service de reproduction de clés ?",
            answer: "Oui, je propose la reproduction de clés toutes marques ainsi que la copie de badges d'immeuble en partenariat avec un fournisseur de confiance. Le service est rapide et les clés sont garanties."
        },
        {
            question: "Qu'est-ce qu'une serrure A2P ?",
            answer: "La certification A2P (Assurance Prévention Protection) garantit la résistance de la serrure aux tentatives d'effraction. Elle est classée en 3 niveaux (A2P*, A2P**, A2P***) selon le temps de résistance. C'est souvent exigé par les assurances pour les logements."
        },
        {
            question: "Intervenez-vous pour les volets roulants bloqués ?",
            answer: "Oui, j'interviens sur tous types de volets roulants (acier, aluminium, PVC). Je peux débloquer, réparer ou remplacer le mécanisme, motoriser vos volets manuels et effectuer tous réglages nécessaires."
        },
        {
            question: "Puis-je faire installer une serrure multipoints sur ma porte actuelle ?",
            answer: "Dans la plupart des cas oui, à condition que votre porte soit en bon état et suffisamment épaisse. Je me déplace pour évaluer la faisabilité et vous proposer la solution la plus adaptée à votre porte et votre budget."
        }
    ];

    return (
        <div className="mb-32">
            <div className="text-center mb-16 px-6">
                <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase italic tracking-tighter">
                    Questions <span className="text-primary italic">Fréquentes</span>
                </h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                    Vous avez des questions ? Retrouvez ici les réponses aux interrogations les plus courantes sur mes services de serrurerie.
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
                        className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-primary/30 transition-colors"
                    >
                        <button
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            className="w-full px-6 md:px-8 py-6 flex items-center justify-between gap-4 text-left group"
                        >
                            <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-primary transition-colors">
                                {faq.question}
                            </h3>
                            <motion.div
                                animate={{ rotate: openIndex === index ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="shrink-0"
                            >
                                <HiChevronDown className="w-6 h-6 text-primary" />
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
                                        <div className="w-full h-px bg-gradient-to-r from-primary/50 via-primary/20 to-transparent mb-4" />
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
                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary/10 text-primary border border-primary/30 rounded-full font-bold hover:bg-primary hover:text-background transition-all hover:scale-105"
                >
                    Contactez-moi directement
                </a>
            </div>
        </div>
    );
}
