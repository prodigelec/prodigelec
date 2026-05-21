"use client"
import { m } from "framer-motion";
import { Home, Mail, PhoneCall, BookOpen, Images } from "lucide-react";

export default function MobileNavbar() {
    const navItems = [
        { name: 'Accueil', icon: <Home size={18} />, href: '/' },
        { name: 'Réalisations', icon: <Images size={18} />, href: '/realisations' },
        { name: 'SOS Élec', icon: <PhoneCall size={22} />, href: 'tel:0638194752', highlight: true },
        { name: 'Blog', icon: <BookOpen size={18} />, href: '/blog' },
        { name: 'Contact', icon: <Mail size={18} />, href: '/contact' },
    ];

    return (
        <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-[9999] pointer-events-none">
            <m.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="bg-[#0b1a2a]/95 backdrop-blur-2xl border-t border-white/10 rounded-t-4xl px-4 py-3 pb-6 shadow-2xl flex items-center justify-between w-full pointer-events-auto"
            >
                {navItems.map((item) => (
                    <m.a
                        key={item.name}
                        href={item.href}
                        aria-label={item.name}
                        whileTap={{ scale: 0.9 }}
                        className={`flex flex-col items-center justify-center min-w-0 flex-1 px-1 transition-all ${
                            item.highlight
                            ? 'bg-rose-600 text-white rounded-xl py-3 -mt-6 shadow-lg shadow-rose-600/30 border-2 border-white/20'
                            : 'text-white/70 hover:text-primary hover:bg-white/5 py-2 rounded-xl'
                        }`}
                    >
                        <div className={`${item.highlight ? 'animate-pulse' : ''}`}>
                            {item.icon}
                        </div>
                        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-tight mt-1 truncate w-full text-center">
                            {item.name}
                        </span>
                    </m.a>
                ))}
            </m.div>
        </nav>
    );
}
