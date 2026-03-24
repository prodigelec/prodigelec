import React from 'react';
import CgvHeader from './components/CgvHeader';
import ObjetSection from './components/sections/ObjetSection';
import DevisCommandesSection from './components/sections/DevisCommandesSection';
import TarifsPaiementSection from './components/sections/TarifsPaiementSection';
import ReserveProprieteSection from './components/sections/ReserveProprieteSection';
import ExecutionSection from './components/sections/ExecutionSection';
import RetractationSection from './components/sections/RetractationSection';
import GarantiesSection from './components/sections/GarantiesSection';
import LitigesSection from './components/sections/LitigesSection';

export const metadata = {
    title: "Conditions Générales de Vente | PRODIGELEC",
    description: "Conditions générales de vente des prestations d'électricité, de sécurité et d'automatismes par PRODIGELEC.",
    alternates: {
        canonical: "https://www.prodigelec.fr/cgv",
    },
};

export default function CGVPage() {
    return (
        <main className="min-h-screen bg-[#0b1a2a] pt-24 pb-20 px-6 md:pt-32">
            <div className="max-w-4xl mx-auto">
                {/* Header Section */}
                <CgvHeader />

                <div className="grid gap-8">
                    {/* Objet */}
                    <ObjetSection />

                    {/* Devis et Commandes */}
                    <DevisCommandesSection />

                    {/* Tarifs et Paiement */}
                    <TarifsPaiementSection />

                    {/* Réserve de Propriété */}
                    <ReserveProprieteSection />

                    {/* Exécution des travaux */}
                    <ExecutionSection />

                    {/* Droit de rétractation */}
                    <RetractationSection />

                    {/* Garanties */}
                    <GarantiesSection />

                    {/* Litiges */}
                    <LitigesSection />
                </div>

                <div className="mt-16 text-center text-gray-100 text-sm">
                    <p>Dernière mise à jour : Janvier 2026</p>
                </div>
            </div>
        </main>
    );
}
