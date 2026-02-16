"use client"
import { m } from "framer-motion";
import { Home, Phone, Gift, Mail } from "lucide-react";
import { IoKey } from "react-icons/io5";
import { FcFlashOn } from "react-icons/fc";

export default function MobileNavbar() {
    const navItems = [
        { name: 'Accueil', icon: <Home size={20} />, href: '/' },
        { name: 'Serrure', icon: <IoKey size={20} />, href: '/services/serrurerie' },
        { name: 'SOS', icon: <Phone size={22} />, href: 'tel:0638194752', highlight: true },
        { name: 'Élec', icon: <FcFlashOn size={20} />, href: '/services/electricite' },
        { name: 'Contact', icon: <Mail size={20} />, href: '/contact' },
    ];

    return (
        <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-9999 pointer-events-none">
            <m.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="bg-[#0b1a2a]/95 backdrop-blur-2xl border-t border-white/10 rounded-t-4xl px-6 py-4 pb-8 shadow-2xl flex items-center justify-between w-full pointer-events-auto"
            >
                {navItems.map((item, i) => (
                    <m.a
                        key={item.name}
                        href={item.href}
                        aria-label={item.name}
                        whileTap={{ scale: 0.9 }}
                        className={`flex flex-col items-center justify-center min-w-0 flex-1 px-1 transition-all ${item.highlight ? 'bg-primary text-background rounded-xl py-2 shadow-lg shadow-primary/20' : 'text-primary font-medium' 
                            }`}
                    >
                        {item.icon}
                        <span className="text-[9px] font-bold uppercase tracking-tight mt-1 truncate w-full text-center">
                            {item.highlight ? 'SOS' : item.name}
                        </span>
                    </m.a>
                ))}
            </m.div>
        </nav>
    );
}
