import SectionWrapper from "../SectionWrapper";
import { Clock, History, CalendarDays } from "lucide-react";

export default function ConservationSection() {
    return (
        <SectionWrapper icon={<Clock className="w-6 h-6" />} title="Durée de conservation">
            <div className="space-y-6">
                <p className="leading-relaxed">
                    Vos données personnelles sont conservées uniquement pendant la durée strictement nécessaire aux finalités pour lesquelles elles ont été collectées, conformément à la réglementation en vigueur.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex items-start gap-4">
                        <History className="w-8 h-8 text-primary shrink-0" />
                        <div>
                            <p className="text-white font-bold mb-1">Pour les prospects</p>
                            <p className="text-sm text-gray-300">
                                <strong className="text-white">3 ans</strong> à compter du dernier contact émanant de votre part.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex items-start gap-4">
                        <CalendarDays className="w-8 h-8 text-primary shrink-0" />
                        <div>
                            <p className="text-white font-bold mb-1">Pour les clients</p>
                            <p className="text-sm text-gray-300">
                                <strong className="text-white">10 ans</strong> pour répondre à nos obligations légales, comptables et fiscales (factures, devis signés, garanties décennales).
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
