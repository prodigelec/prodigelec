import SectionWrapper from "../SectionWrapper";
import { ShieldCheck, HardHat, PackageCheck } from "lucide-react";

export default function GarantiesSection() {
    return (
        <SectionWrapper icon={<ShieldCheck className="text-primary" />} title="7. Garanties et Responsabilités">
            <div className="space-y-6">
                <p className="text-gray-100 leading-relaxed">
                    L&apos;entreprise <strong className="text-white">PRODIGELEC</strong> s&apos;engage à fournir des prestations de qualité et bénéficie de toutes les assurances professionnelles obligatoires pour la réalisation de ses travaux.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                        <div className="flex items-center gap-2 mb-3">
                            <HardHat className="w-5 h-5 text-primary" />
                            <h3 className="text-white font-bold">Assurance Décennale</h3>
                        </div>
                        <p className="text-sm text-gray-300 leading-relaxed">
                            Les travaux d&apos;installation électrique relevant du gros œuvre ou de l&apos;incorporé sont couverts par notre <strong className="text-white">garantie décennale</strong>. L&apos;attestation d&apos;assurance est disponible sur simple demande ou annexée à nos devis.
                        </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                        <div className="flex items-center gap-2 mb-3">
                            <PackageCheck className="w-5 h-5 text-primary" />
                            <h3 className="text-white font-bold">Garanties Matériel</h3>
                        </div>
                        <p className="text-sm text-gray-300 leading-relaxed">
                            Le matériel installé bénéficie de la <strong className="text-white">garantie légale de conformité</strong> et de la garantie constructeur (généralement 2 ans, selon les fabricants). La garantie de parfait achèvement s&apos;applique durant 1 an après la réception des travaux.
                        </p>
                    </div>
                </div>

                <p className="text-gray-400 text-xs italic">
                    * La garantie ne couvre pas les dommages résultant d&apos;une mauvaise utilisation, d&apos;un défaut d&apos;entretien par le client, ou de l&apos;intervention d&apos;un tiers sur l&apos;installation.
                </p>
            </div>
        </SectionWrapper>
    );
}