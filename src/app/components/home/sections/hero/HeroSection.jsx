"use client";
import { useState, useEffect } from 'react';
import HeroBackground from './HeroBackground';
import HeroNavigation from './HeroNavigation';
import HeroContent from './HeroContent';
import HeroProgress from './HeroProgress';

const slides = [
  {
    id: 1,
    title: "Serrure Connectée",
    subtitle: "Accès par code, badge, smartphone ou clé physique",
    image: "/img_carousel_hero_home/netamo.png",
    icon: "🔑"
  },
  {
    id: 2,
    title: "Électricité Générale",
    subtitle: "Vos installations fiables et sécurisées",
    image: "/img_carousel_hero_home/tableau-electrique.optimized.jpg",
    icon: "⚡"
  },
  {
    id: 3,
    title: "Volets Roulants",
    subtitle: "Installation & Réparation motorisée",
    image: "/img_carousel_hero_home/volet-connecte.jpg",
    icon: "🪟"
  },
  {
    id: 4,
    title: "Volets Battants",
    subtitle: "Motorisation & automatisation sur mesure",
    image: "/img_carousel_hero_home/Volet_Battant.avif",
    icon: "🪟"
  },
  {
    id: 5,
    title: "Domotique Intelligente",
    subtitle: "Pilotez votre maison intelligemment",
    image: "/img_carousel_hero_home/domotique.png",
    icon: "📱"
  },
  {
    id: 6,
    title: "Contrôle d'Accès",
    subtitle: "Digicodes & Sécurité haute performance",
    image: "/img_carousel_hero_home/digicode.png",
    icon: "🛡️"
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative mt-36 h-[80vh] overflow-hidden bg-black">
      <HeroBackground slides={slides} currentSlide={currentSlide} />

      <HeroNavigation prevSlide={prevSlide} nextSlide={nextSlide} />

      <HeroContent slides={slides} currentSlide={currentSlide} />

      <HeroProgress currentSlide={currentSlide} totalSlides={slides.length} />
    </section>
  );
}
