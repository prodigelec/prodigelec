"use client";

import React, { useState, useEffect } from "react";
import {
  ShieldCheck,
  Smartphone,
  Eye,
  Bell,
  MapPin,
  FileText,
  Gift,
  Mail,
  Globe,
  Facebook,
  Phone,
  Printer,
  Settings,
  ChevronRight,
  Sparkles,
  RefreshCw,
  EyeOff,
  BadgeCheck
} from "lucide-react";
import ProdigelecMonogram from "@/app/components/ui/ProdigelecMonogram";

// Importation de polices Google Fonts via un lien dynamique injecté pour le mode éditeur
function GoogleFontsInjector() {
  return (
    <style dangerouslySetInnerHTML={{
      __html: `
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=Inter:wght@300;400;500;600;700;800&family=Sora:wght@400;600;700;800;900&display=swap');

        .font-handwritten {
          font-family: 'Caveat', cursive;
        }

        /* Styles d'impression communs A4 / A5 */
        @media print {
          html, body {
            background: white !important;
            color: black !important;
            width: 100vw !important;
            height: 100vh !important;
            min-height: 0 !important;
            max-height: 100vh !important;
            margin: 0 !important;
            padding: 0 !important;
            overflow: hidden !important;
          }
          /* Cacher toute l'interface de contrôle et la navigation globale */
          .no-print, #global-navbar, nav, footer, header, .floating-contact-btn {
            display: none !important;
          }

          /* Cacher visuellement TOUS les éléments (y compris leurs fonds bleu nuit
             bg-slate-900) en gardant la mise en page, puis ne rendre visible
             QUE le flyer et ses descendants. Empêche le bleu nuit d'apparaître
             dans le PDF exporté. */
          body * {
            visibility: hidden !important;
          }
          .print-area, .print-area * {
            visibility: visible !important;
          }

          /* Conteneur d'impression : position fixed pour s'ancrer à la page
             d'impression (et non au parent .flex-1 qui ferait dépasser sur 2 pages).
             Dimensions A4 par défaut ; le mode A5 est géré via .format-a5.
             Le format papier final est choisi par le logiciel d'impression. */
          .print-area {
            position: fixed !important;
            top: 50% !important;
            left: 50% !important;
            width: 210mm !important;
            height: 297mm !important;
            margin: 0 !important;
            padding: 0 !important;
            border: none !important;
            border-radius: 0 !important;
            box-shadow: none !important;
            background: #0b1a2a !important;
            overflow: hidden !important;
            transform: translate(-50%, -50%) !important;
            transform-origin: center !important;
            page-break-inside: avoid !important;
            page-break-after: avoid !important;
            page-break-before: avoid !important;
            break-inside: avoid !important;
            break-after: avoid !important;
            break-before: avoid !important;
          }

          /* Mode A5 : visuel réduit homothétiquement à 70,47% (= 148/210), centré */
          .print-area.format-a5 {
            transform: translate(-50%, -50%) scale(0.7047) !important;
          }

          /* Empêcher toute pagination supplémentaire sur l'élément racine */
          html, body, body > * {
            page-break-after: avoid !important;
            page-break-before: avoid !important;
            page-break-inside: avoid !important;
            break-after: avoid !important;
            break-before: avoid !important;
            break-inside: avoid !important;
          }

          /* Forcer l'impression des fonds de couleur et images */
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `
    }} />
  );
}

export default function FlyerContent() {
  // Masquer la navbar globale (desktop + mobile/burger), le footer et le bouton flottant sur cette page
  useEffect(() => {
    const navbar = document.getElementById("global-navbar");
    const footer = document.querySelector("footer");
    const contactBtn = document.querySelector(".floating-contact-btn");

    if (navbar) navbar.style.display = "none";
    if (footer) footer.style.display = "none";
    if (contactBtn) contactBtn.style.display = "none";

    return () => {
      if (navbar) navbar.style.display = "";
      if (footer) footer.style.display = "";
      if (contactBtn) contactBtn.style.display = "";
    };
  }, []);

  // États éditables du flyer
  const [format, setFormat] = useState("A5"); // A5 par défaut
  const [offerYear, setOfferYear] = useState("2026");
  const [offerMonth, setOfferMonth] = useState("JUILLET");
  const [offerDay, setOfferDay] = useState("31");
  const [qrUrl, setQrUrl] = useState("https://www.prodigelec.fr");
  const [phoneNumber, setPhoneNumber] = useState("06 38 19 47 52");
  const [emailAddress, setEmailAddress] = useState("contact@prodigelec.fr");
  const [showControls, setShowControls] = useState(true);

  // Dérivations de dates
  const dateFormattedUpper = `JUSQU'AU ${offerDay} ${offerMonth} ${offerYear}`;
  const dateFormattedShort = `${offerDay}/${offerMonth === "JUILLET" ? "07" : offerMonth === "AOÛT" ? "08" : offerMonth === "JUIN" ? "06" : "12"}/${offerYear}`;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col md:flex-row font-sans">
      <GoogleFontsInjector />

      {/* PANNEAU DE CONTROLE - Masqué à l'impression */}
      {showControls && (
        <div className="w-full md:w-80 bg-slate-950 p-6 border-b md:border-b-0 md:border-r border-slate-800 flex flex-col gap-6 no-print shrink-0 overflow-y-auto max-h-screen">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Settings className="w-5 h-5 text-amber-500" />
              <h2 className="font-bold text-lg tracking-wide text-white">Éditeur de Flyer</h2>
            </div>
            <button 
              onClick={() => setShowControls(false)} 
              title="Masquer les contrôles"
              className="p-1 hover:bg-slate-800 rounded transition text-slate-400 hover:text-white"
            >
              <EyeOff className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-400">
            {"Modifiez les informations ci-dessous. Le visuel à droite s'adaptera au format d'impression."}
          </p>

          <hr className="border-slate-800" />

          {/* Configuration Format */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-500 font-sora">{"Format d'impression"}</h3>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setFormat("A4")}
                className={`py-2 px-3 text-xs font-bold rounded-lg border transition cursor-pointer ${
                  format === "A4" 
                    ? "bg-amber-500 text-slate-950 border-amber-500 font-black" 
                    : "bg-slate-900 text-slate-300 border-slate-700 hover:bg-slate-800"
                }`}
              >
                A4 (Grand)
              </button>
              <button
                onClick={() => setFormat("A5")}
                className={`py-2 px-3 text-xs font-bold rounded-lg border transition cursor-pointer ${
                  format === "A5" 
                    ? "bg-amber-500 text-slate-950 border-amber-500 font-black" 
                    : "bg-slate-900 text-slate-300 border-slate-700 hover:bg-slate-800"
                }`}
              >
                A5 (Prospectus)
              </button>
            </div>
            <span className="text-[10px] text-slate-500 italic leading-tight">
              {format === "A5" 
                ? "Format A5 actif. Le visuel sera réduit de 70,7% à l'impression pour tenir parfaitement sur un flyer A5." 
                : "Format A4 actif. Le visuel sera imprimé à 100% de sa taille."}
            </span>
          </div>

          <hr className="border-slate-800" />

          {/* Configuration Dates */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-500 font-sora">{"Période de l'Offre"}</h3>
            <div className="grid grid-cols-3 gap-2">
              <div>
                <label className="text-[10px] text-slate-400">Jour</label>
                <input 
                  type="text" 
                  value={offerDay} 
                  onChange={(e) => setOfferDay(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-sm text-white focus:outline-none focus:border-amber-500"
                />
              </div>
              <div>
                <label className="text-[10px] text-slate-400">Mois</label>
                <input 
                  type="text" 
                  value={offerMonth} 
                  onChange={(e) => setOfferMonth(e.target.value.toUpperCase())}
                  className="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-sm text-white focus:outline-none focus:border-amber-500"
                />
              </div>
              <div>
                <label className="text-[10px] text-slate-400">Année</label>
                <input 
                  type="text" 
                  value={offerYear} 
                  onChange={(e) => setOfferYear(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-sm text-white focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>
          </div>

          {/* Configuration QR Code */}
          <div className="flex flex-col gap-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-500">Destination QR Code</h3>
            <input 
              type="text" 
              value={qrUrl} 
              onChange={(e) => setQrUrl(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded px-3 py-1.5 text-sm text-white focus:outline-none focus:border-amber-500"
              placeholder="https://..."
            />
            <span className="text-[10px] text-slate-500 italic">{"Encode l'adresse URL saisie dans le QR Code."}</span>
          </div>

          {/* Contacts */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-500 font-sora">Coordonnées</h3>
            <div>
              <label className="text-[10px] text-slate-400">Téléphone</label>
              <input 
                type="text" 
                value={phoneNumber} 
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded px-3 py-1.5 text-sm text-white focus:outline-none focus:border-amber-500"
              />
            </div>
            <div>
              <label className="text-[10px] text-slate-400">Adresse Email</label>
              <input 
                type="text" 
                value={emailAddress} 
                onChange={(e) => setEmailAddress(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded px-3 py-1.5 text-sm text-white focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>

          <hr className="border-slate-800" />

          {/* Action boutons */}
          <div className="flex flex-col gap-2 mt-auto">
            <button 
              onClick={handlePrint}
              className="w-full bg-amber-500 hover:bg-amber-600 active:scale-[0.98] transition-transform text-slate-950 font-bold py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-amber-500/10"
            >
              <Printer className="w-5 h-5" />
              {"Imprimer / Exporter (A4/A5)"}
            </button>
            
            <p className="text-[10px] text-slate-400 text-center italic mt-1">
              {"Astuce : Dans la fenêtre d'impression, choisissez la taille papier (A4 ou A5), activez \"Graphiques d'arrière-plan\" et réglez les marges sur \"Aucune\"."}
            </p>
          </div>
        </div>
      )}

      {/* ZONE DE PREVISUALISATION DU FLYER */}
      <div className="flex-1 bg-slate-900 p-4 md:p-8 flex items-center justify-center overflow-auto relative">
        {/* Bouton pour réafficher le panneau s'il est masqué */}
        {!showControls && (
          <button 
            onClick={() => setShowControls(true)}
            className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur border border-slate-800 px-3 py-1.5 rounded-lg flex items-center gap-2 text-xs text-amber-500 hover:text-amber-400 hover:bg-slate-900 transition no-print shadow-md cursor-pointer"
          >
            <Settings className="w-3.5 h-3.5" />
            {"Afficher l'éditeur"}
          </button>
        )}

        {/* ENVELOPPE DE PREVISUALISATION POUR L'ÉCRAN */}
        <div
          className="overflow-hidden transition-all duration-300 ease-in-out select-none shadow-2xl rounded-lg bg-white"
          style={{
            width: format === "A4" ? "794px" : "561px",
            height: format === "A4" ? "1123px" : "794px",
          }}
        >
          {/* CONTENEUR DU FLYER (Dimensions A4 de référence : 210mm x 297mm, mis à l'échelle A5) */}
          <div
            className={`print-area bg-[#0b1a2a] text-white relative overflow-hidden shrink-0 flex flex-col justify-between ${
              format === "A5" ? "format-a5" : ""
            }`}
            style={{
              fontFamily: "'Inter', sans-serif",
              aspectRatio: "1/1.414",
              width: "794px",
              height: "1123px",
              transform: format === "A4" ? "none" : "scale(0.707)",
              transformOrigin: "top left",
              transition: "transform 0.3s ease-in-out"
            }}
          >
            {/* HEADER AVEC FOND VILLA & PLAGE + COORDONNÉES INTÉGRÉES */}
            <div className="relative overflow-hidden bg-[#0b1a2a] flex flex-col p-6 gap-4 shrink-0">
            {/* Arrière-plans fusionnés */}
            <div className="absolute inset-0 flex">
              {/* Photo de Villa Moderne (Gauche) */}
              <div
                className="w-1/2 h-full opacity-40 bg-cover bg-center"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=500&q=80')` }}
              />
              {/* Photo de Plage / Vacances (Droite) */}
              <div
                className="w-1/2 h-full opacity-45 bg-cover bg-center"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80')` }}
              />
            </div>

            {/* Overlay dégradé pour uniformiser */}
            <div className="absolute inset-0 bg-linear-to-b from-[#0b1a2a]/90 via-[#0b1a2a]/75 to-[#0b1a2a]" />
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-[#0b1a2a]/20 to-[#0b1a2a]/10" />

            {/* RANGÉE 1 : Logo + accroche */}
            <div className="relative z-10 flex justify-between items-start">
              {/* Logo & Nom de marque */}
              <div className="flex items-center gap-4">
                <ProdigelecMonogram size={56} light={true} />
                <div className="flex flex-col">
                  <div className="text-3xl font-black tracking-wide leading-none font-sora">
                    <span className="text-white">PRODIG</span>
                    <span className="text-[#ffd60a]">ELEC</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[8.5px] uppercase font-bold tracking-[0.22em] text-slate-300 mt-1.5">
                    <span>Électricité</span>
                    <span className="text-amber-500">•</span>
                    <span>Sécurité</span>
                    <span className="text-amber-500">•</span>
                    <span>Automatismes</span>
                  </div>
                </div>
              </div>

              {/* Texte Accroche Cursive */}
              <div className="text-right font-handwritten text-[#ffd60a] text-4xl leading-tight select-none">
                <div className="transform -rotate-3 origin-right mr-2">
                  {"Partez l'esprit"}
                </div>
                <div className="text-white transform -rotate-3 origin-right">
                  {"tranquille !"}
                </div>
              </div>
            </div>

            {/* Fine ligne dorée de démarcation */}
            <div className="relative z-10 w-full h-2px bg-linear-to-r from-amber-500/20 via-amber-500/70 to-amber-500/20" />

            {/* RANGÉE 2 : Coordonnées (zone géo + téléphone/web/email + QR code) */}
            <div className="relative z-10 flex justify-between items-center gap-4">

              {/* Zone Géographique (Gauche) */}
              <div className="w-1/3 flex flex-col gap-1">
                <span className="text-[8.5px] font-extrabold text-amber-400 uppercase tracking-widest">Intervention locale</span>
                <h5 className="text-sm font-black text-white uppercase tracking-wide leading-none">EURE-ET-LOIR <span className="text-[#ffd60a] font-extrabold">(28)</span></h5>
                <h5 className="text-sm font-black text-white uppercase tracking-wide leading-none">EURE <span className="text-[#ffd60a] font-extrabold">(27)</span> & YVELINES <span className="text-[#ffd60a] font-extrabold">(78)</span></h5>
                <div className="flex items-center gap-1.5 mt-0.5 text-[10px] text-slate-300 font-bold">
                  <MapPin className="w-3 h-3 text-amber-400" />
                  <span>Artisan de proximité</span>
                </div>
              </div>

              {/* Infos Contact Direct (Milieu) */}
              <div className="flex-1 flex flex-col items-center justify-center border-x border-amber-500/30 px-4">
                <span className="text-[8.5px] font-extrabold text-amber-400 uppercase tracking-widest mb-1">Contactez-nous</span>

                {/* Téléphone en grand */}
                <div className="flex items-center gap-2 bg-white text-[#0b1a2a] rounded-lg px-4 py-1.5 shadow-md">
                  <Phone className="w-4 h-4 text-amber-600" />
                  <span className="text-lg font-black tracking-wide">{phoneNumber}</span>
                </div>

                {/* Coordonnées Web */}
                <div className="flex flex-col items-center gap-1 mt-2 text-[9px] text-slate-200 font-semibold">
                  <div className="flex items-center gap-1.5">
                    <Globe className="w-3 h-3 text-amber-400" />
                    <span>www.prodigelec.fr</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Mail className="w-3 h-3 text-amber-400" />
                    <span>{emailAddress}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Facebook className="w-3 h-3 text-amber-400" />
                    <span>prodigelec</span>
                  </div>
                </div>
              </div>

              {/* QR Code (Droite) */}
              <div className="w-42.5 flex items-center justify-end gap-3.5 relative">
                {/* Label Scan Cursive */}
                <div className="text-right flex flex-col justify-center select-none absolute left-0 pr-1 shrink-0">
                  <span className="font-handwritten text-white text-xl transform -rotate-12 leading-none">Scannez</span>
                  <span className="font-handwritten text-[#ffd60a] text-xl transform -rotate-12 leading-none mt-1">moi !</span>
                  <svg className="w-6 h-6 text-amber-400 mt-1 self-end transform rotate-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>

                {/* QR Code généré via API */}
                <div className="w-21 h-21 bg-white border border-amber-500/50 rounded-lg p-1.5 shadow-md flex items-center justify-center shrink-0 z-10 relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${encodeURIComponent(qrUrl)}&color=0b1a2a`}
                    alt="QR Code Prodigelec"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

            </div>
          </div>

          {/* ZONE PRINCIPALE (Accroche + Équipements) */}
          <div className="flex-1 bg-linear-to-b from-[#0b1a2a] via-[#0f2540] to-[#0b1a2a] px-8 py-5 flex flex-col gap-4 shrink-0 relative overflow-hidden">
            {/* Halos décoratifs amber flou */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Message principal */}
            <div className="text-center relative z-10">
              {/* Badge partenaire Delta Dore */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/15 border border-amber-500/40 rounded-full mb-2">
                <ShieldCheck className="w-3 h-3 text-amber-400" />
                <span className="text-[8.5px] font-black uppercase tracking-[0.2em] text-amber-300">Solutions Delta Dore certifiées</span>
              </div>
              <h1 className="text-white text-3xl font-black tracking-tight font-sora leading-none">
                PROTÉGEZ <span className="text-[#ffd60a]">VOTRE MAISON</span>
              </h1>
              <div className="relative inline-block mt-1">
                <h2 className="text-white text-xl font-black tracking-wider font-sora leading-none">
                  PENDANT VOS VACANCES
                </h2>
                {/* Soulignement décoratif */}
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-24 h-[3px] bg-linear-to-r from-transparent via-amber-400 to-transparent rounded-full" />
              </div>
              <p className="text-slate-300 text-xs mt-3 max-w-lg mx-auto font-medium">
                <span className="text-[#ffd60a] font-bold">Alarme connectée</span> &amp; <span className="text-[#ffd60a] font-bold">vidéosurveillance</span> — sécurité totale.
              </p>

              {/* Mention manuscrite Devis Gratuit — marquante, positionnée pour rester visible */}
              <div className="absolute right-2 top-0 select-none pointer-events-none z-20">
                <div className="relative transform rotate-6">
                  <span className="font-handwritten text-[#ffd60a] text-4xl font-bold leading-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
                    Devis
                  </span>
                  <span className="block font-handwritten text-white text-4xl font-bold leading-none -mt-2 ml-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
                    Gratuit !
                  </span>
                  <svg className="absolute -bottom-2 left-2 w-20 h-3 text-[#ffd60a]" viewBox="0 0 80 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M 2 8 Q 20 2, 40 6 T 78 4" />
                  </svg>
                </div>
              </div>
            </div>

            {/* COMPARATIF 2 SOLUTIONS — Photos Delta Dore */}
            {/* STORY : 2 scènes mettant en avant les équipements de sécurité */}
            <div className="flex justify-center items-stretch gap-5 h-[320px] relative z-10">

              {/* SCÈNE 1 : VACANCES + smartphone avec notif sécurité */}
              <div className="flex-1 h-full rounded-2xl overflow-hidden shadow-xl shadow-amber-500/15 relative border border-amber-500/30">
                {/* Background : plage / vacances */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('/flyer/offre-vacances/story-vacances.jpg')` }}
                />
                {/* Overlay dégradé pour lisibilité */}
                <div className="absolute inset-0 bg-linear-to-t from-[#0b1a2a] via-[#0b1a2a]/40 to-transparent" />

                {/* Numéro */}
                <div className="absolute top-3 left-3 w-9 h-9 bg-linear-to-br from-amber-500 to-[#ffd60a] text-[#0b1a2a] rounded-full flex items-center justify-center font-black text-sm shadow-lg shadow-amber-500/40 z-10 font-sora">
                  01
                </div>

                {/* SMARTPHONE OVERLAY avec notif sécurité — centré flottant */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform -rotate-6 z-10 drop-shadow-2xl">
                  {/* Coque smartphone */}
                  <div className="w-[110px] h-[180px] bg-[#0b1a2a] rounded-[18px] border-2 border-slate-800 p-1.5 shadow-2xl">
                    {/* Encoche */}
                    <div className="w-12 h-3 bg-[#0b1a2a] rounded-b-lg mx-auto -mb-1 relative z-10" />
                    {/* Écran */}
                    <div className="w-full h-full bg-linear-to-b from-emerald-50 to-white rounded-[12px] overflow-hidden flex flex-col p-2 gap-1.5">
                      {/* Heure */}
                      <div className="text-[6.5px] font-bold text-slate-500 text-center">14:32</div>
                      {/* Notif card */}
                      <div className="bg-white border border-emerald-200 rounded-lg p-1.5 shadow-md">
                        <div className="flex items-center gap-1 mb-0.5">
                          <div className="w-3 h-3 bg-emerald-500 rounded-full flex items-center justify-center">
                            <ShieldCheck className="w-2 h-2 text-white" />
                          </div>
                          <span className="text-[6px] font-black uppercase tracking-wide text-emerald-700">Sécurité</span>
                        </div>
                        <p className="text-[6px] font-bold text-[#0b1a2a] leading-tight">Maison sécurisée</p>
                        <p className="text-[5.5px] text-slate-500 leading-tight">Tout est OK ✓</p>
                      </div>
                      {/* Badge "système armé" */}
                      <div className="bg-emerald-100 border border-emerald-300 rounded-md px-1.5 py-1 flex items-center gap-1 mt-auto">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                        <span className="text-[5.5px] font-bold text-emerald-800 uppercase tracking-wider">Système armé</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Storytelling en bas */}
                <div className="absolute bottom-0 left-0 right-0 p-3 z-10">
                  <p className="text-[9px] font-black uppercase tracking-[0.2em] text-amber-300 mb-0.5">Vous</p>
                  <h3 className="text-white text-base font-black uppercase tracking-tight font-sora leading-tight">
                    Profitez sereinement
                  </h3>
                  <p className="text-slate-200 text-[10px] font-semibold mt-0.5">
                    Notifications temps réel sur votre mobile.
                  </p>
                </div>
              </div>

              {/* Séparateur */}
              <div className="flex flex-col items-center justify-center relative z-10">
                <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-linear-to-b from-transparent via-amber-500/30 to-transparent" />
                <div className="bg-[#0b1a2a] border-2 border-amber-400 text-amber-400 rounded-full px-2.5 py-1 shadow-lg shadow-amber-500/30 z-10 transform -rotate-12">
                  <span className="font-handwritten text-base font-bold leading-none whitespace-nowrap">pendant<br/>ce temps...</span>
                </div>
              </div>

              {/* SCÈNE 2 : MAISON + équipements de sécurité dispersés */}
              <div className="flex-1 h-full rounded-2xl overflow-hidden shadow-xl shadow-amber-500/15 relative border border-amber-500/30">
                {/* Background : maison */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('/flyer/offre-vacances/story-maison.jpg')` }}
                />
                {/* Overlay dégradé */}
                <div className="absolute inset-0 bg-linear-to-t from-[#0b1a2a] via-[#0b1a2a]/40 to-transparent" />

                {/* Numéro */}
                <div className="absolute top-3 left-3 w-9 h-9 bg-linear-to-br from-amber-500 to-[#ffd60a] text-[#0b1a2a] rounded-full flex items-center justify-center font-black text-sm shadow-lg shadow-amber-500/40 z-10 font-sora">
                  02
                </div>

                {/* SIRÈNE EXTÉRIEURE — en haut-droite (visible sur façade) */}
                <div className="absolute top-3 right-3 w-[55px] h-[55px] bg-white rounded-xl shadow-2xl border-2 border-amber-500/60 p-1 z-10 transform rotate-6">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/flyer/offre-vacances/sirene-exterieure.png"
                    alt="Sirène extérieure"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* CENTRALE D'ALARME — centre */}
                <div className="absolute top-1/2 left-4 -translate-y-1/2 w-[60px] h-[60px] bg-white rounded-xl shadow-2xl border-2 border-amber-500/60 p-1 z-10 transform -rotate-6">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/flyer/offre-vacances/hub-tyxal.png"
                    alt="Centrale d'alarme"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* CAMÉRA EXTÉRIEURE — milieu droite */}
                <div className="absolute top-[42%] right-5 w-[70px] h-[60px] bg-white rounded-xl shadow-2xl border-2 border-amber-500/60 p-1 z-10 transform rotate-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/flyer/offre-vacances/tycam-guard.png"
                    alt="Caméra vidéosurveillance"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Storytelling en bas */}
                <div className="absolute bottom-0 left-0 right-0 p-3 z-10">
                  <p className="text-[9px] font-black uppercase tracking-[0.2em] text-amber-300 mb-0.5">Votre maison</p>
                  <h3 className="text-white text-base font-black uppercase tracking-tight font-sora leading-tight">
                    Veille sur elle-même
                  </h3>
                  <p className="text-slate-200 text-[10px] font-semibold mt-0.5">
                    Alarme + sirène + caméra connectées 24h/24.
                  </p>
                </div>
              </div>
            </div>

            {/* BANDEAU OFFRE PROMO (Capsule noire) */}
            <div className="bg-[#0b1a2a] text-white rounded-2xl p-5 relative shadow-xl shrink-0 border border-amber-500/20">
              {/* Badge jaune Offert */}
              <div className="absolute -top-1.5 -right-1.5 bg-linear-to-r from-amber-500 to-[#ffd60a] text-slate-950 text-xs font-black px-4 py-2 rounded-bl-xl shadow-md rotate-6 uppercase tracking-wider animate-pulse flex items-center gap-1.5 z-20">
                <Sparkles className="w-3 h-3" />
                Offert !
              </div>

              <div className="flex items-center gap-5">
                {/* Icône Cadeau Doré */}
                <div className="w-14 h-14 bg-linear-to-br from-amber-500/20 to-amber-500/10 border-2 border-amber-500/60 rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-amber-500/15">
                  <Gift className="w-7 h-7 text-amber-500" />
                </div>
                
                {/* Descriptif Offre */}
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[#ffd60a] text-sm font-black uppercase tracking-widest font-sora">OFFRE VACANCES</span>
                  </div>
                  <h3 className="text-xl font-black tracking-wide font-sora leading-tight mt-0.5">
                    1 DÉTECTEUR OFFERT*
                  </h3>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">
                    {"POUR TOUTE INSTALLATION D'UN SYSTÈME D'ALARME"}
                  </p>
                </div>

                {/* Capsule Date de validité */}
                <div className="bg-linear-to-r from-amber-500 to-[#ffd60a] text-slate-950 font-black rounded-lg px-4 py-2 text-center shadow-lg shadow-amber-500/25 shrink-0 self-center">
                  <span className="block text-[8px] uppercase tracking-wider font-extrabold opacity-80">Valable</span>
                  <span className="text-sm font-black tracking-wide leading-none">{dateFormattedUpper}</span>
                </div>
              </div>

              {/* Mention légale interne */}
              <p className="text-[7.5px] text-slate-400 mt-2.5 leading-relaxed border-t border-slate-800 pt-1.5">
                {"* Offre valable jusqu'au "}{dateFormattedShort}{" pour toute installation d'un système d'alarme Delta Dore. Non cumulable avec d'autres offres en cours."}
              </p>
            </div>

            {/* GRILLE DES 4 POINTS DE REASSURANCE (1 seule ligne) */}
            <div className="grid grid-cols-4 gap-x-4 shrink-0">
              <div className="flex flex-col items-center text-center gap-1">
                <div className="w-8 h-8 bg-amber-500/10 border border-amber-500/30 rounded-lg flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                </div>
                <h4 className="text-[9px] font-extrabold text-white uppercase tracking-wide leading-tight">Installation Pro</h4>
              </div>

              <div className="flex flex-col items-center text-center gap-1">
                <div className="w-8 h-8 bg-amber-500/10 border border-amber-500/30 rounded-lg flex items-center justify-center shrink-0">
                  <Smartphone className="w-4 h-4 text-amber-400" />
                </div>
                <h4 className="text-[9px] font-extrabold text-white uppercase tracking-wide leading-tight">Pilotage Mobile</h4>
              </div>

              <div className="flex flex-col items-center text-center gap-1">
                <div className="w-8 h-8 bg-amber-500/10 border border-amber-500/30 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-amber-400" />
                </div>
                <h4 className="text-[9px] font-extrabold text-white uppercase tracking-wide leading-tight">Artisan Local</h4>
              </div>

              <div className="flex flex-col items-center text-center gap-1">
                <div className="w-8 h-8 bg-amber-500/10 border border-amber-500/30 rounded-lg flex items-center justify-center shrink-0">
                  <BadgeCheck className="w-4 h-4 text-amber-400" />
                </div>
                <h4 className="text-[9px] font-extrabold text-white uppercase tracking-wide leading-tight">Garantie SAV</h4>
              </div>
            </div>

            {/* BLOC CERTIFICATION NORME EN 50131-2 — compact 1 ligne */}
            <div className="bg-linear-to-r from-[#0f2540] via-[#143158] to-[#0f2540] border border-amber-500/40 rounded-lg px-3 py-2 flex items-center gap-3 shrink-0 shadow-md">
              <div className="w-7 h-7 bg-linear-to-br from-amber-500 to-[#ffd60a] rounded-full flex items-center justify-center shrink-0 shadow-md shadow-amber-500/30">
                <BadgeCheck className="w-4 h-4 text-[#0b1a2a]" />
              </div>
              <div className="flex-1 flex items-center gap-2 flex-wrap">
                <span className="text-[10px] font-black text-amber-400 uppercase tracking-widest">Conforme</span>
                <span className="text-[11px] font-black text-[#0b1a2a] bg-[#ffd60a] border border-amber-600 px-2 py-0.5 rounded shadow-sm">EN 50131-2</span>
                <span className="text-[9px] font-bold text-white">Compatible Assurances — protection brouillage, autoprotection, codes sécurisés</span>
              </div>
            </div>

          </div>

          {/* FOOTER (sans coordonnées — elles sont en haut, après le header) */}
          <div className="bg-[#0b1a2a] px-8 py-3 border-t border-amber-500/20 flex flex-col gap-2 shrink-0">

            {/* Sceau de Confiance / Bloc "Sécurité, Confort, Sérénité" */}
            <div className="bg-amber-500/15 border border-amber-500/40 rounded-xl px-4 py-2 flex items-center justify-between mt-1.5 select-none">
              <div className="flex items-center gap-2">
                <span className="text-white font-extrabold text-[10px] uppercase tracking-widest">SÉCURITÉ</span>
                <span className="text-amber-500 font-bold">•</span>
                <span className="text-white font-extrabold text-[10px] uppercase tracking-widest">CONFORT</span>
                <span className="text-amber-500 font-bold">•</span>
                <span className="text-white font-extrabold text-[10px] uppercase tracking-widest">SÉRÉNITÉ</span>
              </div>
              <div className="font-handwritten text-[#ffd60a] text-xl font-bold">
                Nous veillons sur ce qui compte pour vous !
              </div>
            </div>

            {/* Bande dorée finale */}
            <div className="bg-linear-to-r from-amber-600 via-[#ffd60a] to-amber-600 text-[#0b1a2a] text-[8.5px] font-bold uppercase tracking-[0.25em] py-2 px-4 rounded-lg flex justify-between items-center mt-1 select-none shadow-md">
              <span>Particuliers & Professionnels</span>
              <span className="text-amber-800">•</span>
              <span>Conseil & Accompagnement</span>
              <span className="text-amber-800">•</span>
              <span>Solutions Évolutives</span>
            </div>

          </div>

        </div>
        </div>
      </div>
    </div>
  );
}
