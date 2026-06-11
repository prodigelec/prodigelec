"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Printer, Settings, EyeOff } from "lucide-react";
import { contact } from "../_data/contact";

const FlyerContext = createContext(null);

export function useFlyer() {
  const ctx = useContext(FlyerContext);
  if (!ctx) throw new Error("useFlyer must be used inside <FlyerShell>");
  return ctx;
}

function GoogleFontsAndPrintCss({ printOverrides = "" }) {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=Inter:wght@300;400;500;600;700;800&family=Sora:wght@400;600;700;800;900&display=swap');

        .font-handwritten { font-family: 'Caveat', cursive; }

        ${printOverrides}

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
          .no-print, #global-navbar, nav, footer, header, .floating-contact-btn {
            display: none !important;
          }
          body * { visibility: hidden !important; }
          .print-area, .print-area * { visibility: visible !important; }

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
          .print-area.format-a5 {
            transform: translate(-50%, -50%) scale(0.7047) !important;
          }
          html, body, body > * {
            page-break-after: avoid !important;
            page-break-before: avoid !important;
            page-break-inside: avoid !important;
            break-after: avoid !important;
            break-before: avoid !important;
            break-inside: avoid !important;
          }
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `,
      }}
    />
  );
}

function monthToNumber(month) {
  const map = { JANVIER: "01", FÉVRIER: "02", FEVRIER: "02", MARS: "03", AVRIL: "04", MAI: "05", JUIN: "06", JUILLET: "07", AOÛT: "08", AOUT: "08", SEPTEMBRE: "09", OCTOBRE: "10", NOVEMBRE: "11", DÉCEMBRE: "12", DECEMBRE: "12" };
  return map[month] || "12";
}

export default function FlyerShell({
  editorTitle = "Éditeur de Flyer",
  defaultOffer = { day: "31", month: "JUILLET", year: "2026" },
  printOverrides = "",
  classNames = {},
  enablePrintModeToggle = false,
  children,
}) {
  const searchParams = useSearchParams();
  const isPrintMode = searchParams?.get("print") === "1";

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

  const [format, setFormat] = useState("A5");
  const [offerYear, setOfferYear] = useState(defaultOffer.year);
  const [offerMonth, setOfferMonth] = useState(defaultOffer.month);
  const [offerDay, setOfferDay] = useState(defaultOffer.day);
  const [qrUrl, setQrUrl] = useState(contact.defaultQrUrl);
  const [phoneNumber, setPhoneNumber] = useState(contact.phone);
  const [emailAddress, setEmailAddress] = useState(contact.email);
  const [showControls, setShowControls] = useState(true);

  const dateFormattedUpper = `JUSQU'AU ${offerDay} ${offerMonth} ${offerYear}`;
  const dateFormattedShort = `${offerDay}/${monthToNumber(offerMonth)}/${offerYear}`;

  const togglePrintMode = () => {
    const url = new URL(window.location.href);
    if (isPrintMode) url.searchParams.delete("print");
    else url.searchParams.set("print", "1");
    window.location.href = url.toString();
  };

  const ctx = {
    format,
    isPrintMode,
    qrUrl,
    phoneNumber,
    emailAddress,
    offerYear,
    offerMonth,
    offerDay,
    dateFormattedUpper,
    dateFormattedShort,
  };

  const cls = {
    root: classNames.root || "min-h-screen bg-slate-900 text-slate-100 flex flex-col md:flex-row font-sans",
    panel: classNames.panel || "w-full md:w-80 bg-slate-950 p-6 border-b md:border-b-0 md:border-r border-slate-800 flex flex-col gap-6 no-print shrink-0 overflow-y-auto max-h-screen",
    panelTitle: classNames.panelTitle || "text-slate-300",
    sectionTitle: classNames.sectionTitle || "text-xs font-bold uppercase tracking-wider text-slate-300 font-sora",
    formatButtonActive: classNames.formatButtonActive || "bg-slate-200 text-slate-950 border-slate-200 font-black",
    inputFocus: classNames.inputFocus || "focus:border-slate-400",
    printButton: classNames.printButton || "bg-slate-200 hover:bg-slate-300 text-slate-950",
    previewButtonActive: classNames.previewButtonActive || "bg-amber-500 hover:bg-amber-600 shadow-amber-500/10",
    showPanelButton: classNames.showPanelButton || "text-slate-300 hover:text-white",
  };

  const inputBase = `w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-sm text-white focus:outline-none ${cls.inputFocus}`;
  const inputBaseLg = `w-full bg-slate-900 border border-slate-700 rounded px-3 py-1.5 text-sm text-white focus:outline-none ${cls.inputFocus}`;

  return (
    <FlyerContext.Provider value={ctx}>
      <div className={cls.root}>
        <GoogleFontsAndPrintCss printOverrides={printOverrides} />

        {showControls && (
          <div className={cls.panel}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Settings className={`w-5 h-5 ${cls.panelTitle}`} />
                <h2 className="font-bold text-lg tracking-wide text-white">{editorTitle}</h2>
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

            <div className="flex flex-col gap-3">
              <h3 className={cls.sectionTitle}>{"Format d'impression"}</h3>
              <div className="grid grid-cols-2 gap-2">
                {["A4", "A5"].map((f) => (
                  <button
                    key={f}
                    onClick={() => setFormat(f)}
                    className={`py-2 px-3 text-xs font-bold rounded-lg border transition cursor-pointer ${
                      format === f
                        ? cls.formatButtonActive
                        : "bg-slate-900 text-slate-300 border-slate-700 hover:bg-slate-800"
                    }`}
                  >
                    {f === "A4" ? "A4 (Grand)" : "A5 (Prospectus)"}
                  </button>
                ))}
              </div>
              <span className="text-[10px] text-slate-500 italic leading-tight">
                {format === "A5"
                  ? "Format A5 actif. Le visuel sera réduit de 70,7% à l'impression pour tenir parfaitement sur un flyer A5."
                  : "Format A4 actif. Le visuel sera imprimé à 100% de sa taille."}
              </span>
            </div>

            <hr className="border-slate-800" />

            <div className="flex flex-col gap-3">
              <h3 className={cls.sectionTitle}>{"Période de l'Offre"}</h3>
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="text-[10px] text-slate-400">Jour</label>
                  <input type="text" value={offerDay} onChange={(e) => setOfferDay(e.target.value)} className={inputBase} />
                </div>
                <div>
                  <label className="text-[10px] text-slate-400">Mois</label>
                  <input type="text" value={offerMonth} onChange={(e) => setOfferMonth(e.target.value.toUpperCase())} className={inputBase} />
                </div>
                <div>
                  <label className="text-[10px] text-slate-400">Année</label>
                  <input type="text" value={offerYear} onChange={(e) => setOfferYear(e.target.value)} className={inputBase} />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className={cls.sectionTitle}>Destination QR Code</h3>
              <input type="text" value={qrUrl} onChange={(e) => setQrUrl(e.target.value)} className={inputBaseLg} placeholder="https://..." />
              <span className="text-[10px] text-slate-500 italic">{"Encode l'adresse URL saisie dans le QR Code."}</span>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className={cls.sectionTitle}>Coordonnées</h3>
              <div>
                <label className="text-[10px] text-slate-400">Téléphone</label>
                <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className={inputBaseLg} />
              </div>
              <div>
                <label className="text-[10px] text-slate-400">Adresse Email</label>
                <input type="text" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} className={inputBaseLg} />
              </div>
            </div>

            <hr className="border-slate-800" />

            <div className="flex flex-col gap-2 mt-auto">
              {enablePrintModeToggle && (
                <button
                  onClick={togglePrintMode}
                  className={`w-full ${isPrintMode ? cls.previewButtonActive : "bg-slate-800 hover:bg-slate-700 shadow-slate-900/30 border border-slate-700"} active:scale-[0.98] transition-transform text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center gap-2 cursor-pointer shadow-md text-xs`}
                  title={isPrintMode ? "Revenir au mode digital (réseaux sociaux)" : "Aperçu impression : texte plus contrasté"}
                >
                  {isPrintMode ? "← Mode digital (réseaux)" : "Aperçu mode impression"}
                </button>
              )}

              <button
                onClick={() => window.print()}
                className={`w-full ${cls.printButton} active:scale-[0.98] transition-transform font-bold py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 cursor-pointer shadow-lg`}
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

        <div className="flex-1 bg-slate-900 p-4 md:p-8 flex items-center justify-center overflow-auto relative">
          {!showControls && (
            <button
              onClick={() => setShowControls(true)}
              className={`absolute top-4 left-4 bg-slate-950/80 backdrop-blur border border-slate-800 px-3 py-1.5 rounded-lg flex items-center gap-2 text-xs ${cls.showPanelButton} transition no-print shadow-md cursor-pointer`}
            >
              <Settings className="w-3.5 h-3.5" />
              {"Afficher l'éditeur"}
            </button>
          )}

          <div
            className="overflow-hidden transition-all duration-300 ease-in-out select-none shadow-2xl rounded-lg bg-white"
            style={{
              width: format === "A4" ? "794px" : "561px",
              height: format === "A4" ? "1123px" : "794px",
            }}
          >
            <div
              className={`print-area bg-[#0b1a2a] text-white relative overflow-hidden shrink-0 flex flex-col justify-between ${
                format === "A5" ? "format-a5" : ""
              } ${isPrintMode ? "print-mode-preview" : ""}`}
              style={{
                fontFamily: "'Inter', sans-serif",
                aspectRatio: "1/1.414",
                width: "794px",
                height: "1123px",
                transform: format === "A4" ? "none" : "scale(0.707)",
                transformOrigin: "top left",
                transition: "transform 0.3s ease-in-out",
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </FlyerContext.Provider>
  );
}
