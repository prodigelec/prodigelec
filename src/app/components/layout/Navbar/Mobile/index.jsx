"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { m } from "framer-motion";
import { Home, Mail, PhoneCall, BookOpen, Images } from "lucide-react";

const navItems = [
    { name: 'Accueil', icon: <Home size={18} />, href: '/' },
    { name: 'Réalisations', icon: <Images size={18} />, href: '/realisations' },
    { name: 'SOS Élec', icon: <PhoneCall size={22} />, href: 'tel:0638194752', highlight: true },
    { name: 'Blog', icon: <BookOpen size={18} />, href: '/blog' },
    { name: 'Contact', icon: <Mail size={18} />, href: '/contact' },
];

export default function MobileNavbar() {
    const pathname = usePathname();

    return (
        <nav
            aria-label="Navigation principale"
            className="lg:hidden fixed bottom-0 left-0 right-0 z-[9999] pointer-events-none"
        >
            <m.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                // pb-6 ne suffisait pas sous la barre gestuelle des iPhone récents :
                // le dernier rang d'icônes passait dessous. La zone sûre du système
                // s'ajoute au padding quand elle existe, et vaut zéro ailleurs.
                style={{ paddingBottom: "calc(1.5rem + env(safe-area-inset-bottom))" }}
                className="bg-[#0b1a2a]/95 backdrop-blur-2xl border-t border-white/10 rounded-t-4xl px-4 py-3 shadow-2xl flex items-center justify-between w-full pointer-events-auto"
            >
                {navItems.map((item) => {
                    const isTel = item.href.startsWith("tel:");
                    const isActive = !isTel && pathname === item.href;

                    const className = `flex flex-col items-center justify-center min-w-0 flex-1 px-1 transition-all ${
                        item.highlight
                            ? 'bg-red-800 text-white rounded-xl py-3 -mt-6 shadow-lg shadow-red-800/30 border-2 border-white/20'
                            : `py-2 rounded-xl hover:bg-white/5 ${isActive ? 'text-primary' : 'text-white/70 hover:text-primary'}`
                    }`;

                    const content = (
                        <>
                            <div className={item.highlight ? 'animate-pulse' : ''}>
                                {item.icon}
                            </div>
                            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-tight mt-1 truncate w-full text-center">
                                {item.name}
                            </span>
                        </>
                    );

                    // Un `tel:` sort du site : il reste une ancre. Le reste passe par
                    // le routeur, qui préchargeait déjà les pages sans être utilisé.
                    return isTel ? (
                        <m.a key={item.name} href={item.href} aria-label={item.name} whileTap={{ scale: 0.9 }} className={className}>
                            {content}
                        </m.a>
                    ) : (
                        <Link
                            key={item.name}
                            href={item.href}
                            aria-label={item.name}
                            aria-current={isActive ? "page" : undefined}
                            className={className}
                        >
                            {content}
                        </Link>
                    );
                })}
            </m.div>
        </nav>
    );
}
