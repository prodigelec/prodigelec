import ElectriciteContent from "./ElectriciteContent";

export const metadata = {
  title: "Électricien Broué (28) - Dépannage & Installation | PRODIGELEC",
  description: "Électricien qualifié à Broué, Dreux, Chartres. Mise aux normes, éclairage LED, domotique, vidéophonie. Intervention rapide et devis gratuit.",
  keywords: [
    "Électricien Broué", "Électricien Dreux", "Électricien Chartres", "Électricien Évreux", "Électricien Anet", "Électricien Nonancourt",
    "Dépannage électricité 28", "Dépannage électricité 27", "Dépannage électricité Eure",
    "Installation électrique", "Mise aux normes", "Domotique", "Vidéophonie"
  ],
  alternates: {
    canonical: "https://www.prodigelec.fr/services/electricite",
  },
  openGraph: {
    title: "Électricien à Broué et environs - PRODIGELEC",
    description: "Besoin d'un électricien ? Dépannage, installation et mise aux normes. Intervention rapide sur le 28.",
    url: "https://www.prodigelec.fr/services/electricite",
  },
};

export default function ElectricitePage() {
  return <ElectriciteContent />;
}
