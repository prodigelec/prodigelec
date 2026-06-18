"use client"
import { m, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FcFlashOn } from "react-icons/fc";
import { GiGate } from "react-icons/gi";
import { Cctv, PhoneCall, BatteryCharging } from "lucide-react";
import Logo from "../Logo";

export default function Navbar() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    const navPadding = useTransform(scrollY, [0, 100], ["24px", "16px"]);

    const navItems = [
        { name: 'Accueil', href: '/' },
        {
            name: 'Services',
            href: '#services',
            dropdown: [
                { name: 'Sécurité', href: '/services/securite', icon: <Cctv className="w-5 h-5 text-rose-400 group-hover:text-rose-500 transition-colors" /> },
                { name: 'Automatismes', href: '/services/automatismes', icon: <GiGate className="w-5 h-5 text-sky-400 group-hover:text-sky-300 transition-colors" /> },
                { name: 'Électricité', href: '/services/electricite', icon: <FcFlashOn className="w-5 h-5" /> },
                { name: 'Recharge Véhicule Électrique', href: '/services/borne-de-recharge-voiture-electrique', icon: <BatteryCharging className="w-5 h-5 text-emerald-400 group-hover:text-emerald-300 transition-colors" /> }
            ]
        },
        { name: 'Réalisations', href: '/realisations' },
        { name: 'Blog', href: '/blog' },
        { name: 'À Propos', href: '/about' },
        { name: 'Contact', href: '/contact' }
    ];

    const [activeSection, setActiveSection] = useState('');

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);

        if (isHomePage) {
            const sections = navItems.map(item => item.href.replace('/#', '').replace('#', '').replace('/', ''));
            const current = sections.find(section => {
                if (!section) return false;
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
            else if (latest < 100) setActiveSection('');
        } else {
            setActiveSection('');
        }
    });

    const isItemActive = (item) => {
        if (item.dropdown) {
            return item.dropdown.some(sub => sub.href === pathname);
        }
        if (isHomePage) {
            if (item.href === '/') return activeSection === '';
            const sectionId = item.href.replace('/#', '').replace('#', '');
            return activeSection === sectionId;
        } else {
            return item.href === pathname;
        }
    };

    return (
        <m.nav
                style={{
                    backgroundColor: `rgba(11, 26, 42, ${isScrolled ? 0.85 : 0.45})`,
                    backdropFilter: isScrolled ? "blur(12px)" : "blur(8px)",
                    paddingTop: navPadding,
                    paddingBottom: navPadding
                }}
                className="fixed top-0 w-full z-9999 border-b border-white/0 transition-all duration-500"
            >
                <div className={`container mx-auto px-6 flex items-center justify-between transition-all duration-500 ${isScrolled ? 'bg-black/20 rounded-full border border-white/10 px-8 mx-4 backdrop-blur-md shadow-lg' : ''}`}>
                    {/* Logo */}
                    <Logo className={`${isScrolled ? 'scale-90' : 'scale-100'} transition-transform duration-500`} />

                    {/* Navigation desktop */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navItems.map((item, i) => (
                            <div key={item.name} className="relative group">
                                <m.a
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 + 0.2 }}
                                    href={item.href}
                                    className={`flex items-center gap-1 text-sm font-semibold transition-all duration-300 relative px-3 py-2 rounded-lg hover:bg-white/10 ${isItemActive(item) ? 'text-white' : 'text-white/80 hover:text-white'}`}
                                >
                                    {item.name}
                                    {item.dropdown && (
                                        <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    )}
                                    <span className="absolute inset-0 bg-white/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10" />
                                    <span className={`absolute bottom-1 left-3 right-3 h-0.5 bg-primary transition-transform duration-300 ${isItemActive(item) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                                </m.a>
                                {item.dropdown && (
                                    <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                        <div className="bg-background/90 backdrop-blur-xl border border-white/10 rounded-2xl p-2 w-56 shadow-xl shadow-black/50 overflow-hidden">
                                            {item.dropdown.map((subItem) => (
                                                <a
                                                    key={subItem.name}
                                                    href={subItem.href}
                                                    className={`flex items-center gap-3 p-3 rounded-xl hover:bg-white/10 transition-all group/item ${pathname === subItem.href ? 'text-primary bg-white/5' : 'text-white/90 hover:text-primary'}`}
                                                >
                                                    <span className="text-xl group-hover/item:scale-110 transition-transform">{subItem.icon}</span>
                                                    <span className="text-sm font-medium">{subItem.name}</span>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* CTA + hamburger */}
                    <m.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-3 lg:gap-4"
                    >
                        <m.a
                            href="tel:0638194752"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="hidden md:flex items-center justify-center gap-2 bg-rose-600 hover:bg-rose-700 text-white h-10 w-55 px-8 rounded-full font-bold text-sm text-center shadow-lg shadow-rose-600/20 transition-all whitespace-nowrap"
                        >
                            <PhoneCall className="w-4 h-4 animate-pulse" />
                            <span>Dépannage : 06 38 19 47 52</span>
                        </m.a>

                        <m.button
                            onClick={() => { window.location.href = '/contact#contact-form'; }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="hidden lg:flex relative overflow-hidden bg-primary text-background h-10 w-40 rounded-full font-bold text-sm shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all group items-center justify-center whitespace-nowrap"
                        >
                            <span className="relative z-10">DEVIS GRATUIT</span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </m.button>

                    </m.div>
                </div>
            </m.nav>
    );
}
