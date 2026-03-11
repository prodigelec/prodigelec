"use client"
import { m } from "framer-motion";
import { Home, Mail, Cctv, PhoneCall } from "lucide-react";
import { MdBlinds } from "react-icons/md";
import { FcFlashOn } from "react-icons/fc";

export default function MobileNavbar() {
    const navItems = [
        { name: 'Accueil', icon: <Home size={18} />, href: '/' },
        { name: 'Sécurité', icon: <Cctv size={18} />, href: '/services/securite' },
        { name: 'SOS', icon: <PhoneCall size={22} />, href: 'tel:0638194752', highlight: true },
        { name: 'Élec', icon: <FcFlashOn size={18} />, href: '/services/electricite' },
        { name: 'Automat.', icon: <MdBlinds size={18} />, href: '/services/automatismes' },
        { name: 'Contact', icon: <Mail size={18} />, href: '/contact' },
    ];

    return (
        <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-9999 pointer-events-none">
            <m.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="bg-[#0b1a2a]/95 backdrop-blur-2xl border-t border-white/10 rounded-t-4xl px-6 py-4 pb-8 shadow-2xl flex items-center justify-between w-full pointer-events-auto"
            >
                {navItems.map((item) => (
                    <m.a
                        key={item.name}
                        href={item.href}
                        aria-label={item.name}
                        whileTap={{ scale: 0.9 }}
                        className={`flex flex-col items-center justify-center min-w-0 flex-1 px-1 transition-all ${item.highlight ? 'bg-primary text-background rounded-xl py-2 shadow-lg shadow-primary/20' : 'text-primary font-medium'}`}
                    >
                        {item.icon}
                        <span className="text-xs font-bold uppercase tracking-tight mt-1 truncate w-full text-center">
                            {item.highlight ? 'SOS' : item.name}
                        </span>
                    </m.a>
                ))}
            </m.div>
        </nav>
    );
}
