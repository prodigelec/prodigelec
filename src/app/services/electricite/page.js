import ElecCarousel from "./components/sections/carousel/ElecCarousel";
import ElecHero from "./components/sections/ElecHero";
import ElecServices from "./components/sections/ElecServices";
import ElecPricing from "./components/sections/ElecPricing";
import ElecUrgency from "./components/sections/ElecUrgency";
import ElecCTA from "./components/sections/ElecCTA";

export const metadata = {
  title: "Électricien Broué (28) - Dépannage & Installation | PRODIGELEC",
  description: "Électricien qualifié à Broué, Dreux, Chartres. Mise aux normes, éclairage LED, domotique, vidéophonie. Intervention rapide et devis gratuit.",
  keywords: [
    "Électricien Broué", "Électricien Dreux", "Électricien Chartres", "Électricien Évreux", "Électricien Anet", "Électricien Nonancourt",
    "Dépannage électricité 28", "Dépannage électricité Eure",
    "Installation électrique", "Mise aux normes", "Domotique", "Vidéophonie"
  ],
  alternates: {
    canonical: "/services/electricite",
  },
  openGraph: {
    title: "Électricien à Broué et environs - PRODIGELEC",
    description: "Besoin d'un électricien ? Dépannage, installation et mise aux normes. Intervention rapide sur le 28.",
    url: "https://prodigelec.fr/services/electricite",
  },
};

export default function ElectricitePage() {
  return (
    <main className="min-h-screen bg-background pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <ElecHero />
        <ElecCarousel />
        <ElecServices />
        <ElecPricing />
        <ElecUrgency />
        <ElecCTA />
      </div>
    </main>
  );
}
