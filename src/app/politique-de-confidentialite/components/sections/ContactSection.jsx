"use client";
import { m } from "framer-motion";
import { Mail } from "lucide-react";

export default function ContactSection() {
    return (
        <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 p-8 md:p-10 border border-primary/20 rounded-[30px] bg-primary/5 text-center relative overflow-hidden"
        >
            {/* Décoration de fond */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20 mx-auto mb-6">
                    <Mail className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">Une question sur vos données ?</h2>
                <p className="text-gray-100 text-sm md:text-base mb-8 max-w-lg mx-auto">
                    Notre équipe est à votre disposition pour répondre à toutes vos interrogations concernant la protection de votre vie privée.
                </p>
                <a 
                    href="mailto:contact@prodigelec.fr" 
                    className="inline-flex items-center gap-2 bg-primary text-background font-bold px-8 py-4 rounded-full hover:bg-white transition-colors duration-300"
                >
                    Nous contacter
                </a>
            </div>
        </m.div>
    );
}
