"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, Eye, FileText } from "lucide-react";

export default function PrivacyPolicyPage() {
    const sections = [
        {
            icon: <ShieldCheck className="w-6 h-6 text-primary" />,
            title: "Collecte des données",
            content: "Nous collectons uniquement les informations nécessaires pour vous fournir nos services. Pour la newsletter, cela se limite à votre adresse e-mail."
        },
        {
            icon: <Eye className="w-6 h-6 text-primary" />,
            title: "Utilisation des données",
            content: "Vos données sont utilisées exclusivement pour vous envoyer nos conseils techniques, astuces de sécurité et offres commerciales PRODIGELEC."
        },
        {
            icon: <Lock className="w-6 h-6 text-primary" />,
            title: "Protection des données",
            content: "Nous mettons en œuvre des mesures de sécurité rigoureuses pour protéger vos informations contre tout accès non autorisé."
        },
        {
            icon: <FileText className="w-6 h-6 text-primary" />,
            title: "Vos droits",
            content: "Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Vous pouvez vous désinscrire à tout moment via le lien présent dans nos e-mails."
        }
    ];

    return (
        <main className="min-h-screen bg-background pt-32 pb-20">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
                        Politique de <br />
                        <span className="text-primary italic">Confidentialité</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Chez PRODIGELEC, la protection de vos données personnelles est une priorité. Voici comment nous traitons vos informations.
                    </p>
                </motion.div>

                <div className="grid gap-8">
                    {sections.map((section, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm"
                        >
                            <div className="flex items-start gap-6">
                                <div className="p-3 bg-primary/10 rounded-xl ring-1 ring-primary/20">
                                    {section.icon}
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-white mb-3">{section.title}</h2>
                                    <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                                        {section.content}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-16 p-8 border border-primary/10 rounded-3xl bg-primary/5 text-center"
                >
                    <p className="text-gray-300 text-sm mb-6">
                        Pour toute question concernant vos données, vous pouvez nous contacter directement.
                    </p>
                    <a href="mailto:contact@prodigelec.fr" className="text-primary font-bold hover:underline">
                        contact@prodigelec.fr
                    </a>
                </motion.div>
            </div>
        </main>
    );
}
