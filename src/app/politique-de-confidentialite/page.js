"use client";
import { m } from "framer-motion";
import { ShieldCheck, Lock, Eye, FileText } from "lucide-react";

export default function PrivacyPolicyPage() {
    const sections = [
        {
            icon: <ShieldCheck className="w-6 h-6 text-primary" />,
            title: "Responsable du traitement",
            content: "Le responsable du traitement des données est PRODIGELEC, représenté par son responsable légal, dont le siège social est situé au 10 Rue Georges Bréant, 28410 Broué."
        },
        {
            icon: <Eye className="w-6 h-6 text-primary" />,
            title: "Données collectées & Finalités",
            content: "Nous collectons vos données (Nom, Email, Téléphone) via nos formulaires pour : répondre à vos demandes de devis, assurer le suivi de nos prestations, et vous envoyer notre newsletter si vous y avez consenti. La base légale est l'exécution d'un contrat ou l'intérêt légitime."
        },
        {
            icon: <Lock className="w-6 h-6 text-primary" />,
            title: "Durée de conservation",
            content: "Vos données personnelles sont conservées uniquement pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées : 3 ans pour les prospects (après le dernier contact) et 10 ans pour les clients (obligations comptables/fiscales)."
        },
        {
            icon: <FileText className="w-6 h-6 text-primary" />,
            title: "Vos droits (RGPD)",
            content: "Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, de suppression, de limitation et de portabilité de vos données. Vous pouvez exercer ces droits à tout moment en nous contactant par email."
        },
        {
            icon: <ShieldCheck className="w-6 h-6 text-primary" />,
            title: "Destinataires des données",
            content: "Vos données sont traitées exclusivement par PRODIGELEC. Elles ne sont jamais vendues ou cédées à des tiers. Certains sous-traitants techniques (comme Vercel pour l'hébergement) peuvent avoir accès aux données dans le cadre strict de leur mission."
        }
    ];

    return (
        <main className="min-h-screen bg-background pt-24 pb-20 md:pt-32">
            <div className="max-w-4xl mx-auto px-6">
                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6">
                        Politique de <br />
                        <span className="text-primary italic">Confidentialité</span>
                    </h1>
                    <p className="text-gray-100 text-sm md:text-lg max-w-2xl mx-auto">
                        Chez PRODIGELEC, la protection de vos données personnelles est une priorité. Voici comment nous traitons vos informations.
                    </p>
                </m.div>

                <div className="grid gap-8">
                    {sections.map((section, idx) => (
                        <m.div
                            key={idx}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm"
                        >
                            <div className="flex items-start gap-6">
                                <div className="p-3 bg-primary/10 rounded-xl ring-1 ring-primary/20">
                                    {section.icon}
                                </div>
                                <div>
                                    <h2 className="text-lg md:text-xl font-bold text-white mb-3">{section.title}</h2>
                                    <p className="text-gray-100 leading-relaxed text-sm md:text-base">
                                        {section.content}
                                    </p>
                                </div>
                            </div>
                        </m.div>
                    ))}
                </div>

                <m.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-16 p-8 border border-primary/10 rounded-3xl bg-primary/5 text-center"
                >
                    <p className="text-gray-100 text-sm mb-6">
                        Pour toute question concernant vos données, vous pouvez nous contacter directement.
                    </p>
                    <a href="mailto:contact@prodigelec.fr" className="text-primary font-bold hover:underline">
                        contact@prodigelec.fr
                    </a>
                </m.div>
            </div>
        </main>
    );
}
