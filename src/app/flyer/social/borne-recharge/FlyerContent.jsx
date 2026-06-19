"use client";

import React from "react";
import { Phone, Globe, BatteryCharging, ShieldCheck, BadgeCheck, Sparkles } from "lucide-react";
import SocialFlyerShell, { useSocialFlyer } from "../_components/SocialFlyerShell";
import ProdigelecMonogram from "@/app/components/ui/ProdigelecMonogram";
import { borneRechargeData as d } from "../../_data/borne-recharge";
import { contact, poles } from "../../_data/contact";

export default function FlyerContent() {
  return (
    <SocialFlyerShell
      editorTitle="Éditeur Flyer Social — Borne VE"
      defaultOffer={d.defaultOffer}
      accent="emerald"
    >
      <SocialLayout />
    </SocialFlyerShell>
  );
}

function SocialLayout() {
  const { accent: a, phoneNumber } = useSocialFlyer();

  return (
    <div className="w-full h-full flex flex-col">
      {/* HEADER (180px) avec image de fond */}
      <div
        className="relative px-12 pt-8 pb-5 flex items-center justify-between bg-[#0b1a2a] border-b border-emerald-500/20 shrink-0 overflow-hidden"
        style={{ height: "180px" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url('/flyer/borne-recharge/borne-prise-maison.jpg')` }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#0b1a2a]/85 via-[#0b1a2a]/75 to-[#0b1a2a]" />

        <div className="relative z-10 flex items-center gap-5">
          <ProdigelecMonogram size={72} light={true} />
          <div className="flex flex-col">
            <div className="text-5xl font-black tracking-wide leading-none font-sora">
              <span className="text-white">PRODIG</span>
              <span className="text-[#ffd60a]">ELEC</span>
            </div>
            <div className="flex items-center gap-2 text-xs uppercase font-bold tracking-[0.22em] text-slate-300 mt-3">
              {poles.map((p, i) => (
                <React.Fragment key={p}>
                  <span>{p}</span>
                  {i < poles.length - 1 && <span className={a.text500}>•</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
        <div className="relative z-10 text-right font-handwritten text-[#ffd60a] text-6xl leading-tight select-none">
          <div className="transform -rotate-3 origin-right">{d.accroche.line1}</div>
          <div className="text-white transform -rotate-3 origin-right mt-1">{d.accroche.line2}</div>
        </div>
      </div>

      {/* MAIN (540px) */}
      <div className="flex-1 flex flex-col items-center justify-center px-14 py-6 bg-linear-to-b from-[#0b1a2a] via-[#0f2540] to-[#0b1a2a] relative overflow-hidden">
        <div className={`absolute -top-20 -right-20 w-96 h-96 ${a.bg500_10} rounded-full blur-3xl pointer-events-none`} />
        <div className={`absolute -bottom-20 -left-20 w-96 h-96 ${a.bg500_10} rounded-full blur-3xl pointer-events-none`} />

        {/* Badge solutions certifiées */}
        <div className={`relative inline-flex items-center gap-2 px-4 py-1.5 ${a.bg500_15} border ${a.border500_40} rounded-full mb-4`}>
          <BatteryCharging className={`w-4 h-4 ${a.text400}`} />
          <span className={`text-[11px] font-black uppercase tracking-[0.2em] ${a.text300}`}>
            Solutions Professionnelles Certifiées
          </span>
        </div>

        <h1 className="relative text-white text-6xl font-black tracking-tight font-sora leading-none text-center">
          {d.mainTitle.line1Prefix} <span className="text-[#ffd60a]">{d.mainTitle.line1Highlight}</span>
        </h1>
        <h2 className="relative text-white text-3xl font-black tracking-tight font-sora leading-none text-center mt-3">
          {d.mainTitle.line2}
        </h2>

        <p className={`relative text-slate-200 text-lg font-bold tracking-wide mt-3 text-center`}>
          <span className={a.text400}>Prise renforcée</span> &amp; <span className={a.text400}>borne connectée</span> — jusqu&apos;à 3,7 kW.
        </p>

        {/* IMAGE CENTRALE pleine largeur */}
        <div
          className={`relative w-full mt-5 rounded-2xl overflow-hidden border-2 ${a.border500_40} shadow-2xl ${a.shadow500_25}`}
          style={{ height: "260px" }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('/flyer/borne-recharge/femme-recharge-voiture.jpg')`,
            }}
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#0b1a2a]/90 via-[#0b1a2a]/30 to-transparent" />
          <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between">
            <div className="inline-flex items-center gap-2 bg-emerald-500/15 border border-emerald-500/40 backdrop-blur-md rounded-lg px-3 py-1.5">
              <BadgeCheck className={`w-4 h-4 ${a.text400}`} />
              <span className="text-[11px] font-black uppercase tracking-wider text-white">
                CONFORME
              </span>
              <span className="bg-[#ffd60a] text-slate-950 text-[10px] font-black px-2 py-0.5 rounded">
                {d.norm.label}
              </span>
            </div>
            <span className="text-[11px] font-bold text-white uppercase tracking-wider">
              Attestation Fournie
            </span>
          </div>
        </div>
      </div>

      {/* OFFER BAND (180px) */}
      <div
        className="bg-[#0b1a2a] px-12 py-5 border-t border-emerald-500/30 shrink-0 relative"
        style={{ height: "180px" }}
      >
        {/* Badge "Devis gratuit" */}
        <div className={`absolute -top-3 right-12 bg-linear-to-r ${a.gradFromYellow} text-slate-950 text-xs font-black px-3 py-1.5 rounded-bl-xl rounded-tr-xl shadow-md rotate-6 uppercase tracking-wider flex items-center gap-1 z-20`}>
          <Sparkles className="w-3 h-3" />
          DEVIS GRATUIT
        </div>

        <div className="flex items-center gap-6 h-full">
          <div
            className={`w-20 h-20 bg-linear-to-br ${a.from500_20} ${a.to500_10} border-2 ${a.border500_60} rounded-full flex items-center justify-center shrink-0 shadow-lg ${a.shadow500_15}`}
          >
            <BatteryCharging className={`w-10 h-10 ${a.text500}`} />
          </div>
          <div className="flex-1">
            <span className="block text-[#ffd60a] text-xs font-black uppercase tracking-[0.2em] font-sora">
              VOTRE BORNE À DOMICILE
            </span>
            <h3 className="text-white text-2xl font-black tracking-wide font-sora leading-tight mt-1">
              À PARTIR DE 600€ TTC POSÉE
            </h3>
            <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider mt-1">
              Pilotage smartphone & programmation heures creuses
            </p>
          </div>
          <div className="bg-linear-to-r from-emerald-500 to-[#ffd60a] text-slate-950 font-black rounded-xl px-5 py-3 text-center shadow-lg shadow-emerald-500/25 shrink-0">
            <span className="block text-[9px] uppercase tracking-wider font-extrabold opacity-80">
              À partir de
            </span>
            <span className="block text-xl font-black tracking-wide leading-tight">
              600€
            </span>
            <span className="block text-[9px] uppercase tracking-wider font-extrabold opacity-80">
              TTC posé
            </span>
          </div>
        </div>
      </div>

      {/* FOOTER (180px) */}
      <div
        className="bg-[#0b1a2a] px-12 py-4 border-t border-emerald-500/20 shrink-0 flex flex-col justify-between"
        style={{ height: "180px" }}
      >
        <div className="flex items-center justify-center gap-6">
          <div className="flex items-center gap-3 bg-white text-[#0b1a2a] rounded-xl px-5 py-2 shadow-md">
            <Phone className={`w-6 h-6 ${a.text600}`} />
            <span className="text-2xl font-black tracking-wide">{phoneNumber}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-200 font-semibold">
            <Globe className={`w-5 h-5 ${a.text400}`} />
            <span className="text-base">{contact.website}</span>
          </div>
        </div>
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
        <div className="flex items-center justify-center">
          <span className="font-handwritten text-3xl text-[#ffd60a] transform -rotate-2">
            {d.footer.sealCursive}
          </span>
        </div>
      </div>
    </div>
  );
}
