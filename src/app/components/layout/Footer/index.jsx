import { Phone, Mail, MapPin } from 'lucide-react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import Link from "next/link";
import ProdigelecMonogram from "@/app/components/ui/ProdigelecMonogram";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 pt-4 md:pt-16 pb-28 md:pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-16">

          {/* Brand Column */}
          <div className="space-y-4 md:space-y-6">
            <div className="flex items-center gap-3">
              <ProdigelecMonogram size={52} light={false} />
              <div className="flex flex-col gap-0.5 leading-none">
                <span
                  style={{ fontFamily: "'Sora', var(--font-sora), sans-serif", fontWeight: 800, fontSize: "1.15rem", letterSpacing: "-0.015em", color: "#ffffff" }}
                >
                  PRODIG<span style={{ color: "#ffd60a" }}>ELEC</span>
                </span>
                <span
                  style={{ fontFamily: "var(--font-sora), 'Sora', sans-serif", fontSize: "0.55rem", letterSpacing: "0.2em", color: "rgba(255,255,255,0.45)", textTransform: "uppercase" }}
                >
                  Électricité · Sécurité · Automatisme
                </span>
              </div>
            </div>
            <p className="text-foreground-subtle text-xs md:text-sm leading-relaxed">
              Votre artisan de confiance en Eure-et-Loir, Eure et Yvelines. Expertise technique, réactivité et solutions sur-mesure pour tous vos besoins.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Suivez-nous sur Facebook" className="w-11 h-11 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center text-foreground-subtle hover:bg-primary hover:text-[#0b1a2a] transition-all group">
                <FaFacebook size={20} className="md:w-[18px] md:h-[18px]" />
              </a>
              <a href="#" aria-label="Suivez-nous sur Instagram" className="w-11 h-11 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center text-foreground-subtle hover:bg-primary hover:text-[#0b1a2a] transition-all">
                <FaInstagram size={20} className="md:w-[18px] md:h-[18px]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-3 md:mb-6 text-sm md:text-base">Navigation</h3>
            <ul className="space-y-2 md:space-y-4">
              <li><Link href="/" className="text-foreground-subtle hover:text-primary transition-colors text-xs md:text-sm">Accueil</Link></li>
              <li><Link href="/#services" className="text-foreground-subtle hover:text-primary transition-colors text-xs md:text-sm">Services</Link></li>
              <li><Link href="/#about" className="text-foreground-subtle hover:text-primary transition-colors text-xs md:text-sm">À Propos</Link></li>
              <li><Link href="/contact#contact-form" className="text-foreground-subtle hover:text-primary transition-colors text-xs md:text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-3 md:mb-6 text-sm md:text-base">Nos Services</h3>
            <ul className="space-y-2 md:space-y-4">
              <li><Link href="/services/electricite" className="text-foreground-subtle hover:text-accent transition-colors text-xs md:text-sm">Électricité Générale</Link></li>
              <li><Link href="/services/securite" className="text-foreground-subtle hover:text-primary transition-colors text-xs md:text-sm">Sécurité Électronique</Link></li>
              <li><Link href="/services/automatismes" className="text-foreground-subtle hover:text-primary transition-colors text-xs md:text-sm">Automatismes & Motorisations</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-3 md:mb-6 text-sm md:text-base">Contact & Zone</h3>
            <ul className="space-y-2 md:space-y-4">
              <li className="flex items-start gap-3 text-foreground-subtle text-xs md:text-sm">
                <MapPin size={16} className="text-primary shrink-0 mt-0.5 md:w-[18px] md:h-[18px]" />
                <span>
                  10 Rue Georges Bréant<br />28410 Broué<br /><br />
                  <strong className="text-white">Zones d&apos;intervention :</strong><br />
                  Houdan, Évreux, Dreux, Broué, Anet, Montfort l&apos;Amaury, Neauphle-le-Château, Plaisir, Saint-André-de-l&apos;Eure, Chartres et alentours (28, 27, 78).
                </span>
              </li>
              <li className="flex items-center gap-3 text-foreground-subtle text-xs md:text-sm mt-4">
                <Phone size={16} className="text-primary shrink-0 md:w-[18px] md:h-[18px]" />
                <a href="tel:0638194752" className="hover:text-white transition-colors">06 38 19 47 52</a>
              </li>
              <li className="flex items-center gap-3 text-foreground-subtle text-xs md:text-sm">
                <Mail size={16} className="text-primary shrink-0 md:w-[18px] md:h-[18px]" />
                <a href="mailto:contact@prodigelec.fr" className="hover:text-white transition-colors">contact@prodigelec.fr</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left md:pr-24">
          <p className="text-foreground-subtle text-xs">
            © 2025 PRODIGELEC — Petaccia Sébastien, EI. Tous droits réservés.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <Link href="/mentions-legales" className="text-foreground-subtle hover:text-gray-100 text-xs transition-colors py-2">Mentions Légales</Link>
            <Link href="/politique-de-confidentialite" className="text-foreground-subtle hover:text-gray-100 text-xs transition-colors py-2">Politique de Confidentialité</Link>
            <Link href="/cgv" className="text-foreground-subtle hover:text-gray-100 text-xs transition-colors py-2">CGV</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
