"use client"
import { m } from "framer-motion";
import { Home, Phone, Mail, Cctv } from "lucide-react";
import { MdBlinds } from "react-icons/md";
import { FcFlashOn } from "react-icons/fc";

const leftItems = [
    { name: 'Accueil', icon: <Home size={18} />, href: '/' },
    { name: 'Sécurité', icon: <Cctv size={18} />, href: '/services/securite' },
];

const rightItems = [
    { name: 'Élec', icon: <FcFlashOn size={18} />, href: '/services/electricite' },
    { name: 'Automat.', icon: <MdBlinds size={18} />, href: '/services/automatismes' },
    { name: 'Contact', icon: <Mail size={18} />, href: '/contact' },
];

function NavItem({ item }) {
    return (
        <m.a
            href={item.href}
            aria-label={item.name}
            whileTap={{ scale: 0.9 }}
            className="flex flex-col items-center justify-center min-w-0 flex-1 px-1 transition-all text-primary font-medium"
        >
            {item.icon}
            <span className="text-xs font-bold uppercase tracking-tight mt-1 truncate w-full text-center">
                {item.name}
            </span>
        </m.a>
    );
}

export default function MobileNavbar() {
    return (
        <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-9999 pointer-events-none">
            <m.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="bg-[#0b1a2a]/95 backdrop-blur-2xl border-t border-white/10 rounded-t-4xl px-6 py-4 pb-8 shadow-2xl flex items-center w-full pointer-events-auto relative"
            >
                {/* Left group */}
                <div className="flex flex-1 items-center justify-around">
                    {leftItems.map((item) => <NavItem key={item.name} item={item} />)}
                </div>

                {/* SOS — perfectly centered via absolute */}
                <m.a
                    href="tel:0638194752"
                    aria-label="Appel d'urgence"
                    whileTap={{ scale: 0.9 }}
                    className="absolute left-1/2 -translate-x-1/2 bg-primary text-background rounded-xl px-4 py-2 shadow-lg shadow-primary/20 flex flex-col items-center justify-center"
                >
                    <Phone size={20} />
                    <span className="text-xs font-bold uppercase tracking-tight mt-1">SOS</span>
                </m.a>

                {/* Right group */}
                <div className="flex flex-1 items-center justify-around">
                    {rightItems.map((item) => <NavItem key={item.name} item={item} />)}
                </div>
            </m.div>
        </nav>
    );
}
