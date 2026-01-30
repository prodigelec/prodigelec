import { Phone, Mail, MapPin, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#020617] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="text-2xl font-black tracking-tighter text-white">
              <span className="text-primary">BEAVER</span>'AID
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Votre artisan de confiance en Eure-et-Loir. Expertise technique, réactivité et solutions sur-mesure pour tous vos besoins.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-[#020617] transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-facebook"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-[#020617] transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-[#020617] transition-all">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6">Navigation</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Accueil</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors text-sm">Services</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-primary transition-colors text-sm">À Propos</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-primary transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-6">Nos Services</h3>
            <ul className="space-y-4">
              <li><a href="/services/electricite" className="text-gray-400 hover:text-amber-500 transition-colors text-sm">Électricité Générale</a></li>
              <li><a href="/services/serrurerie" className="text-gray-400 hover:text-blue-500 transition-colors text-sm">Serrurerie & Sécurité</a></li>
              <li><a href="/services/web" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Création Sites Vitrines</a></li>
              <li><a href="/services/electricite" className="text-gray-400 hover:text-red-400 transition-colors text-sm">Dépannage Urgent</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span>10 Rue Georges Bréant<br/>28410 Broué</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone size={18} className="text-primary shrink-0" />
                <a href="tel:0638194752" className="hover:text-white transition-colors">06 38 19 47 52</a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail size={18} className="text-primary shrink-0" />
                <a href="mailto:beaveraid28@gmail.com" className="hover:text-white transition-colors">beaveraid28@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © 2025 Beaver'aid. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-gray-300 text-xs transition-colors">Mentions Légales</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-xs transition-colors">Politique de Confidentialité</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-xs transition-colors">CGV</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
