import { Phone, Mail, MapPin } from 'lucide-react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Column */}
          <div className="space-y-6">
            <div className="text-2xl font-black tracking-tighter text-white">
              <span className="text-primary">PRODIG</span>ELEC
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Votre artisan de confiance en Eure-et-Loir. Expertise technique, réactivité et solutions sur-mesure pour tous vos besoins.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-[#0b1a2a] transition-all group">
                <FaFacebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-[#0b1a2a] transition-all">
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6">Navigation</h3>
            <ul className="space-y-4">
              <li><Link href="/" className="text-gray-400 hover:text-primary transition-colors text-sm">Accueil</Link></li>
              <li><Link href="/#services" className="text-gray-400 hover:text-primary transition-colors text-sm">Services</Link></li>
              <li><Link href="/#about" className="text-gray-400 hover:text-primary transition-colors text-sm">À Propos</Link></li>
              <li><Link href="/contact#contact-form" className="text-gray-400 hover:text-primary transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-6">Nos Services</h3>
            <ul className="space-y-4">
              <li><Link href="/services/electricite" className="text-gray-400 hover:text-accent transition-colors text-sm">Électricité Générale</Link></li>
              <li><Link href="/services/serrurerie" className="text-gray-400 hover:text-primary transition-colors text-sm">Serrurerie & Sécurité</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span>10 Rue Georges Bréant<br />28410 Broué</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone size={18} className="text-primary shrink-0" />
                <a href="tel:0638194752" className="hover:text-white transition-colors">06 38 19 47 52</a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail size={18} className="text-primary shrink-0" />
                <a href="mailto:contact@prodigelec.fr" className="hover:text-white transition-colors">contact@prodigelec.fr</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © 2025 PRODIGELEC. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-gray-300 text-xs transition-colors">Mentions Légales</a>
            <Link href="/politique-de-confidentialite" className="text-gray-500 hover:text-gray-300 text-xs transition-colors">Politique de Confidentialité</Link>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-xs transition-colors">CGV</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
