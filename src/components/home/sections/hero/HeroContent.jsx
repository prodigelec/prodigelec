"use client";
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@/components/ui/Button';
import { useRouter } from 'next/navigation';

export default function HeroContent({ slides, currentSlide }) {
  const router = useRouter();

  return (
    <div className="relative z-20 h-full flex items-center justify-center">
      <div className="max-w-5xl mx-auto px-6 text-center text-white">

        <AnimatePresence mode='wait'>
          <motion.div
            key={currentSlide}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
            className="space-y-6 md:space-y-12 max-w-5xl mx-auto"
          >
            {/* Title */}
            <div className="space-y-4 md:space-y-8 pt-24 md:pt-32">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-none tracking-tight"
              >
                <span className="block hover:text-primary transition-colors duration-300 mb-4 md:mb-0">
                  {slides[currentSlide].title.split(' ')[0]}
                </span>
                <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light opacity-95 mt-4 md:mt-6">
                  {slides[currentSlide].title.split(' ').slice(1).join(' ')}
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex justify-center"
              >
                <div className="inline-flex items-center mt-6 md:mt-8 bg-white/10 backdrop-blur-md rounded-full px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 border border-white/20 shadow-lg">
                  <span className="text-lg sm:text-xl md:text-2xl font-light tracking-wide italic">
                    {slides[currentSlide].subtitle}
                  </span>
                </div>
              </motion.div>
            </div>

            {/* CTA Buttons - Hidden on mobile */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 pt-6 md:pt-10"
            >
              <Button
                onClick={() => router.push('/contact#contact-form')}
                variant="primary"
                icon={
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                }
              >
                Nous contacter
              </Button>

              <Button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                variant="primary"
                icon={
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                }
              >
                Voir nos services
              </Button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
