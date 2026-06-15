import BorneRechargeContent from "./BorneRechargeContent";
import ServicePageJsonLd from "@/app/components/ServicePageJsonLd";

export const metadata = {
  title: "Borne de Recharge Voiture Électrique 27, 28 & 78 - PRODIGELEC",
  description: "Installation de borne de recharge VE (Wallbox) et prise renforcée Green'Up en Eure-et-Loir, Eure & Yvelines. Solutions Legrand certifiées NF C 15-100, jusqu'à 3,7 kW, pilotage smartphone. Devis gratuit.",
  keywords: [
    // Métier principal
    "Borne de recharge voiture électrique", "Borne de recharge VE", "Installation borne de recharge",
    "Wallbox installation", "Prise Green'Up", "Prise renforcée voiture électrique",
    "Installateur IRVE", "Borne 3,7 kW", "Borne connectée maison",
    // Par ville
    "Borne de recharge Broué", "Borne de recharge Dreux", "Borne de recharge Chartres", "Borne de recharge Évreux",
    "Borne de recharge Anet", "Borne de recharge Nonancourt", "Borne de recharge Nogent-le-Roi", "Borne de recharge Houdan",
    "Installation borne Dreux", "Installation borne Chartres", "Installation borne Évreux",
    // Par département
    "Borne de recharge 27", "Borne de recharge 28", "Borne de recharge 78",
    "Borne de recharge Eure", "Borne de recharge Eure-et-Loir", "Borne de recharge Yvelines",
    // Aides & contexte particulier
    "Borne de recharge particulier", "Borne de recharge maison", "Borne de recharge à domicile",
    "Programme ADVENIR copropriété", "Aide borne de recharge 2026",
    // Marques / techniques
    "Borne Legrand", "Green'Up Legrand", "Borne Wallbox 3,7 kW", "Borne connectée smartphone",
    "NF C 15-100 borne", "Étanche IP66"
  ],
  alternates: {
    canonical: "https://www.prodigelec.fr/services/borne-de-recharge-voiture-electrique",
  },
  openGraph: {
    title: "Borne de Recharge VE — Installation Wallbox & Prise Green'Up | PRODIGELEC",
    description: "Installateur de borne de recharge voiture électrique en Eure (27), Eure-et-Loir (28) et Yvelines (78). Solutions Legrand certifiées NF C 15-100, pilotage smartphone. Devis gratuit.",
    url: "https://www.prodigelec.fr/services/borne-de-recharge-voiture-electrique",
    images: [{ url: "https://www.prodigelec.fr/img_carousel_borne_recharge/legrand-femme-recharge-domicile.jpg", width: 1200, height: 630, alt: "Installation borne de recharge VE PRODIGELEC" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Borne de Recharge VE 27, 28 & 78 — PRODIGELEC",
    description: "Installation de borne de recharge voiture électrique. Solutions Legrand certifiées NF C 15-100, pilotage smartphone. Devis gratuit.",
    images: ["https://www.prodigelec.fr/img_carousel_borne_recharge/legrand-femme-recharge-domicile.jpg"],
  },
};

const faqs = [
  {
    question: "Combien coûte l'installation d'une borne de recharge à domicile ?",
    answer: "Le coût varie selon le type d'équipement et la complexité de l'installation : à partir de 600€ TTC pour une prise renforcée Green'Up, et environ 1 200€ à 1 800€ TTC pour une borne connectée 3,7 kW posée. Je fournis un devis gratuit après visite technique."
  },
  {
    question: "Existe-t-il des aides pour installer une borne de recharge en 2026 ?",
    answer: "Le crédit d'impôt 75% pour borne de recharge (art. 200 quater C du CGI) s'est appliqué aux dépenses payées jusqu'au 31 décembre 2025 et n'est plus reconduit en 2026. En copropriété, le programme ADVENIR peut financer une partie de votre point de charge individuel — il ne concerne pas les maisons individuelles. Lors du devis, je vous oriente vers les dispositifs encore en vigueur selon votre situation."
  },
  {
    question: "Prise renforcée Green'Up ou vraie borne : que choisir ?",
    answer: "La prise renforcée Green'Up (~2,3 kW) charge à environ 12 km d'autonomie par heure — suffisant pour la nuit. La borne 3,7 kW double quasiment la vitesse (~24 km/h) et apporte le pilotage smartphone, la programmation heures creuses et la sécurité d'une installation dédiée. Je vous conseille selon votre véhicule, kilométrage quotidien et installation existante."
  },
  {
    question: "Faut-il un compteur électrique adapté pour installer une borne ?",
    answer: "Pour une borne 3,7 kW (16A monophasé), un compteur standard 9 kVA suffit dans la plupart des cas. Pour des bornes plus puissantes (7,4 ou 11 kW), un passage en triphasé ou augmentation de puissance peut être nécessaire. Je vérifie votre installation lors du devis et coordonne avec Enedis si besoin."
  },
  {
    question: "Combien de temps prend l'installation d'une borne ?",
    answer: "Pour une installation standard (borne ou prise renforcée à proximité du tableau électrique), comptez une demi-journée à une journée. Si le tableau est éloigné du point de recharge, prévoir une journée complète pour le tirage de câble et la pose. Une attestation de conformité NF C 15-100 vous est remise à la fin."
  },
  {
    question: "La borne est-elle étanche ? Peut-elle être installée en extérieur ?",
    answer: "Oui, les bornes Legrand que j'installe sont étanches IP66 (protection totale contre poussière et jets d'eau puissants). Elles peuvent être installées en garage, sous abri ou en extérieur sur façade. Je préconise toujours un emplacement abrité du soleil direct pour préserver l'électronique."
  }
];

export default function BorneRechargeVePage() {
  return (
    <>
      <ServicePageJsonLd
        service={{
          name: "Installation de Borne de Recharge Voiture Électrique",
          description: "Installation de borne de recharge VE (Wallbox 3,7 kW) et prise renforcée Green'Up Legrand en Eure-et-Loir, Eure et Yvelines. Solutions certifiées NF C 15-100, étanche IP66, avec pilotage smartphone et programmation heures creuses."
        }}
        breadcrumbName="Borne de Recharge VE"
        pageUrl="https://www.prodigelec.fr/services/borne-de-recharge-voiture-electrique"
        faqs={faqs}
      />
      <BorneRechargeContent />
    </>
  );
}
