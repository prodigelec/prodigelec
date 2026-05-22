"use client";
import { useState, useEffect } from 'react';
import { m, AnimatePresence } from "framer-motion";
import { Phone, X } from 'lucide-react';

export default function FloatingContactButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsExpanded(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-9999 hidden md:block">
          <m.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="relative"
          >
            <AnimatePresence>
              {isExpanded && (
                <m.div
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.9 }}
                  className="absolute bottom-full right-0 mb-4 w-64 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
                >
                  <div className="bg-rose-600 p-4 text-center">
                    <h3 className="font-bold text-white">Besoin d&apos;un dépannage ?</h3>
                    <div className="flex items-center justify-center gap-1.5 mt-1">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400" />
                      </span>
                      <p className="text-xs text-white/90">Disponible 24h/24 — Lun. au Sam.</p>
                    </div>
                  </div>
                  <div className="p-4 bg-white">
                    <a
                      href="tel:0638194752"
                      className="flex items-center justify-center gap-2 w-full bg-gray-900 text-white font-bold py-3 rounded-xl hover:bg-gray-800 transition-colors"
                    >
                      <Phone size={18} />
                      06 38 19 47 52
                    </a>
                    <p className="text-xs text-center text-gray-700 mt-3">
                      Répondeur actif la nuit — rappel dès que possible
                    </p>
                  </div>
                </m.div>
              )}
            </AnimatePresence>

            <m.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsExpanded(!isExpanded)}
              aria-label={isExpanded ? "Fermer le menu de contact" : "Ouvrir le menu de contact"}
              className={`flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-colors ${isExpanded ? 'bg-gray-900 text-white' : 'bg-rose-600 text-white shadow-rose-600/40 hover:bg-rose-700'}`}
            >
              {isExpanded ? <X size={24} /> : <Phone size={24} className="animate-pulse" />}
            </m.button>
          </m.div>
        </div>
      )}
    </AnimatePresence>
  );
}
