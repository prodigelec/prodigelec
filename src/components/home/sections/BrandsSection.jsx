"use client";
import { motion } from "framer-motion";

const categories = [
    {
        name: "Électricité & Domotique",
        brands: ["Legrand", "Schneider", "Hager", "Somfy", "Bticino", "Atlantic", "Theben", "Arnould", "Delta Dore"],
        duration: 30
    },
    {
        name: "Volets Roulants",
        brands: ["Somfy", "Nice", "Bubendorff", "Delta Dore", "Profalux", "Simu", "Eveno", "Lakal"],
        duration: 25,
        reverse: true
    },
    {
        name: "Serrurerie & Sécurité",
        brands: ["JPM", "Vachette", "Bricard", "Ferco", "Metallux", "Abus", "Pollux", "Iseo", "Decayeux"],
        duration: 35
    },
    {
        name: "Contrôle d'Accès",
        brands: ["Noralsy", "Urmet", "CDVI", "Aiphone", "Intratone", "Cofrel", "Comelit"],
        duration: 28,
        reverse: true
    }
];

export default function BrandsSection() {
    return (
        <section className="py-16 bg-background border-b border-white/5 relative z-10 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
                <h2 className="text-xs font-bold text-primary uppercase tracking-[0.3em] mb-4">
                    Expertise & Matériel Professionnel
                </h2>
                <p className="text-gray-400 text-sm max-w-xl mx-auto leading-relaxed italic">
                    Nous installons les plus grands fabricants pour votre sécurité et votre confort.
                </p>
            </div>

            <div className="flex flex-col gap-10">
                {categories.map((cat, idx) => (
                    <div key={idx} className="relative group">
                        {/* Category label */}
                        <div className="max-w-7xl mx-auto px-6 mb-5">
                            <span className="text-xs font-black uppercase tracking-[0.2em] text-primary/60 bg-primary/5 px-3 py-1 rounded border border-primary/10">
                                {cat.name}
                            </span>
                        </div>

                        <div className="relative flex overflow-hidden">
                            {/* Fade Effects */}
                            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
                            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />

                            <motion.div
                                className="flex whitespace-nowrap gap-12 md:gap-24 py-4 w-max"
                                animate={{
                                    x: cat.reverse ? ["-50%", "0%"] : ["0%", "-50%"]
                                }}
                                transition={{
                                    duration: cat.duration,
                                    ease: "linear",
                                    repeat: Infinity
                                }}
                                style={{ display: 'flex' }}
                            >
                                {/* Quadruple the list to ensure no gaps even on huge screens */}
                                {[...cat.brands, ...cat.brands, ...cat.brands, ...cat.brands].map((brand, bIdx) => (
                                    <span
                                        key={bIdx}
                                        className="text-xl md:text-2xl lg:text-4xl font-black text-white/[0.05] hover:text-white transition-all duration-500 cursor-default uppercase italic tracking-tighter"
                                    >
                                        {brand}
                                    </span>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
