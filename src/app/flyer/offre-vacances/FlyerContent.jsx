"use client";

import React from "react";
import { ShieldCheck, Smartphone, MapPin, Gift, BadgeCheck } from "lucide-react";
import FlyerShell from "../_components/FlyerShell";
import FlyerPrintBody from "../_components/FlyerPrintBody";
import { offreVacancesData as d } from "../_data/offre-vacances";
import { useFlyer } from "../_components/FlyerShell";

const REASSURANCE_ICONS = { ShieldCheck, Smartphone, MapPin, BadgeCheck };

export default function FlyerContent() {
  return (
    <FlyerShell editorTitle="Éditeur de Flyer" defaultOffer={d.defaultOffer} accent="amber">
      <FlyerPrintBody
        data={d}
        renderHeaderBg={() => (
          <div className="absolute inset-0 flex">
            <div
              className="w-1/2 h-full opacity-40 bg-cover bg-center"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=500&q=80')` }}
            />
            <div
              className="w-1/2 h-full opacity-45 bg-cover bg-center"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80')` }}
            />
          </div>
        )}
        PartnerIcon={ShieldCheck}
        OfferBandIcon={Gift}
        reassuranceIcons={REASSURANCE_ICONS}
        renderScene={(i) => (i === 0 ? <SecurityPhoneOverlay /> : <AlarmEquipmentOverlay />)}
        renderOfferCapsule={() => <DateCapsule />}
      />
    </FlyerShell>
  );
}

function DateCapsule() {
  const { dateFormattedUpper } = useFlyer();
  return (
    <div className="bg-linear-to-r from-amber-500 to-[#ffd60a] text-slate-950 font-black rounded-lg px-4 py-2 text-center shadow-lg shadow-amber-500/25 shrink-0 self-center">
      <span className="block text-[8px] uppercase tracking-wider font-extrabold opacity-80">Valable</span>
      <span className="text-sm font-black tracking-wide leading-none">{dateFormattedUpper}</span>
    </div>
  );
}

function SecurityPhoneOverlay() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform -rotate-6 z-10 drop-shadow-2xl">
      <div className="w-27.5 h-45 bg-[#0b1a2a] rounded-[18px] border-2 border-slate-800 p-1.5 shadow-2xl">
        <div className="w-12 h-3 bg-[#0b1a2a] rounded-b-lg mx-auto -mb-1 relative z-10" />
        <div className="w-full h-full bg-linear-to-b from-emerald-50 to-white rounded-xl overflow-hidden flex flex-col p-2 gap-1.5">
          <div className="text-[6.5px] font-bold text-slate-500 text-center">14:32</div>
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
          <div className="bg-emerald-100 border border-emerald-300 rounded-md px-1.5 py-1 flex items-center gap-1 mt-auto">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-[5.5px] font-bold text-emerald-800 uppercase tracking-wider">Système armé</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function AlarmEquipmentOverlay() {
  return (
    <>
      <div className="absolute top-3 right-3 w-13.75 h-13.75 bg-white rounded-xl shadow-2xl border-2 border-amber-500/60 p-1 z-10 transform rotate-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/flyer/offre-vacances/sirene-exterieure.png" alt="Sirène extérieure" className="w-full h-full object-contain" />
      </div>
      <div className="absolute top-1/2 left-4 -translate-y-1/2 w-15 h-15 bg-white rounded-xl shadow-2xl border-2 border-amber-500/60 p-1 z-10 transform -rotate-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/flyer/offre-vacances/hub-tyxal.png" alt="Centrale d'alarme" className="w-full h-full object-contain" />
      </div>
      <div className="absolute top-[42%] right-5 w-17.5 h-15 bg-white rounded-xl shadow-2xl border-2 border-amber-500/60 p-1 z-10 transform rotate-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/flyer/offre-vacances/tycam-guard.png" alt="Caméra vidéosurveillance" className="w-full h-full object-contain" />
      </div>
    </>
  );
}
