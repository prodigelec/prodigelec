import SectionWrapper from "../SectionWrapper";
import { Copy, Copyright, AlertTriangle } from "lucide-react";

export default function ProprieteSection() {
    return (
        <SectionWrapper icon={<Copyright className="text-primary" />} title="Propriété Intellectuelle">
            <div className="space-y-6">
                <p className="text-gray-100 leading-relaxed">
                    L&apos;ensemble de ce site (structure, design, textes, images, animations, logo) constitue une œuvre protégée par les lois en vigueur sur la propriété intellectuelle.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                        <div className="flex items-center gap-2 mb-3">
                            <Copy className="w-5 h-5 text-primary" />
                            <h3 className="text-white font-bold">Droits d&apos;auteur</h3>
                        </div>
                        <p className="text-sm text-gray-300 leading-relaxed">
                            Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques. Les contenus figurant sur ce site sont la propriété exclusive de <strong className="text-white">PRODIGELEC</strong>.
                        </p>
                    </div>

                    <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-5">
                        <div className="flex items-center gap-2 mb-3">
                            <AlertTriangle className="w-5 h-5 text-red-400" />
                            <h3 className="text-white font-bold">Interdictions</h3>
                        </div>
                        <p className="text-sm text-gray-300 leading-relaxed">
                            Toute reproduction, représentation, modification, publication, transmission, dénaturation, totale ou partielle du site ou de son contenu, par quelque procédé que ce soit, et sur quelque support que ce soit est interdite.
                        </p>
                    </div>
                </div>

                <p className="text-sm text-gray-400 italic text-center mt-4">
                    Toute exploitation non autorisée du site ou de son contenu engagerait la responsabilité de l&apos;utilisateur et constituerait une contrefaçon sanctionnée par le Code de la Propriété Intellectuelle.
                </p>
            </div>
        </SectionWrapper>
    );
}
