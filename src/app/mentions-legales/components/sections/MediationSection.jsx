import SectionWrapper from "../SectionWrapper";
import { Scale, Users, Gavel } from "lucide-react";
import Link from "next/link";

export default function MediationSection() {
    return (
        <SectionWrapper icon={<Scale className="text-primary" />} title="Médiation & Litiges">
            <div className="space-y-6">
                <p className="text-gray-100 leading-relaxed">
                    Conformément aux articles L.616-1 et R.616-1 du code de la consommation, nous proposons un dispositif de médiation de la consommation.
                </p>

                <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                    <div className="flex items-center gap-2 mb-3">
                        <Users className="w-5 h-5 text-primary" />
                        <h3 className="text-white font-bold">Règlement amiable</h3>
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed mb-4">
                        En cas de litige, vous devez en priorité adresser une réclamation écrite à l&apos;entreprise PRODIGELEC.
                    </p>
                    <div className="flex items-center gap-2 mb-3">
                        <Gavel className="w-5 h-5 text-primary" />
                        <h3 className="text-white font-bold">Médiateur compétent</h3>
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed">
                        En cas d&apos;échec de la demande de réclamation auprès de nos services ou en l&apos;absence de réponse dans un délai de deux mois, le consommateur peut soumettre le différend relatif au bon de commande ou aux présentes CGV l&apos;opposant à notre entreprise à un médiateur. 
                        <br/><br/>
                        <span className="italic text-gray-400">Le nom et les coordonnées du médiateur de la consommation dont relève l&apos;entreprise seront communiqués sur simple demande.</span>
                    </p>
                </div>
                
                <p className="text-sm text-gray-400 mt-4 text-center">
                    Pour plus de détails sur nos conditions, consultez nos <Link href="/cgv" className="text-primary hover:text-white underline decoration-primary/50 underline-offset-2 transition-colors">Conditions Générales de Vente</Link>.
                </p>
            </div>
        </SectionWrapper>
    );
}
