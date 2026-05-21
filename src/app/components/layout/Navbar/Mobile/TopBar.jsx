"use client";
import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { Menu, X, Home, Mail, PhoneCall, BookOpen, Images, Info, Cctv } from "lucide-react";
import { FcFlashOn } from "react-icons/fc";
import { GiGate } from "react-icons/gi";
import { usePathname } from "next/navigation";
import Logo from "../Logo";

const menuItems = [
    { name: 'Accueil',       href: '/',                    icon: <Home size={18} /> },
    { name: 'Sécurité',      href: '/services/securite',   icon: <Cctv size={18} className="text-rose-400" /> },
    { name: 'Automatismes',  href: '/services/automatismes', icon: <GiGate size={18} className="text-sky-400" /> },
    { name: 'Électricité',   href: '/services/electricite', icon: <FcFlashOn size={18} /> },
    { name: 'Réalisations',  href: '/realisations',        icon: <Images size={18} /> },
    { name: 'Blog',          href: '/blog',                icon: <BookOpen size={18} /> },
    { name: 'À Propos',      href: '/about',               icon: <Info size={18} /> },
    { name: 'Contact',       href: '/contact',             icon: <Mail size={18} /> },
];

export default function MobileTopBar() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    return (
        <>
            <m.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="lg:hidden fixed top-0 w-full z-[9999] bg-[#020617]/95 backdrop-blur-xl border-b border-white/5 py-4 px-6"
            >
                <div className="pointer-events-auto flex items-center justify-between">
                    <Logo />
                    <button
                        onClick={() => setOpen(o => !o)}
                        className="flex items-center justify-center w-10 h-10 rounded-xl text-white border border-white/20 bg-white/10"
                        aria-label="Menu"
                    >
                        {open ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </m.div>

            <AnimatePresence>
                {open && (
                    <>
                        <m.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setOpen(false)}
                            className="fixed inset-0 z-[9998] bg-black/60 lg:hidden"
                        />
                        <m.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="fixed top-0 right-0 h-full w-72 z-[9999] lg:hidden flex flex-col"
                            style={{ background: "#0b1a2a", borderLeft: "1px solid rgba(255,255,255,0.08)" }}
                        >
                            <div className="flex items-center justify-between px-5 py-5 border-b border-white/10">
                                <span className="text-white font-bold text-sm uppercase tracking-widest">Menu</span>
                                <button onClick={() => setOpen(false)} className="text-white/60 hover:text-white">
                                    <X size={20} />
                                </button>
                            </div>

                            <nav className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-1">
                                {menuItems.map(item => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setOpen(false)}
                                        className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all hover:bg-white/10 ${pathname === item.href ? 'text-primary bg-white/5' : 'text-white/80'}`}
                                    >
                                        {item.icon}
                                        {item.name}
                                    </a>
                                ))}
                            </nav>

                            <div className="px-4 pb-8 pt-4 flex flex-col gap-3 border-t border-white/10">
                                <a
                                    href="tel:0638194752"
                                    className="flex items-center justify-center gap-2 bg-rose-600 text-white h-11 rounded-full font-bold text-sm"
                                >
                                    <PhoneCall size={16} className="animate-pulse" />
                                    06 38 19 47 52
                                </a>
                                <a
                                    href="/contact#contact-form"
                                    onClick={() => setOpen(false)}
                                    className="flex items-center justify-center h-11 rounded-full font-bold text-sm"
                                    style={{ background: "var(--primary)", color: "var(--background)" }}
                                >
                                    DEVIS GRATUIT
                                </a>
                            </div>
                        </m.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
