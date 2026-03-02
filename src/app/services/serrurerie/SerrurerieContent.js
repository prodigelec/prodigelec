"use client";

import ServiceHero from "../../components/services/shared/ServiceHero";
import ServiceServices from "../../components/services/shared/ServiceServices";
import ServicePricing from "../../components/services/shared/ServicePricing";
import ServiceUrgency from "../../components/services/shared/ServiceUrgency";
import ServiceFAQ from "../../components/services/shared/ServiceFAQ";
import ServiceCTA from "../../components/services/shared/ServiceCTA";
import ServiceCarousel from "../../components/services/shared/ServiceCarousel";

// Icons
import { IoKeyOutline, IoKey } from "react-icons/io5";
import { ShieldAlert, Check, ShieldCheck, Lock, Blinds } from "lucide-react";

export default function SerrurerieContent() {
  const servicesFeatures = [
    {
      icon: IoKey,
      title: "Clés & Badges",
      description: "Service de reproduction de clés et copie de badges d'immeuble.",
      items: [
        "Reproduction de clés toutes marques",
        "Copie de badges d'immeuble",
        "Service rapide et garanti",
        "Clés brevetées et sécurisées"
      ]
    },
    {
      icon: Lock,
      title: "Remplacement & Installation",
      description: "Installation de serrures toutes marques pour votre porte d'entrée, garage ou portail.",
      items: [
        "Changement de cylindre",
        "Serrure multipoints",
        "Installation de verrous",
        "Poignées de sécurité"
      ]
    },
    {
      icon: ShieldCheck,
      title: "Haute Sécurité",
      description: "Renforcez la résistance de votre habitation contre les tentatives d'effraction.",
      items: [
        "Installation serrure A2P*",
        "Cornières anti-pinces",
        "Barre de pivotement",
        "Protections de cylindre"
      ]
    },
    {
      icon: Blinds,
      title: "Fermetures & Volets",
      description: "Réparation et installation de vos systèmes de fermeture extérieurs.",
      items: [
        "Volets roulants (Acier, Alu, PVC)",
        "Réglage portes & fenêtres",
        "Motorisation de volets",
        "Remplacement de manivelles"
      ]
    }
  ];

  const pricingPlans = [
    {
      title: "Porte Claquée",
      price: "À partir de 120€ TTC",
      description: "Ouverture simple (sans dégâts).",
      features: [
        "Ouverture à la radio (bypass)",
        "Déplacement Zone 1 inclus",
        "1h de main d'œuvre incluse",
        "Hors zone : Frais déplacement +"
      ],
      highlight: true,
      tag: "Urgence"
    },
    {
      title: "Porte Fermée / Clé perdue",
      price: "Sur Devis",
      description: "Ouverture technique (perçage).",
      features: [
        "Ouverture destructive (si nécessaire)",
        "Diagnostic sécurité complet",
        "Matériel de remplacement en supplément",
        "Devis gratuit (Zone 1 & 2)",
        "Frais déduits si devis accepté (Zone 3+)"
      ],
      highlight: false
    },
    {
      title: "Mise en Sécurité",
      price: "Sur Devis",
      description: "Blindage et renforcement.",
      features: [
        "Changement de serrure 3 points",
        "Installation cornières anti-pinces",
        "Poignée de sécurité renforcée",
        "Diagnostic sécurité offert"
      ],
      highlight: false
    },
    {
      title: "Autres demandes",
      price: "Sur Devis",
      description: "Toute autre prestation.",
      features: [
        "Réparation de volets",
        "Réglage de portes",
        "Maintenance préventive",
        "Conseils personnalisés"
      ],
      highlight: false
    }
  ];

  const urgencySteps = [
    { step: "01", title: "Appel & Diagnostic", desc: "Estimation du prix par téléphone si possible" },
    { step: "02", title: "Intervention", desc: "Ouverture fine ou remplacement soigné" },
    { step: "03", title: "Stock & Sécurité", desc: "Matériel en camion pour sécurisation immédiate" },
    { step: "04", title: "Garantie", desc: "Vérification finale et essai de bon fonctionnement" }
  ];

  const faqItems = [
    {
      question: "Combien coûte l'ouverture d'une porte claquée ?",
      answer: "Le tarif pour une ouverture de porte est annoncé directement par téléphone selon votre situation (type de serrure, heure d'intervention). Aucun frais caché, le prix convenu au téléphone est celui que vous paierez."
    },
    {
      question: "Peut-on ouvrir une porte sans casser la serrure ?",
      answer: "Pour une porte simplement claquée, oui ! J'utilise des techniques d'ouverture fine qui préservent la serrure. En revanche, en cas de perte de clé, clé cassée dans le cylindre ou clé bloquée, le remplacement de la serrure est nécessaire. Je vous informe toujours du tarif avant d'intervenir."
    },
    {
      question: "Proposez-vous le service de reproduction de clés ?",
      answer: "Oui, je propose la reproduction de clés toutes marques ainsi que la copie de badges d'immeuble. Le service est rapide et les clés sont garanties."
    },
    {
      question: "Qu'est-ce qu'une serrure A2P ?",
      answer: "La certification A2P (Assurance Prévention Protection) garantit la résistance de la serrure aux tentatives d'effraction. Elle est classée en 3 niveaux (A2P*, A2P**, A2P***) selon le temps de résistance. C'est souvent exigé par les assurances pour les logements."
    },
    {
      question: "Intervenez-vous pour les volets roulants bloqués ?",
      answer: "Oui, j'interviens sur tous types de volets roulants (acier, aluminium, PVC). Je peux débloquer, réparer ou remplacer le mécanisme, motoriser vos volets manuels et effectuer tous réglages nécessaires."
    },
    {
      question: "Puis-je faire installer une serrure multipoints sur ma porte actuelle ?",
      answer: "Dans la plupart des cas oui, à condition que votre porte soit en bon état et suffisamment épaisse. Je me déplace pour évaluer la faisabilité et vous proposer la solution la plus adaptée à votre porte et votre budget."
    }
  ];

  const carouselSlides = [
    {
      id: 1,
      image: "/img_carousel_serrure_page/depannage_urgent.jpg",
      title: "Dépannage Urgent",
      description: "Ouverture fine et dépannage immédiat 6j/7"
    },
    {
      id: 2,
      image: "/img_carousel_serrure_page/serrure_haute_securite.jpg",
      title: "Serrure multipoints",
      description: "Installation de serrures de haute sécurité"
    },
    {
      id: 4,
      image: "/img_carousel_serrure_page/volet_roulant_chambre(2).jpg",
      title: "Volets Roulants",
      description: "Motorisation et réparation de tabliers"
    },
    {
      id: 5,
      image: "/img_carousel_serrure_page/cles.jpg",
      title: "Reproduction de Clés",
      description: "Clés brevetées et badges d'immeuble"
    },
    {
      id: 6,
      image: "/img_carousel_serrure_page/porte_blindée.jpg",
      title: "Porte Blindée",
      description: "Porte blindée et sécurisation"
    }
  ];

  return (
    <main className="min-h-screen bg-background pt-28 pb-8 md:pt-24 md:pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <ServiceHero
          title="Serrurerie &"
          subtitle="Sécurité"
          description="Ouverture de porte, sécurisation et blindage. Une expertise qualifiée pour protéger votre domicile."
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
          title="Porte claquée ou serrure bloquée ?" 
          description={
            <p>Je me déplace rapidement sur <span className="font-bold text-primary">Chartres, Broué, Dreux, Anet, Nonancourt, Nogent-le-Roi, Evreux</span> & leurs alentours. Tarifs annoncés avant intervention, pas de surprise.</p>
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
