import SectionWrapper from "../SectionWrapper";
import { Server, Globe, ShieldCheck } from "lucide-react";

export default function HebergementSection() {
    return (
        <SectionWrapper icon={<Server className="text-primary" />} title="Hébergement du site">
            <div className="space-y-6">
                <p className="text-gray-100 leading-relaxed">
                    Le présent site est hébergé sur les serveurs de la société :
                </p>

                <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-4">
                    <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                        <Globe className="w-8 h-8 text-primary" />
                        <div>
                            <p className="text-xl font-bold text-white">Vercel Inc.</p>
                            <p className="text-sm text-gray-400">Plateforme Cloud pour applications web</p>
                        </div>
                    </div>
                    
                    <div className="space-y-2 pt-2">
                        <p className="text-sm text-gray-300 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            <strong className="text-white">Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis
                        </p>
                        <p className="text-sm text-gray-300 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            <strong className="text-white">Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.vercel.com</a>
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-3 mt-4 bg-primary/5 p-4 rounded-xl border border-primary/10">
                    <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-300 leading-relaxed">
                        L&apos;hébergeur garantit un niveau de sécurité optimal pour la protection des données transitant sur son infrastructure, conformément aux standards internationaux.
                    </p>
                </div>
            </div>
        </SectionWrapper>
    );
}
