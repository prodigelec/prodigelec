"use client";

import ServiceHero from "../../components/services/shared/ServiceHero";
import ServiceServices from "../../components/services/shared/ServiceServices";
import ServicePricing from "../../components/services/shared/ServicePricing";
import ServiceUrgency from "../../components/services/shared/ServiceUrgency";
import ServiceFAQ from "../../components/services/shared/ServiceFAQ";
import ServiceCTA from "../../components/services/shared/ServiceCTA";
import ServiceCarousel from "../../components/services/shared/ServiceCarousel";

import { ShieldCheck, ShieldAlert, Fingerprint, Video, Bell, Camera } from "lucide-react";

export default function SecuriteContent() {
  const servicesFeatures = [
    {
      icon: Fingerprint,
      title: "Digicode & Contrôle d'accès",
      description: "Sécurisez vos accès avec un clavier à code ou un système de badges — sans clé mécanique.",
      items: [
        "Clavier à code numérique",
        "Accès par badge ou carte",
        "Contrôle d'accès connecté",
        "Compatible smartphone"
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
      icon: Bell,
      title: "Alarmes & Détection",
      description: "Protégez votre domicile ou local professionnel avec un système d'alarme adapté à vos besoins.",
      items: [
        "Centrale d'alarme",
        "Détecteurs de mouvement",
        "Alertes smartphone",
        "Surveillance périmétrique"
      ]
    },
    {
      icon: Camera,
      title: "Vidéosurveillance",
      description: "Surveillez votre propriété à distance avec des caméras HD, en intérieur comme en extérieur.",
      items: [
        "Caméras HD intérieur & extérieur",
        "Accès à distance via smartphone",
        "Enregistrement continu",
        "Vision nocturne"
      ]
    }
  ];

  const pricingPlans = [
    {
      title: "Digicode & Vidéophonie",
      price: "Sur Devis",
      description: "Installation d'un système de contrôle d'accès ou de vidéophonie.",
      features: [
        "Clavier à code ou badge",
        "Visiophone ou interphone",
        "Déverrouillage à distance",
        "Devis gratuit jusqu'à 30km"
      ],
      highlight: false
    },
    {
      title: "Alarmes & Vidéosurveillance",
      price: "Sur Devis",
      description: "Installation d'un système d'alarme ou de caméras de surveillance.",
      features: [
        "Centrale d'alarme + détecteurs",
        "Caméras HD intérieur & extérieur",
        "Alertes & accès smartphone",
        "Devis gratuit jusqu'à 30km"
      ],
      highlight: false
    },
    {
      title: "Dépannage Urgence",
      price: "À partir de 120€ TTC",
      description: "Panne ou blocage sur vos équipements de sécurité.",
      features: [
        "Digicode, visiophone, alarme, caméra",
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
      question: "Qu'est-ce que le contrôle d'accès par digicode ?",
      answer: "Un digicode permet de sécuriser l'entrée de votre domicile ou local professionnel par code, badge ou carte. Il remplace la clé mécanique tout en offrant plus de flexibilité : codes temporaires, accès à distance, historique des entrées. Je me charge de l'installation et de la configuration complète."
    },
    {
      question: "La vidéophonie fonctionne-t-elle sur smartphone ?",
      answer: "Oui, les systèmes que j'installe sont compatibles avec votre smartphone. Vous pouvez voir et parler à vos visiteurs depuis n'importe où, et déverrouiller à distance si vous le souhaitez."
    },
    {
      question: "Proposez-vous l'installation d'alarmes ?",
      answer: "Oui, j'installe des systèmes d'alarme pour particuliers et professionnels : centrale d'alarme, détecteurs de mouvement, alertes smartphone. Je vous conseille sur la solution adaptée à votre configuration."
    },
    {
      question: "Proposez-vous la vidéosurveillance ?",
      answer: "Oui, j'installe des caméras HD pour surveiller votre propriété à distance, en intérieur comme en extérieur. Les systèmes sont accessibles via smartphone avec enregistrement continu et vision nocturne."
    },
    {
      question: "Intervenez-vous en urgence ?",
      answer: "Oui, j'interviens en dépannage sur les équipements que j'installe et entretiens : digicodes, visiophones, interphones, alarmes, caméras. Le tarif est annoncé avant tout déplacement."
    }
  ];

  const carouselSlides = [
    {
      id: 1,
      image: "/img_carousel_hero_home/digicode.png",
      title: "Digicode & Contrôle d'accès",
      description: "Accès par code, badge ou smartphone — sans clé mécanique"
    },
    {
      id: 2,
      image: "/img_carousel_securite_page/videophonie_digicode.jpg",
      title: "Vidéophonie & Interphonie",
      description: "Voyez et parlez à vos visiteurs depuis votre téléphone"
    }
  ];

  return (
    <main className="min-h-screen bg-background pt-28 pb-8 md:pt-24 md:pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <ServiceHero
          title="Sécurité"
          subtitle="Électronique"
          description="Digicode, vidéophonie, alarmes et vidéosurveillance. Une expertise électronique pour sécuriser votre domicile ou local professionnel."
          icon={ShieldCheck}
          theme="securite"
        />

        <ServiceCarousel
          slides={carouselSlides}
          theme="securite"
        />

        <ServiceServices
          title="Mes"
          subtitle="Prestations"
          description="Un savoir-faire artisanal combiné aux technologies de sécurité les plus modernes pour votre sérénité."
          features={servicesFeatures}
          theme="securite"
        />

        <ServicePricing
          title="Mes Tarifs"
          subtitle="Sécurité Électronique"
          description="Un savoir-faire artisanal avec une tarification claire et sans surprise."
          prices={pricingPlans}
          theme="securite"
        />

        <ServiceUrgency
          title="Panne sur vos équipements de sécurité ?"
          description={
            <p>J&apos;interviens rapidement sur <span className="font-bold text-primary">Chartres, Broué, Dreux, Anet, Nonancourt, Nogent-le-Roi, Évreux</span> &amp; leurs alentours. Tarifs annoncés avant intervention, pas de surprise.</p>
          }
          steps={urgencySteps}
          icon={ShieldAlert}
          theme="securite"
        />

        <ServiceFAQ
          title="Questions"
          subtitle="Fréquentes"
          description="Vous avez des questions ? Retrouvez ici les réponses aux interrogations les plus courantes sur mes services de sécurité électronique."
          faqs={faqItems}
          theme="securite"
        />

        <ServiceCTA
          title="Besoin de sécuriser votre domicile ?"
          description="Demandez un audit sécurité gratuit. Je vous conseillerai sur les meilleures solutions pour protéger votre maison."
          buttonText="Demander mon devis"
          theme="securite"
        />
      </div>
    </main>
  );
}
