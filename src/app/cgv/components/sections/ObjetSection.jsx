import SectionWrapper from "../SectionWrapper";
import { FileSignature } from "lucide-react";

export default function ObjetSection() {
    return (
        <SectionWrapper icon={<FileSignature className="text-primary" />} title="1. Objet">
            <div className="space-y-4">
                <p className="text-gray-100 leading-relaxed">
                    Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre l&apos;entreprise <strong className="text-white">PRODIGELEC</strong> et tout client (particulier ou professionnel) sollicitant ses services.
                </p>
                <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                    <p className="text-white font-medium mb-2">Elles s&apos;appliquent à l&apos;ensemble de nos prestations :</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-100 text-sm">
                        <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            Installation et dépannage électrique
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            Systèmes de sécurité (alarmes, vidéosurveillance)
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            Automatismes et motorisations
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            Mise en conformité NF C 15-100
                        </li>
                    </ul>
                </div>
                <p className="text-gray-100 text-sm italic">
                    Toute signature de devis implique l&apos;adhésion pleine et entière, sans réserve, aux présentes conditions générales de vente.
                </p>
            </div>
        </SectionWrapper>
    );
}