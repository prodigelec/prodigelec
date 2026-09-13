"use client"
import { m, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PhoneCall } from "lucide-react";
import Logo from "../Logo";
import NavDropdown from "./NavDropdown";
import { navItems } from "./navItems";

export default function Navbar() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();
    const isHomePage = pathname === '/';
    const [activeSection, setActiveSection] = useState('');

    const navPadding = useTransform(scrollY, [0, 100], ["24px", "16px"]);

    // Ce gestionnaire s'exécute à chaque image du défilement. Il appelait deux
    // setState sans condition et mesurait chaque section au passage : la
    // navbar se redessinait à chaque pixel parcouru. Les états ne changent
    // désormais que lorsqu'ils changent vraiment.
    useMotionValueEvent(scrollY, "change", (latest) => {
        const scrolled = latest > 50;
        setIsScrolled((prev) => (prev === scrolled ? prev : scrolled));

        if (!isHomePage) {
            setActiveSection((prev) => (prev === '' ? prev : ''));
            return;
        }

        const sections = navItems.map(item => item.href.replace('/#', '').replace('#', '').replace('/', ''));
        const current = sections.find(section => {
            if (!section) return false;
            const element = document.getElementById(section);
            if (!element) return false;
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
        });

        const next = current ?? (latest < 100 ? '' : null);
        if (next !== null) setActiveSection((prev) => (prev === next ? prev : next));
    });

    const isItemActive = (item) => {
        if (item.dropdown) {
            return item.dropdown.some(sub => sub.href === pathname);
        }
        if (isHomePage) {
            if (item.href === '/') return activeSection === '';
            return activeSection === item.href.replace('/#', '').replace('#', '');
        }
        return item.href === pathname;
    };

    return (
        <m.nav
            aria-label="Navigation principale"
            style={{
                backgroundColor: `rgba(11, 26, 42, ${isScrolled ? 0.85 : 0.45})`,
                backdropFilter: isScrolled ? "blur(12px)" : "blur(8px)",
                paddingTop: navPadding,
                paddingBottom: navPadding
            }}
            className="fixed top-0 w-full z-9999 border-b border-white/0 transition-all duration-500"
        >
            <div className={`container mx-auto px-6 flex items-center justify-between transition-all duration-500 ${isScrolled ? 'bg-black/20 rounded-full border border-white/10 px-8 mx-4 backdrop-blur-md shadow-lg' : ''}`}>
                <Logo className={`${isScrolled ? 'scale-90' : 'scale-100'} transition-transform duration-500`} />

                {/* gap resserré en dessous de xl : le 7e item (Avis) faisait
                    passer "À Propos" sur deux lignes sur un écran de portable */}
                <div className="hidden lg:flex items-center gap-2 xl:gap-6">
                    {navItems.map((item, i) => {
                        const active = isItemActive(item);

                        if (item.dropdown) {
                            return <NavDropdown key={item.name} item={item} isActive={active} />;
                        }

                        return (
                            <m.div
                                key={item.name}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 + 0.2 }}
                                className="relative group"
                            >
                                {/* Ces liens étaient des ancres brutes : chaque entrée de
                                    menu rechargeait le site en entier au lieu de laisser
                                    le routeur faire son travail. */}
                                <Link
                                    href={item.href}
                                    aria-current={active ? "page" : undefined}
                                    className={`flex items-center gap-1 whitespace-nowrap text-sm font-semibold transition-all duration-300 relative px-2 xl:px-3 py-2 rounded-lg hover:bg-white/10 ${active ? 'text-white' : 'text-white/80 hover:text-white'}`}
                                >
                                    {item.name}
                                    <span className="absolute inset-0 bg-white/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10" />
                                    <span className={`absolute bottom-1 left-3 right-3 h-0.5 bg-primary transition-transform duration-300 ${active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                                </Link>
                            </m.div>
                        );
                    })}
                </div>

                <m.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-3 lg:gap-4"
                >
                    {/* `md:flex` ne servait à rien ici : cette navbar est elle-même
                        masquée sous lg, le bouton n'apparaissait donc jamais entre
                        les deux points de rupture. */}
                    <m.a
                        href="tel:0638194752"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center justify-center gap-2 bg-red-800 hover:bg-red-900 text-white h-10 px-5 xl:px-8 rounded-full font-bold text-sm text-center shadow-lg shadow-red-800/20 transition-all whitespace-nowrap"
                    >
                        <PhoneCall className="w-4 h-4 animate-pulse" />
                        <span className="hidden xl:inline">Dépannage : </span>06 38 19 47 52
                    </m.a>

                    <Link
                        href="/contact#contact-form"
                        className="hidden xl:flex relative overflow-hidden bg-primary text-background h-10 w-40 rounded-full font-bold text-sm shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all group items-center justify-center whitespace-nowrap"
                    >
                        <span className="relative z-10">DEVIS GRATUIT</span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </Link>
                </m.div>
            </div>
        </m.nav>
    );
}
