import SectionWrapper from "../SectionWrapper";
import { ClipboardCheck } from "lucide-react";

export default function DevisCommandesSection() {
    return (
        <SectionWrapper icon={<ClipboardCheck className="text-primary" />} title="2. Devis et Commandes">
            <div className="space-y-5">
                <p className="text-gray-100 leading-relaxed">
                    Toute prestation (hors dépannage d&apos;urgence nécessitant une intervention immédiate) donne lieu à l&apos;établissement d&apos;un devis descriptif et estimatif préalable.
                </p>

                <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                    <h3 className="text-white font-bold mb-3">Conditions de validité :</h3>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                            <span className="text-gray-100"><strong className="text-white">Gratuité :</strong> Le devis est 100% gratuit, sauf mention contraire explicitement précisée au client avant déplacement.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                            <span className="text-gray-100"><strong className="text-white">Durée de validité :</strong> Le devis est valable <strong className="text-primary">45 jours</strong> à compter de sa date d&apos;émission, sauf en cas d&apos;offre promotionnelle liée à la durée du fabricant.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                            <span className="text-gray-100"><strong className="text-white">Validation :</strong> La commande devient ferme et définitive après retour du devis signé par le client, accompagné de la mention manuscrite <em className="text-white">&quot;Bon pour accord&quot;</em>.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                            <span className="text-gray-100"><strong className="text-white">Acompte :</strong> Un acompte de <strong className="text-primary">40%</strong> du montant total TTC est exigé pour valider la commande et bloquer la date d&apos;intervention.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </SectionWrapper>
    );
}