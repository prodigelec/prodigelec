"use client";
import { useState, useEffect } from 'react';
import HeroBackground from './HeroBackground';
import HeroNavigation from './HeroNavigation';
import HeroContent from './HeroContent';
import HeroProgress from './HeroProgress';

const slides = [
  {
    id: 1,
    title: "Expertise Serrurerie",
    subtitle: "Votre sécurité sur-mesure",
    image: "/img_carousel_hero_home/serrurerie.jpg",
    icon: "🔑"
  },
  {
    id: 2,
    title: "Électricité Pro",
    subtitle: "Vos installations fiables et sécurisées",
    image: "/img_carousel_hero_home/tableau-electrique.jpg",
    icon: "⚡"
  },
  {
    id: 3,
    title: "Solutions IT",
    subtitle: "L'innovation au service de votre réussite",
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=1920&h=1080&fit=crop",
    icon: "💻"
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [currentSlide, isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen overflow-hidden bg-black">
      <HeroBackground slides={slides} currentSlide={currentSlide} />
      
      <HeroNavigation prevSlide={prevSlide} nextSlide={nextSlide} />
      
      <HeroContent slides={slides} currentSlide={currentSlide} />
      
      <HeroProgress currentSlide={currentSlide} totalSlides={slides.length} />
    </section>
  );
}
