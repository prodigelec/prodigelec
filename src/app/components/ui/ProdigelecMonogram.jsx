"use client";

export default function ProdigelecMonogram({ size = 80, light = false }) {
  const circleFill = light ? "#ffffff" : "#050e22";
  const pFill = light ? "#050e22" : "#ffffff";
  const yellow = "#ffd60a";
  const ring = light ? "none" : "rgba(255,255,255,0.12)";

  return (
    <svg
      viewBox="-100 -100 200 200"
      width={size}
      height={size}
      aria-hidden="true"
    >
      <circle cx="0" cy="0" r="92" fill={circleFill} />
      {!light && (
        <circle cx="0" cy="0" r="92" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="2" />
      )}
      {/* P — fût et arc supérieur */}
      <path
        d="M -42 -60 L -42 60 L -22 60 L -22 12 L 8 12 Q 50 12 50 -24 Q 50 -60 8 -60 Z M -22 -42 L 6 -42 Q 30 -42 30 -24 Q 30 -8 6 -8 L -22 -8 Z"
        fill={pFill}
      />
      {/* éclair jaune dans le creux du P */}
      <path
        d="M 6 -50 L -12 -22 L -2 -22 L -8 -2 L 14 -28 L 4 -28 L 10 -50 Z"
        fill={yellow}
      />
    </svg>
  );
}
