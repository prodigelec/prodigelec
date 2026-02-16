import { Phone, Mail, MapPin } from 'lucide-react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import Link from "next/link";
import BrandName from "@/app/components/ui/BrandName";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 pt-4 md:pt-16 pb-28 md:pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-16">

          {/* Brand Column */}
          <div className="space-y-4 md:space-y-6">
            <div className="text-xl md:text-2xl font-black tracking-tighter text-white">
              <BrandName />
            </div>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
              Votre artisan de confiance en Eure-et-Loir. Expertise technique, réactivité et solutions sur-mesure pour tous vos besoins.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-[#0b1a2a] transition-all group">
                <FaFacebook size={16} className="md:w-[18px] md:h-[18px]" />
              </a>
              <a href="#" className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-[#0b1a2a] transition-all">
                <FaInstagram size={16} className="md:w-[18px] md:h-[18px]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-3 md:mb-6 text-sm md:text-base">Navigation</h3>
            <ul className="space-y-2 md:space-y-4">
              <li><Link href="/" className="text-gray-400 hover:text-primary transition-colors text-xs md:text-sm">Accueil</Link></li>
              <li><Link href="/#services" className="text-gray-400 hover:text-primary transition-colors text-xs md:text-sm">Services</Link></li>
              <li><Link href="/#about" className="text-gray-400 hover:text-primary transition-colors text-xs md:text-sm">À Propos</Link></li>
              <li><Link href="/contact#contact-form" className="text-gray-400 hover:text-primary transition-colors text-xs md:text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-3 md:mb-6 text-sm md:text-base">Nos Services</h3>
            <ul className="space-y-2 md:space-y-4">
              <li><Link href="/services/electricite" className="text-gray-400 hover:text-accent transition-colors text-xs md:text-sm">Électricité Générale</Link></li>
              <li><Link href="/services/serrurerie" className="text-gray-400 hover:text-primary transition-colors text-xs md:text-sm">Serrurerie & Sécurité</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-3 md:mb-6 text-sm md:text-base">Contact</h3>
            <ul className="space-y-2 md:space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-xs md:text-sm">
                <MapPin size={16} className="text-primary shrink-0 mt-0.5 md:w-[18px] md:h-[18px]" />
                <span>10 Rue Georges Bréant<br />28410 Broué</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-xs md:text-sm">
                <Phone size={16} className="text-primary shrink-0 md:w-[18px] md:h-[18px]" />
                <a href="tel:0638194752" className="hover:text-white transition-colors">06 38 19 47 52</a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-xs md:text-sm">
                <Mail size={16} className="text-primary shrink-0 md:w-[18px] md:h-[18px]" />
                <a href="mailto:contact@prodigelec.fr" className="hover:text-white transition-colors">contact@prodigelec.fr</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-gray-500 text-[10px] md:text-xs">
            © 2025 PRODIGELEC. Tous droits réservés.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <Link href="/mentions-legales" className="text-gray-500 hover:text-gray-300 text-[10px] md:text-xs transition-colors">Mentions Légales</Link>
            <Link href="/politique-de-confidentialite" className="text-gray-500 hover:text-gray-300 text-[10px] md:text-xs transition-colors">Politique de Confidentialité</Link>
            <Link href="/cgv" className="text-gray-500 hover:text-gray-300 text-[10px] md:text-xs transition-colors">CGV</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
