import SectionWrapper from "../SectionWrapper";
import { Wrench, AlertCircle } from "lucide-react";

export default function ExecutionSection() {
    return (
        <SectionWrapper icon={<Wrench className="text-primary" />} title="5. Exécution des prestations">
            <div className="space-y-4">
                <p className="text-gray-100 leading-relaxed">
                    <strong className="text-white">PRODIGELEC</strong> s&apos;engage à mettre en œuvre tous les moyens nécessaires pour réaliser les travaux dans les délais convenus lors de la validation du devis.
                </p>

                <ul className="space-y-3 text-gray-100 mt-4">
                    <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                        <span>
                            <strong className="text-white">Accès au chantier :</strong> L&apos;accès au lieu d&apos;intervention doit être dégagé et facilité par le client aux dates et heures convenues.
                        </span>
                    </li>
                    <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                        <span>
                            <strong className="text-white">Conformité :</strong> Les installations sont réalisées dans le strict respect des normes de sécurité en vigueur (notamment la norme NF C 15-100).
                        </span>
                    </li>
                </ul>

                <div className="mt-6 p-4 bg-primary/10 border border-primary/20 rounded-xl flex gap-3 items-start">
                    <AlertCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                        <p className="text-white text-sm font-bold uppercase tracking-wide mb-1">Imprévus & Force majeure</p>
                        <p className="text-gray-100 text-sm italic leading-relaxed">
                            En cas de force majeure ou d&apos;imprévus techniques indépendants de notre volonté (ex: non-conformités cachées découvertes lors du chantier, ruptures de stock fournisseurs), les délais d&apos;exécution peuvent être prolongés sans qu&apos;aucune pénalité ne puisse être exigée.
                        </p>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}