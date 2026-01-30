"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-9999 hidden md:block">
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                className="relative"
            >
                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.9 }}
                            className="absolute bottom-full right-0 mb-4 w-64 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
                        >
                            <div className="bg-primary p-4 text-center">
                                <h3 className="font-bold text-gray-900">Besoin d&apos;un dépannage ?</h3>
                                <p className="text-xs text-gray-800 mt-1">Réponse rapide garantie</p>
                            </div>
                            <div className="p-4 bg-white">
                                <a
                                    href="tel:0638194752" 
                                    className="flex items-center justify-center gap-2 w-full bg-gray-900 text-white font-bold py-3 rounded-xl hover:bg-gray-800 transition-colors"
                                >
                                    <Phone size={18} />
                                    06 38 19 47 52
                                </a>
                                <p className="text-xs text-center text-gray-500 mt-3">
                                    Basé à Broué (28) - Intervention rapide
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsExpanded(!isExpanded)}
                    className={`flex items-center justify-center w-14 h-14 rounded-full shadow-lg shadow-primary/30 transition-colors ${isExpanded ? 'bg-gray-900 text-white' : 'bg-primary text-gray-900'}`}
                >
                    {isExpanded ? <X size={24} /> : <Phone size={24} className="animate-pulse" />}
                </motion.button>
            </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
