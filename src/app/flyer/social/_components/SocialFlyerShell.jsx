"use client";

import React, { createContext, useContext, useState, useEffect, useRef } from "react";
import { toPng } from "html-to-image";
import { Settings, EyeOff, Download, Check, Loader2 } from "lucide-react";
import { contact } from "../../_data/contact";
import { getAccent } from "../../_components/accent";

const SocialFlyerContext = createContext(null);

export function useSocialFlyer() {
  const ctx = useContext(SocialFlyerContext);
  if (!ctx) throw new Error("useSocialFlyer must be used inside <SocialFlyerShell>");
  return ctx;
}

function GoogleFontsImport() {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=Inter:wght@300;400;500;600;700;800&family=Sora:wght@400;600;700;800;900&display=swap');
        .font-handwritten { font-family: 'Caveat', cursive; }
      `,
      }}
    />
  );
}

function monthToNumber(month) {
  const map = { JANVIER: "01", FÉVRIER: "02", FEVRIER: "02", MARS: "03", AVRIL: "04", MAI: "05", JUIN: "06", JUILLET: "07", AOÛT: "08", AOUT: "08", SEPTEMBRE: "09", OCTOBRE: "10", NOVEMBRE: "11", DÉCEMBRE: "12", DECEMBRE: "12" };
  return map[month] || "12";
}

const FORMATS = {
  square: { width: 1080, height: 1080, label: "1080×1080 (Feed)", filenameSuffix: "facebook" },
  story: { width: 1080, height: 1920, label: "1080×1920 (Story)", filenameSuffix: "story" },
};

export default function SocialFlyerShell({
  editorTitle = "Éditeur Flyer Social",
  defaultOffer = { day: "30", month: "SEPTEMBRE", year: "2026" },
  accent = "amber",
  format = "square",
  children,
}) {
  const a = getAccent(accent);
  const dims = FORMATS[format] || FORMATS.square;

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

  const [offerYear, setOfferYear] = useState(defaultOffer.year);
  const [offerMonth, setOfferMonth] = useState(defaultOffer.month);
  const [offerDay, setOfferDay] = useState(defaultOffer.day);
  const [qrUrl, setQrUrl] = useState(contact.defaultQrUrl);
  const [phoneNumber, setPhoneNumber] = useState(contact.phone);
  const [emailAddress, setEmailAddress] = useState(contact.email);
  const [showControls, setShowControls] = useState(true);
  const [exportStatus, setExportStatus] = useState("idle");
  const [isCapturing, setIsCapturing] = useState(false);
  const printAreaRef = useRef(null);

  const dateFormattedUpper = `JUSQU'AU ${offerDay} ${offerMonth} ${offerYear}`;
  const dateFormattedShort = `${offerDay}/${monthToNumber(offerMonth)}/${offerYear}`;

  const handleDownloadPng = async () => {
    if (!printAreaRef.current || exportStatus === "generating") return;
    setExportStatus("generating");
    setIsCapturing(true);
    await new Promise((resolve) => setTimeout(resolve, 400));
    try {
      const dataUrl = await toPng(printAreaRef.current, {
        pixelRatio: 2,
        cacheBust: true,
      });
      const slug = window.location.pathname.replace(/^\/flyer\/social\/?/, "").replace(/\/+$/, "").replace(/\//g, "-") || "flyer-social";
      const link = document.createElement("a");
      link.download = `flyer-${slug}-${dims.filenameSuffix}-prodigelec.png`;
      link.href = dataUrl;
      link.click();
      setIsCapturing(false);
      setExportStatus("success");
      setTimeout(() => setExportStatus("idle"), 2500);
    } catch (err) {
      console.error("Erreur export PNG :", err);
      setIsCapturing(false);
      setExportStatus("error");
      setTimeout(() => setExportStatus("idle"), 3000);
    }
  };

  const ctx = {
    accent: a,
    accentName: accent,
    qrUrl,
    phoneNumber,
    emailAddress,
    offerYear,
    offerMonth,
    offerDay,
    dateFormattedUpper,
    dateFormattedShort,
  };

  const inputBase = `w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-sm text-white focus:outline-none ${a.inputFocus}`;
  const inputBaseLg = `w-full bg-slate-900 border border-slate-700 rounded px-3 py-1.5 text-sm text-white focus:outline-none ${a.inputFocus}`;

  return (
    <SocialFlyerContext.Provider value={ctx}>
      <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col md:flex-row font-sans">
        <GoogleFontsImport />

        {showControls && (
          <div className="w-full md:w-80 bg-slate-950 p-6 border-b md:border-b-0 md:border-r border-slate-800 flex flex-col gap-6 shrink-0 overflow-y-auto max-h-screen">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Settings className={`w-5 h-5 ${a.panelTitle}`} />
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
              {format === "story"
                ? "Format vertical 1080×1920 (9:16) optimisé Stories & Reels Facebook/Instagram."
                : "Format carré 1080×1080 optimisé Facebook & Instagram feed."}
            </p>

            <hr className="border-slate-800" />

            <div className="flex flex-col gap-3">
              <h3 className={a.sectionTitle}>{"Période de l'Offre"}</h3>
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
              <h3 className={a.sectionTitle}>Destination QR Code</h3>
              <input type="text" value={qrUrl} onChange={(e) => setQrUrl(e.target.value)} className={inputBaseLg} placeholder="https://..." />
            </div>

            <div className="flex flex-col gap-3">
              <h3 className={a.sectionTitle}>Coordonnées</h3>
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
              <button
                onClick={handleDownloadPng}
                disabled={exportStatus === "generating"}
                className={`w-full active:scale-[0.98] transition-transform font-bold py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 cursor-pointer shadow-lg text-white ${
                  exportStatus === "success"
                    ? "bg-emerald-600 hover:bg-emerald-700 shadow-emerald-600/20"
                    : exportStatus === "error"
                    ? "bg-rose-600 hover:bg-rose-700 shadow-rose-600/20"
                    : "bg-blue-600 hover:bg-blue-700 shadow-blue-600/20 disabled:opacity-60 disabled:cursor-wait"
                }`}
              >
                {exportStatus === "generating" && <Loader2 className="w-5 h-5 animate-spin" />}
                {exportStatus === "success" && <Check className="w-5 h-5" />}
                {(exportStatus === "idle" || exportStatus === "error") && <Download className="w-5 h-5" />}
                {exportStatus === "generating" && "Génération..."}
                {exportStatus === "success" && "Téléchargé !"}
                {exportStatus === "error" && "Erreur — réessayer"}
                {exportStatus === "idle" && `Télécharger en PNG ${dims.width}×${dims.height}`}
              </button>

              <p className="text-[10px] text-slate-400 text-center italic mt-1">
                {`Le PNG fait ${dims.width * 2}×${dims.height * 2} (HD) pour rester net sur tous les écrans.`}
              </p>
            </div>
          </div>
        )}

        <div className="flex-1 bg-slate-900 p-4 md:p-8 flex items-center justify-center overflow-auto relative">
          {!showControls && (
            <button
              onClick={() => setShowControls(true)}
              className={`absolute top-4 left-4 bg-slate-950/80 backdrop-blur border border-slate-800 px-3 py-1.5 rounded-lg flex items-center gap-2 text-xs ${a.showPanelButton} transition shadow-md cursor-pointer`}
            >
              <Settings className="w-3.5 h-3.5" />
              {"Afficher l'éditeur"}
            </button>
          )}

          <div
            className="overflow-hidden transition-all duration-300 ease-in-out select-none shadow-2xl rounded-lg"
            style={{
              width: isCapturing ? `${dims.width}px` : `${dims.width * (600 / Math.max(dims.width, dims.height))}px`,
              height: isCapturing ? `${dims.height}px` : `${dims.height * (600 / Math.max(dims.width, dims.height))}px`,
            }}
          >
            <div
              ref={printAreaRef}
              className="bg-[#0b1a2a] text-white relative overflow-hidden shrink-0 flex flex-col"
              style={{
                fontFamily: "'Inter', sans-serif",
                width: `${dims.width}px`,
                height: `${dims.height}px`,
                transform: isCapturing ? "none" : `scale(${600 / Math.max(dims.width, dims.height)})`,
                transformOrigin: "top left",
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </SocialFlyerContext.Provider>
  );
}
