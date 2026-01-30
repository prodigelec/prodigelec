import ElecCarousel from "./components/sections/carousel/ElecCarousel";
import ElecHero from "./components/sections/ElecHero";
import ElecServices from "./components/sections/ElecServices";
import ElecUrgency from "./components/sections/ElecUrgency";
import ElecCTA from "./components/sections/ElecCTA";

export const metadata = {
  title: "Électricien Broué (28) - Dépannage & Installation | Beaver'Aid",
  description: "Électricien qualifié à Broué, Dreux, Chartres. Mise aux normes, éclairage LED, domotique, vidéophonie. Intervention rapide et devis gratuit.",
  keywords: ["Électricien 28", "Dépannage électricité Dreux", "Installation électrique Chartres", "Domotique Eure-et-Loir", "Mise aux normes électrique"],
};

export default function ElectricitePage() {
  return (
    <main className="min-h-screen bg-[#020617] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <ElecHero />
        <ElecCarousel />
        <ElecServices />
        <ElecUrgency />
        <ElecCTA />
      </div>
    </main>
  );
}
