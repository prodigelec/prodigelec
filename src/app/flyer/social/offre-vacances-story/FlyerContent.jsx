"use client";

import React from "react";
import { Phone, Globe, Gift, ShieldCheck, BadgeCheck, Sparkles, Mail } from "lucide-react";
import SocialFlyerShell, { useSocialFlyer } from "../_components/SocialFlyerShell";
import ProdigelecMonogram from "@/app/components/ui/ProdigelecMonogram";
import { offreVacancesData as d } from "../../_data/offre-vacances";
import { contact, poles } from "../../_data/contact";

export default function FlyerContent() {
  return (
    <SocialFlyerShell
      editorTitle="Éditeur Story — Vacances"
      defaultOffer={d.defaultOffer}
      accent="amber"
      format="story"
    >
      <StoryLayout />
    </SocialFlyerShell>
  );
}

function StoryLayout() {
  const { accent: a, dateFormattedUpper, phoneNumber, emailAddress } = useSocialFlyer();

  return (
    <div className="w-full h-full flex flex-col">
      {/* HEADER (180px) — Marque + pôles */}
      <div
        className="relative px-10 pt-8 pb-5 flex items-center justify-between bg-[#0b1a2a] border-b border-amber-500/20 shrink-0 overflow-hidden"
        style={{ height: "180px" }}
      >
        <div className="absolute inset-0 flex">
          <div
            className="w-1/2 h-full opacity-40 bg-cover bg-center"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80')` }}
          />
          <div
            className="w-1/2 h-full opacity-45 bg-cover bg-center"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80')` }}
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-[#0b1a2a]/85 via-[#0b1a2a]/75 to-[#0b1a2a]" />

        <div className="relative z-10 flex items-center gap-4">
          <ProdigelecMonogram size={80} light={true} />
          <div className="flex flex-col">
            <div className="text-5xl font-black tracking-wide leading-none font-sora">
              <span className="text-white">PRODIG</span>
              <span className="text-[#ffd60a]">ELEC</span>
            </div>
            <div className="flex items-center gap-2 text-[11px] uppercase font-bold tracking-[0.22em] text-slate-300 mt-3">
              {poles.map((p, i) => (
                <React.Fragment key={p}>
                  <span>{p}</span>
                  {i < poles.length - 1 && <span className={a.text500}>•</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ACCROCHE manuscrite (240px) */}
      <div
        className="relative px-12 flex items-center justify-center bg-linear-to-b from-[#0b1a2a] to-[#0f2540] shrink-0 overflow-hidden"
        style={{ height: "240px" }}
      >
        <div className={`absolute -top-20 -right-20 w-80 h-80 ${a.bg500_10} rounded-full blur-3xl pointer-events-none`} />
        <div className="relative z-10 text-center font-handwritten leading-none">
          <div className="text-[#ffd60a] text-8xl transform -rotate-2">{d.accroche.line1}</div>
          <div className="text-white text-8xl transform -rotate-2 mt-2">{d.accroche.line2}</div>
        </div>
      </div>

      {/* TITRE (280px) */}
      <div
        className="relative bg-[#0f2540] px-12 py-6 shrink-0 flex flex-col items-center justify-center text-center"
        style={{ height: "280px" }}
      >
        <div className={`relative inline-flex items-center gap-2 px-4 py-1.5 ${a.bg500_15} border ${a.border500_40} rounded-full mb-4`}>
          <ShieldCheck className={`w-4 h-4 ${a.text400}`} />
          <span className={`text-[11px] font-black uppercase tracking-[0.2em] ${a.text300}`}>
            Solutions Professionnelles Certifiées
          </span>
        </div>

        <h1 className="text-white text-5xl font-black tracking-tight font-sora leading-none">
          {d.mainTitle.line1Prefix} <span className="text-[#ffd60a]">{d.mainTitle.line1Highlight}</span>
        </h1>
        <h2 className="text-white text-3xl font-black tracking-tight font-sora leading-tight mt-3">
          {d.mainTitle.line2}
        </h2>

        <p className="text-slate-200 text-lg font-bold tracking-wide mt-4">
          <span className={a.text400}>Alarme connectée</span> &amp; <span className={a.text400}>vidéosurveillance</span>
        </p>
      </div>

      {/* IMAGE CENTRALE (580px) */}
      <div className="relative bg-[#0b1a2a] px-10 py-4 shrink-0" style={{ height: "580px" }}>
        <div
          className={`relative w-full h-full rounded-3xl overflow-hidden border-2 ${a.border500_40} shadow-2xl ${a.shadow500_25}`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('/flyer/offre-vacances/story-maison.jpg')`,
            }}
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#0b1a2a]/95 via-[#0b1a2a]/30 to-transparent" />

          <div className="absolute top-5 left-5">
            <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/40 backdrop-blur-md rounded-lg px-3 py-1.5">
              <BadgeCheck className={`w-4 h-4 ${a.text400}`} />
              <span className="text-[11px] font-black uppercase tracking-wider text-white">
                CONFORME ASSURANCES
              </span>
              <span className="bg-[#ffd60a] text-slate-950 text-[10px] font-black px-2 py-0.5 rounded">
                {d.norm.label}
              </span>
            </div>
          </div>

          <div className="absolute bottom-5 right-5">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/50 backdrop-blur-md rounded-lg px-4 py-2">
              <Sparkles className={`w-5 h-5 ${a.text400}`} />
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-black uppercase tracking-wider text-white">
                  DEVIS GRATUIT
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-200">
                  30 km autour de Broué
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* OFFER BAND (220px) */}
      <div
        className="bg-[#0b1a2a] px-10 py-5 border-t border-amber-500/30 shrink-0 relative flex items-center"
        style={{ height: "220px" }}
      >
        <div className={`absolute -top-3 right-12 bg-linear-to-r ${a.gradFromYellow} text-slate-950 text-xs font-black px-3 py-1.5 rounded-bl-xl rounded-tr-xl shadow-md rotate-6 uppercase tracking-wider flex items-center gap-1 z-20`}>
          <Sparkles className="w-3 h-3" />
          OFFERT !
        </div>

        <div className="flex items-center gap-5 w-full">
          <div
            className={`w-24 h-24 bg-linear-to-br ${a.from500_20} ${a.to500_10} border-2 ${a.border500_60} rounded-full flex items-center justify-center shrink-0 shadow-lg ${a.shadow500_15}`}
          >
            <Gift className={`w-12 h-12 ${a.text500}`} />
          </div>
          <div className="flex-1">
            <span className="block text-[#ffd60a] text-xs font-black uppercase tracking-[0.2em] font-sora">
              OFFRE VACANCES
            </span>
            <h3 className="text-white text-2xl font-black tracking-wide font-sora leading-tight mt-1">
              1 DÉTECTEUR D&apos;OUVERTURE OFFERT
            </h3>
            <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider mt-1">
              Pour toute installation d&apos;un système d&apos;alarme
            </p>
            <div className="inline-block bg-linear-to-r from-amber-500 to-[#ffd60a] text-slate-950 font-black rounded-md px-3 py-1 mt-2 text-xs uppercase tracking-wider">
              Valable {dateFormattedUpper}
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER (420px) */}
      <div
        className="bg-[#0b1a2a] px-10 py-6 border-t border-amber-500/20 shrink-0 flex flex-col justify-between items-center"
        style={{ height: "420px" }}
      >
        <div className="flex items-center justify-center gap-3 bg-white text-[#0b1a2a] rounded-2xl px-6 py-3 shadow-md">
          <Phone className={`w-8 h-8 ${a.text600}`} />
          <span className="text-4xl font-black tracking-wide">{phoneNumber}</span>
        </div>

        <div className="flex flex-col gap-2 items-center text-slate-200 font-semibold">
          <div className="flex items-center gap-2">
            <Mail className={`w-5 h-5 ${a.text400}`} />
            <span className="text-base">{emailAddress}</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className={`w-5 h-5 ${a.text400}`} />
            <span className="text-base">{contact.website}</span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 text-[15px] font-black uppercase tracking-[0.18em] text-white font-sora">
          <span>PRODIGELEC</span>
          <span className={a.text500}>•</span>
          <span>BROUÉ <span className="text-[#ffd60a]">(28)</span></span>
        </div>

        <div className="flex flex-col items-center gap-1.5">
          <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${a.text500} font-sora`}>
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

        <div className="flex items-center justify-center">
          <span className="font-handwritten text-3xl text-[#ffd60a] transform -rotate-2">
            {d.footer.sealCursive}
          </span>
        </div>
      </div>
    </div>
  );
}
