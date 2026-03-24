import SectionWrapper from "../SectionWrapper";
import { Eye, Mail, Phone, User, CheckCircle2 } from "lucide-react";

export default function DonneesCollecteesSection() {
    return (
        <SectionWrapper icon={<Eye className="w-6 h-6" />} title="Données collectées & Finalités">
            <div className="space-y-6">
                <p className="leading-relaxed">
                    Nous collectons uniquement les données nécessaires au bon déroulement de nos services et à nos échanges commerciaux.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                        <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 bg-primary rounded-full" /> Données collectées
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-sm text-gray-300">
                                <User className="w-4 h-4 text-gray-400" /> Nom et prénom
                            </li>
                            <li className="flex items-center gap-3 text-sm text-gray-300">
                                <Mail className="w-4 h-4 text-gray-400" /> Adresse email
                            </li>
                            <li className="flex items-center gap-3 text-sm text-gray-300">
                                <Phone className="w-4 h-4 text-gray-400" /> Numéro de téléphone
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                        <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 bg-primary rounded-full" /> Finalités d&apos;utilisation
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-sm text-gray-300">
                                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                Répondre à vos demandes de devis et d&apos;informations
                            </li>
                            <li className="flex items-start gap-3 text-sm text-gray-300">
                                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                Assurer le suivi et la facturation de nos prestations
                            </li>
                            <li className="flex items-start gap-3 text-sm text-gray-300">
                                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                Envoi de newsletter (uniquement si vous y avez consenti)
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="bg-primary/5 border border-primary/10 rounded-xl p-4 mt-4 text-sm text-gray-300 italic">
                    La base légale de ces traitements est l&apos;exécution d&apos;un contrat (pour les devis et factures), ou votre consentement explicite (pour les newsletters), ou notre intérêt légitime.
                </div>
            </div>
        </SectionWrapper>
    );
}
