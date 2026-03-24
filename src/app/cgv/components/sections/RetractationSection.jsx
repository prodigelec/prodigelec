import SectionWrapper from "../SectionWrapper";
import { History, ShieldAlert, FileX } from "lucide-react";

export default function RetractationSection() {
    return (
        <SectionWrapper icon={<History className="text-primary" />} title="6. Droit de rétractation">
            <div className="space-y-5">
                <p className="text-gray-100 leading-relaxed">
                    Conformément à l&apos;article L221-18 du Code de la consommation, pour les contrats conclus <strong className="text-white">hors établissement</strong> (ex: devis signé à votre domicile), le client consommateur dispose d&apos;un délai de <strong className="text-primary">14 jours calendaires</strong> pour exercer son droit de rétractation sans avoir à justifier de motifs ni à payer de pénalités.
                </p>

                <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
                    <FileX className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                    <div>
                        <p className="text-white font-medium mb-1">Modalités d&apos;exercice :</p>
                        <p className="text-sm text-gray-300">
                            La rétractation doit être notifiée par écrit (courrier postal ou email) avant l&apos;expiration du délai de 14 jours. L&apos;acompte versé sera alors intégralement remboursé.
                        </p>
                    </div>
                </div>

                <div className="mt-4 p-4 bg-primary/10 border border-primary/20 rounded-xl flex gap-3 items-start">
                    <ShieldAlert className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                        <p className="text-white text-sm font-bold uppercase tracking-wide mb-1">Exception : Travaux d&apos;urgence</p>
                        <p className="text-gray-100 text-sm italic leading-relaxed">
                            Conformément à l&apos;article L221-28 du Code de la consommation, <strong className="text-white">le droit de rétractation ne peut être exercé</strong> pour les travaux d&apos;entretien ou de réparation à réaliser en urgence au domicile du consommateur et expressément sollicités par lui.
                        </p>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}