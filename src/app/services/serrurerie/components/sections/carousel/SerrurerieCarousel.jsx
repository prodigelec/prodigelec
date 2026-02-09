"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
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

import Image from "next/image";

export default function SerrurerieCarousel() {
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
                <div className="w-12 h-1 bg-primary mb-6 rounded-full" />
                <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter leading-none uppercase italic">
                  {slides[current].title}
                </h2>
                <p className="text-xl md:text-2xl text-primary font-medium tracking-wide">
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
            className="h-full bg-primary"
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
            className="p-4 rounded-full bg-primary text-background transition-all hover:scale-110 active:scale-95 shadow-lg shadow-primary/20"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="absolute top-12 right-12 flex gap-2 z-30">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 transition-all duration-500 rounded-full ${i === current ? 'w-8 bg-primary' : 'w-2 bg-white/30'}`}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
