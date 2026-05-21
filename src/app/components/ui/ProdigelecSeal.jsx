"use client";

function IconPortail({ c = "#fff", w = 1.6 }) {
  return (
    <g fill="none" stroke={c} strokeWidth={w} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="0" cy="-22" r="1.2" fill={c} />
      <path d="M -5 -25 A 6 6 0 0 1 5 -25" />
      <path d="M -9 -29 A 11 11 0 0 1 9 -29" />
      <rect x="-18" y="-12" width="36" height="22" rx="1" />
      <line x1="-12" y1="-12" x2="-12" y2="10" />
      <line x1="-6" y1="-12" x2="-6" y2="10" />
      <line x1="0" y1="-12" x2="0" y2="10" />
      <line x1="6" y1="-12" x2="6" y2="10" />
      <line x1="12" y1="-12" x2="12" y2="10" />
      <line x1="-20" y1="12" x2="20" y2="12" />
    </g>
  );
}

function IconDome({ c = "#fff", w = 1.6 }) {
  return (
    <g fill="none" stroke={c} strokeWidth={w} strokeLinecap="round" strokeLinejoin="round">
      <line x1="-22" y1="-10" x2="22" y2="-10" />
      <line x1="-18" y1="-10" x2="-18" y2="-6" />
      <line x1="18" y1="-10" x2="18" y2="-6" />
      <path d="M -18 -6 A 18 18 0 0 0 18 -6 Z" fill="none" />
      <circle cx="0" cy="0" r="6" />
      <circle cx="0" cy="0" r="2.5" fill={c} />
    </g>
  );
}

function IconInterphone({ c = "#fff", w = 1.6 }) {
  return (
    <g fill="none" stroke={c} strokeWidth={w} strokeLinecap="round" strokeLinejoin="round">
      <rect x="-14" y="-20" width="28" height="40" rx="2" />
      <rect x="-10" y="-16" width="20" height="14" rx="1" />
      <circle cx="0" cy="-12" r="2" />
      <path d="M -5 -4 A 5 5 0 0 1 5 -4" />
      {[0, 1, 2].map((r) => (
        <g key={r}>
          <circle cx="-6" cy={2 + r * 5} r=".9" fill={c} />
          <circle cx="0" cy={2 + r * 5} r=".9" fill={c} />
          <circle cx="6" cy={2 + r * 5} r=".9" fill={c} />
        </g>
      ))}
    </g>
  );
}

function IconAmpoule({ c = "#fff", w = 1.6 }) {
  return (
    <g fill="none" stroke={c} strokeWidth={w} strokeLinecap="round" strokeLinejoin="round">
      <path d="M 0 -22 a 14 14 0 0 1 9 25 v 4 h -18 v -4 a 14 14 0 0 1 9 -25 Z" />
      <line x1="-7" y1="11" x2="7" y2="11" />
      <line x1="-5" y1="14" x2="5" y2="14" />
      <path d="M -3 17 Q 0 19 3 17" />
      <line x1="0" y1="-10" x2="0" y2="0" />
      <circle cx="0" cy="-10" r="1.4" fill={c} />
      <line x1="0" y1="0" x2="-5" y2="5" />
      <line x1="0" y1="0" x2="5" y2="5" />
      <circle cx="-5" cy="5" r="1.4" fill={c} />
      <circle cx="5" cy="5" r="1.4" fill={c} />
    </g>
  );
}

/**
 * Sceau circulaire PRODIGELEC avec 4 services, textes arqués et éclair central.
 * @param {number} size - Taille en px (défaut 200)
 * @param {"navy"|"paper"|"transparent"} variant - Fond du sceau
 */
export default function ProdigelecSeal({ size = 200, variant = "navy", instanceId = "seal" }) {
  const idTop = `prodigelec_${instanceId}_t`;
  const idBot = `prodigelec_${instanceId}_b`;

  const yellow = "#ffd60a";
  const bgColor =
    variant === "navy" ? "#050e22" : variant === "paper" ? "#f6f4ef" : "none";
  const fg = variant === "paper" ? "#050e22" : "#ffffff";
  const labelFont = { fontFamily: "'Sora', var(--font-sora), sans-serif", fontWeight: 600, fontSize: 13, letterSpacing: ".22em" };

  return (
    <svg
      viewBox="-250 -250 500 500"
      width={size}
      height={size}
      aria-label="Logo PRODIGELEC"
    >
      {variant !== "transparent" && (
        <rect x="-250" y="-250" width="500" height="500" fill={bgColor} />
      )}

      {/* Cercles concentriques */}
      <circle cx="0" cy="0" r="238" fill="none" stroke={fg} strokeWidth="2" />
      <circle cx="0" cy="0" r="190" fill="none" stroke={fg} strokeWidth="1.2" />

      {/* Chemins invisibles pour textes arqués */}
      <path id={idTop} d="M -202 -73 A 215 215 0 0 1 202 -73" fill="none" stroke="none" />
      <path id={idBot} d="M -202 73 A 215 215 0 0 0 202 73" fill="none" stroke="none" />

      {/* PRODIGELEC arqué en haut */}
      <text
        fill={fg}
        style={{ fontFamily: "'Sora', var(--font-sora), sans-serif", fontWeight: 700, fontSize: 28, letterSpacing: "0.24em" }}
      >
        <textPath href={"#" + idTop} startOffset="50%" textAnchor="middle">
          <tspan fill={fg}>PRODIG</tspan>
          <tspan fill={yellow} style={{ letterSpacing: "0.24em" }}>ELE</tspan>
          <tspan fill={yellow} style={{ letterSpacing: "0em" }}>C</tspan>
        </textPath>
      </text>

      {/* INTERVENTIONS arqué en bas */}
      <text
        fill={fg}
        style={{ fontFamily: "'Sora', var(--font-sora), sans-serif", fontWeight: 500, fontSize: 16, letterSpacing: "0.32em" }}
      >
        <textPath href={"#" + idBot} startOffset="50%" textAnchor="middle">
          <tspan>INTERVENTIONS · 28 — 27 — 7</tspan>
          <tspan style={{ letterSpacing: "0em" }}>8</tspan>
        </textPath>
      </text>

      {/* Éclair central */}
      <path d="M 10 -70 L -28 8 L -2 8 L -14 72 L 28 -8 L 4 -8 L 18 -70 Z" fill={yellow} />

      {/* AUTOMATISME — haut */}
      <g transform="translate(0,-138)">
        <text fill={fg} textAnchor="middle" style={labelFont}>AUTOMATISME</text>
        <g transform="translate(0,42)">
          <IconPortail c={fg} />
        </g>
      </g>

      {/* CONTRÔLE D'ACCÈS — gauche */}
      <g transform="translate(-130,-20)">
        <text fill={fg} textAnchor="middle" style={labelFont}>
          <tspan x="0" dy="0">CONTRÔLE</tspan>
          <tspan x="0" dy="16">D'ACCÈS</tspan>
        </text>
        <g transform="translate(0,52)">
          <IconInterphone c={fg} />
        </g>
      </g>

      {/* SÉCURITÉ — droite */}
      <g transform="translate(130,-5)">
        <text fill={fg} textAnchor="middle" style={labelFont}>SÉCURITÉ</text>
        <g transform="translate(0,28)">
          <IconDome c={fg} />
        </g>
      </g>

      {/* ÉLECTRICITÉ — bas */}
      <g transform="translate(0,138)">
        <text fill={fg} textAnchor="middle" style={labelFont}>ÉLECTRICITÉ</text>
        <g transform="translate(0,-38)">
          <IconAmpoule c={fg} />
        </g>
      </g>
    </svg>
  );
}
