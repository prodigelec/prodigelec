import WebHero from "./components/sections/WebHero";
import WebCarousel from "./components/sections/carousel/WebCarousel";
import WebServices from "./components/sections/WebServices";
import WebPricing from "./components/sections/WebPricing";
import WebUrgency from "./components/sections/WebUrgency";
import WebCTA from "./components/sections/WebCTA";

export const metadata = {
  title: "Assistance Informatique & Création Web (28) | Beaver'Aid",
  description: "Dépannage informatique à domicile et création de sites internet à Broué, Dreux, Chartres. Formation, maintenance, vente de matériel et développement web.",
  keywords: [
    "Dépannage informatique Broué", "Dépannage informatique Dreux", "Dépannage informatique Chartres",
    "Création site internet 28", "Création site web Eure-et-Loir", "Webmaster 28",
    "Formation informatique senior", "Réparation ordinateur", "Maintenance informatique"
  ],
  alternates: {
    canonical: "/services/web",
  },
  openGraph: {
    title: "Services Informatiques & Web - Beaver'Aid",
    description: "Dépannage ordinateur, formation et création de sites web sur mesure. Votre partenaire numérique en Eure-et-Loir.",
    url: "https://beaveraid.fr/services/web",
  },
};

export default function WebPage() {
  return (
    <main className="min-h-screen bg-[#020617] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <WebHero />
        <WebCarousel />
        <WebServices />
        <WebPricing />
        <WebUrgency />
        <WebCTA />
      </div>
    </main>
  );
}
