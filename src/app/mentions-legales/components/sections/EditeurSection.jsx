import SectionWrapper from "../SectionWrapper";
import { Info, MapPin, Briefcase, Phone, Mail } from "lucide-react";

export default function EditeurSection() {
    return (
        <SectionWrapper icon={<Info className="text-primary" />} title="Éditeur du site">
            <div className="space-y-6">
                <p className="text-gray-100 leading-relaxed">
                    Le site internet <span className="text-white">www.prodigelec.fr</span> est édité par :
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-4">
                        <div className="flex items-start gap-3">
                            <Briefcase className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <div>
                                <p className="text-white font-bold">L&apos;Entreprise</p>
                                <p className="text-sm text-gray-300 mt-1"><strong className="text-white">Dénomination :</strong> PRODIGELEC</p>
                                <p className="text-sm text-gray-300"><strong className="text-white">Forme juridique :</strong> Entreprise Individuelle (EI)</p>
                                <p className="text-sm text-gray-300"><strong className="text-white">Dirigeant :</strong> Petaccia Sébastien</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-4">
                        <div className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <div>
                                <p className="text-white font-bold">Coordonnées</p>
                                <p className="text-sm text-gray-300 mt-1"><strong className="text-white">Siège social :</strong> 10 Rue Georges Bréant, 28410 Broué</p>
                                <div className="flex items-center gap-2 mt-2 text-sm text-gray-300">
                                    <Phone className="w-4 h-4 text-gray-400" /> 06 38 19 47 52
                                </div>
                                <div className="flex items-center gap-2 mt-1 text-sm text-gray-300">
                                    <Mail className="w-4 h-4 text-gray-400" /> contact@prodigelec.fr
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 flex gap-3 items-start">
                    <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                        <p className="text-white text-sm font-bold uppercase tracking-wide mb-1">Immatriculation</p>
                        <p className="text-gray-100 text-sm leading-relaxed">
                            <strong className="text-white">SIRET :</strong> 804 304 897 00023<br />
                            Immatriculée au Répertoire des Métiers de Chartres (CMA 28)
                        </p>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
