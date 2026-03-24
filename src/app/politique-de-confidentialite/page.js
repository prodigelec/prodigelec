import React from 'react';
import PrivacyHeader from './components/PrivacyHeader';
import ResponsableSection from './components/sections/ResponsableSection';
import DonneesCollecteesSection from './components/sections/DonneesCollecteesSection';
import ConservationSection from './components/sections/ConservationSection';
import DroitsSection from './components/sections/DroitsSection';
import DestinatairesSection from './components/sections/DestinatairesSection';
import ContactSection from './components/sections/ContactSection';

export const metadata = {
    title: "Politique de Confidentialité | PRODIGELEC",
    description: "Découvrez comment PRODIGELEC collecte, utilise et protège vos données personnelles conformément au RGPD.",
};

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-[#0b1a2a] pt-24 pb-20 px-6 md:pt-32">
            <div className="max-w-4xl mx-auto">
                <PrivacyHeader />

                <div className="grid gap-8">
                    <ResponsableSection />
                    <DonneesCollecteesSection />
                    <ConservationSection />
                    <DroitsSection />
                    <DestinatairesSection />
                </div>
                
                <ContactSection />

                <div className="mt-16 text-center text-gray-100 text-sm">
                    <p>Dernière mise à jour : Mars 2026</p>
                </div>
            </div>
        </main>
    );
}
