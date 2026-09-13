"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { m, AnimatePresence } from "framer-motion";
import { Menu, X, Home, Mail, PhoneCall, BookOpen, Images, Info, Cctv, BatteryCharging, Star } from "lucide-react";
import { FcFlashOn } from "react-icons/fc";
import { GiGate } from "react-icons/gi";
import { usePathname } from "next/navigation";
import Logo from "../Logo";

const menuItems = [
    { name: 'Accueil',       href: '/',                    icon: <Home size={18} /> },
    { name: 'Sécurité',      href: '/services/securite',   icon: <Cctv size={18} className="text-rose-400" /> },
    { name: 'Automatismes',  href: '/services/automatismes', icon: <GiGate size={18} className="text-sky-400" /> },
    { name: 'Électricité',   href: '/services/electricite', icon: <FcFlashOn size={18} /> },
    { name: 'Recharge VE',   href: '/services/borne-de-recharge-voiture-electrique', icon: <BatteryCharging size={18} className="text-emerald-400" /> },
    { name: 'Réalisations',  href: '/realisations',        icon: <Images size={18} /> },
    { name: 'Avis',          href: '/avis',                icon: <Star size={18} className="fill-[#fbbc04] text-[#fbbc04]" /> },
    { name: 'Blog',          href: '/blog',                icon: <BookOpen size={18} /> },
    { name: 'À Propos',      href: '/about',               icon: <Info size={18} /> },
    { name: 'Contact',       href: '/contact',             icon: <Mail size={18} /> },
];

export default function MobileTopBar() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    // Panneau ouvert, la page continuait de défiler derrière lui : on revenait
    // du menu ailleurs dans la page. Échap le referme, comme tout tiroir.
    useEffect(() => {
        if (!open) return;

        const { overflow } = document.body.style;
        document.body.style.overflow = "hidden";

        const onKeyDown = (e) => {
            if (e.key === "Escape") setOpen(false);
        };
        document.addEventListener("keydown", onKeyDown);

        return () => {
            document.body.style.overflow = overflow;
            document.removeEventListener("keydown", onKeyDown);
        };
    }, [open]);

    return (
        <>
            <m.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="lg:hidden fixed top-0 w-full z-[9999] bg-[#020617]/95 backdrop-blur-xl border-b border-white/5 py-3 px-4 sm:py-4 sm:px-6"
            >
                <div className="pointer-events-auto flex items-center justify-between gap-3">
                    <Logo className="min-w-0" />
                    <button
                        onClick={() => setOpen(o => !o)}
                        className="flex shrink-0 items-center justify-center w-10 h-10 rounded-xl text-white border border-white/20 bg-white/10"
                        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
                        aria-expanded={open}
                        aria-controls="menu-mobile"
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
                            className="fixed inset-0 z-[10000] bg-black/60 lg:hidden"
                        />
                        <m.div
                            id="menu-mobile"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="fixed top-0 right-0 h-full w-72 max-w-[85vw] z-[10001] lg:hidden flex flex-col"
                            style={{ background: "#0b1a2a", borderLeft: "1px solid rgba(255,255,255,0.08)" }}
                        >
                            <div className="flex items-center justify-between px-5 py-5 border-b border-white/10">
                                <span className="text-white font-bold text-sm uppercase tracking-widest">Menu</span>
                                <button onClick={() => setOpen(false)} className="text-white/60 hover:text-white" aria-label="Fermer le menu">
                                    <X size={20} />
                                </button>
                            </div>

                            <nav aria-label="Menu" className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-1">
                                {menuItems.map(item => {
                                    const isActive = pathname === item.href;
                                    return (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            onClick={() => setOpen(false)}
                                            aria-current={isActive ? "page" : undefined}
                                            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all hover:bg-white/10 ${isActive ? 'text-primary bg-white/5' : 'text-white/80'}`}
                                        >
                                            {item.icon}
                                            {item.name}
                                        </Link>
                                    );
                                })}
                            </nav>

                            <div
                                className="px-4 pt-4 flex flex-col gap-3 border-t border-white/10"
                                style={{ paddingBottom: "calc(2rem + env(safe-area-inset-bottom))" }}
                            >
                                <a
                                    href="tel:0638194752"
                                    className="flex items-center justify-center gap-2 bg-red-800 text-white h-11 rounded-full font-bold text-sm"
                                >
                                    <PhoneCall size={16} className="animate-pulse" />
                                    06 38 19 47 52
                                </a>
                                <Link
                                    href="/contact#contact-form"
                                    onClick={() => setOpen(false)}
                                    className="flex items-center justify-center h-11 rounded-full font-bold text-sm"
                                    style={{ background: "var(--primary)", color: "var(--background)" }}
                                >
                                    DEVIS GRATUIT
                                </Link>
                            </div>
                        </m.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
