import SerrurerieHero from "./components/sections/SerrurerieHero";
import SerrurerieCarousel from "./components/sections/carousel/SerrurerieCarousel";
import SerrurerieServices from "./components/sections/SerrurerieServices";
import SerrureriePricing from "./components/sections/SerrureriePricing";
import SerrurerieUrgency from "./components/sections/SerrurerieUrgency";
import SerrurerieCTA from "./components/sections/SerrurerieCTA";

export const metadata = {
  title: "Serrurier Broué (28) - Dépannage Urgent & Clés | PRODIGELEC",
  description: "Serrurier urgence à Broué, Dreux, Chartres. Ouverture de porte, changement de serrure 3 points, volets roulants, reproduction de clés. Disponible 6j/7.",
  keywords: [
    "Serrurier Broué", "Serrurier Dreux", "Serrurier Chartres", "Serrurier Évreux", "Serrurier Anet", "Serrurier Nonancourt",
    "Ouverture de porte 28", "Ouverture de porte Eure",
    "Changement de serrure", "Volet roulant", "Blindage de porte", "Serrurier urgence"
  ],
  alternates: {
    canonical: "/services/serrurerie",
  },
  openGraph: {
    title: "Serrurier Urgentiste 28 - PRODIGELEC",
    description: "Ouverture de porte, changement de serrure et sécurisation. Intervention rapide sur Broué, Dreux et Chartres.",
    url: "https://beaveraid.fr/services/serrurerie",
  },
};

export default function SerrureriePage() {
  return (
    <main className="min-h-screen bg-background pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <SerrurerieHero />
        <SerrurerieCarousel />
        <SerrurerieServices />
        <SerrureriePricing />
        <SerrurerieUrgency />
        <SerrurerieCTA />
      </div>
    </main>
  );
}
