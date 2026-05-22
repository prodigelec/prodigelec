import ElectriciteContent from "./ElectriciteContent";
import ServicePageJsonLd from "@/app/components/ServicePageJsonLd";

export const metadata = {
  title: "Électricien 27, 28 & 78 - Dépannage & Installation Électrique | PRODIGELEC",
  description: "Électricien qualifié en 27, 28 & 78. Dépannage, mise aux normes NF C 15-100, éclairage LED, VMC, domotique. Intervention rapide. Devis gratuit.",
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
    description: "Dépannage, mise aux normes NF C 15-100, éclairage LED, VMC, domotique en Eure (27), Eure-et-Loir (28) et Yvelines (78). Devis gratuit.",
    url: "https://www.prodigelec.fr/services/electricite",
    images: [{ url: "https://www.prodigelec.fr/img_carousel_electric_page/eclairage-led.jpg", width: 1200, height: 630, alt: "Éclairage LED PRODIGELEC" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Électricien 27, 28 & 78 - PRODIGELEC",
    description: "Dépannage, mise aux normes NF C 15-100, éclairage LED, VMC, domotique. Intervention rapide. Devis gratuit.",
    images: ["https://www.prodigelec.fr/img_carousel_electric_page/eclairage-led.jpg"],
  },
};

const faqs = [
  {
    question: "Quels sont les tarifs pour un dépannage électrique ?",
    answer: "Les tarifs varient selon la nature de l'intervention. Je fournis un devis gratuit avant toute intervention. Si vous acceptez le devis et que j'effectue les travaux, la facturation inclut au minimum 1 heure de main d'œuvre et un déplacement, sans surprise."
  },
  {
    question: "Intervenez-vous en urgence la nuit ?",
    answer: "Oui, je suis disponible du lundi au samedi 24h/24. La nuit, un répondeur est actif — laissez un message et je vous rappelle dès que possible pour les pannes nécessitant une intervention immédiate (court-circuit, coupure totale, etc.)."
  },
  {
    question: "Qu'est-ce que la norme NF C 15-100 ?",
    answer: "La norme NF C 15-100 régit toutes les installations électriques en France. Elle garantit la sécurité des personnes et des biens. Je m'assure que toutes mes installations respectent cette norme avec protection différentielle 30mA, mise à la terre et tableaux conformes."
  },
  {
    question: "Quelle est la durée de garantie sur vos interventions ?",
    answer: "Pour les travaux de mise en conformité, je garantis 2 ans selon les normes en vigueur. Pour les dépannages, je garantis la main d'œuvre et le matériel installé. Le matériel installé bénéficie de la garantie constructeur (2 à 5 ans selon les équipements)."
  },
  {
    question: "Faut-il couper le courant avant votre arrivée ?",
    answer: "Pour une panne totale, le courant est déjà coupé. Pour un problème localisé (prise qui chauffe, disjoncteur qui saute), vous pouvez couper uniquement le circuit concerné par sécurité. Je vous conseillerai par téléphone selon votre situation."
  }
];

export default function ElectricitePage() {
  return (
    <>
      <ServicePageJsonLd
        service={{
          name: "Électricité Générale",
          description: "Dépannage électrique, mise aux normes NF C 15-100, éclairage LED, chauffage électrique, VMC, domotique en Eure-et-Loir, Eure et Yvelines."
        }}
        breadcrumbName="Électricité"
        pageUrl="https://www.prodigelec.fr/services/electricite"
        faqs={faqs}
      />
      <ElectriciteContent />
    </>
  );
}
