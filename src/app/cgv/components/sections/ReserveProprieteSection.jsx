import SectionWrapper from "../SectionWrapper";
import { Lock, ShieldAlert } from "lucide-react";

export default function ReserveProprieteSection() {
    return (
        <SectionWrapper icon={<Lock className="text-primary" />} title="4. Réserve de Propriété">
            <div className="space-y-4">
                <p className="text-gray-100 leading-relaxed">
                    Conformément à la loi n°80-335 du 12 mai 1980, l&apos;entreprise <strong className="text-white">PRODIGELEC</strong> conserve la propriété pleine et entière des marchandises, matériels et équipements vendus et installés jusqu&apos;au paiement intégral et effectif du prix facturé.
                </p>

                <p className="text-gray-100 leading-relaxed">
                    Le client devient toutefois responsable des équipements dès leur livraison ou installation (transfert des risques de perte, vol ou détérioration).
                </p>

                <div className="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex gap-3 items-start">
                    <ShieldAlert className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <div>
                        <p className="text-white text-sm font-bold uppercase tracking-wide mb-1">Clause de reprise</p>
                        <p className="text-gray-100 text-sm italic leading-relaxed">
                            En cas de défaut de paiement, total ou partiel, après plusieurs échanges et l&apos;envoi d&apos;une mise en demeure restée infructueuse, PRODIGELEC se réserve le droit d&apos;exiger la restitution des matériels installés aux frais et risques du client, voire de procéder à leur démontage.
                        </p>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}