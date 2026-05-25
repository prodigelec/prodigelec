import AutomatismesContent from "./AutomatismesContent";
import ServicePageJsonLd from "@/app/components/ServicePageJsonLd";

export const metadata = {
  title: "Automatismes & Motorisations 27, 28 & 78 - Volets, Portails, Domotique",
  description: "Motorisation volets, portails & portes de garage en 27, 28 & 78. Domotique Somfy, pilotage smartphone. Artisan qualifié. Devis gratuit.",
  keywords: [
    "Motorisation volet Broué", "Motorisation volet Dreux", "Motorisation volet Chartres", "Motorisation volet Évreux",
    "Motorisation volet Anet", "Motorisation volet Nonancourt", "Motorisation volet Nogent-le-Roi", "Motorisation volet Houdan",
    "Volet roulant motorisé Dreux", "Volet roulant motorisé Chartres", "Volet roulant électrique 28", "Volet roulant électrique 78",
    "Volet battant motorisé Dreux", "Volet battant motorisé Chartres", "Volet battant motorisé Houdan",
    "Portail automatique Dreux", "Portail automatique Chartres", "Portail automatique Évreux",
    "Portail automatique Anet", "Portail automatique Nonancourt", "Portail automatique Nogent-le-Roi", "Portail automatique Houdan",
    "Portail coulissant motorisé 28", "Portail battant automatique Eure-et-Loir", "Portail automatique Yvelines",
    "Porte de garage automatique Dreux", "Porte de garage automatique Chartres", "Porte de garage automatique Houdan",
    "Porte de garage motorisée 28", "Porte de garage sectionnelle Eure", "Porte de garage motorisée 78",
    "Automatisme volet Eure", "Automatisme volet Eure-et-Loir", "Automatisme volet Yvelines",
    "Domotique Dreux", "Domotique Chartres", "Domotique Évreux", "Domotique Houdan",
    "Somfy Tahoma Dreux", "Box domotique 28", "Somfy Eure-et-Loir", "Somfy Yvelines",
    "Motorisation volet roulant 28", "Volet motorisé Eure-et-Loir", "Volet motorisé Yvelines",
    "Fermeture automatique Broué", "Fermeture automatique Dreux", "Fermeture automatique Houdan",
    "Installation motorisation volet", "Dépannage volet motorisé Dreux", "Dépannage volet motorisé Houdan",
    "Dépannage portail automatique Chartres", "Artisan automatisme 28", "Artisan automatisme 78"
  ],
  alternates: {
    canonical: "https://www.prodigelec.fr/services/automatismes",
  },
  openGraph: {
    title: "Automatismes & Motorisations 27, 28 & 78 - PRODIGELEC",
    description: "Motorisation volets, portails & portes de garage. Domotique Somfy, pilotage smartphone. Artisan qualifié en 27, 28 & 78. Devis gratuit.",
    url: "https://www.prodigelec.fr/services/automatismes",
    images: [{ url: "https://www.prodigelec.fr/img_carousel_securite_page/tahoma_switch.avif", width: 1200, height: 630, alt: "Domotique Somfy Tahoma PRODIGELEC" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Automatismes & Motorisations 27, 28 & 78 - PRODIGELEC",
    description: "Motorisation volets, portails & portes de garage. Domotique Somfy, pilotage smartphone. Devis gratuit.",
    images: ["https://www.prodigelec.fr/img_carousel_securite_page/tahoma_switch.avif"],
  },
};

const faqs = [
  {
    question: "Quels types de volets motorisez-vous ?",
    answer: "J'interviens sur tous types de volets motorisés : volets roulants, battants et coulissants. Je peux motoriser des volets existants manuels ou remplacer un moteur défaillant. La programmation horaire et le pilotage par smartphone sont inclus dans chaque installation."
  },
  {
    question: "Intervenez-vous sur les portails et portes de garage ?",
    answer: "Oui, j'installe et dépanne les automatismes de portails battants et coulissants, ainsi que les portes de garage sectionnelles et basculantes. Chaque installation est livrée avec télécommande et peut être connectée à votre smartphone."
  },
  {
    question: "Qu'est-ce que la box domotique Somfy Tahoma ?",
    answer: "La Tahoma Switch est une box domotique Somfy qui centralise le contrôle de vos volets, portails et équipements connectés depuis une seule application smartphone. Elle permet de créer des scénarios automatisés (ouverture au lever du soleil, fermeture programmée) et est compatible avec les assistants vocaux."
  },
  {
    question: "Peut-on piloter les automatismes par smartphone ?",
    answer: "Oui, tous les automatismes que j'installe sont compatibles avec un pilotage smartphone via l'application du fabricant (Somfy, Nice, etc.) ou via une box domotique. Vous pouvez contrôler vos volets et portails à distance, où que vous soyez."
  },
  {
    question: "Intervenez-vous en urgence sur les automatismes ?",
    answer: "Oui, j'interviens en dépannage sur les volets motorisés, portails et portes de garage : volet bloqué, moteur en panne, télécommande défaillante. Le tarif est annoncé avant tout déplacement."
  }
];

export default function AutomatismesPage() {
  return (
    <>
      <ServicePageJsonLd
        service={{
          name: "Automatismes & Motorisations",
          description: "Motorisation de volets roulants, battants et coulissants, portails et portes de garage. Domotique Somfy avec pilotage smartphone en Eure-et-Loir, Eure et Yvelines."
        }}
        breadcrumbName="Automatismes & Motorisations"
        pageUrl="https://www.prodigelec.fr/services/automatismes"
        faqs={faqs}
      />
      <AutomatismesContent />
    </>
  );
}
