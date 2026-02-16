"use client";
import React from 'react';
import { motion } from "framer-motion";
import { Shield, Scale, Info } from "lucide-react";

export default function MentionsLegales() {
    return (
        <main className="min-h-screen bg-[#0b1a2a] pt-24 pb-20 px-6 md:pt-32">
            <div className="max-w-4xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full text-primary text-sm font-bold uppercase tracking-wider mb-6"
                    >
                        <Shield className="w-4 h-4" /> Cadre Légal
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-6"
                    >
                        Mentions <span className="text-primary italic">Légales</span>
                    </motion.h1>
                    <p className="text-gray-400 text-sm md:text-lg">
                        Informations obligatoires concernant l&apos;entreprise et l&apos;utilisation du site.
                    </p>
                </div>

                <div className="grid gap-8">
                    {/* Editeur du site */}
                    <Section icon={<Info className="text-primary" />} title="Éditeur du site">
                        <p>Le site internet <span className="text-white">www.prodigelec.fr</span> est édité par :</p>
                        <div className="mt-4 space-y-2 text-gray-300">
                            <p><strong className="text-white">Dénomination :</strong> PRODIGELEC</p>
                            <p><strong className="text-white">Forme juridique :</strong> Entreprise Individuelle (EI)</p>
                            <p><strong className="text-white">Siège social :</strong> 10 Rue Georges Bréant, 28410 Broué, France</p>
                            <p><strong className="text-white">SIRET :</strong> 804 304 897 00023</p>
                            <p><strong className="text-white">Inscription au RM :</strong> Immatriculée au Répertoire des Métiers de Chartres (CMA 28)</p>
                            <p><strong className="text-white">Directeur de la publication :</strong> Responsable PRODIGELEC</p>
                            <p><strong className="text-white">Contact :</strong> contact@prodigelec.fr / 06 38 19 47 52</p>
                        </div>
                    </Section>

                    {/* Assurances */}
                    <Section icon={<Shield className="text-primary" />} title="Assurances Professionnelles">
                        <p className="text-gray-300 leading-relaxed uppercase font-bold text-xs mb-4">Garantie Décennale & Responsabilité Civile</p>
                        <p className="text-gray-300 leading-relaxed">
                            Conformément à la loi, PRODIGELEC a souscrit un contrat d&apos;assurance de responsabilité civile professionnelle et de <span className="text-white">Garantie Décennale</span> pour l&apos;ensemble de ses activités d&apos;électricité et de serrurerie.
                        </p>
                        <p className="mt-4 text-gray-300 italic">
                            Les coordonnées de l&apos;assureur et le numéro de contrat sont disponibles sur simple demande ou figurent sur vos devis et factures.
                        </p>
                    </Section>

                    {/* Médiation */}
                    <Section icon={<Scale className="text-primary" />} title="Médiation de la consommation">
                        <p className="text-gray-300 leading-relaxed">
                            Conformément aux dispositions du Code de la consommation, le client a le droit de recourir gratuitement à un médiateur de la consommation en vue de la résolution amiable d&apos;un litige.
                        </p>
                        <p className="mt-4 text-gray-300">
                            En cas de litige, vous pouvez contacter le médiateur compétent dont relève l&apos;entreprise (ex: CM2C, AME Conso, etc. - à préciser selon l&apos;adhésion de l&apos;artisan).
                        </p>
                    </Section>

                    {/* Hébergement */}
                    <Section icon={<Shield className="text-primary" />} title="Hébergement">
                        <p>Le site est hébergé par :</p>
                        <div className="mt-4 space-y-2 text-gray-300">
                            <p><strong className="text-white">Hébergeur :</strong> Vercel Inc.</p>
                            <p><strong className="text-white">Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723</p>
                            <p><strong className="text-white">Site web :</strong> www.vercel.com</p>
                        </div>
                    </Section>

                    {/* Propriété intellectuelle */}
                    <Section icon={<Scale className="text-primary" />} title="Propriété intellectuelle">
                        <p className="text-gray-300 leading-relaxed">
                            L&apos;ensemble de ce site relève de la législation française et internationale sur le droit d&apos;auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                        </p>
                        <p className="mt-4 text-gray-300 leading-relaxed">
                            La reproduction de tout ou partie de ce site ou de son nom de marque <span className="text-white">PRODIGELEC</span> sur quelque support que ce soit est formellement interdite sauf autorisation expresse.
                        </p>
                    </Section>

                    {/* Données personnelles */}
                    <Section icon={<Shield className="text-primary" />} title="Protection des données">
                        <p className="text-gray-300 leading-relaxed">
                            Les informations collectées via les formulaires de contact ou d&apos;inscription aux newsletters sont traitées conformément au RGPD.
                        </p>
                        <p className="mt-4">
                            Consultez notre <a href="/politique-de-confidentialite" className="text-primary font-bold hover:underline">Politique de Confidentialité</a> pour connaître vos droits d&apos;accès et de rectification.
                        </p>
                    </Section>
                </div>
            </div>
        </main>
    );
}

function Section({ icon, title, children }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-[30px] p-6 md:p-10 backdrop-blur-sm"
        >
            <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                    {icon}
                </div>
                <h2 className="text-xl md:text-2xl font-black text-white uppercase italic tracking-tight">{title}</h2>
            </div>
            <div className="text-gray-400">
                {children}
            </div>
        </motion.div>
    );
}
