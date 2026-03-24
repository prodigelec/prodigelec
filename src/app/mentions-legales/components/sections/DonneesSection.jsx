import SectionWrapper from "../SectionWrapper";
import { Lock, FileKey } from "lucide-react";
import Link from "next/link";

export default function DonneesSection() {
    return (
        <SectionWrapper icon={<Lock className="text-primary" />} title="Protection des Données">
            <div className="space-y-5">
                <p className="text-gray-100 leading-relaxed">
                    L&apos;entreprise PRODIGELEC s&apos;engage à ce que la collecte et le traitement de vos données, effectués à partir du site <span className="text-white">www.prodigelec.fr</span>, soient conformes au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.
                </p>

                <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
                    <FileKey className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                    <div>
                        <p className="text-white font-medium mb-1">Vos droits :</p>
                        <p className="text-sm text-gray-300">
                            Vous disposez d&apos;un droit d&apos;accès, de rectification, de portabilité, d&apos;effacement de vos données personnelles ou une limitation de leur traitement.
                        </p>
                    </div>
                </div>

                <div className="mt-4 p-4 bg-primary/10 border border-primary/20 rounded-xl">
                    <p className="text-gray-100 text-sm text-center">
                        Pour en savoir plus sur la gestion de vos données et vos droits, consultez notre{' '}
                        <Link href="/politique-de-confidentialite" className="text-primary font-bold hover:text-white underline decoration-primary/50 underline-offset-4 transition-all">
                            Politique de Confidentialité complète
                        </Link>.
                    </p>
                </div>
            </div>
        </SectionWrapper>
    );
}
