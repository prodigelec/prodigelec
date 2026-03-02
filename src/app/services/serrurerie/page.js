import SerrurerieContent from "./SerrurerieContent";

export const metadata = {
  title: "Serrurerie Électronique Broué (28) - Serrure Connectée & Digicode | PRODIGELEC",
  description: "Installation serrure connectée, digicode, visiophone et volets motorisés à Broué, Dreux, Chartres, Évreux. Sécurité électronique sur mesure. Devis gratuit.",
  keywords: [
    "Serrure connectée Broué", "Serrure connectée Dreux", "Digicode Chartres", "Visiophone Évreux",
    "Serrure électronique 28", "Volet motorisé Eure-et-Loir", "Vidéophonie Anet", "Interphonie Nonancourt",
    "Serrure A2P", "Motorisation volet roulant", "Domotique serrurerie"
  ],
  alternates: {
    canonical: "https://www.prodigelec.fr/services/serrurerie",
  },
  openGraph: {
    title: "Serrurerie Électronique 28 - PRODIGELEC",
    description: "Serrure connectée, digicode, visiophone et volets motorisés. Installation sur mesure à Broué, Dreux et Chartres.",
    url: "https://www.prodigelec.fr/services/serrurerie",
  },
};

export default function SerrureriePage() {
  return <SerrurerieContent />;
}
