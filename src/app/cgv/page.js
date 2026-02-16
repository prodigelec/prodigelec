"use client";
import React from 'react';
import { motion } from "framer-motion";
import { FileText, CreditCard, ShieldCheck, Clock, AlertTriangle, Scale } from "lucide-react";

export default function CGVPage() {
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
                        <FileText className="w-4 h-4" /> Conditions de vente
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-6"
                    >
                        Conditions <span className="text-primary italic">Générales</span>
                    </motion.h1>
                    <p className="text-foreground-subtle text-sm md:text-lg">
                        Les règles qui régissent nos prestations pour garantir une collaboration transparente.
                    </p>
                </div>

                <div className="grid gap-8">
                    {/* Objet */}
                    <Section icon={<FileText className="text-primary" />} title="1. Objet">
                        <p className="text-gray-300 leading-relaxed">
                            Les présentes conditions générales de vente (CGV) s&apos;appliquent à toutes les prestations de services (électricité, serrurerie, dépannage) effectuées par <span className="text-white">PRODIGELEC</span> pour ses clients. Toute commande implique l&apos;adhésion sans réserve aux présentes CGV.
                        </p>
                    </Section>

                    {/* Devis et Commandes */}
                    <Section icon={<Clock className="text-primary" />} title="2. Devis et Commandes">
                        <p className="text-gray-300 leading-relaxed">
                            Toute prestation donne lieu à l&apos;établissement d&apos;un devis préalable. Le devis est gratuit, sauf mention contraire précisée au client.
                        </p>
                        <ul className="mt-4 space-y-2 text-gray-300 list-disc list-inside">
                            <li>Le devis est valable 45 jours à compter de sa date d&apos;émission.</li>
                            <li>La commande est considérée comme ferme après réception du devis signé avec la mention "Bon pour accord".</li>
                            <li>Un acompte de 50% est exigé lors de toute commande.</li>
                        </ul>
                    </Section>

                    {/* Tarifs et Paiement */}
                    <Section icon={<CreditCard className="text-primary" />} title="3. Tarifs et Paiement">
                        <p className="text-gray-300 leading-relaxed">
                            Les prix sont indiqués en Euros et sont fermes. PRODIGELEC, en tant qu&apos;entreprise individuelle, n&apos;est pas assujetti à la TVA (article 293B du CGI).
                        </p>
                        <div className="mt-4 space-y-3 text-gray-300">
                            <p><strong className="text-white italic">Délais :</strong> Les factures sont payables à réception sauf accord particulier.</p>
                            <p><strong className="text-white italic">Modes :</strong> Lien de paiement sécurisé (CB), virement, chèque ou espèces (dans la limite légale).</p>
                            <p><strong className="text-white italic">Modernisation :</strong> PRODIGELEC utilise des solutions de facturation et de paiement dématérialisées pour plus de sécurité et de rapidité.</p>
                            <p><strong className="text-white italic">Retard :</strong> Tout retard de paiement peut donner lieu à des pénalités de retard.</p>
                        </div>
                    </Section>

                    {/* Réserve de Propriété */}
                    <Section icon={<AlertTriangle className="text-primary" />} title="4. Réserve de Propriété">
                        <p className="text-gray-300 leading-relaxed">
                            L&apos;entreprise <span className="text-white">PRODIGELEC</span> conserve la propriété des marchandises posées et installées jusqu&apos;au paiement intégral du prix par le client.
                        </p>
                        <div className="mt-4 p-4 bg-red-500/5 border border-red-500/20 rounded-xl">
                            <p className="text-gray-300 text-sm leading-relaxed italic">
                                En cas de non-paiement après plusieurs échanges et relances infructueuses, l&apos;entreprise se réserve expressément le droit de reprendre la marchandise et les équipements installés à tout moment.
                            </p>
                        </div>
                    </Section>

                    {/* Exécution des travaux */}
                    <Section icon={<ShieldCheck className="text-primary" />} title="5. Exécution des prestations">
                        <p className="text-gray-300 leading-relaxed">
                            PRODIGELEC s&apos;engage à mettre en œuvre tous les moyens nécessaires pour réaliser les travaux dans les délais convenus. L&apos;accès au lieu d&apos;intervention doit être facilité par le client.
                        </p>
                        <p className="mt-4 text-gray-300">
                            En cas de force majeure ou d&apos;imprévus techniques indépendants de notre volonté, les délais peuvent être prolongés.
                        </p>
                    </Section>

                    {/* Droit de rétractation */}
                    <Section icon={<AlertTriangle className="text-primary" />} title="6. Droit de rétractation">
                        <p className="text-gray-300 leading-relaxed">
                            Pour les contrats conclus hors établissement, le client (particulier) dispose d&apos;un délai de 14 jours pour se rétracter.
                        </p>
                        <div className="mt-4 p-4 bg-primary/10 border border-primary/20 rounded-xl">
                            <p className="text-primary text-sm font-bold uppercase mb-2">Cas particulier de l&apos;urgence :</p>
                            <p className="text-gray-300 text-sm italic">
                                Conformément à l&apos;article L221-28 du Code de la consommation, le droit de rétractation ne peut être exercé pour les travaux de maintenance ou de réparation à domicile à effectuer en urgence.
                            </p>
                        </div>
                    </Section>

                    {/* Garanties */}
                    <Section icon={<ShieldCheck className="text-primary" />} title="7. Garanties">
                        <p className="text-gray-300 leading-relaxed">
                            PRODIGELEC est couvert par une <span className="text-white">Garantie Décennale</span> pour tous les travaux relevant de cette obligation (Eure et Loir, Eure).
                        </p>
                        <p className="mt-4 text-gray-300 leading-relaxed">
                            Le matériel installé bénéficie de la garantie constructeur. La garantie de parfait achèvement s&apos;applique sur une durée d&apos;un an après la réception des travaux.
                        </p>
                    </Section>

                    {/* Litiges */}
                    <Section icon={<Scale className="text-primary" />} title="8. Litiges et Médiation">
                        <p className="text-gray-300 leading-relaxed">
                            Les présentes CGV sont soumises au droit français. En cas de litige, les parties s&apos;engagent à rechercher une solution amiable avant toute action judiciaire.
                        </p>
                        <p className="mt-4 text-gray-300 leading-relaxed">
                            Le client a la possibilité de saisir un médiateur de la consommation (voir les modalités dans nos Mentions Légales). A défaut, le litige sera porté devant le Tribunal compétent de Chartres.
                        </p>
                    </Section>
                </div>

                <div className="mt-16 text-center text-gray-400 text-sm">
                    <p>Dernière mise à jour : Janvier 2026</p>
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
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 text-primary">
                    {icon}
                </div>
                <h2 className="text-xl md:text-2xl font-black text-white uppercase italic tracking-tight">{title}</h2>
            </div>
            <div className="text-foreground-subtle">
                {children}
            </div>
        </motion.div>
    );
}
