"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Placeholder images - using generic tech images or available ones
const slides = [
  {
    id: 1,
    image: "/img_carousel_web_page/pc.jpg",
    title: "Dépannage & Assistance",
    description: "Une aide rapide à domicile pour tous vos problèmes"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=2000&auto=format&fit=crop",
    title: "Vente & Matériel",
    description: "PC neufs, reconditionnés et assemblage sur mesure"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2000&auto=format&fit=crop",
    title: "Création Web",
    description: "Sites vitrines modernes pour artisans et TPE"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop",
    title: "Sécurité & Données",
    description: "Protection antivirus et récupération de données"
  }
];

export default function WebCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const paginate = (newDirection) => {
    setCurrent((prev) => (prev + newDirection + slides.length) % slides.length);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="relative h-[60vh] w-full overflow-hidden rounded-3xl border border-white/10 mb-24"
    >
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          {/* Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] ease-linear transform hover:scale-105"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/50 to-transparent" />

          {/* Content */}
          <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-5xl font-black text-white mb-2">
                {slides[current].title}
              </h2>
              <p className="text-lg text-cyan-400 font-medium">
                {slides[current].description}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <div className="absolute bottom-8 right-8 flex gap-4 z-10">
        <button 
          onClick={() => paginate(-1)}
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-colors border border-white/10"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={() => paginate(1)}
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-colors border border-white/10"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </motion.div>
  );
}
