"use client";
import { useEffect } from "react";
import Image from "next/image";
import { Phone, MapPin, Globe, Mail, CheckCircle2, QrCode } from "lucide-react";
import { IoKey } from "react-icons/io5";
import { FcFlashOn } from "react-icons/fc";

export default function FlyerPage() {
  // Fonction d'impression
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 print:p-0 print:bg-white">
      {/* Print Styles Injection */}
      <style jsx global>{`
        @media print {
          @page {
            margin: 0;
            size: auto;
          }
          body {
            background: white;
            color: black;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          /* Masquer les éléments de navigation du layout principal */
          nav, footer, .fixed.bottom-6 {
            display: none !important;
          }
          /* Masquer le bouton d'impression */
          .no-print {
            display: none !important;
          }
        }
        .clip-path-slant {
          clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
        }
      `}</style>

      {/* Controls Bar */}
      <div className="max-w-[210mm] mx-auto mb-8 flex justify-between items-center no-print">
        <h1 className="text-2xl font-bold text-gray-800">Aperçu du Flyer</h1>
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full font-bold shadow-lg transition-all transform hover:scale-105"
        >
          <span className="text-xl">🖨️</span> Imprimer / Télécharger PDF
        </button>
      </div>

      {/* Flyer A4 Container */}
      <div 
        className="mx-auto bg-white shadow-2xl overflow-hidden relative print:shadow-none"
        style={{
          width: '210mm',
          minHeight: '297mm',
          maxWidth: '100%',
        }}
      >
        {/* Background Patterns */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -ml-16 -mb-16" />

        {/* Header Section */}
        <div className="relative bg-[#0b1a2a] text-white p-12 pb-16 clip-path-slant">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-6">
              <div className="relative w-24 h-24 bg-white rounded-2xl p-2 shadow-lg">
                <Image
                  src="/prodigelec-logo.svg"
                  alt="Logo PRODIGELEC"
                  fill
                  priority
                  className="object-contain p-2"
                />
              </div>
              <div>
                <h1 className="text-5xl font-black tracking-tighter mb-2">PRODIGELEC</h1>
                <p className="text-xl text-primary font-medium tracking-wide uppercase">Électricité & Serrurerie</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-gray-400 text-sm">Artisan qualifié</p>
            </div>
          </div>
        </div>

        {/* Hero Message - Overlapping Header */}
        <div className="relative px-6 md:px-12 -mt-8 mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border-l-8 border-primary flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 text-center md:text-left">
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-black text-[#0b1a2a] mb-2 uppercase tracking-tight">
                DÉPANNAGE URGENT
              </h2>
            </div>
            <div className="md:text-right shrink-0">
              <a href="tel:0638194752" className="text-4xl sm:text-5xl md:text-6xl font-black text-primary hover:text-primary-dark transition-colors leading-none block">
                06 38 19 47 52
              </a>
              <p className="text-xs text-gray-400 mt-1 uppercase tracking-widest font-semibold mb-2">Appel direct</p>
              <p className="text-gray-600 font-medium text-sm md:text-base leading-relaxed">
                Intervention rapide <span className="text-primary font-bold">du lundi au vendredi</span><br/> en Eure (27) et Eure-et-Loir (28)
              </p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="px-12 mb-12 grid grid-cols-2 gap-12">
          {/* Électricité */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                <FcFlashOn size={40} />
              </div>
              <h3 className="text-3xl font-bold text-[#0b1a2a]">Électricité</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Dépannage toutes pannes",
                "Mise aux normes (NFC 15-100)",
                "Remplacement tableau",
                "Domotique & Connectivité",
                "Vidéophonie & Interphonie",
                "Éclairage LED"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <span className="text-gray-700 font-medium text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Serrurerie */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-yellow-50 rounded-2xl flex items-center justify-center text-yellow-600">
                <IoKey size={40} />
              </div>
              <h3 className="text-3xl font-bold text-[#0b1a2a]">Serrurerie</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Ouverture de porte (clanquée/fermée)",
                "Changement de serrure",
                "Installation porte blindée",
                "Réparation volet roulant",
                "Reproduction de clés",
                "Sécurisation après effraction"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <span className="text-gray-700 font-medium text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Zones d'intervention */}
        <div className="px-12 mb-12">
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <div className="flex items-center gap-4 mb-4">
              <MapPin className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-bold text-[#0b1a2a]">ZONES D&apos;INTERVENTION</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                "Broué (28)", "Dreux", "Chartres", "Évreux (27)", 
                "Anet", "Nonancourt", "Saint-André-de-l'Eure"
              ].map((city) => (
                <span key={city} className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-gray-700 font-bold shadow-sm">
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-auto bg-[#0b1a2a] text-white p-12">
          <div className="flex justify-between items-end">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-primary" />
                <span className="text-lg">www.prodigelec.fr</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-lg">contact@prodigelec.fr</span>
              </div>
              <div className="pt-4 text-sm text-gray-500">
                <p>SIRET : 80430489700023 • Assurance Décennale</p>
                <p>Devis gratuit & sans engagement</p>
              </div>
            </div>
            
            {/* QR Code */}
            <div className="bg-white p-2 rounded-lg shadow-sm">
              <div className="relative w-24 h-24">
                <Image
                  src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://www.prodigelec.fr"
                  alt="QR Code vers le site"
                  fill
                  className="object-contain"
                  unoptimized // Important for external URLs in some configs, and fine for QR codes
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="h-4 bg-primary w-full" />
      </div>
    </div>
  );
}
