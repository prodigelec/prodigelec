"use client";

import ServiceHero from "../../components/services/shared/ServiceHero";
import ServiceServices from "../../components/services/shared/ServiceServices";
import ServicePricing from "../../components/services/shared/ServicePricing";
import ServiceUrgency from "../../components/services/shared/ServiceUrgency";
import ServiceFAQ from "../../components/services/shared/ServiceFAQ";
import ServiceCTA from "../../components/services/shared/ServiceCTA";
import ServiceCarousel from "../../components/services/shared/ServiceCarousel";

// Icons
import { FcFlashOn } from "react-icons/fc";
import { HiBolt } from "react-icons/hi2";
import {
  HiShieldCheck,
  HiOutlineLightBulb,
  HiLockClosed,
  HiOutlineWrenchScrewdriver,
  HiOutlineHomeModern,
  HiOutlineVideoCamera
} from "react-icons/hi2";

export default function ElectriciteContent() {
  const servicesFeatures = [
    {
      icon: HiOutlineWrenchScrewdriver,
      title: "Dépannage Urgent",
      description: "Intervention rapide pour toutes vos pannes électriques : coupures, courts-circuits ou défaillances.",
      items: [
        "Recherche de panne",
        "Diagnostic immédiat",
        "Réparation de circuits",
        "Remise en route sécurisée"
      ]
    },
    {
      icon: HiShieldCheck,
      title: "Mise en Sécurité",
      description: "Mise en conformité de votre tableau de répartition et de l'installation selon la norme NF C 15-100.",
      items: [
        "Remplacement de tableau",
        "Mise à la terre certifiée",
        "Protection 30mA",
        "Attestation CONSUEL"
      ]
    },
    {
      icon: HiOutlineLightBulb,
      title: "Éclairage LED",
      description: "Solutions d'éclairage modernes hautes performances pour transformer votre intérieur et extérieur.",
      items: [
        "Spots encastrés design",
        "Éclairage extérieur",
        "Détecteurs de mouvement",
        "Régulateurs d'intensité"
      ]
    },
    {
      icon: HiOutlineHomeModern,
      title: "Chauffage & VMC",
      description: "Installation et maintenance de vos systèmes de confort thermique et renouvellement d'air.",
      items: [
        "Radiateurs à inertie",
        "VMC Simple & Double flux",
        "Sèche-serviette",
        "Maintenance préventive"
      ]
    },
    {
      icon: HiOutlineVideoCamera,
      title: "Vidéo & Alarme",
      description: "Installation de systèmes de surveillance et d'alarme pour une protection optimale de vos biens.",
      items: [
        "Caméras IP Haute Définition",
        "Alarmes anti-intrusion",
        "Détection incendie",
        "Paramétrage smartphone"
      ]
    },
    {
      icon: HiLockClosed,
      title: "Sécurité & Accès",
      description: "Protégez vos accès avec des technologies modernes de contrôle d’entrée et de surveillance.",
      items: [
        "Vidéophonie connectée",
        "Interphonie intelligente",
        "Contrôle par badge",
        "Digicodes robustes"
      ]
    }
  ];

  const pricingPlans = [
    {
      title: "Dépannage Électrique",
      price: "À partir de 120€ TTC",
      description: "Recherche de panne et réparation rapide sur votre installation.",
      features: [
        "Diagnostic complet inclus",
        "1h de main d'œuvre incluse",
        "Déplacement zone 1 offert",
        "Hors zone : Frais déplacement +"
      ],
      highlight: true,
      tag: "Urgence"
    },
    {
      title: "Mise en Sécurité",
      price: "Sur Devis",
      description: "Conformité et protection des personnes et des biens.",
      features: [
        "Tableau électrique aux normes",
        "Mise à la terre certifiée",
        "Protection 30mA installée",
        "Attestation de conformité"
      ],
      highlight: false
    },
    {
      title: "Vidéo & Alarme",
      price: "Sur Devis",
      description: "Installation de systèmes de surveillance et alarme.",
      features: [
        "Caméras Haute Définition",
        "Alarmes anti-intrusion",
        "Configuration smartphone",
        "Étude personnalisée"
      ],
      highlight: false
    },
    {
      title: "Installation & Rénov",
      price: "Sur Devis",
      description: "Projets complets d'installation ou rénovation électrique.",
      features: [
        "Étude & Devis personnalisés",
        "Norme NF C 15-100",
        "Matériel Legrand / Schneider",
        "Garantie décennale 10 ans"
      ],
      highlight: false
    }
  ];

  const urgencySteps = [
    { step: "01", title: "Appel & Sécurisation", desc: "Conseils immédiats pour sécuriser l'installation" },
    { step: "02", title: "Diagnostic Expert", desc: "Recherche de la panne via tests de continuité/isolement" },
    { step: "03", title: "Réparation Durable", desc: "Remplacement de l'organe défectueux (NF C 15-100)" },
    { step: "04", title: "Contrôle Final", desc: "Vérification de la remise en service et test 30mA" }
  ];

  const faqItems = [
    {
      question: "Quels sont les tarifs pour un dépannage électrique ?",
      answer: "Les tarifs varient selon la nature de l'intervention. Je fournis un devis gratuit avant toute intervention. Si vous acceptez le devis et que j'effectue les travaux, la facturation inclut au minimum 1 heure de main d'œuvre et un déplacement, sans surprise."
    },
    {
      question: "Intervenez-vous en urgence le week-end ?",
      answer: "Oui, j'interviens sur rendez-vous le samedi et en urgence après 19h ainsi que le dimanche pour les pannes nécessitant une intervention immédiate (court-circuit, coupure totale, etc.)."
    },
    {
      question: "Qu'est-ce que la norme NF C 15-100 ?",
      answer: "La norme NF C 15-100 régit toutes les installations électriques en France. Elle garantit la sécurité des personnes et des biens. Je m'assure que toutes mes installations respectent cette norme avec protection différentielle 30mA, mise à la terre et tableaux conformes."
    },
    {
      question: "Quelle est la durée de garantie sur vos interventions ?",
      answer: "Pour les travaux de mise en conformité, je garantis 2 ans selon les normes en vigueur. Pour les dépannages, je garantis la main d'œuvre et le matériel installé, mais je ne peux pas garantir contre une nouvelle panne indépendante. Le matériel installé bénéficie de la garantie constructeur (2 à 5 ans selon les équipements)."
    },
    {
      question: "Faut-il couper le courant avant votre arrivée ?",
      answer: "Pour une panne totale, le courant est déjà coupé. Pour un problème localisé (prise qui chauffe, disjoncteur qui saute), vous pouvez couper uniquement le circuit concerné par sécurité. Je vous conseillerai par téléphone selon votre situation."
    }
  ];

  const carouselSlides = [
    {
      id: 1,
      image: "/img_carousel_electric_page/eclairage-led.jpg",
      title: "Éclairage LED",
      description: "Solutions modernes et économies d'énergie"
    },
    {
      id: 2,
      image: "/img_carousel_electric_page/domotique.jpg",
      title: "Domotique",
      description: "Votre maison connectée et intelligente"
    },
    {
      id: 3,
      image: "/img_carousel_hero_home/tableau-electrique.jpg",
      title: "Tableau Électrique",
      description: "Mise aux normes et sécurité de votre installation"
    },
    {
      id: 4,
      image: "/img_carousel_electric_page/videophonie_digicode.jpg",
      title: "Vidéophonie & Accès",
      description: "Contrôle d'accès et sécurité résidentielle"
    },
    {
      id: 5,
      image: "/img_carousel_electric_page/prises.jpg",
      title: "Installation Électrique",
      description: "Appareillage et circuits toutes marques"
    }
  ];

  return (
    <main className="min-h-screen bg-background pt-28 pb-8 md:pt-24 md:pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <ServiceHero
          title="Électricité"
          subtitle="Générale"
          description="Mise aux normes, rénovation et dépannage. Une expertise qualifiée pour votre sécurité et votre confort."
          icon={FcFlashOn}
          theme="electricite"
        />
        
        <ServiceCarousel 
          slides={carouselSlides} 
          theme="electricite" 
        />
        
        <ServiceServices 
          title="Mes" 
          subtitle="Prestations" 
          description="Une expertise certifiée pour des installations électriques sûres, modernes et adaptées à vos besoins."
          features={servicesFeatures}
          theme="electricite"
        />
        
        <ServicePricing 
          title="Mes Tarifs" 
          subtitle="Électricité" 
          description="Une tarification transparente et sans surprise pour toutes vos interventions électriques."
          prices={pricingPlans}
          theme="electricite"
        />
        
        <ServiceUrgency 
          title="Panne ou court-circuit ?" 
          description={
            <p>Je me déplace rapidement sur <span className="font-bold text-accent">Chartres, Broué, Dreux, Anet, Nonancourt, Nogent-le-Roi, Evreux</span> & leurs alentours. Diagnostic immédiat et réparation sécurisée.</p>
          }
          steps={urgencySteps}
          icon={HiBolt}
          theme="electricite"
        />
        
        <ServiceFAQ 
          title="Questions" 
          subtitle="Fréquentes" 
          description="Vous avez des questions ? Retrouvez ici les réponses aux interrogations les plus courantes sur mes services électriques."
          faqs={faqItems}
          theme="electricite"
        />
        
        <ServiceCTA 
          title="Un projet de rénovation ou d'installation ?" 
          description="Discutons de votre projet. Je vous accompagne de la conception à la réalisation avec des conseils personnalisés."
          buttonText="Demander un devis gratuit"
          theme="electricite"
        />
      </div>
    </main>
  );
}
