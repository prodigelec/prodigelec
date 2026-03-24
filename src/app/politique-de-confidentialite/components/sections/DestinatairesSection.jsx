import SectionWrapper from "../SectionWrapper";
import { Network, Server, ShieldX } from "lucide-react";

export default function DestinatairesSection() {
    return (
        <SectionWrapper icon={<Network className="w-6 h-6" />} title="Destinataires des données">
            <div className="space-y-6">
                <p className="leading-relaxed">
                    Vos données personnelles sont destinées exclusivement à l&apos;usage interne de <strong className="text-white">PRODIGELEC</strong>.
                </p>

                <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 flex gap-3 items-center">
                    <ShieldX className="w-5 h-5 text-red-400 shrink-0" />
                    <p className="text-sm text-gray-200">
                        Elles ne sont <strong className="text-white">jamais vendues, louées ou cédées</strong> à des tiers à des fins commerciales.
                    </p>
                </div>

                <div className="mt-6">
                    <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                        <Server className="w-5 h-5 text-primary" /> Sous-traitants techniques
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                        Seuls certains sous-traitants techniques peuvent avoir un accès limité à vos données dans le cadre strict de leur mission (par exemple : Vercel pour l&apos;hébergement du site web, ou notre solution de facturation). Ces prestataires sont tenus par contrat de respecter la confidentialité et la sécurité de vos données.
                    </p>
                </div>
            </div>
        </SectionWrapper>
    );
}
