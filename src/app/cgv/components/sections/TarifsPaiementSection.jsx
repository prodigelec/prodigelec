import SectionWrapper from "../SectionWrapper";
import { CreditCard, Wallet, AlertCircle } from "lucide-react";

export default function TarifsPaiementSection() {
    return (
        <SectionWrapper icon={<CreditCard className="text-primary" />} title="3. Tarifs et Modalités de Paiement">
            <div className="space-y-6">
                <p className="text-gray-100 leading-relaxed">
                    Les prix de nos prestations sont indiqués en Euros et sont fermes. En tant qu&apos;entreprise individuelle, PRODIGELEC bénéficie du régime de la franchise en base de TVA : <strong className="text-white italic">&quot;TVA non applicable, art. 293 B du CGI&quot;</strong>. Nos tarifs s&apos;entendent donc Hors Taxes (HT).
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                        <div className="flex items-center gap-2 mb-3">
                            <Wallet className="w-5 h-5 text-primary" />
                            <h3 className="text-white font-bold">Modes de paiement</h3>
                        </div>
                        <ul className="space-y-2 text-sm text-gray-100">
                            <li>• Virement bancaire (privilégié)</li>
                            <li>• Chèque à l&apos;ordre de PRODIGELEC</li>
                            <li>• Espèces (dans la limite de 1 000€ selon la loi)</li>
                            <li>• Solutions de paiement dématérialisées via lien sécurisé</li>
                        </ul>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                        <div className="flex items-center gap-2 mb-3">
                            <CreditCard className="w-5 h-5 text-primary" />
                            <h3 className="text-white font-bold">Délais de règlement</h3>
                        </div>
                        <ul className="space-y-2 text-sm text-gray-100">
                            <li>• <strong className="text-white">Acompte :</strong> 40% à la commande</li>
                            <li>• <strong className="text-white">Solde :</strong> Payable à réception de la facture de clôture, le jour de la fin des travaux</li>
                        </ul>
                    </div>
                </div>

                <div className="p-4 bg-orange-500/10 border border-orange-500/20 rounded-xl flex gap-3 items-start">
                    <AlertCircle className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                    <div>
                        <p className="text-white text-sm font-bold uppercase tracking-wide mb-1">Retard de paiement</p>
                        <p className="text-gray-100 text-sm italic leading-relaxed">
                            En cas de défaut de paiement total ou partiel des prestations facturées, une pénalité de retard égale à trois fois le taux d&apos;intérêt légal français sera applicable de plein droit. Conformément à la directive européenne 2011/7/UE et à l&apos;article L.441-10 du Code de commerce, ce taux ne peut être inférieur au taux directeur de la Banque Centrale Européenne (BCE) majoré de 10 points de pourcentage. <br/><br/>
                            <span className="text-white/80">Exemple : Pour une facture de 1 000€ impayée pendant 30 jours, avec un taux BCE à 4,5% (+10 points = 14,5%), la pénalité s&apos;élèvera à environ 11,90€.</span><br/><br/>
                            De plus, une indemnité forfaitaire de 40€ pour frais de recouvrement sera appliquée pour tout client professionnel (art. D.441-5).
                        </p>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}