"use client";
import { m } from "framer-motion";
import { Lock } from "lucide-react";

export default function PrivacyHeader() {
    return (
        <div className="text-center mb-16">
            <m.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full text-primary text-sm font-bold uppercase tracking-wider m-6"
            >
                <Lock className="w-4 h-4" /> RGPD & Sécurité
            </m.div>
            <m.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-5xl lg:text-6xl font-black text-white uppercase italic tracking-tighter mb-6"
            >
                Politique de <br />
                <span className="text-primary italic">Confidentialité</span>
            </m.h1>
            <m.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-gray-100 text-sm md:text-lg max-w-2xl mx-auto"
            >
                Chez PRODIGELEC, la protection de vos données personnelles est une priorité. Voici comment nous traitons vos informations en toute transparence.
            </m.p>
        </div>
    );
}
