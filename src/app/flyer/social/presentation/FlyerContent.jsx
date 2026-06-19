"use client";

import React from "react";
import { Phone, Globe } from "lucide-react";
import SocialFlyerShell, { useSocialFlyer } from "../_components/SocialFlyerShell";
import ProdigelecMonogram from "@/app/components/ui/ProdigelecMonogram";
import { contact } from "../../_data/contact";

export default function FlyerContent() {
  return (
    <SocialFlyerShell
      editorTitle="Éditeur Flyer Social — Présentation"
      defaultOffer={{ day: "31", month: "DÉCEMBRE", year: "2026" }}
      accent="amber"
    >
      <PresentationLayout />
    </SocialFlyerShell>
  );
}

function PresentationLayout() {
  const { accent: a, phoneNumber } = useSocialFlyer();

  return (
    <div className="w-full h-full flex flex-col">
      {/* TOP — Bloc marque (≈ 760px) */}
      <div className="flex-1 flex flex-col items-center justify-center px-16 bg-linear-to-b from-[#0b1a2a] via-[#0f2540] to-[#0b1a2a] relative overflow-hidden">
        <div className={`absolute -top-32 -right-32 w-[28rem] h-[28rem] ${a.bg500_10} rounded-full blur-3xl pointer-events-none`} />
        <div className={`absolute -bottom-32 -left-32 w-[28rem] h-[28rem] ${a.bg500_10} rounded-full blur-3xl pointer-events-none`} />

        {/* Monogramme */}
        <div className="relative z-10 mb-10">
          <ProdigelecMonogram size={220} light={true} />
        </div>

        {/* Wordmark */}
        <div className="relative z-10 text-[5.5rem] font-black tracking-wide leading-none font-sora">
          <span className="text-white">PRODIG</span>
          <span className="text-[#ffd60a]">ELEC</span>
        </div>

        {/* Piliers */}
        <div className="relative z-10 mt-8 flex items-center gap-5 text-base uppercase font-bold tracking-[0.32em] text-slate-200 font-sora">
          <span>ÉLECTRICITÉ</span>
          <span className={a.text500}>•</span>
          <span>SÉCURITÉ</span>
          <span className={a.text500}>•</span>
          <span>AUTOMATISMES</span>
        </div>

        {/* Séparateur fin */}
        <div className={`relative z-10 mt-10 w-32 h-px bg-linear-to-r from-transparent ${a.via500_70} to-transparent`} />

        {/* Tagline manuscrite */}
        <div className="relative z-10 mt-8 text-center">
          <div className="font-handwritten text-[#ffd60a] text-7xl leading-tight transform -rotate-2 inline-block">
            Artisan à Broué
          </div>
        </div>
      </div>

      {/* BOTTOM — Bandeau contact (≈ 320px) */}
      <div
        className="bg-[#0b1a2a] px-14 py-8 border-t border-amber-500/30 shrink-0 flex flex-col justify-between"
        style={{ height: "320px" }}
      >
        {/* Téléphone + site */}
        <div className="flex items-center justify-center gap-8">
          <div className="flex items-center gap-3 bg-white text-[#0b1a2a] rounded-xl px-6 py-3 shadow-md">
            <Phone className={`w-8 h-8 ${a.text600}`} />
            <span className="text-4xl font-black tracking-wide">{phoneNumber}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-200 font-semibold">
            <Globe className={`w-7 h-7 ${a.text400}`} />
            <span className="text-2xl">{contact.website}</span>
          </div>
        </div>

        {/* Zones */}
        <div className="flex flex-col items-center gap-1.5">
          <span className={`text-[11px] font-black uppercase tracking-[0.3em] ${a.text500} font-sora`}>
            Zone d&apos;intervention
          </span>
          <div className="flex items-center justify-center gap-4 text-lg font-bold text-slate-300">
            <span className="font-sora">
              EURE-ET-LOIR <span className="text-[#ffd60a]">(28)</span>
            </span>
            <span className={a.text500}>•</span>
            <span className="font-sora">
              EURE <span className="text-[#ffd60a]">(27)</span>
            </span>
            <span className={a.text500}>•</span>
            <span className="font-sora">
              YVELINES <span className="text-[#ffd60a]">(78)</span>
            </span>
          </div>
        </div>

        {/* Signature manuscrite */}
        <div className="flex items-center justify-center">
          <span className="font-handwritten text-4xl text-[#ffd60a] transform -rotate-2">
            Votre artisan de proximité
          </span>
        </div>
      </div>
    </div>
  );
}
