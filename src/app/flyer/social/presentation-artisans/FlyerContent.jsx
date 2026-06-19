"use client";

import React from "react";
import { Phone, Globe, Mail, Sparkles } from "lucide-react";
import SocialFlyerShell, { useSocialFlyer } from "../_components/SocialFlyerShell";
import ProdigelecMonogram from "@/app/components/ui/ProdigelecMonogram";
import { contact } from "../../_data/contact";

export default function FlyerContent() {
  return (
    <SocialFlyerShell
      editorTitle="Éditeur Flyer Social — Présentation Artisans 28"
      defaultOffer={{ day: "31", month: "DÉCEMBRE", year: "2026" }}
      accent="amber"
    >
      <PresentationArtisansLayout />
    </SocialFlyerShell>
  );
}

function PresentationArtisansLayout() {
  const { accent: a, phoneNumber, emailAddress } = useSocialFlyer();

  return (
    <div className="w-full h-full flex flex-col">
      {/* TOP — Bloc marque */}
      <div className="flex-1 flex flex-col items-center justify-center px-16 bg-linear-to-b from-[#0b1a2a] via-[#0f2540] to-[#0b1a2a] relative overflow-hidden">
        <div className={`absolute -top-32 -right-32 w-[28rem] h-[28rem] ${a.bg500_10} rounded-full blur-3xl pointer-events-none`} />
        <div className={`absolute -bottom-32 -left-32 w-[28rem] h-[28rem] ${a.bg500_10} rounded-full blur-3xl pointer-events-none`} />

        <div className="relative z-10 mb-8">
          <ProdigelecMonogram size={200} light={true} />
        </div>

        <div className="relative z-10 text-[5rem] font-black tracking-wide leading-none font-sora">
          <span className="text-white">PRODIG</span>
          <span className="text-[#ffd60a]">ELEC</span>
        </div>

        <div className="relative z-10 mt-6 flex items-center gap-4 text-[15px] uppercase font-bold tracking-[0.24em] text-slate-200 font-sora">
          <span>ÉLECTRICITÉ</span>
          <span className={a.text500}>•</span>
          <span>SÉCURITÉ</span>
          <span className={a.text500}>•</span>
          <span>AUTOMATISMES</span>
          <span className={a.text500}>•</span>
          <span>BORNES VE</span>
        </div>

        <div className="relative z-10 mt-5 flex flex-col items-center gap-1 text-[13px] font-medium text-slate-400 tracking-wide">
          <div className="flex items-center gap-2.5">
            <span>Tableau</span>
            <span className="text-slate-600">·</span>
            <span>Normes NF C 15-100</span>
            <span className="text-slate-600">·</span>
            <span>Bornes recharge VE</span>
          </div>
          <div className="flex items-center gap-2.5">
            <span>Alarmes</span>
            <span className="text-slate-600">·</span>
            <span>Vidéosurveillance</span>
            <span className="text-slate-600">·</span>
            <span>Volets</span>
            <span className="text-slate-600">·</span>
            <span>Portails</span>
            <span className="text-slate-600">·</span>
            <span>Domotique</span>
          </div>
        </div>

        <div className={`relative z-10 mt-8 w-32 h-px bg-linear-to-r from-transparent ${a.via500_70} to-transparent`} />

        <div className="relative z-10 mt-6 text-center">
          <div className="font-handwritten text-[#ffd60a] text-6xl leading-tight transform -rotate-2 inline-block">
            Artisan à {contact.city}
          </div>
        </div>
      </div>

      {/* CONTACT — Téléphone / Email / Site */}
      <div
        className="bg-[#0b1a2a] px-14 py-6 border-t border-amber-500/30 shrink-0 flex flex-col gap-4 items-center"
        style={{ height: "240px" }}
      >
        <div className="flex items-center justify-center gap-5">
          <div className="flex items-center gap-3 bg-white text-[#0b1a2a] rounded-xl px-5 py-2.5 shadow-md">
            <Phone className={`w-7 h-7 ${a.text600}`} />
            <span className="text-3xl font-black tracking-wide">{phoneNumber}</span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-8 text-slate-200 font-semibold">
          <div className="flex items-center gap-2">
            <Mail className={`w-5 h-5 ${a.text400}`} />
            <span className="text-base">{emailAddress}</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className={`w-5 h-5 ${a.text400}`} />
            <span className="text-base">{contact.website}</span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-1">
          <span className={`text-[9px] font-black uppercase tracking-[0.3em] ${a.text500} font-sora`}>
            Zone d&apos;intervention
          </span>
          <div className="flex items-center justify-center gap-3 text-sm font-bold text-slate-300">
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
      </div>

      {/* DEVIS GRATUIT — Bandeau fin doré */}
      <div className={`bg-linear-to-r ${a.gradFromYellow} text-slate-950 px-10 py-2.5 shrink-0 flex items-center justify-center gap-3 text-sm font-black uppercase tracking-[0.18em] font-sora`}>
        <Sparkles className="w-4 h-4" />
        <span>DEVIS GRATUIT — 30 KM AUTOUR DE MAROLLES / BROUÉ</span>
        <Sparkles className="w-4 h-4" />
      </div>

      {/* BANDEAU SIRET — obligatoire pour groupe Artisans 28 */}
      <div className={`bg-linear-to-r ${a.gradFooter} text-slate-950 px-10 py-3 shrink-0 flex items-center justify-center gap-3 text-sm font-black uppercase tracking-[0.18em] font-sora`}>
        <span>{contact.city.toUpperCase()} (28)</span>
        <span className="opacity-50">•</span>
        <span>{contact.siret}</span>
        <span className="opacity-50">•</span>
        <span>PRODIGELEC EI</span>
      </div>
    </div>
  );
}
