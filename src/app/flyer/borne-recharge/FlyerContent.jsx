"use client";

import React from "react";
import {
  ShieldCheck,
  Car,
  Droplets,
  MapPin,
  FileText,
  Mail,
  Globe,
  Facebook,
  Phone,
  Sparkles,
  BadgeCheck,
  BatteryCharging,
  Zap,
} from "lucide-react";
import ProdigelecMonogram from "@/app/components/ui/ProdigelecMonogram";
import FlyerShell, { useFlyer } from "../_components/FlyerShell";
import { contact, interventionZone, poles } from "../_data/contact";
import { borneRechargeData as d } from "../_data/borne-recharge";

const REASSURANCE_ICONS = { ShieldCheck, Car, Droplets, FileText };

// Overrides spécifiques à l'impression pour borne-recharge (emerald → emerald-200)
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

const accent = {
  formatButtonActive: "bg-emerald-500 text-slate-950 border-emerald-500 font-black",
  inputFocus: "focus:border-emerald-500",
  printButton: "bg-emerald-500 hover:bg-emerald-600 text-slate-950 shadow-emerald-500/10",
  previewButtonActive: "bg-amber-500 hover:bg-amber-600 shadow-amber-500/10",
  sectionTitle: "text-xs font-bold uppercase tracking-wider text-emerald-500 font-sora",
  panelTitle: "text-emerald-500",
  showPanelButton: "text-emerald-500 hover:text-emerald-400 hover:bg-slate-900",
};

export default function FlyerContent() {
  return (
    <FlyerShell
      editorTitle="Flyer Borne VE"
      defaultOffer={d.defaultOffer}
      printOverrides={printOverrides}
      classNames={accent}
      enablePrintModeToggle
    >
      <FlyerBody />
    </FlyerShell>
  );
}

function FlyerBody() {
  const { qrUrl, phoneNumber, emailAddress } = useFlyer();

  return (
    <>
      {/* HEADER */}
      <div className="relative overflow-hidden bg-[#0b1a2a] flex flex-col p-6 gap-4 shrink-0">
        <div
          className="absolute inset-0 opacity-40 bg-cover bg-center"
          style={{ backgroundImage: `url('${d.scenes[1].bgImage}')` }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#0b1a2a]/90 via-[#0b1a2a]/75 to-[#0b1a2a]" />
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-[#0b1a2a]/20 to-[#0b1a2a]/10" />

        {/* Rangée 1 : logo + accroche */}
        <div className="relative z-10 flex justify-between items-start">
          <div className="flex items-center gap-4">
            <ProdigelecMonogram size={56} light={true} />
            <div className="flex flex-col">
              <div className="text-3xl font-black tracking-wide leading-none font-sora">
                <span className="text-white">PRODIG</span>
                <span className="text-[#ffd60a]">ELEC</span>
              </div>
              <div className="flex items-center gap-1.5 text-[8.5px] uppercase font-bold tracking-[0.22em] text-slate-300 mt-1.5">
                {poles.map((p, i) => (
                  <React.Fragment key={p}>
                    <span>{p}</span>
                    {i < poles.length - 1 && <span className="text-emerald-500">•</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          <div className="text-right font-handwritten text-[#ffd60a] text-4xl leading-tight select-none">
            <div className="transform -rotate-3 origin-right mr-2">{d.accroche.line1}</div>
            <div className="text-white transform -rotate-3 origin-right">{d.accroche.line2}</div>
          </div>
        </div>

        <div className="relative z-10 w-full h-2px bg-linear-to-r from-emerald-500/20 via-emerald-500/70 to-emerald-500/20" />

        {/* Rangée 2 : coordonnées */}
        <div className="relative z-10 flex justify-between items-center gap-4">
          <div className="w-1/3 flex flex-col gap-1">
            <span className="text-[8.5px] font-extrabold text-emerald-400 uppercase tracking-widest">{interventionZone.label}</span>
            {interventionZone.lines.map((line) => (
              <h5 key={line.name} className="text-sm font-black text-white uppercase tracking-wide leading-none">
                {line.name} <span className="text-[#ffd60a] font-extrabold">({line.code})</span>
                {line.andName && (
                  <> & {line.andName} <span className="text-[#ffd60a] font-extrabold">({line.andCode})</span></>
                )}
              </h5>
            ))}
            <div className="flex items-center gap-1.5 mt-0.5 text-[10px] text-slate-300 font-bold">
              <MapPin className="w-3 h-3 text-emerald-400" />
              <span>{interventionZone.artisan}</span>
            </div>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center border-x border-emerald-500/30 px-4">
            <span className="text-[8.5px] font-extrabold text-emerald-400 uppercase tracking-widest mb-1">Contactez-nous</span>
            <div className="flex items-center gap-2 bg-white text-[#0b1a2a] rounded-lg px-4 py-1.5 shadow-md">
              <Phone className="w-4 h-4 text-emerald-600" />
              <span className="text-lg font-black tracking-wide">{phoneNumber}</span>
            </div>
            <div className="flex flex-col items-center gap-1 mt-2 text-[9px] text-slate-200 font-semibold">
              <div className="flex items-center gap-1.5">
                <Globe className="w-3 h-3 text-emerald-400" />
                <span>{contact.website}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3 h-3 text-emerald-400" />
                <span>{emailAddress}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Facebook className="w-3 h-3 text-emerald-400" />
                <span>{contact.facebook}</span>
              </div>
            </div>
          </div>

          <div className="w-42.5 flex items-center justify-end gap-3.5 relative">
            <div className="text-right flex flex-col justify-center select-none absolute left-0 pr-1 shrink-0">
              <span className="font-handwritten text-white text-xl transform -rotate-12 leading-none">Scannez</span>
              <span className="font-handwritten text-[#ffd60a] text-xl transform -rotate-12 leading-none mt-1">moi !</span>
              <svg className="w-6 h-6 text-emerald-400 mt-1 self-end transform rotate-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
            <div className="w-21 h-21 bg-white border border-emerald-500/50 rounded-lg p-1.5 shadow-md flex items-center justify-center shrink-0 z-10 relative">
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

      {/* ZONE PRINCIPALE */}
      <div className="flex-1 bg-linear-to-b from-[#0b1a2a] via-[#0f2540] to-[#0b1a2a] px-8 py-5 flex flex-col gap-4 shrink-0 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Titre + accroche */}
        <div className="text-center relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/15 border border-emerald-500/40 rounded-full mb-2">
            <Zap className="w-3 h-3 text-emerald-400" />
            <span className="text-[8.5px] font-black uppercase tracking-[0.2em] text-emerald-300">{d.partnerBadge}</span>
          </div>
          <h1 className="text-white text-3xl font-black tracking-tight font-sora leading-none">
            {d.mainTitle.line1Prefix} <span className="text-[#ffd60a]">{d.mainTitle.line1Highlight}</span>
          </h1>
          <div className="relative inline-block mt-1">
            <h2 className="text-white text-xl font-black tracking-wider font-sora leading-none">{d.mainTitle.line2}</h2>
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-24 h-[3px] bg-linear-to-r from-transparent via-emerald-400 to-transparent rounded-full" />
          </div>
          <p className="text-slate-300 text-xs mt-3 max-w-lg mx-auto font-medium">
            <span className="text-[#ffd60a] font-bold">{d.subText.highlights[0]}</span> &amp; <span className="text-[#ffd60a] font-bold">{d.subText.highlights[1]}</span>{d.subText.suffix}
          </p>

          <div className="absolute right-2 top-0 select-none pointer-events-none z-20">
            <div className="relative transform rotate-6">
              <span className="font-handwritten text-[#ffd60a] text-4xl font-bold leading-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">Devis</span>
              <span className="block font-handwritten text-white text-4xl font-bold leading-none -mt-2 ml-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">Gratuit !</span>
              <svg className="absolute -bottom-2 left-2 w-20 h-3 text-[#ffd60a]" viewBox="0 0 80 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M 2 8 Q 20 2, 40 6 T 78 4" />
              </svg>
            </div>
          </div>
        </div>

        {/* 2 scènes story */}
        <div className="flex justify-center items-stretch gap-5 h-[320px] relative z-10">
          {/* Scène 1 — smartphone overlay (unique à borne) */}
          <Scene number={d.scenes[0].number} bgImage={d.scenes[0].bgImage} eyebrow={d.scenes[0].eyebrow} title={d.scenes[0].title} caption={d.scenes[0].caption}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform -rotate-6 z-10 drop-shadow-2xl">
              <div className="w-[110px] h-[180px] bg-[#0b1a2a] rounded-[18px] border-2 border-slate-800 p-1.5 shadow-2xl">
                <div className="w-12 h-3 bg-[#0b1a2a] rounded-b-lg mx-auto -mb-1 relative z-10" />
                <div className="w-full h-full bg-linear-to-b from-emerald-50 to-white rounded-[12px] overflow-hidden flex flex-col p-2 gap-1.5">
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
          </Scene>

          <SceneSeparator text={d.sceneSeparator} />

          {/* Scène 2 — équipements VE */}
          <Scene number={d.scenes[1].number} bgImage={d.scenes[1].bgImage} eyebrow={d.scenes[1].eyebrow} title={d.scenes[1].title} caption={d.scenes[1].caption}>
            <div className="absolute top-3 right-3 w-[55px] h-[55px] bg-white rounded-xl shadow-2xl border-2 border-emerald-500/60 p-1 z-10 transform rotate-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/flyer/borne-recharge/borne-3-7kw.jpg" alt="Borne de recharge 3,7 kW" className="w-full h-full object-contain" />
            </div>
            <div className="absolute top-1/2 left-4 -translate-y-1/2 w-[60px] h-[60px] bg-white rounded-xl shadow-2xl border-2 border-emerald-500/60 p-1 z-10 transform -rotate-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/flyer/borne-recharge/borne-prise-maison.jpg" alt="Prise Green'Up renforcée" className="w-full h-full object-cover rounded-md" />
            </div>
            <div className="absolute top-[42%] right-5 w-[70px] h-[60px] bg-emerald-700 rounded-xl shadow-2xl border-2 border-emerald-300 z-10 transform rotate-3 flex flex-col items-center justify-center text-white">
              <Zap className="w-4 h-4 text-[#ffd60a] mb-0.5" />
              <span className="text-[10px] font-black uppercase tracking-wider leading-none">3,7 kW</span>
              <span className="text-[6px] font-bold mt-0.5">max 16A</span>
            </div>
          </Scene>
        </div>

        {/* Bandeau offre crédit d'impôt */}
        <div className="bg-[#0b1a2a] text-white rounded-2xl p-5 relative shadow-xl shrink-0 border border-emerald-500/20">
          <div className="absolute -top-1.5 -right-1.5 bg-linear-to-r from-emerald-500 to-[#ffd60a] text-slate-950 text-xs font-black px-4 py-2 rounded-bl-xl shadow-md rotate-6 uppercase tracking-wider animate-pulse flex items-center gap-1.5 z-20">
            <Sparkles className="w-3 h-3" />
            {d.offerBand.badge}
          </div>
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 bg-linear-to-br from-emerald-500/20 to-emerald-500/10 border-2 border-emerald-500/60 rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-emerald-500/15">
              <FileText className="w-7 h-7 text-emerald-500" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="text-[#ffd60a] text-sm font-black uppercase tracking-widest font-sora">{d.offerBand.eyebrow}</span>
              </div>
              <h3 className="text-xl font-black tracking-wide font-sora leading-tight mt-0.5">{d.offerBand.title}</h3>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">{d.offerBand.subtitle}</p>
            </div>
            <div className="bg-linear-to-r from-emerald-500 to-[#ffd60a] text-slate-950 font-black rounded-lg px-4 py-2 text-center shadow-lg shadow-emerald-500/25 shrink-0 self-center">
              <span className="block text-[8px] uppercase tracking-wider font-extrabold opacity-80">{d.offerBand.capsule.prefix}</span>
              <span className="text-lg font-black tracking-wide leading-none">{d.offerBand.capsule.value}</span>
              <span className="block text-[7px] uppercase tracking-wider font-bold mt-0.5">{d.offerBand.capsule.suffix}</span>
            </div>
          </div>
          <p className="text-[7.5px] text-slate-400 mt-2.5 leading-relaxed border-t border-slate-800 pt-1.5">{d.offerBand.legal}</p>
        </div>

        {/* Grille 4 points réassurance */}
        <div className="grid grid-cols-4 gap-x-4 shrink-0">
          {d.reassurance.map((item) => {
            const Icon = REASSURANCE_ICONS[item.icon];
            return (
              <div key={item.label} className="flex flex-col items-center text-center gap-1">
                <div className="w-8 h-8 bg-emerald-500/10 border border-emerald-500/30 rounded-lg flex items-center justify-center shrink-0">
                  {Icon && <Icon className="w-4 h-4 text-emerald-400" />}
                </div>
                <h4 className="text-[9px] font-extrabold text-white uppercase tracking-wide leading-tight">{item.label}</h4>
              </div>
            );
          })}
        </div>

        {/* Bloc norme */}
        <div className="bg-linear-to-r from-[#0f2540] via-[#143158] to-[#0f2540] border border-emerald-500/40 rounded-lg px-3 py-2 flex items-center gap-3 shrink-0 shadow-md">
          <div className="w-7 h-7 bg-linear-to-br from-emerald-500 to-[#ffd60a] rounded-full flex items-center justify-center shrink-0 shadow-md shadow-emerald-500/30">
            <BadgeCheck className="w-4 h-4 text-[#0b1a2a]" />
          </div>
          <div className="flex-1 flex items-center gap-2 flex-wrap">
            <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">Conforme</span>
            <span className="text-[11px] font-black text-[#0b1a2a] bg-[#ffd60a] border border-emerald-600 px-2 py-0.5 rounded shadow-sm">{d.norm.label}</span>
            <span className="text-[10px] font-bold text-white/90 italic">{d.norm.description}</span>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="bg-[#0b1a2a] px-8 py-3 border-t border-emerald-500/20 flex flex-col gap-2 shrink-0">
        <div className="bg-emerald-500/15 border border-emerald-500/40 rounded-xl px-4 py-2 flex items-center justify-between mt-1.5 select-none">
          <div className="flex items-center gap-2">
            {d.footer.seal.map((s, i) => (
              <React.Fragment key={s}>
                <span className="text-white font-extrabold text-[10px] uppercase tracking-widest">{s}</span>
                {i < d.footer.seal.length - 1 && <span className="text-emerald-500 font-bold">•</span>}
              </React.Fragment>
            ))}
          </div>
          <div className="font-handwritten text-[#ffd60a] text-xl font-bold">{d.footer.sealCursive}</div>
        </div>
        <div className="bg-linear-to-r from-emerald-600 via-[#ffd60a] to-emerald-600 text-[#0b1a2a] text-[8.5px] font-bold uppercase tracking-[0.25em] py-2 px-4 rounded-lg flex justify-between items-center mt-1 select-none shadow-md">
          {d.footer.band.map((b, i) => (
            <React.Fragment key={b}>
              <span>{b}</span>
              {i < d.footer.band.length - 1 && <span className="text-emerald-800">•</span>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
}

function Scene({ number, bgImage, eyebrow, title, caption, children }) {
  return (
    <div className="flex-1 h-full rounded-2xl overflow-hidden shadow-xl shadow-emerald-500/15 relative border border-emerald-500/30">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${bgImage}')` }} />
      <div className="absolute inset-0 bg-linear-to-t from-[#0b1a2a] via-[#0b1a2a]/40 to-transparent" />
      <div className="absolute top-3 left-3 w-9 h-9 bg-linear-to-br from-emerald-500 to-[#ffd60a] text-[#0b1a2a] rounded-full flex items-center justify-center font-black text-sm shadow-lg shadow-emerald-500/40 z-10 font-sora">
        {number}
      </div>
      {children}
      <div className="absolute bottom-0 left-0 right-0 p-3 z-10">
        <p className="text-[9px] font-black uppercase tracking-[0.2em] text-emerald-300 mb-0.5">{eyebrow}</p>
        <h3 className="text-white text-base font-black uppercase tracking-tight font-sora leading-tight">{title}</h3>
        <p className="text-slate-200 text-[10px] font-semibold mt-0.5">{caption}</p>
      </div>
    </div>
  );
}

function SceneSeparator({ text }) {
  return (
    <div className="flex flex-col items-center justify-center relative z-10">
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-linear-to-b from-transparent via-emerald-500/30 to-transparent" />
      <div className="bg-[#0b1a2a] border-2 border-emerald-400 text-emerald-400 rounded-full px-2.5 py-1 shadow-lg shadow-emerald-500/30 z-10 transform -rotate-12">
        <span className="font-handwritten text-base font-bold leading-none whitespace-nowrap">
          {text.split("\n").map((line, i) => (
            <React.Fragment key={i}>
              {line}
              {i < text.split("\n").length - 1 && <br />}
            </React.Fragment>
          ))}
        </span>
      </div>
    </div>
  );
}
