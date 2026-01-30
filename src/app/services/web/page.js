import WebHero from "./components/sections/WebHero";
import WebCarousel from "./components/sections/carousel/WebCarousel";
import WebServices from "./components/sections/WebServices";
import WebUrgency from "./components/sections/WebUrgency";
import WebCTA from "./components/sections/WebCTA";

export const metadata = {
  title: "Assistance Informatique & Création Web (28) | Beaver'Aid",
  description: "Dépannage informatique à domicile et création de sites internet à Broué, Dreux, Chartres. Formation, maintenance, vente de matériel et développement web.",
  keywords: ["Dépannage informatique 28", "Création site internet Eure-et-Loir", "Réparation PC Dreux", "Formation informatique senior", "Beaver'Aid"],
};

export default function WebPage() {
  return (
    <main className="min-h-screen bg-[#020617] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <WebHero />
        <WebCarousel />
        <WebServices />
        <WebUrgency />
        <WebCTA />
      </div>
    </main>
  );
}
