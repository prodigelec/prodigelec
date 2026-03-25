import ElectriciteContent from "./ElectriciteContent";

export const metadata = {
  title: "Électricien 27, 28 & 78 - Dépannage & Installation Électrique | PRODIGELEC",
  description: "Électricien qualifié en Eure (27), Eure-et-Loir (28) et Yvelines (78). Dépannage, mise aux normes NF C 15-100, éclairage LED, VMC, alarme, vidéophonie. Intervention rapide. Devis gratuit.",
  keywords: [
    // Électricien par ville
    "Électricien Broué", "Électricien Dreux", "Électricien Chartres", "Électricien Évreux",
    "Électricien Anet", "Électricien Nonancourt", "Électricien Nogent-le-Roi", "Électricien Houdan",
    // Dépannage électricité par ville
    "Dépannage électricité Broué", "Dépannage électricité Dreux", "Dépannage électricité Chartres", "Dépannage électricité Évreux",
    "Dépannage électricité Anet", "Dépannage électricité Nonancourt", "Dépannage électricité Nogent-le-Roi", "Dépannage électricité Houdan",
    "Dépannage électricité 27", "Dépannage électricité 28", "Dépannage électricité 78", "Dépannage électricité Eure", "Dépannage électricité Eure-et-Loir", "Dépannage électricité Yvelines",
    // Tableau électrique par ville
    "Tableau électrique Broué", "Tableau électrique Dreux", "Tableau électrique Chartres", "Tableau électrique Évreux",
    "Tableau électrique Anet", "Tableau électrique Nonancourt", "Tableau électrique Nogent-le-Roi", "Tableau électrique Houdan",
    // Mise aux normes par ville
    "Mise aux normes électrique Broué", "Mise aux normes électrique Dreux", "Mise aux normes électrique Chartres", "Mise aux normes électrique Évreux",
    "Mise aux normes électrique Anet", "Mise aux normes électrique Nonancourt", "Mise aux normes électrique Nogent-le-Roi", "Mise aux normes électrique Houdan",
    // Éclairage LED par ville
    "Éclairage LED Broué", "Éclairage LED Dreux", "Éclairage LED Chartres", "Éclairage LED Évreux",
    "Éclairage LED Anet", "Éclairage LED Nonancourt", "Éclairage LED Nogent-le-Roi", "Éclairage LED Houdan",
    // Chauffage électrique par ville
    "Chauffage électrique Broué", "Chauffage électrique Dreux", "Chauffage électrique Chartres", "Chauffage électrique Évreux",
    "Chauffage électrique Anet", "Chauffage électrique Nonancourt", "Chauffage électrique Nogent-le-Roi", "Chauffage électrique Houdan",
    // VMC par ville
    "VMC Broué", "VMC Dreux", "VMC Chartres", "VMC Évreux",
    "VMC Anet", "VMC Nonancourt", "VMC Nogent-le-Roi", "VMC Houdan",
    // Alarme par ville
    "Alarme Broué", "Alarme Dreux", "Alarme Chartres", "Alarme Évreux",
    "Alarme Anet", "Alarme Nonancourt", "Alarme Nogent-le-Roi", "Alarme Houdan",
    // Caméra surveillance par ville
    "Caméra surveillance Broué", "Caméra surveillance Dreux", "Caméra surveillance Chartres", "Caméra surveillance Évreux",
    "Caméra surveillance Anet", "Caméra surveillance Nonancourt", "Caméra surveillance Nogent-le-Roi", "Caméra surveillance Houdan",
    // Vidéophonie par ville
    "Vidéophonie Broué", "Vidéophonie Dreux", "Vidéophonie Chartres", "Vidéophonie Évreux",
    "Vidéophonie Anet", "Vidéophonie Nonancourt", "Vidéophonie Nogent-le-Roi", "Vidéophonie Houdan",
    // Domotique par ville
    "Domotique Broué", "Domotique Dreux", "Domotique Chartres", "Domotique Évreux",
    "Domotique Anet", "Domotique Nonancourt", "Domotique Nogent-le-Roi", "Domotique Houdan",
    // Termes généraux
    "NF C 15-100", "Installation électrique", "Artisan électricien 27", "Artisan électricien 28", "Artisan électricien 78", "CONSUEL"
  ],
  alternates: {
    canonical: "https://www.prodigelec.fr/services/electricite",
  },
  openGraph: {
    title: "Électricien 27, 28 & 78 - Dépannage & Installation | PRODIGELEC",
    description: "Dépannage, mise aux normes, éclairage LED, VMC, alarme et vidéophonie en Eure (27), Eure-et-Loir (28) et Yvelines (78). Intervention rapide. Devis gratuit.",
    url: "https://www.prodigelec.fr/services/electricite",
  },
};

export default function ElectricitePage() {
  return <ElectriciteContent />;
}
