import { FcFlashOn } from "react-icons/fc";
import { GiGate } from "react-icons/gi";
import { Cctv, BatteryCharging } from "lucide-react";

// Entrees du menu principal. Separees du rendu comme le reste des donnees du
// site, pour que la navbar redevienne lisible d'un coup d'oeil.
export const navItems = [
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
    { name: 'Avis', href: '/avis' },
    { name: 'Blog', href: '/blog' },
    { name: 'À Propos', href: '/about' },
    { name: 'Contact', href: '/contact' }
];
