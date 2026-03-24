"use client";
import { m } from "framer-motion";
import { Shield } from "lucide-react";

export default function MentionsLegalesHeader() {
    return (
        <div className="text-center mb-16">
            <m.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full text-primary text-sm font-bold uppercase tracking-wider m-6"
            >
                <Shield className="w-4 h-4" /> Cadre Légal
            </m.div>
            <m.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-6"
            >
                Mentions <span className="text-primary italic">Légales</span>
            </m.h1>
            <p className="text-gray-100 text-sm md:text-lg">
                Informations obligatoires concernant l&apos;entreprise et l&apos;utilisation du site.
            </p>
        </div>
    );
}
