import SerrurerieHero from "./components/sections/SerrurerieHero";
import SerrurerieCarousel from "./components/sections/carousel/SerrurerieCarousel";
import SerrurerieServices from "./components/sections/SerrurerieServices";
import SerrurerieUrgency from "./components/sections/SerrurerieUrgency";
import SerrurerieCTA from "./components/sections/SerrurerieCTA";

export const metadata = {
  title: "Serrurier Broué (28) - Dépannage Urgent & Clés | Beaver'Aid",
  description: "Serrurier urgence à Broué, Dreux, Chartres. Ouverture de porte, changement de serrure 3 points, volets roulants, reproduction de clés. Disponible 6j/7.",
  keywords: ["Serrurier 28", "Ouverture de porte Dreux", "Changement serrure Chartres", "Volet roulant Eure-et-Loir", "Clés minute Broué"],
};

export default function SerrureriePage() {
  return (
    <main className="min-h-screen bg-[#020617] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <SerrurerieHero />
        <SerrurerieCarousel />
        <SerrurerieServices />
        <SerrurerieUrgency />
        <SerrurerieCTA />
      </div>
    </main>
  );
}
