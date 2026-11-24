"use client";

import React from "react";
import { ShieldCheck, Car, Droplets, FileText, BatteryCharging, Zap } from "lucide-react";
import FlyerShell from "../_components/FlyerShell";
import FlyerPrintBody from "../_components/FlyerPrintBody";
import { borneRechargeData as d } from "../_data/borne-recharge";

const REASSURANCE_ICONS = { ShieldCheck, Car, Droplets, FileText };

// Mode impression : sur papier, emerald-400 imprime terne. On force emerald-200
// et on retire l'italique fin pour la lisibilité.
const printOverrides = `
  .print-mode-preview .text-white\\/90 { color: rgb(255 255 255) !important; }
  .print-mode-preview .italic { font-style: normal !important; }
  .print-mode-preview .text-emerald-400 { color: #a7f3d0 !important; }
  .print-mode-preview .text-slate-400 { color: #e2e8f0 !important; }
  @media print {
    .print-area .text-white\\/90 { color: rgb(255 255 255) !important; }
    .print-area .italic { font-style: normal !important; }
    .print-area .text-emerald-400 { color: #a7f3d0 !important; }
    .print-area .text-slate-400 { color: #e2e8f0 !important; }
  }
`;

export default function FlyerContent() {
  return (
    <FlyerShell
      editorTitle="Flyer Borne VE"
      defaultOffer={d.defaultOffer}
      accent="emerald"
      printOverrides={printOverrides}
      enablePrintModeToggle
    >
      <FlyerPrintBody
        data={d}
        renderHeaderBg={() => (
          <div
            className="absolute inset-0 opacity-40 bg-cover bg-center"
            style={{ backgroundImage: `url('${d.scenes[1].bgImage}')` }}
          />
        )}
        PartnerIcon={Zap}
        OfferBandIcon={FileText}
        reassuranceIcons={REASSURANCE_ICONS}
        renderScene={(i) => (i === 0 ? <PhoneOverlay /> : <EquipmentOverlay />)}
        renderOfferCapsule={() => (
          <div className="bg-linear-to-r from-emerald-500 to-[#ffd60a] text-slate-950 font-black rounded-lg px-4 py-2 text-center shadow-lg shadow-emerald-500/25 shrink-0 self-center">
            <span className="block text-[8px] uppercase tracking-wider font-extrabold opacity-80">{d.offerBand.capsule.prefix}</span>
            <span className="text-lg font-black tracking-wide leading-none">{d.offerBand.capsule.value}</span>
            <span className="block text-[7px] uppercase tracking-wider font-bold mt-0.5">{d.offerBand.capsule.suffix}</span>
          </div>
        )}
      />
    </FlyerShell>
  );
}

function PhoneOverlay() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform -rotate-6 z-10 drop-shadow-2xl">
      <div className="w-27.5 h-45 bg-[#0b1a2a] rounded-[18px] border-2 border-slate-800 p-1.5 shadow-2xl">
        <div className="w-12 h-3 bg-[#0b1a2a] rounded-b-lg mx-auto -mb-1 relative z-10" />
        <div className="w-full h-full bg-linear-to-b from-emerald-50 to-white rounded-xl overflow-hidden flex flex-col p-2 gap-1.5">
          <div className="text-[6.5px] font-bold text-slate-500 text-center">14:32</div>
          <div className="bg-white border border-emerald-200 rounded-lg p-1.5 shadow-md">
            <div className="flex items-center gap-1 mb-0.5">
              <div className="w-3 h-3 bg-emerald-500 rounded-full flex items-center justify-center">
                <BatteryCharging className="w-2 h-2 text-white" />
              </div>
              <span className="text-[6px] font-black uppercase tracking-wide text-emerald-700">En charge</span>
            </div>
            <p className="text-[8px] font-black text-[#0b1a2a] leading-tight">68%</p>
            <div className="w-full h-1 bg-slate-200 rounded-full mt-0.5 overflow-hidden">
              <div className="h-full w-[68%] bg-linear-to-r from-emerald-500 to-emerald-400 rounded-full" />
            </div>
          </div>
          <div className="bg-emerald-100 border border-emerald-300 rounded-md px-1.5 py-1 flex items-center gap-1 mt-auto">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-[5.5px] font-bold text-emerald-800 uppercase tracking-wider">Heures creuses</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function EquipmentOverlay() {
  return (
    <>
      <div className="absolute top-3 right-3 w-13.75 h-13.75 bg-white rounded-xl shadow-2xl border-2 border-emerald-500/60 p-1 z-10 transform rotate-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/flyer/borne-recharge/borne-3-7kw.jpg" alt="Borne de recharge 3,7 kW" className="w-full h-full object-contain" />
      </div>
      <div className="absolute top-1/2 left-4 -translate-y-1/2 w-15 h-15 bg-white rounded-xl shadow-2xl border-2 border-emerald-500/60 p-1 z-10 transform -rotate-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/flyer/borne-recharge/borne-prise-maison.jpg" alt="Prise Green'Up renforcée" className="w-full h-full object-cover rounded-md" />
      </div>
      <div className="absolute top-[42%] right-5 w-17.5 h-15 bg-emerald-700 rounded-xl shadow-2xl border-2 border-emerald-300 z-10 transform rotate-3 flex flex-col items-center justify-center text-white">
        <Zap className="w-4 h-4 text-[#ffd60a] mb-0.5" />
        <span className="text-[10px] font-black uppercase tracking-wider leading-none">3,7 kW</span>
        <span className="text-[6px] font-bold mt-0.5">max 16A</span>
      </div>
    </>
  );
}
