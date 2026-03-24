import SectionWrapper from "../SectionWrapper";
import { ShieldCheck, UserCheck, MapPin } from "lucide-react";

export default function ResponsableSection() {
    return (
        <SectionWrapper icon={<ShieldCheck className="w-6 h-6" />} title="Responsable du traitement">
            <div className="space-y-6">
                <p className="leading-relaxed">
                    Le responsable du traitement des données personnelles collectées sur le site <span className="text-white">www.prodigelec.fr</span> est :
                </p>
                
                <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-4">
                    <div className="flex items-center gap-3">
                        <UserCheck className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-gray-300"><strong className="text-white">Entreprise :</strong> PRODIGELEC, représentée par son responsable légal, Petaccia Sébastien.</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-gray-300"><strong className="text-white">Siège social :</strong> 10 Rue Georges Bréant, 28410 Broué.</span>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
