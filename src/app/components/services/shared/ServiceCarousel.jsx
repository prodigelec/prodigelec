"use client";
import { useState, useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function ServiceCarousel({ slides, theme = "electricite" }) {
  const [current, setCurrent] = useState(0);

  const themeConfig = {
    electricite: {
      barColor: "bg-accent",
      barShadow: "shadow-[0_0_15px_rgba(var(--color-accent-rgb),0.5)]"
    },
    serrurerie: {
      barColor: "bg-primary",
      barShadow: "" // Original serrurerie didn't have a shadow on the bar
    }
  };

  const config = themeConfig[theme];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative group mb-24">
      <m.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative h-[65vh] w-full overflow-hidden rounded-[40px] border border-white/10 shadow-2xl"
      >
        <AnimatePresence initial={false} mode="wait">
          <m.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            {/* Image with subtle zoom */}
            <m.div
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
            </m.div>

            {/* Multi-layered gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-background via-background/40 to-transparent" />
            <div className="absolute inset-0 bg-linear-to-r from-background/60 via-transparent to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
              <m.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="max-w-2xl"
              >
                <div className={`w-12 h-1 ${config.barColor} mb-6 rounded-full ${config.barShadow}`} />
                <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter leading-none uppercase italic">
                  {slides[current].title}
                </h2>
                <p className="text-lg md:text-xl text-gray-200 font-medium">
                  {slides[current].description}
                </p>
              </m.div>
            </div>
          </m.div>
        </AnimatePresence>

        {/* Progress Indicators */}
        <div className="absolute bottom-8 right-8 md:bottom-16 md:right-16 flex gap-3 z-10">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                current === idx ? `w-8 ${config.barColor}` : "w-2 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </m.div>
    </div>
  );
}
