"use client";

import ServiceHero from "../../components/services/shared/ServiceHero";
import ServiceServices from "../../components/services/shared/ServiceServices";
import ServicePricing from "../../components/services/shared/ServicePricing";
import ServiceUrgency from "../../components/services/shared/ServiceUrgency";
import ServiceFAQ from "../../components/services/shared/ServiceFAQ";
import ServiceCTA from "../../components/services/shared/ServiceCTA";
import ServiceCarousel from "../../components/services/shared/ServiceCarousel";

import { Blinds, Wrench, Smartphone, Settings2, DoorOpen } from "lucide-react";

export default function AutomatismesContent() {
  const servicesFeatures = [
    {
      icon: Blinds,
      title: "Motorisation de Volets",
      description: "Tous types de volets motorisés : roulants, battants, coulissants. Motorisation d'existants ou remplacement de moteur.",
      items: [
        "Volets roulants électriques",
        "Volets battants motorisés",
        "Volets coulissants",
        "Remplacement moteur défaillant"
      ]
    },
    {
      icon: DoorOpen,
      title: "Portails & Portes de Garage",
      description: "Automatisation de portails battants, coulissants et portes de garage sectionnelles ou basculantes.",
      items: [
        "Portail battant automatique",
        "Portail coulissant motorisé",
        "Porte de garage sectionnelle",
        "Télécommande & badge d'accès"
      ]
    },
    {
      icon: Smartphone,
      title: "Domotique & Maison Connectée",
      description: "Centralisez le pilotage de vos volets, portails et équipements depuis votre smartphone.",
      items: [
        "Box Somfy Tahoma Switch",
        "Scénarios automatisés (lever/coucher)",
        "Compatible assistants vocaux",
        "Contrôle à distance"
      ]
    },
    {
      icon: Settings2,
      title: "Maintenance & Réglages",
      description: "Entretien, réglage et dépannage de vos automatismes pour garantir leur durabilité.",
      items: [
        "Réglage des fins de course",
        "Lubrification & entretien",
        "Diagnostic électronique",
        "Remplacement pièces défaillantes"
      ]
    }
  ];

  const pricingPlans = [
    {
      title: "Motorisation Volets",
      price: "Sur Devis",
      description: "Motorisation de volets roulants, battants ou coulissants.",
      features: [
        "Tous types de volets",
        "Pilotage smartphone & télécommande",
        "Programmation horaire",
        "Devis gratuit jusqu'à 30km"
      ],
      highlight: false
    },
    {
      title: "Portails & Portes de Garage",
      price: "Sur Devis",
      description: "Automatisation de portails et portes de garage.",
      features: [
        "Portail battant ou coulissant",
        "Porte de garage sectionnelle",
        "Télécommande & badge inclus",
        "Devis gratuit jusqu'à 30km"
      ],
      highlight: false
    },
    {
      title: "Domotique & Connecté",
      price: "Sur Devis",
      description: "Pilotage de vos automatismes via smartphone et box domotique.",
      features: [
        "Box Somfy Tahoma Switch",
        "Scénarios automatisés",
        "Compatible smartphone",
        "Devis gratuit jusqu'à 30km"
      ],
      highlight: false
    },
    {
      title: "Dépannage Urgence",
      price: "À partir de 120€ TTC",
      description: "Volet bloqué, portail en panne, moteur défaillant.",
      features: [
        "Volets, portails, portes de garage",
        "Diagnostic & réparation sur place",
        "Déplacement Zone 1 offert",
        "Tarif annoncé avant intervention"
      ],
      highlight: true,
      tag: "Urgence"
    }
  ];

  const urgencySteps = [
    { step: "01", title: "Appel & Diagnostic", desc: "Estimation du problème par téléphone si possible" },
    { step: "02", title: "Intervention rapide", desc: "Déplacement et diagnostic sur place" },
    { step: "03", title: "Réparation", desc: "Réparation ou remplacement du matériel défaillant" },
    { step: "04", title: "Vérification", desc: "Test complet et remise en service garantie" }
  ];

  const faqItems = [
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

  const carouselSlides = [
    {
      id: 1,
      image: "/img_carousel_hero_home/Volet_Battant.avif",
      title: "Volets Motorisés",
      description: "Motorisation tous types de volets — pilotage smartphone ou télécommande"
    },
    {
      id: 2,
      image: "/img_carousel_securite_page/domotique.jpg",
      title: "Domotique & Connecté",
      description: "Centralisez le pilotage de vos automatismes depuis votre smartphone"
    },
    {
      id: 3,
      image: "/img_carousel_securite_page/tahoma_switch.avif",
      title: "Tahoma Switch — Somfy",
      description: "Box domotique pour piloter volets et portails depuis votre smartphone"
    }
  ];

  return (
    <main className="min-h-screen bg-background pt-28 pb-8 md:pt-24 md:pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <ServiceHero
          title="Automatismes &"
          subtitle="Motorisations"
          description="Motorisation de volets, portails et portes de garage. Domotique et pilotage smartphone pour un confort optimal au quotidien."
          icon={Blinds}
          theme="securite"
        />

        <ServiceCarousel
          slides={carouselSlides}
          theme="securite"
        />

        <ServiceServices
          title="Mes"
          subtitle="Prestations"
          description="Des solutions d'automatisme sur mesure pour simplifier votre quotidien et sécuriser vos fermetures."
          features={servicesFeatures}
          theme="securite"
        />

        <ServicePricing
          title="Mes Tarifs"
          subtitle="Automatismes"
          description="Une tarification claire et sans surprise, devis gratuit jusqu'à 30km."
          prices={pricingPlans}
          theme="securite"
        />

        <ServiceUrgency
          title="Volet bloqué ou portail en panne ?"
          description={
            <p>J&apos;interviens rapidement sur <span className="font-bold text-primary">Chartres, Broué, Dreux, Anet, Nonancourt, Nogent-le-Roi, Évreux</span> &amp; leurs alentours. Tarifs annoncés avant intervention, pas de surprise.</p>
          }
          steps={urgencySteps}
          icon={Wrench}
          theme="securite"
        />

        <ServiceFAQ
          title="Questions"
          subtitle="Fréquentes"
          description="Vous avez des questions ? Retrouvez ici les réponses aux interrogations les plus courantes sur mes services d'automatisme et de motorisation."
          faqs={faqItems}
          theme="securite"
        />

        <ServiceCTA
          title="Besoin de motoriser vos fermetures ?"
          description="Demandez un devis gratuit. Je vous conseillerai sur les meilleures solutions pour automatiser votre domicile."
          buttonText="Demander mon devis"
          theme="securite"
        />
      </div>
    </main>
  );
}
