import SectionWrapper from "../SectionWrapper";
import { FileText, ArrowRight } from "lucide-react";

export default function DroitsSection() {
    const droits = [
        "Droit d'accès",
        "Droit de rectification",
        "Droit d'effacement (ou droit à l'oubli)",
        "Droit à la limitation du traitement",
        "Droit à la portabilité des données",
        "Droit d'opposition"
    ];

    return (
        <SectionWrapper icon={<FileText className="w-6 h-6" />} title="Vos droits (RGPD)">
            <div className="space-y-6">
                <p className="leading-relaxed">
                    Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez des droits suivants concernant vos données personnelles :
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {droits.map((droit, idx) => (
                        <div key={idx} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg p-3">
                            <ArrowRight className="w-4 h-4 text-primary" />
                            <span className="text-sm text-gray-200">{droit}</span>
                        </div>
                    ))}
                </div>

                <div className="bg-primary/10 border border-primary/20 rounded-xl p-5 mt-4">
                    <p className="text-sm text-gray-300">
                        Pour exercer ces droits, vous pouvez nous contacter à tout moment par email à l&apos;adresse suivante : <a href="mailto:contact@prodigelec.fr" className="text-primary font-bold hover:underline">contact@prodigelec.fr</a>.
                    </p>
                    <p className="text-xs text-gray-400 mt-2 italic">
                        Un justificatif d&apos;identité pourra vous être demandé si nous avons un doute raisonnable sur votre identité.
                    </p>
                </div>
            </div>
        </SectionWrapper>
    );
}
