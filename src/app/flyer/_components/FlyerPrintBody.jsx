"use client";

import React from "react";
import { MapPin, Mail, Globe, Facebook, Phone, Sparkles, BadgeCheck } from "lucide-react";
import ProdigelecMonogram from "@/app/components/ui/ProdigelecMonogram";
import { contact, interventionZone, poles } from "../_data/contact";
import { useFlyer } from "./FlyerShell";

/**
 * Corps imprimable commun à tous les flyers PRODIGELEC.
 *
 * Props requis :
 * - data : objet décrivant le flyer (cf. _data/<nom>.js)
 *
 * Props slots (les zones qui divergent entre flyers) :
 * - renderHeaderBg : () => JSX  — photo(s) de fond du header
 * - PartnerIcon : composant Lucide pour le badge partenaire
 * - renderScene : (sceneIndex, scene) => JSX — contenu central de chaque scène
 * - OfferBandIcon : composant Lucide pour l'icône du bandeau offre
 * - renderOfferCapsule : () => JSX — capsule droite du bandeau (prix, date, …)
 * - reassuranceIcons : { [iconName]: LucideComponent }
 */
export default function FlyerPrintBody({
  data: d,
  renderHeaderBg,
  PartnerIcon,
  renderScene,
  OfferBandIcon,
  renderOfferCapsule,
  reassuranceIcons = {},
}) {
  const { accent: a, qrUrl, phoneNumber, emailAddress } = useFlyer();

  return (
    <>
      {/* HEADER */}
      <div className="relative overflow-hidden bg-[#0b1a2a] flex flex-col p-6 gap-4 shrink-0">
        {renderHeaderBg && renderHeaderBg()}
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
                    {i < poles.length - 1 && <span className={a.text500}>•</span>}
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

        <div className={`relative z-10 w-full h-2px bg-linear-to-r from-transparent ${a.via500_70} to-transparent`} />

        {/* Rangée 2 : coordonnées */}
        <div className="relative z-10 flex justify-between items-center gap-4">
          <div className="w-1/3 flex flex-col gap-1">
            <span className={`text-[8.5px] font-extrabold ${a.text400} uppercase tracking-widest`}>{interventionZone.label}</span>
            {interventionZone.lines.map((line) => (
              <h5 key={line.name} className="text-sm font-black text-white uppercase tracking-wide leading-none">
                {line.name} <span className="text-[#ffd60a] font-extrabold">({line.code})</span>
                {line.andName && (
                  <> & {line.andName} <span className="text-[#ffd60a] font-extrabold">({line.andCode})</span></>
                )}
              </h5>
            ))}
            <div className="flex items-center gap-1.5 mt-0.5 text-[10px] text-slate-300 font-bold">
              <MapPin className={`w-3 h-3 ${a.text400}`} />
              <span>{interventionZone.artisan}</span>
            </div>
          </div>

          <div className={`flex-1 flex flex-col items-center justify-center border-x ${a.border500_30} px-4`}>
            <span className={`text-[8.5px] font-extrabold ${a.text400} uppercase tracking-widest mb-1`}>Contactez-nous</span>
            <div className="flex items-center gap-2 bg-white text-[#0b1a2a] rounded-lg px-4 py-1.5 shadow-md">
              <Phone className={`w-4 h-4 ${a.text600}`} />
              <span className="text-lg font-black tracking-wide">{phoneNumber}</span>
            </div>
            <div className="flex flex-col items-center gap-1 mt-2 text-[9px] text-slate-200 font-semibold">
              <div className="flex items-center gap-1.5">
                <Globe className={`w-3 h-3 ${a.text400}`} />
                <span>{contact.website}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className={`w-3 h-3 ${a.text400}`} />
                <span>{emailAddress}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Facebook className={`w-3 h-3 ${a.text400}`} />
                <span>{contact.facebook}</span>
              </div>
            </div>
          </div>

          <div className="w-42.5 flex items-center justify-end gap-3.5 relative">
            <div className="text-right flex flex-col justify-center select-none absolute left-0 pr-1 shrink-0">
              <span className="font-handwritten text-white text-xl transform -rotate-12 leading-none">Scannez</span>
              <span className="font-handwritten text-[#ffd60a] text-xl transform -rotate-12 leading-none mt-1">moi !</span>
              <svg className={`w-6 h-6 ${a.text400} mt-1 self-end transform rotate-12`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
            <div className={`w-21 h-21 bg-white border ${a.border500_50} rounded-lg p-1.5 shadow-md flex items-center justify-center shrink-0 z-10 relative`}>
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
        <div className={`absolute -top-20 -right-20 w-64 h-64 ${a.bg500_10} rounded-full blur-3xl pointer-events-none`} />
        <div className={`absolute -bottom-20 -left-20 w-64 h-64 ${a.bg500_10} rounded-full blur-3xl pointer-events-none`} />

        {/* Titre principal */}
        <div className="text-center relative z-10">
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 ${a.bg500_15} border ${a.border500_40} rounded-full mb-2`}>
            {PartnerIcon && <PartnerIcon className={`w-3 h-3 ${a.text400}`} />}
            <span className={`text-[8.5px] font-black uppercase tracking-[0.2em] ${a.text300}`}>{d.partnerBadge}</span>
          </div>
          <h1 className="text-white text-3xl font-black tracking-tight font-sora leading-none">
            {d.mainTitle.line1Prefix} <span className="text-[#ffd60a]">{d.mainTitle.line1Highlight}</span>
          </h1>
          <div className="relative inline-block mt-1">
            <h2 className="text-white text-xl font-black tracking-wider font-sora leading-none">{d.mainTitle.line2}</h2>
            <div className={`absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-24 h-[3px] bg-linear-to-r from-transparent ${a.via400} to-transparent rounded-full`} />
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

        {/* 2 scènes */}
        <div className="flex justify-center items-stretch gap-5 h-[320px] relative z-10">
          <Scene a={a} scene={d.scenes[0]}>
            {renderScene ? renderScene(0, d.scenes[0]) : null}
          </Scene>
          <SceneSeparator a={a} text={d.sceneSeparator} />
          <Scene a={a} scene={d.scenes[1]}>
            {renderScene ? renderScene(1, d.scenes[1]) : null}
          </Scene>
        </div>

        {/* Bandeau offre */}
        <div className={`bg-[#0b1a2a] text-white rounded-2xl p-5 relative shadow-xl shrink-0 border ${a.border500_20}`}>
          <div className={`absolute -top-1.5 -right-1.5 bg-linear-to-r ${a.gradFromYellow} text-slate-950 text-xs font-black px-4 py-2 rounded-bl-xl shadow-md rotate-6 uppercase tracking-wider animate-pulse flex items-center gap-1.5 z-20`}>
            <Sparkles className="w-3 h-3" />
            {d.offerBand.badge}
          </div>
          <div className="flex items-center gap-5">
            <div className={`w-14 h-14 bg-linear-to-br ${a.from500_20} ${a.to500_10} border-2 ${a.border500_60} rounded-full flex items-center justify-center shrink-0 shadow-lg ${a.shadow500_15}`}>
              {OfferBandIcon && <OfferBandIcon className={`w-7 h-7 ${a.text500}`} />}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="text-[#ffd60a] text-sm font-black uppercase tracking-widest font-sora">{d.offerBand.eyebrow}</span>
              </div>
              <h3 className="text-xl font-black tracking-wide font-sora leading-tight mt-0.5">{d.offerBand.title}</h3>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">{d.offerBand.subtitle}</p>
            </div>
            {renderOfferCapsule && renderOfferCapsule()}
          </div>
          <p className="text-[7.5px] text-slate-400 mt-2.5 leading-relaxed border-t border-slate-800 pt-1.5">
            <OfferLegal data={d} />
          </p>
        </div>

        {/* Grille réassurance */}
        <div className="grid grid-cols-4 gap-x-4 shrink-0">
          {d.reassurance.map((item) => {
            const Icon = reassuranceIcons[item.icon];
            return (
              <div key={item.label} className="flex flex-col items-center text-center gap-1">
                <div className={`w-8 h-8 ${a.bg500_10} border ${a.border500_30} rounded-lg flex items-center justify-center shrink-0`}>
                  {Icon && <Icon className={`w-4 h-4 ${a.text400}`} />}
                </div>
                <h4 className="text-[9px] font-extrabold text-white uppercase tracking-wide leading-tight">{item.label}</h4>
              </div>
            );
          })}
        </div>

        {/* Bloc norme */}
        <div className={`bg-linear-to-r from-[#0f2540] via-[#143158] to-[#0f2540] border ${a.border500_40} rounded-lg px-3 py-2 flex items-center gap-3 shrink-0 shadow-md`}>
          <div className={`w-7 h-7 bg-linear-to-br ${a.gradFromYellow} rounded-full flex items-center justify-center shrink-0 shadow-md ${a.shadow500_30}`}>
            <BadgeCheck className="w-4 h-4 text-[#0b1a2a]" />
          </div>
          <div className="flex-1 flex items-center gap-2 flex-wrap">
            <span className={`text-[10px] font-black ${a.text400} uppercase tracking-widest`}>Conforme</span>
            <span className={`text-[11px] font-black text-[#0b1a2a] bg-[#ffd60a] border ${a.border600} px-2 py-0.5 rounded shadow-sm`}>{d.norm.label}</span>
            <span className="text-[10px] font-bold text-white/90">{d.norm.description}</span>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className={`bg-[#0b1a2a] px-8 py-3 border-t ${a.border500_20} flex flex-col gap-2 shrink-0`}>
        <div className={`${a.bg500_15} border ${a.border500_40} rounded-xl px-4 py-2 flex items-center justify-between mt-1.5 select-none`}>
          <div className="flex items-center gap-2">
            {d.footer.seal.map((s, i) => (
              <React.Fragment key={s}>
                <span className="text-white font-extrabold text-[10px] uppercase tracking-widest">{s}</span>
                {i < d.footer.seal.length - 1 && <span className={`${a.text500} font-bold`}>•</span>}
              </React.Fragment>
            ))}
          </div>
          <div className="font-handwritten text-[#ffd60a] text-xl font-bold">{d.footer.sealCursive}</div>
        </div>
        <div className={`bg-linear-to-r ${a.gradFooter} text-[#0b1a2a] text-[8.5px] font-bold uppercase tracking-[0.25em] py-2 px-4 rounded-lg flex justify-between items-center mt-1 select-none shadow-md`}>
          {d.footer.band.map((b, i) => (
            <React.Fragment key={b}>
              <span>{b}</span>
              {i < d.footer.band.length - 1 && <span className={a.footerSep}>•</span>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
}

function Scene({ a, scene, children }) {
  return (
    <div className={`flex-1 h-full rounded-2xl overflow-hidden shadow-xl ${a.shadow500_15} relative border ${a.border500_30}`}>
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${scene.bgImage}')` }} />
      <div className="absolute inset-0 bg-linear-to-t from-[#0b1a2a] via-[#0b1a2a]/40 to-transparent" />
      <div className={`absolute top-3 left-3 w-9 h-9 bg-linear-to-br ${a.gradFromYellow} text-[#0b1a2a] rounded-full flex items-center justify-center font-black text-sm shadow-lg ${a.shadow500_40} z-10 font-sora`}>
        {scene.number}
      </div>
      {children}
      <div className="absolute bottom-0 left-0 right-0 p-3 z-10">
        <p className={`text-[9px] font-black uppercase tracking-[0.2em] ${a.text300} mb-0.5`}>{scene.eyebrow}</p>
        <h3 className="text-white text-base font-black uppercase tracking-tight font-sora leading-tight">{scene.title}</h3>
        <p className="text-slate-200 text-[10px] font-semibold mt-0.5">{scene.caption}</p>
      </div>
    </div>
  );
}

function SceneSeparator({ a, text }) {
  return (
    <div className="flex flex-col items-center justify-center relative z-10">
      <div className={`absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-linear-to-b from-transparent ${a.via500_30} to-transparent`} />
      <div className={`bg-[#0b1a2a] border-2 ${a.borderColor400} ${a.text400} rounded-full px-2.5 py-1 shadow-lg ${a.shadow500_30} z-10 transform -rotate-12`}>
        <span className="font-handwritten text-base font-bold leading-none whitespace-nowrap">
          {text.split("\n").map((line, i, arr) => (
            <React.Fragment key={i}>
              {line}
              {i < arr.length - 1 && <br />}
            </React.Fragment>
          ))}
        </span>
      </div>
    </div>
  );
}

function OfferLegal({ data: d }) {
  const { dateFormattedShort } = useFlyer();
  if (d.offerBand.legal) return <>{d.offerBand.legal}</>;
  if (d.offerBand.legalTemplate) return <>{d.offerBand.legalTemplate.replace("{date}", dateFormattedShort)}</>;
  return null;
}

