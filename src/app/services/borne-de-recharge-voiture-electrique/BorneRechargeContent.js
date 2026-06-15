"use client";

import ServiceHero from "../../components/services/shared/ServiceHero";
import ServiceServices from "../../components/services/shared/ServiceServices";
import ServicePricing from "../../components/services/shared/ServicePricing";
import ServiceUrgency from "../../components/services/shared/ServiceUrgency";
import ServiceFAQ from "../../components/services/shared/ServiceFAQ";
import ServiceCTA from "../../components/services/shared/ServiceCTA";
import ServiceCarousel from "../../components/services/shared/ServiceCarousel";
import ServiceCityLinks from "../../components/services/shared/ServiceCityLinks";

import { BatteryCharging, Zap } from "lucide-react";
import {
  HiShieldCheck,
  HiOutlineLightBulb,
  HiOutlineHomeModern,
  HiOutlineCpuChip,
  HiOutlineCurrencyEuro,
  HiOutlineDevicePhoneMobile,
} from "react-icons/hi2";

export default function BorneRechargeContent() {
  const servicesFeatures = [
    {
      icon: HiOutlineHomeModern,
      title: "Prise Renforcée Green'Up",
      description: "La solution éprouvée Legrand pour recharger votre véhicule électrique en toute sécurité à domicile, sans gros chantier.",
      items: [
        "Recharge jusqu'à 2,3 kW (~12 km/h)",
        "Compatible tous véhicules",
        "Protection différentielle dédiée",
        "Pose rapide en 1/2 journée"
      ]
    },
    {
      icon: HiOutlineCpuChip,
      title: "Borne Connectée 3,7 kW",
      description: "Wallbox Legrand avec pilotage smartphone, programmation heures creuses et suivi de consommation.",
      items: [
        "Recharge 16A monophasé",
        "Pilotage app Legrand",
        "Programmation heures creuses",
        "Étanche IP66 intérieur/extérieur"
      ]
    },
    {
      icon: HiShieldCheck,
      title: "Mise en Conformité Tableau",
      description: "Mise en conformité de votre installation électrique pour accueillir la borne en toute sécurité.",
      items: [
        "Disjoncteur 32A dédié",
        "Protection 30mA Type B",
        "Mise à la terre vérifiée",
        "Attestation NF C 15-100"
      ]
    },
    {
      icon: HiOutlineCurrencyEuro,
      title: "Devis & Facture Détaillés",
      description: "Facture détaillée avec matériel, main d'œuvre et attestation, à conserver pour vos aides éventuelles ou votre garantie.",
      items: [
        "Devis gratuit après visite",
        "Facture détaillée matériel + pose",
        "Attestation NF C 15-100 fournie",
        "Conseil sur les aides en vigueur"
      ]
    },
    {
      icon: HiOutlineDevicePhoneMobile,
      title: "Étude & Conseil Personnalisés",
      description: "Visite technique et recommandation adaptée à votre véhicule, usage et configuration du logement.",
      items: [
        "Audit installation existante",
        "Choix prise vs borne motivé",
        "Devis détaillé sans engagement",
        "Coordination Enedis si besoin"
      ]
    },
    {
      icon: HiOutlineLightBulb,
      title: "Service & Maintenance",
      description: "Suivi après installation, mise à jour firmware, contrôle annuel et garantie constructeur Legrand.",
      items: [
        "Garantie matériel 2 ans",
        "Garantie pose 2 ans",
        "Mise à jour firmware Legrand",
        "Contrôle annuel sur demande"
      ]
    },
  ];

  const pricingPlans = [
    {
      title: "Prise Renforcée Green'Up",
      price: "À partir de 600€ TTC",
      description: "Pose d'une prise Green'Up Legrand 2,3 kW pour véhicule électrique.",
      features: [
        "Prise Green'Up Legrand",
        "Disjoncteur 16A dédié",
        "Protection 30mA inclus",
        "Pose & raccordement 1/2 journée"
      ],
      highlight: false
    },
    {
      title: "Borne Wallbox 3,7 kW",
      price: "À partir de 1 200€ TTC",
      description: "Borne connectée Legrand 3,7 kW avec pilotage smartphone et IP66.",
      features: [
        "Wallbox Legrand 3,7 kW",
        "Pilotage app Legrand",
        "Étanche IP66 ext./int.",
        "Programmation heures creuses"
      ],
      highlight: true,
      tag: "Recommandé"
    }
  ];

  const urgencySteps = [
    { step: "01", title: "Étude du Besoin", desc: "Discussion véhicule, usage, configuration logement" },
    { step: "02", title: "Visite Technique", desc: "Audit tableau, mesure du tirage, devis détaillé" },
    { step: "03", title: "Installation Pro", desc: "Pose, raccordement, mise en service & démo app" },
    { step: "04", title: "Mise en Service", desc: "Démo app, facture détaillée et attestation NF C 15-100" }
  ];

  const faqItems = [
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

  const carouselSlides = [
    {
      id: 1,
      image: "/img_carousel_borne_recharge/legrand-femme-recharge-domicile.jpg",
      title: "Recharge à Domicile",
      description: "Solutions Legrand certifiées NF C 15-100"
    },
    {
      id: 2,
      image: "/img_carousel_borne_recharge/legrand-homme-recharge-maison.jpg",
      title: "Simple & Sécurisé",
      description: "Branchez, programmez, partez l'esprit tranquille"
    },
    {
      id: 3,
      image: "/img_carousel_borne_recharge/legrand-greenup-cable-jaune.jpg",
      title: "Prise Renforcée Green'Up",
      description: "La solution éprouvée Legrand pour démarrer en VE"
    },
    {
      id: 4,
      image: "/img_carousel_borne_recharge/legrand-maison-moderne.jpg",
      title: "Près de Chez Vous",
      description: "Artisan local — intervention 27, 28 & 78"
    }
  ];

  return (
    <main className="min-h-screen bg-background pt-28 pb-8 md:pt-24 md:pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <ServiceHero
          title="Recharge Véhicule"
          subtitle="Électrique"
          description="Borne connectée 3,7 kW ou prise renforcée Green'Up : installation Legrand certifiée NF C 15-100, étanche IP66 et pilotable depuis votre smartphone."
          icon={BatteryCharging}
          theme="borne"
        />

        <ServiceCarousel slides={carouselSlides} theme="borne" />

        <ServiceServices
          title="Mes"
          subtitle="Solutions"
          description="De la prise renforcée à la borne connectée : équipements Legrand pour votre véhicule électrique, en toute sécurité."
          features={servicesFeatures}
          theme="borne"
        />

        <ServicePricing
          title="Mes Tarifs"
          subtitle="Borne VE"
          description="Tarification transparente, devis détaillé et attestation NF C 15-100 fournie à la mise en service."
          prices={pricingPlans}
          theme="borne"
        />

        <ServiceUrgency
          title="Vous passez à l'électrique ?"
          description={
            <p>Je me déplace sur <span className="font-bold text-emerald-400">Chartres, Broué, Dreux, Houdan, Anet, Nonancourt, Nogent-le-Roi, Évreux</span> & leurs alentours pour étudier votre projet. Devis gratuit après visite technique.</p>
          }
          steps={urgencySteps}
          icon={Zap}
          theme="borne"
        />

        <ServiceFAQ
          title="Questions"
          subtitle="Fréquentes"
          description="Tout ce que vous devez savoir avant d'installer une borne de recharge pour votre véhicule électrique."
          faqs={faqItems}
          theme="borne"
        />

        <ServiceCityLinks theme="borne" />

        <ServiceCTA
          title="Prêt à passer à la mobilité électrique ?"
          description="Discutons de votre projet. Visite technique gratuite et conseil personnalisé selon votre véhicule, votre logement et votre budget."
          buttonText="Demander un devis gratuit"
          theme="borne"
        />
      </div>
    </main>
  );
}
