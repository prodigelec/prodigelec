"use client";

import ServiceHero from "../../components/services/shared/ServiceHero";
import ServiceServices from "../../components/services/shared/ServiceServices";
import ServicePricing from "../../components/services/shared/ServicePricing";
import ServiceUrgency from "../../components/services/shared/ServiceUrgency";
import ServiceFAQ from "../../components/services/shared/ServiceFAQ";
import ServiceCTA from "../../components/services/shared/ServiceCTA";
import ServiceCarousel from "../../components/services/shared/ServiceCarousel";

// Icons
import { IoKeyOutline } from "react-icons/io5";
import { ShieldAlert, Blinds, Fingerprint, Video, PanelRight, Wrench } from "lucide-react";

export default function SerrurerieContent() {
  const servicesFeatures = [
    {
      icon: Wrench,
      title: "Dépannage & Réparation",
      description: "Panne, blocage ou dysfonctionnement — j'interviens rapidement sur vos équipements électroniques.",
      items: [
        "Serrure connectée en panne",
        "Visiophone ou interphone HS",
        "Volet bloqué ou moteur défaillant",
        "Reconfiguration & mise à jour"
      ]
    },
    {
      icon: Fingerprint,
      title: "Serrure connectée & Digicode",
      description: "Accédez à votre domicile par code, badge, smartphone — ou clé physique en option.",
      items: [
        "Serrure à code numérique",
        "Ouverture par badge ou carte",
        "Serrure connectée smartphone",
        "Cylindre à clé physique en option",
        "Serrure certifiée A2P"
      ]
    },
    {
      icon: Video,
      title: "Vidéophonie & Interphonie",
      description: "Voyez et parlez à vos visiteurs avant d'ouvrir, depuis votre téléphone ou un moniteur.",
      items: [
        "Visiophone couleur",
        "Interphonie audio",
        "Déverrouillage à distance",
        "Compatible smartphone"
      ]
    },
    {
      icon: Blinds,
      title: "Volets Roulants automatisés",
      description: "Automatisez vos volets roulants — pilotage depuis votre smartphone, télécommande ou programmation horaire.",
      items: [
        "Motorisation Alu & PVC",
        "Pilotage smartphone",
        "Programmation horaire",
        "Télécommande & domotique"
      ]
    },
    {
      icon: PanelRight,
      title: "Volets Battants motorisés",
      description: "Motorisez vos volets battants existants — confort et automatisation sans changer de menuiserie.",
      items: [
        "Compatible bois, Alu & PVC",
        "Motorisation discrète intégrée",
        "Pilotage smartphone & télécommande",
        "Programmation horaire & domotique"
      ]
    }
  ];

  const pricingPlans = [
    {
      title: "Serrure connectée & Digicode",
      price: "Sur Devis",
      description: "Installation d'un accès électronique sécurisé.",
      features: [
        "Serrure à code ou badge",
        "Serrure connectée smartphone",
        "Serrure certifiée A2P disponible",
        "Devis gratuit jusqu'à 30km"
      ],
      highlight: false
    },
    {
      title: "Vidéophonie & Interphonie",
      price: "Sur Devis",
      description: "Installation d'un visiophone ou interphone.",
      features: [
        "Visiophone couleur ou audio",
        "Déverrouillage à distance",
        "Compatible smartphone",
        "Devis gratuit jusqu'à 30km"
      ],
      highlight: false
    },
    {
      title: "Volets automatisés",
      price: "Sur Devis",
      description: "Motorisation et automatisation de vos volets.",
      features: [
        "Motorisation Alu & PVC",
        "Pilotage smartphone & télécommande",
        "Programmation horaire",
        "Devis gratuit jusqu'à 30km"
      ],
      highlight: false
    },
    {
      title: "Dépannage Urgence",
      price: "À partir de 120€ TTC",
      description: "Panne ou blocage sur vos équipements électroniques.",
      features: [
        "Serrure connectée, visiophone, volet",
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
      question: "Qu'est-ce qu'une serrure connectée ?",
      answer: "Une serrure connectée permet d'ouvrir votre porte par code, badge, carte ou application smartphone. La plupart des modèles conservent un cylindre à clé physique en option pour un accès de secours. Elle peut aussi envoyer des notifications à chaque ouverture. Je propose l'installation et la configuration complète."
    },
    {
      question: "Peut-on installer un digicode sur une porte existante ?",
      answer: "Oui, dans la plupart des cas on peut ajouter un clavier à code ou un cylindre électronique sur votre porte actuelle sans la remplacer. Je me déplace pour évaluer la faisabilité et vous proposer la solution adaptée."
    },
    {
      question: "La vidéophonie fonctionne-t-elle sur smartphone ?",
      answer: "Oui, les systèmes que j'installe sont compatibles avec votre smartphone. Vous pouvez voir et parler à vos visiteurs depuis n'importe où, et déverrouiller à distance si vous le souhaitez."
    },
    {
      question: "Intervenez-vous pour les volets roulants bloqués ?",
      answer: "Oui, j'interviens sur les volets roulants aluminium et PVC. Je peux débloquer, motoriser ou remplacer le mécanisme."
    },
    {
      question: "Que faire si ma serrure connectée ne répond plus ?",
      answer: "Plusieurs causes possibles : batterie déchargée, problème de connexion ou défaut matériel. Je diagnostique à distance par téléphone si possible, sinon je me déplace pour réparer ou remplacer l'équipement."
    },
    {
      question: "Intervenez-vous en urgence ?",
      answer: "Oui, j'interviens en dépannage sur les équipements électroniques que j'installe et entretiens : serrures connectées, visiophones, interphones et volets motorisés. Le tarif est annoncé avant tout déplacement."
    }
  ];

  const carouselSlides = [
    {
      id: 1,
      image: "/img_carousel_serrure_page/serrure_connectee.jpg",
      title: "Serrure connectée & Digicode",
      description: "Accès par code, badge, smartphone ou clé physique"
    },
    {
      id: 2,
      image: "/img_carousel_electric_page/videophonie_digicode.jpg",
      title: "Vidéophonie & Interphonie",
      description: "Voyez et parlez à vos visiteurs depuis votre téléphone"
    },
    {
      id: 3,
      image: "/img_carousel_serrure_page/tahoma_switch.avif",
      title: "Volets Roulants",
      description: "Motorisation et pilotage smartphone ou télécommande"
    },
    {
      id: 4,
      image: "/img_carousel_hero_home/Volet_Battant.avif",
      title: "Volets Battants",
      description: "Motorisation et automatisation de volets battants"
    },
    {
      id: 5,
      image: "/img_carousel_serrure_page/videosurveillance_alternative.png",
      title: "Vidéosurveillance",
      description: "Caméras haute définition pour sécuriser vos extérieurs"
    },
    {
      id: 6,
      image: "/img_carousel_serrure_page/urmet_aura_alternative.png",
      title: "Visiophone Design",
      description: "Platine de rue moderne avec finition haut de gamme"
    }
  ];

  return (
    <main className="min-h-screen bg-background pt-28 pb-8 md:pt-24 md:pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <ServiceHero
          title="Serrurerie &"
          subtitle="Sécurité"
          description="Serrures connectées, digicodes, vidéophonie et volets motorisés. Une expertise électronique pour sécuriser votre domicile."
          icon={IoKeyOutline}
          theme="serrurerie"
        />
        
        <ServiceCarousel 
          slides={carouselSlides} 
          theme="serrurerie" 
        />
        
        <ServiceServices 
          title="Mes" 
          subtitle="Prestations" 
          description="Un savoir-faire artisanal combiné aux technologies de sécurité les plus modernes pour votre sérénité."
          features={servicesFeatures}
          theme="serrurerie"
        />
        
        <ServicePricing 
          title="Mes Tarifs" 
          subtitle="Serrurerie" 
          description="Un savoir-faire artisanal avec une tarification claire et sans surprise."
          prices={pricingPlans}
          theme="serrurerie"
        />
        
        <ServiceUrgency
          title="Panne ou blocage sur vos équipements ?"
          description={
            <p>J'interviens rapidement sur <span className="font-bold text-primary">Chartres, Broué, Dreux, Anet, Nonancourt, Nogent-le-Roi, Évreux</span> & leurs alentours. Tarifs annoncés avant intervention, pas de surprise.</p>
          }
          steps={urgencySteps}
          icon={ShieldAlert}
          theme="serrurerie"
        />
        
        <ServiceFAQ 
          title="Questions" 
          subtitle="Fréquentes" 
          description="Vous avez des questions ? Retrouvez ici les réponses aux interrogations les plus courantes sur mes services de serrurerie."
          faqs={faqItems}
          theme="serrurerie"
        />
        
        <ServiceCTA 
          title="Besoin de sécuriser votre domicile ?" 
          description="Demandez un audit sécurité gratuit. Je vous conseillerai sur les meilleures solutions pour protéger votre maison."
          buttonText="Demander mon devis"
          theme="serrurerie"
        />
      </div>
    </main>
  );
}
