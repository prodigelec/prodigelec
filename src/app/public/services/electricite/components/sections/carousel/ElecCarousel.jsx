"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const slides = [
  {
    id: 1,
    image: "/img_carousel_electric_page/eclairage-led.jpg",
    title: "Éclairage LED",
    description: "Solutions modernes et économies d'énergie",
  },
  {
    id: 2,
    image: "/img_carousel_electric_page/domotique.jpg",
    title: "Domotique",
    description: "Votre maison connectée et intelligente",
  },
  {
    id: 3,
    image: "/img_carousel_hero_home/tableau-electrique.jpg",
    title: "Tableau Électrique",
    description: "Mise aux normes et sécurité de votre installation",
  },
  {
    id: 4,
    image: "/img_carousel_electric_page/videophonie_digicode.jpg",
    title: "Vidéophonie & Accès",
    description: "Contrôle d'accès et sécurité résidentielle",
  },
  {
    id: 5,
    image: "/img_carousel_electric_page/prises.jpg",
    title: "Installation Électrique",
    description: "Appareillage et circuits toutes marques",
  },
];

export default function ElecCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const paginate = (newDirection) => {
    setCurrent((prev) => (prev + newDirection + slides.length) % slides.length);
  };

  return (
    <div className="relative group mb-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative h-[65vh] w-full overflow-hidden rounded-[40px] border border-white/10 shadow-2xl"
      >
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            {/* Image with subtle zoom */}
            <motion.div
              animate={{ scale: [1, 1.05] }}
              transition={{ duration: 6, ease: "linear" }}
              className="absolute inset-0"
            >
              <Image
                src={slides[current].image}
                alt={slides[current].title}
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            {/* Multi-layered gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="max-w-2xl"
              >
                <div className="w-12 h-1 bg-accent mb-6 rounded-full shadow-[0_0_15px_rgba(var(--color-accent-rgb),0.5)]" />
                <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter leading-none uppercase italic">
                  {slides[current].title}
                </h2>
                <p className="text-xl md:text-2xl text-accent font-medium tracking-wide">
                  {slides[current].description}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Progress Bar Container */}
        <div className="absolute top-0 left-0 w-full h-1 bg-white/10 overflow-hidden z-20">
          <motion.div
            key={current}
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 6, ease: "linear" }}
            className="h-full bg-accent shadow-[0_0_10px_rgba(var(--color-accent-rgb),0.8)]"
          />
        </div>

        {/* Navigation Controls */}
        <div className="absolute bottom-12 right-12 flex gap-3 z-30">
          <button
            onClick={() => paginate(-1)}
            className="p-4 rounded-full bg-white/5 hover:bg-white/20 text-white backdrop-blur-xl transition-all border border-white/10 hover:scale-110 active:scale-95"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => paginate(1)}
            className="p-4 rounded-full bg-accent text-background transition-all hover:scale-110 active:scale-95 shadow-lg shadow-accent/20"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="absolute top-12 right-12 flex gap-2 z-30">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 transition-all duration-500 rounded-full ${i === current ? "w-8 bg-accent shadow-[0_0_8px_rgba(var(--color-accent-rgb),0.5)]" : "w-2 bg-white/30"}`}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
