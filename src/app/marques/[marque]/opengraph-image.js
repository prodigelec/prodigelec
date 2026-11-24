import { ImageResponse } from "next/og";
import { getBrandPageBySlug } from "@/app/data/brandPages";

// Rendue à la demande, comme les images OG des pages services : Next refuse
// `generateStaticParams` en runtime edge, et l'image n'est demandée que par
// les robots de prévisualisation des réseaux sociaux.
export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const ACCENT = "#c9a227";

export default async function OgImage({ params }) {
  const { marque } = await params;
  const brand = getBrandPageBySlug(marque);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#0b1a2a",
          padding: "0 70px 52px 76px",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "6px", background: "linear-gradient(180deg, #c9a227 0%, #ffd60a 100%)", display: "flex" }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "200px", background: "linear-gradient(180deg, rgba(201,162,39,0.12) 0%, transparent 100%)", display: "flex" }} />

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "52px", marginBottom: "auto" }}>
          <span style={{ fontSize: "30px", fontWeight: 800, letterSpacing: "-0.5px", color: "white" }}>
            PRODIG<span style={{ color: "#ffd60a" }}>ELEC</span>
          </span>
          <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "18px" }}>prodigelec.fr</span>
        </div>

        <div style={{ display: "flex", marginBottom: "14px" }}>
          <span style={{ color: ACCENT, fontSize: "15px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" }}>
            {brand.category}
          </span>
        </div>

        <div style={{ color: "white", fontSize: "62px", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-1.5px", marginBottom: "18px" }}>
          Installateur &amp; dépanneur<br />{brand.name}
        </div>

        <div style={{ color: "rgba(255,255,255,0.55)", fontSize: "23px", lineHeight: 1.45, maxWidth: "820px", marginBottom: "auto" }}>
          {brand.tagline}
        </div>

        <div style={{ display: "flex", height: "1px", backgroundColor: "rgba(255,255,255,0.08)", margin: "36px 0 28px" }} />

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", gap: "10px" }}>
            {["Dreux", "Chartres", "Évreux", "Anet"].map((c) => (
              <div key={c} style={{ display: "flex", padding: "7px 16px", borderRadius: "100px", backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.6)", fontSize: "15px" }}>
                {c}
              </div>
            ))}
          </div>
          <span style={{ color: ACCENT, fontSize: "19px", fontWeight: 700 }}>06 38 19 47 52</span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
