import React from 'react';
import MentionsLegalesHeader from './components/MentionsLegalesHeader';
import EditeurSection from './components/sections/EditeurSection';
import AssurancesSection from './components/sections/AssurancesSection';
import MediationSection from './components/sections/MediationSection';
import HebergementSection from './components/sections/HebergementSection';
import ProprieteSection from './components/sections/ProprieteSection';
import DonneesSection from './components/sections/DonneesSection';

export const metadata = {
    title: "Mentions Légales | PRODIGELEC",
    description: "Mentions légales, informations sur l'éditeur, hébergement et protection des données du site PRODIGELEC.",
};

export default function MentionsLegalesPage() {
    return (
        <main className="min-h-screen bg-[#0b1a2a] pt-24 pb-20 px-6 md:pt-32">
            <div className="max-w-4xl mx-auto">
                <MentionsLegalesHeader />

                <div className="grid gap-8">
                    <EditeurSection />
                    <AssurancesSection />
                    <MediationSection />
                    <HebergementSection />
                    <ProprieteSection />
                    <DonneesSection />
                </div>
                
                <div className="mt-16 text-center text-gray-100 text-sm">
                    <p>Dernière mise à jour : Mars 2026</p>
                </div>
            </div>
        </main>
    );
}
