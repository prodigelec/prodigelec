import SectionWrapper from "../SectionWrapper";
import { Shield, HardHat, Building, FileText, MapPin, Globe } from "lucide-react";

export default function AssurancesSection() {
    return (
        <SectionWrapper icon={<Shield className="text-primary" />} title="Assurances Professionnelles">
            <div className="space-y-6">
                <p className="text-gray-100 leading-relaxed">
                    Conformément à la loi Pinel (loi n° 2014-626 du 18 juin 2014) et à l&apos;article 22-2 de la loi n° 96-603 du 5 juillet 1996, l&apos;entreprise a souscrit aux assurances obligatoires pour ses activités :
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                        <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-3">
                            <HardHat className="w-5 h-5 text-primary" />
                            <h3 className="text-white font-bold">Garantie Décennale</h3>
                        </div>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <Building className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                                <span className="text-sm text-gray-300"><strong className="text-white">Compagnie :</strong> MAAF Pro</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <FileText className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                                <span className="text-sm text-gray-300"><strong className="text-white">N° de contrat :</strong> 128095905 v -MCE - 001</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                                <span className="text-sm text-gray-300"><strong className="text-white">Agence :</strong> MAAF Dreux</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Globe className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                                <span className="text-sm text-gray-300"><strong className="text-white">Couverture :</strong> France géographique</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                        <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-3">
                            <Shield className="w-5 h-5 text-primary" />
                            <h3 className="text-white font-bold">Responsabilité Civile (RC Pro)</h3>
                        </div>
                        <p className="text-sm text-gray-300 leading-relaxed">
                            L&apos;entreprise est couverte par une assurance de responsabilité civile professionnelle pour tous les dommages matériels, immatériels ou corporels causés à des tiers lors de ses interventions.
                        </p>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
