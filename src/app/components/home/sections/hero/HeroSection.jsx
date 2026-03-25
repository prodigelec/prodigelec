"use client";
import { useState, useEffect } from 'react';
import HeroBackground from './HeroBackground';
import HeroNavigation from './HeroNavigation';
import HeroContent from './HeroContent';
import HeroProgress from './HeroProgress';

const slides = [
  {
    id: 1,
    title: "Vidéophonie & Interphonie",
    subtitle: "Voyez et parlez à vos visiteurs depuis votre téléphone",
    image: "/img_carousel_securite_page/videophonie_digicode.jpg",
    icon: "📹"
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
    title: "Volets Battants",
    subtitle: "Motorisation & automatisation sur mesure",
    image: "/img_carousel_hero_home/Volet_Battant.avif",
    icon: "🪟"
  },
  {
    id: 4,
    title: "Domotique Intelligente",
    subtitle: "Pilotez votre maison intelligemment",
    image: "/img_carousel_hero_home/domotique.png",
    icon: "📱"
  },
  {
    id: 5,
    title: "Contrôle d'Accès",
    subtitle: "Digicodes & Sécurité haute performance",
    image: "/img_carousel_hero_home/digicode.png",
    icon: "🛡️"
  },
  {
    id: 6,
    title: "Vidéosurveillance",
    subtitle: "Sécurisez vos espaces de jour comme de nuit",
    image: "/img_carousel_hero_home/videosurveillance.avif",
    icon: "🎥",
    objectFit: "contain"
  },
  {
    id: 7,
    title: "Visiophone Urmet Aura",
    subtitle: "Le visiophone avec platine de rue haute qualité",
    image: "/img_carousel_hero_home/urmet-aura.avif",
    icon: "📞",
    objectFit: "contain"
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

  const safeSlide = currentSlide % slides.length;

  return (
    <section className="relative mt-16 md:mt-20 lg:mt-0 h-[80vh] lg:h-screen overflow-hidden bg-black">
      <HeroBackground slides={slides} currentSlide={safeSlide} />

      <HeroNavigation prevSlide={prevSlide} nextSlide={nextSlide} />

      <HeroContent slides={slides} currentSlide={safeSlide} />

      <HeroProgress currentSlide={safeSlide} totalSlides={slides.length} />
    </section>
  );
}
