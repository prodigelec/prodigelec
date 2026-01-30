"use client"
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "../Logo";

export default function Navbar() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    // Dynamic padding based on scroll (height transitions from 24px to 16px)
    const navPadding = useTransform(scrollY, [0, 100], ["24px", "16px"]);

    const navItems = [
        { name: 'Accueil', href: '/' },
        {
            name: 'Services',
            href: '#services',
            dropdown: [
                { name: 'Serrurerie', href: '/services/serrurerie', icon: '🔑' },
                { name: 'Électricité', href: '/services/electricite', icon: '⚡' }
            ]
        },
        { name: 'Réalisations', href: isHomePage ? '#realisations' : '/#realisations' },
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
        // Check dropdown items first
        if (item.dropdown) {
            return item.dropdown.some(sub => sub.href === pathname);
        }

        if (isHomePage) {
            // On Homepage: Use scroll spy
            // Special case for "Accueil" which is usually empty string or top
            if (item.href === '/') {
                return activeSection === '';
            }
            const sectionId = item.href.replace('/#', '').replace('#', '');
            return activeSection === sectionId;
        } else {
            // On other pages: Strict path matching
            // "Accueil" (/) is not active unless we are at /
            return item.href === pathname;
        }
    };

    return (
        <motion.nav
            style={{
                backgroundColor: `rgba(11, 26, 42, ${isScrolled ? 0.8 : 0})`,
                backdropFilter: isScrolled ? "blur(12px)" : "blur(0px)",
                paddingTop: navPadding,
                paddingBottom: navPadding
            }}
            className="fixed top-0 w-full z-50 border-b border-white/0 transition-all duration-500"
        >
            <div className={`max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-500 ${isScrolled ? 'bg-black/20 rounded-full border border-white/10 px-8 mx-4 backdrop-blur-md shadow-lg' : ''}`}>
                {/* Logo & Brand */}
                <Logo className={`${isScrolled ? 'scale-90' : 'scale-100'} transition-transform duration-500`} />

                {/* Navigation Links */}
                <div className="hidden lg:flex items-center gap-8">
                    {navItems.map((item, i) => (
                        <div key={item.name} className="relative group">
                            <motion.a
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 + 0.2 }}
                                href={item.href}
                                className={`flex items-center gap-1 text-sm font-medium transition-all duration-300 relative px-3 py-2 rounded-lg bg-black/30 backdrop-blur-sm hover:bg-black/40 ${isItemActive(item)
                                    ? 'text-transparent bg-clip-text bg-gradient-to-br from-[#f5f5f5] via-[#d1d5db] to-[#9ca3af] drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]'
                                    : 'text-transparent bg-clip-text bg-gradient-to-br from-[#e5e7eb] via-[#cbd5e1] to-[#9ca3af] hover:from-[#f5f5f5] hover:via-[#d1d5db] hover:to-[#9ca3af] drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]'
                                    }`}
                            >
                                {item.name}
                                {item.dropdown && (
                                    <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                )}
                                <span className="absolute inset-0 bg-white/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10" />
                                <span className={`absolute bottom-1 left-3 right-3 h-0.5 bg-primary transition-transform duration-300 ${isItemActive(item) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                                    }`} />
                            </motion.a>

                            {/* Dropdown Menu */}
                            {item.dropdown && (
                                <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                    <div className="bg-background/90 backdrop-blur-xl border border-white/10 rounded-2xl p-2 w-56 shadow-xl shadow-black/50 overflow-hidden">
                                        {item.dropdown.map((subItem, j) => (
                                            <a
                                                key={subItem.name}
                                                href={subItem.href}
                                                className={`flex items-center gap-3 p-3 rounded-xl hover:bg-white/10 transition-all group/item ${pathname === subItem.href ? 'text-primary bg-white/5' : 'text-white/80 hover:text-primary'
                                                    }`}
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

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-6"
                >
                    <motion.button
                        onClick={() => {
                            window.location.href = '/contact#contact-form';
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative overflow-hidden bg-primary text-background px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all group"
                    >
                        <span className="relative z-10">DEVIS GRATUIT</span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </motion.button>
                </motion.div>
            </div>
        </motion.nav>
    );
}
