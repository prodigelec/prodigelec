"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, Globe, Mail, CheckCircle2, QrCode, Zap, Printer, Star, Lightbulb, Download } from "lucide-react";
import { IoKey } from "react-icons/io5";
import Logo from "@/app/public/components/layout/Navbar/Logo";
import dynamic from 'next/dynamic';

// Import dynamique du composant PDF et du lien de téléchargement (Client Side Only)
// Import dynamique du bouton PDF (Client Side Only pour éviter les erreurs @react-pdf/renderer)
const FlyerDownloadButton = dynamic(() => import("./components/FlyerDownloadButton"), {
  ssr: false,
  loading: () => (
    <div className="flex-1 flex items-center justify-center gap-2 bg-white/50 text-[#0b1a2a] px-6 py-3 rounded-full font-bold animate-pulse">
      <Download className="w-5 h-5" /> PDF
    </div>
  )
});

export default function FlyerPage() {
  const flyerRef = useRef(null);
  // Fonction d'impression
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#0b1a2a] pt-32 pb-12 px-4 print:p-0 print:bg-white">
      {/* Print Styles Injection */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @media print {
          @page {
            size: A5;
            margin: 0;
          }
          html, body {
            width: 148mm;
            height: 210mm;
            margin: 0;
            padding: 0;
            overflow: hidden;
            background: white;
            color: #0b1a2a;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          /* Masquer les éléments de navigation du layout principal */
          nav, footer, header, .fixed, [class*="fixed"] {
            display: none !important;
          }
          /* Masquer le bouton d'impression */
          .no-print {
            display: none !important;
          }
          /* Pour la lisibilité en mode impression */
          .print-background-white {
            background: white !important;
            color: #0b1a2a !important;
          }
          .print-text-dark {
            color: #0b1a2a !important;
          }
          .print-border-dark {
            border-color: rgba(11, 26, 42, 0.2) !important;
          }
          /* Forcer le conteneur du flyer à prendre toute la page */
          .print-container {
            width: 148mm !important;
            height: 210mm !important;
            margin: 0 !important;
            padding: 0 !important;
            overflow: hidden !important;
            box-shadow: none !important;
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            transform: none !important;
            page-break-after: avoid !important;
            page-break-before: avoid !important;
            background: white !important;
            color: #0b1a2a !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            /* Surcharge des variables Tailwind 4 pour éviter oklch en impression */
            --color-primary: #c9a227 !important;
            --color-primary-dark: #a88b1f !important;
          }
          /* Ajuster les éléments spécifiques pour la lisibilité sur blanc */
          .print-no-glow {
            text-shadow: none !important;
            box-shadow: none !important;
            filter: none !important;
          }
          .print-gray-text {
            color: #4b5563 !important;
          }
        }
      `}} />

      {/* Layout Wrapper */}
      <div className="max-w-7xl mx-auto lg:flex lg:items-start lg:gap-16">

        {/* Sidebar - Controls & Instructions */}
        <div className="lg:w-1/3 space-y-8 no-print lg:sticky lg:top-36 mb-12 lg:mb-0">
          <div className="space-y-6">
            <h1 className="text-3xl font-black text-white uppercase italic tracking-tighter leading-none">
              Aperçu du <span className="text-primary italic">Flyer</span>
            </h1>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Visualisez et imprimez votre coupon de réduction. Format A5 optimisé pour une impression de haute qualité.
            </p>

            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 pt-2">
              <Link
                href="/public/contact#contact-form"
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full font-bold shadow-lg transition-all transform hover:scale-105 border border-white/20"
              >
                <Mail className="w-5 h-5 text-primary" /> Contact
              </Link>
              <div className="flex gap-3">
                <button
                  onClick={handlePrint}
                  className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full font-bold shadow-lg transition-all transform hover:scale-105"
                >
                  <Printer className="w-5 h-5" /> Imprimer
                </button>

                {/* Bouton PDF encapsulé */}
                <FlyerDownloadButton />
              </div>
            </div>
          </div>

          {/* Client Instructions */}
          <div className="bg-blue-900/10 border border-blue-500/20 rounded-[30px] p-8 backdrop-blur-md relative overflow-hidden group">
            {/* Background Decor */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors" />

            <div className="relative z-10 flex flex-col gap-6">
              <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center text-primary">
                <Lightbulb className="w-7 h-7" />
              </div>
              <div className="space-y-4">
                <h3 className="text-white font-black text-lg uppercase tracking-tight">Comment profiter de l'offre ?</h3>
                <div className="space-y-3">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Imprimez ce coupon ou présentez-le simplement sur votre smartphone au technicien lors de son passage. <span className="text-primary font-semibold italic">Offre limitée aux 100 premiers clients de l'année.</span>
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Pour une prise en charge rapide, mentionnez le code <span className="text-primary font-bold">FLYER2026</span> lors de votre demande de devis.
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <span className="text-[11px] text-gray-500 italic leading-tight block">
                    * L'offre de -10% s'applique uniquement sur la main d'œuvre et le déplacement (hors matériel).
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Flyer A5 Container Wrapper */}
        <div className="lg:w-2/3 flex justify-center lg:justify-start">
          <div
            ref={flyerRef}
            className="shadow-2xl overflow-hidden relative print-container flex flex-col"
            style={{
              width: '148mm',
              minHeight: '210mm',
              height: '210mm',
              maxWidth: '100%',
              background: 'linear-gradient(to bottom right, #0b1a2a, #112438, #0b1a2a)',
              color: '#ffffff'
            }}
          >
            {/* Background Patterns */}
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl -mr-12 -mt-12" style={{ backgroundColor: 'rgba(201, 162, 39, 0.1)' }} />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full blur-3xl -ml-12 -mb-12" style={{ backgroundColor: 'rgba(201, 162, 39, 0.1)' }} />

            {/* Header Section */}
            <div
              className="relative pt-8 px-8 pb-16 [clip-path:polygon(0_0,100%_0,100%_85%,0_100%)] print:bg-primary/5"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', color: '#ffffff' }}
            >
              <div className="flex justify-between items-start">
                <div className="scale-90 origin-top-left">
                  <Logo />
                </div>
                <div className="text-right">
                  <div
                    className="backdrop-blur-md border px-3 py-1.5 rounded-lg shadow-lg print:bg-white print:border-primary/20"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', borderColor: 'rgba(255, 255, 255, 0.2)' }}
                  >
                    <p className="font-bold text-sm uppercase tracking-wider flex items-center gap-2 print:text-[#0b1a2a]">
                      <Star className="w-5 h-5 fill-primary" style={{ color: '#c9a227' }} /> Artisan qualifié
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Message - Overlapping Header */}
            <div className="relative px-6 -mt-10 mb-5">
              <div className="bg-white rounded-xl shadow-lg p-4 border-l-4 border-primary flex flex-col items-center gap-3 text-center print:shadow-none print:border print:border-l-4 print:border-gray-100 print:border-l-primary">
                <div className="w-full flex justify-between items-center">
                  <h2 className="text-xl font-black text-[#0b1a2a] uppercase tracking-tight">
                    DÉPANNAGE URGENT
                  </h2>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">Appel direct</p>
                </div>
                <div className="w-full flex justify-between items-end">
                  <div className="text-left">
                    <p className="text-gray-600 font-medium text-xs leading-snug">
                      Intervention rapide <span className="text-primary font-bold">Lun-Ven</span><br /> Eure (27) & Eure-et-Loir (28)
                    </p>
                  </div>
                  <a href="tel:0638194752" className="text-4xl font-black text-primary hover:text-primary-dark transition-colors leading-none print:no-glow">
                    06 38 19 47 52
                  </a>
                </div>
              </div>
            </div>

            {/* PROMO BANNER */}
            <div className="px-6 mb-5">
              <div
                className="text-white p-3 rounded-lg shadow-md transform rotate-1 border border-white border-dashed outline-2 relative overflow-hidden print:rotate-0 print:shadow-none print:border-red-600"
                style={{
                  background: 'linear-gradient(to right, #dc2626, #ef4444)',
                  outlineColor: 'rgba(239, 68, 68, 0.3)'
                }}
              >
                <div className="absolute top-0 right-0 -mt-2 -mr-2 bg-white/20 w-16 h-16 rounded-full blur-lg print:hidden"></div>
                <div className="flex items-center justify-between gap-3 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="bg-white text-[#dc2626] font-black text-xl p-2 rounded shadow-sm rotate-2 transform print:rotate-0 print:border print:border-red-600">
                      -10%
                    </div>
                    <div>
                      <h3 className="text-base font-black uppercase italic tracking-wider leading-none">
                        OFFRE DÉCOUVERTE
                      </h3>
                      <div className="flex flex-col">
                        <p className="font-medium text-[10px] leading-tight mt-0.5" style={{ color: '#fee2e2' /* red-100 */ }}>
                          Sur 1ère intervention
                        </p>
                        <p className="text-[9px] leading-tight font-medium opacity-90" style={{ color: '#fecaca' /* red-200 */ }}>
                          (Main d'œuvre & Déplacement - Hors matériel)
                        </p>
                        <p className="text-[8px] leading-tight font-black uppercase mt-1 italic" style={{ color: '#ffffff' }}>
                          * Offre limitée aux 100 premiers clients
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-black/20 print:bg-[#fef2f2] print:border-[#fecaca] px-3 py-1.5 rounded backdrop-blur-sm border border-white/10">
                    <p className="text-[9px] font-bold uppercase tracking-widest text-white/80 print:text-[#b91d1b]">Code</p>
                    <p className="text-sm font-mono font-bold tracking-widest print:text-[#b91d1b]">FLYER2026</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Grid */}
            <div className="px-6 mb-6 grid grid-cols-2 gap-5">
              {/* Électricité */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className="w-10 h-10 border rounded-lg flex items-center justify-center print:text-primary"
                    style={{
                      backgroundColor: 'rgba(30, 58, 138, 0.3)', // blue-900/30
                      borderColor: 'rgba(59, 130, 246, 0.2)', // blue-500/20
                      color: '#60a5fa' // blue-400
                    }}
                  >
                    <Zap size={24} className="fill-current" />
                  </div>
                  <h3 className="text-base font-bold text-white print:text-[#0b1a2a]">Électricité</h3>
                </div>
                <ul className="space-y-1.5">
                  {[
                    "Dépannage toutes pannes",
                    "Mise aux normes",
                    "Remplacement tableau",
                    "Domotique & Connectivité",
                    "Éclairage LED"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#c9a227' }} />
                      <span className="font-medium text-xs leading-tight print:text-gray-700" style={{ color: '#d1d5db' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Serrurerie */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className="w-10 h-10 border rounded-lg flex items-center justify-center print:text-primary"
                    style={{
                      backgroundColor: 'rgba(113, 63, 18, 0.3)', // yellow-900/30
                      borderColor: 'rgba(234, 179, 8, 0.2)', // yellow-500/20
                      color: '#facc15' // yellow-400
                    }}
                  >
                    <IoKey size={24} />
                  </div>
                  <h3 className="text-base font-bold text-white print:text-[#0b1a2a]">Serrurerie</h3>
                </div>
                <ul className="space-y-1.5">
                  {[
                    "Ouverture de porte",
                    "Changement de serrure",
                    "Porte blindée",
                    "Volet roulant",
                    "Reproduction de clés",
                    "Sécurisation"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#c9a227' }} />
                      <span className="font-medium text-xs leading-tight print:text-gray-700" style={{ color: '#d1d5db' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Zones d'intervention */}
            <div className="px-6 mb-1">
              <div
                className="backdrop-blur-sm rounded-xl p-4 border shadow-sm print:bg-gray-50 print:border-gray-100 print:shadow-none"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', borderColor: 'rgba(255, 255, 255, 0.1)' }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-5 h-5" style={{ color: '#c9a227' }} />
                  <h3 className="text-sm font-bold text-white print:text-[#0b1a2a]">ZONES D&apos;INTERVENTION</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Broué", "Dreux", "Chartres", "Évreux",
                    "Anet", "Nonancourt", "St-André"
                  ].map((city) => (
                    <span
                      key={city}
                      className="border px-2.5 py-1 rounded font-bold shadow-sm text-[10px] print:bg-white print:border-gray-200 print:text-gray-600"
                      style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', borderColor: 'rgba(255, 255, 255, 0.1)', color: '#d1d5db' }}
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Info */}
            <div className="mt-auto bg-[#0b1a2a] print:bg-white text-white print:text-[#0b1a2a] pt-4 px-6 pb-8">
              <div className="flex justify-between items-center">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <Globe className="w-3.5 h-3.5 text-primary" />
                    <span className="text-sm">www.prodigelec.fr</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-primary" />
                    <span className="text-sm">contact@prodigelec.fr</span>
                  </div>
                  <div className="pt-1.5 text-[9px] text-gray-500 print:text-gray-400 leading-tight">
                    <p>SIRET : 80430489700023 • Décennale</p>
                    <p>Devis gratuit</p>
                  </div>
                </div>

                {/* QR Code */}
                <div className="bg-white p-1.5 rounded shadow-sm print:border print:border-gray-100">
                  <div className="relative w-14 h-14">
                    <Image
                      src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://www.prodigelec.fr"
                      alt="QR Code"
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Strip */}
            <div className="h-2 bg-primary w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
