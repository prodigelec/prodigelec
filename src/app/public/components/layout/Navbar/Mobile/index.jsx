"use client"
import { motion } from "framer-motion";
import { Home, Phone, Gift } from "lucide-react";
import { IoKey } from "react-icons/io5";
import { FcFlashOn } from "react-icons/fc";

export default function MobileNavbar() {
    const navItems = [
        { name: 'Accueil', icon: <Home size={20} />, href: '/public' },
        { name: 'Serrure', icon: <IoKey size={20} />, href: '/public/services/serrurerie' },
        { name: 'SOS', icon: <Phone size={22} />, href: 'tel:0638194752', highlight: true },
        { name: 'Élec', icon: <FcFlashOn size={20} />, href: '/public/services/electricite' },
        { name: 'Promo', icon: <Gift size={20} />, href: '/public/flyer' },
    ];

    return (
        <nav className="lg:hidden fixed bottom-6 left-4 right-4 z-[9999] pointer-events-none">
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="bg-[#0b1a2a]/90 backdrop-blur-2xl border border-white/10 rounded-2xl p-2 shadow-2xl flex items-center justify-between w-full pointer-events-auto"
            >
                {navItems.map((item, i) => (
                    <motion.a
                        key={item.name}
                        href={item.href}
                        whileTap={{ scale: 0.9 }}
                        className={`flex flex-col items-center justify-center min-w-0 flex-1 px-1 transition-all ${item.highlight ? 'bg-primary text-background rounded-xl py-2 shadow-lg shadow-primary/20' : 'text-primary font-medium'
                            }`}
                    >
                        {item.icon}
                        <span className="text-[9px] font-bold uppercase tracking-tight mt-1 truncate w-full text-center">
                            {item.highlight ? 'SOS' : item.name}
                        </span>
                    </motion.a>
                ))}
            </motion.div>
        </nav>
    );
}
