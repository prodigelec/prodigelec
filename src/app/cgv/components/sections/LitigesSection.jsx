import SectionWrapper from "../SectionWrapper";
import { Scale, Users, Gavel } from "lucide-react";
import Link from "next/link";

export default function LitigesSection() {
    return (
        <SectionWrapper icon={<Scale className="text-primary" />} title="8. Litiges et Médiation">
            <div className="space-y-6">
                <p className="text-gray-100 leading-relaxed">
                    Les présentes Conditions Générales de Vente sont soumises au <strong className="text-white">droit français</strong>. La langue du présent contrat est la langue française.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                        <div className="flex items-center gap-2 mb-3">
                            <Users className="w-5 h-5 text-primary" />
                            <h3 className="text-white font-bold">Règlement amiable</h3>
                        </div>
                        <p className="text-sm text-gray-300 leading-relaxed">
                            En cas de litige ou de réclamation, le client s&apos;adressera en priorité à l&apos;entreprise PRODIGELEC pour obtenir une solution amiable. Nous avons à cœur de résoudre tout différend dans un esprit de dialogue et de confiance.
                        </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                        <div className="flex items-center gap-2 mb-3">
                            <Scale className="w-5 h-5 text-primary" />
                            <h3 className="text-white font-bold">Médiation de la consommation</h3>
                        </div>
                        <p className="text-sm text-gray-300 leading-relaxed">
                            Conformément aux articles L.616-1 et R.616-1 du code de la consommation, nous proposons un dispositif de médiation. Les coordonnées du médiateur compétent sont détaillées dans nos <Link href="/mentions-legales" className="text-primary hover:text-white underline decoration-primary/50 underline-offset-2 transition-colors">Mentions Légales</Link>.
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-3 mt-6">
                    <Gavel className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-400 leading-relaxed">
                        À défaut d&apos;accord amiable ou en cas d&apos;échec de la médiation, tout litige relatif à l&apos;interprétation, l&apos;exécution ou la rupture du contrat sera soumis à la compétence exclusive des <strong className="text-gray-300">Tribunaux compétents de Chartres (28)</strong>, même en cas de pluralité de défendeurs ou d&apos;appel en garantie.
                    </p>
                </div>
            </div>
        </SectionWrapper>
    );
}