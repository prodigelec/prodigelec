"use client";
import ProdigelecMonogram from "@/app/components/ui/ProdigelecMonogram";

const GOLD = "#C9A84C";
const DARK = "#0b1a2a";
const DARK2 = "#0f2336";

function LogoBadge() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <ProdigelecMonogram size={52} light={false} />
      <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <div style={{ display: "flex", fontSize: 17, fontWeight: 900, letterSpacing: 1, fontFamily: "'Sora', sans-serif" }}>
          <span style={{ color: "#ffffff" }}>PRODIG</span>
          <span style={{ color: "#ffd60a" }}>ELEC</span>
        </div>
        <span style={{ color: "#ffffff60", fontSize: 9, letterSpacing: 3, fontWeight: 600, textTransform: "uppercase" }}>Électricité · Sécurité · Automatisme</span>
      </div>
    </div>
  );
}

function Bandeau() {
  return (
    <div style={{
      backgroundColor: DARK,
      padding: "14px 20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderBottom: `2px solid ${GOLD}40`,
    }}>
      <LogoBadge />
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 2 }}>
        <span style={{ color: GOLD, fontSize: 10, fontWeight: 700, letterSpacing: 1 }}>Électricité · Sécurité Électronique</span>
        <span style={{ color: "#ffffff40", fontSize: 9, letterSpacing: 1 }}>Eure · Eure-et-Loir · Yvelines</span>
      </div>
    </div>
  );
}

function BandeauBas() {
  return (
    <div style={{
      background: `linear-gradient(90deg, ${GOLD}, #e8c060, ${GOLD})`,
      padding: "10px 20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    }}>
      <span style={{ color: DARK, fontWeight: 800, fontSize: 12 }}>📞 06 38 19 47 52</span>
      <span style={{ color: DARK, fontWeight: 700, fontSize: 11 }}>📍 Chartres · Dreux · Évreux</span>
      <span style={{ color: DARK, fontWeight: 800, fontSize: 11 }}>🌐 prodigelec.fr</span>
    </div>
  );
}

function TemplateAvantApres() {
  return (
    <div style={{ width: 540, backgroundColor: DARK, borderRadius: 18, overflow: "hidden", fontFamily: "Inter, sans-serif", boxShadow: "0 20px 60px rgba(0,0,0,0.6)" }}>
      <Bandeau />

      <div style={{ padding: "14px 20px 8px", borderBottom: `1px solid ${GOLD}20` }}>
        <div style={{ color: GOLD, fontWeight: 900, fontSize: 16, letterSpacing: 0.5, textTransform: "uppercase" }}>
          ⚡ Repérage de tableau électrique
        </div>
        <div style={{ color: "#94a3b8", fontSize: 11, marginTop: 3 }}>
          Identification & étiquetage de chaque disjoncteur — Schéma fourni
        </div>
      </div>

      <div style={{ display: "flex", position: "relative", height: 290 }}>
        <div style={{
          flex: 1,
          backgroundColor: "#0a1520",
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          gap: 10, padding: 16,
          borderRight: `3px solid ${GOLD}`,
        }}>
          <span style={{
            position: "absolute", top: 12, left: 12,
            backgroundColor: "#374151", color: "#9ca3b8",
            fontSize: 10, fontWeight: 800, letterSpacing: 2,
            padding: "4px 12px", borderRadius: 20,
          }}>AVANT</span>
          <div style={{
            width: "85%", height: 180,
            marginTop: 20,
            border: "2px dashed #374151",
            borderRadius: 10,
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            gap: 8,
            backgroundColor: "#0d1e2e",
          }}>
            <span style={{ fontSize: 32 }}>📷</span>
            <span style={{ color: "#4b5563", fontSize: 11, textAlign: "center", padding: "0 12px" }}>
              Votre photo<br />AVANT
            </span>
          </div>
          <span style={{ color: "#6b7280", fontSize: 10, textAlign: "center" }}>Aucun circuit identifié</span>
        </div>

        <div style={{
          position: "absolute", left: "50%", top: "50%",
          transform: "translate(-50%, -50%)",
          width: 36, height: 36,
          backgroundColor: GOLD,
          borderRadius: "50%",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 16, fontWeight: 900, color: DARK,
          boxShadow: `0 0 0 4px ${DARK}, 0 0 0 6px ${GOLD}60`,
          zIndex: 10,
        }}>→</div>

        <div style={{
          flex: 1,
          backgroundColor: "#071a12",
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          gap: 10, padding: 16,
        }}>
          <span style={{
            position: "absolute", top: 12, right: 12,
            backgroundColor: "#064e31", color: "#4ade80",
            fontSize: 10, fontWeight: 800, letterSpacing: 2,
            padding: "4px 12px", borderRadius: 20,
          }}>APRÈS</span>
          <div style={{
            width: "85%", height: 180,
            marginTop: 20,
            border: "2px dashed #16532e",
            borderRadius: 10,
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            gap: 8,
            backgroundColor: "#071510",
          }}>
            <span style={{ fontSize: 32 }}>📷</span>
            <span style={{ color: "#166534", fontSize: 11, textAlign: "center", padding: "0 12px" }}>
              Votre photo<br />APRÈS
            </span>
          </div>
          <span style={{ color: "#4ade80", fontSize: 10, textAlign: "center" }}>Chaque circuit étiqueté ✅</span>
        </div>
      </div>

      <div style={{
        backgroundColor: DARK2,
        padding: "10px 20px",
        display: "flex",
        gap: 6,
        justifyContent: "center",
        flexWrap: "wrap",
        borderTop: `1px solid ${GOLD}20`,
      }}>
        {["✅ Identification complète", "✅ Étiquettes durables", "✅ Schéma fourni", "✅ Devis gratuit"].map((t, i) => (
          <span key={i} style={{ color: "#94a3b8", fontSize: 11 }}>{t}</span>
        ))}
      </div>

      <BandeauBas />
    </div>
  );
}

function TemplateService({ icon, titre, sousTitre, points, couleurAccent = GOLD }) {
  return (
    <div style={{ width: 540, backgroundColor: DARK, borderRadius: 18, overflow: "hidden", fontFamily: "Inter, sans-serif", boxShadow: "0 20px 60px rgba(0,0,0,0.6)" }}>
      <Bandeau />

      <div style={{
        padding: "30px 28px 20px",
        display: "flex", flexDirection: "column", gap: 20,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{
            width: 60, height: 60,
            backgroundColor: `${couleurAccent}18`,
            border: `2px solid ${couleurAccent}50`,
            borderRadius: 14,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 28, flexShrink: 0,
          }}>{icon}</div>
          <div>
            <div style={{ color: "white", fontWeight: 900, fontSize: 20, lineHeight: 1.2 }}>{titre}</div>
            <div style={{ color: couleurAccent, fontSize: 12, fontWeight: 600, marginTop: 3 }}>{sousTitre}</div>
          </div>
        </div>

        <div style={{ height: 1, background: `linear-gradient(90deg, ${couleurAccent}60, transparent)` }} />

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {points.map((p, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{
                width: 28, height: 28, flexShrink: 0,
                backgroundColor: `${couleurAccent}20`,
                border: `1px solid ${couleurAccent}40`,
                borderRadius: 8,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 13,
              }}>{p.icon}</div>
              <div>
                <div style={{ color: "white", fontWeight: 700, fontSize: 13 }}>{p.titre}</div>
                <div style={{ color: "#64748b", fontSize: 11 }}>{p.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          backgroundColor: `${couleurAccent}15`,
          border: `1px solid ${couleurAccent}40`,
          borderRadius: 12,
          padding: "12px 16px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <span style={{ color: "white", fontSize: 13, fontWeight: 700 }}>Devis gratuit — Intervention rapide</span>
          <span style={{ color: couleurAccent, fontSize: 13, fontWeight: 800 }}>→</span>
        </div>
      </div>

      <BandeauBas />
    </div>
  );
}

function TemplateConseil({ conseil, contexte }) {
  return (
    <div style={{ width: 540, backgroundColor: DARK, borderRadius: 18, overflow: "hidden", fontFamily: "Inter, sans-serif", boxShadow: "0 20px 60px rgba(0,0,0,0.6)" }}>
      <Bandeau />

      <div style={{ padding: "16px 24px 0", display: "flex", justifyContent: "center" }}>
        <div style={{
          backgroundColor: `${GOLD}18`,
          border: `1px solid ${GOLD}50`,
          borderRadius: 30,
          padding: "6px 20px",
          color: GOLD, fontWeight: 700, fontSize: 11, letterSpacing: 2,
          textTransform: "uppercase",
        }}>💡 Le conseil du pro</div>
      </div>

      <div style={{ padding: "14px 28px 16px", textAlign: "center" }}>
        <div style={{ color: "white", fontSize: 17, fontWeight: 800, lineHeight: 1.5 }}>
          {conseil}
        </div>
        <div style={{ color: "#64748b", fontSize: 12, marginTop: 8, lineHeight: 1.6 }}>
          {contexte}
        </div>
      </div>

      <div style={{ height: 1, margin: "0 24px", background: `linear-gradient(90deg, transparent, ${GOLD}40, transparent)` }} />

      <div style={{ display: "flex", gap: 0, height: 200, margin: "14px 20px", borderRadius: 12, overflow: "hidden", border: `1px solid ${GOLD}30` }}>
        <div style={{
          flex: 1,
          backgroundColor: "#0a1520",
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          gap: 8, padding: 12,
          borderRight: `2px solid ${GOLD}`,
          position: "relative",
        }}>
          <span style={{
            position: "absolute", top: 8, left: 8,
            backgroundColor: "#374151", color: "#9ca3b8",
            fontSize: 9, fontWeight: 800, letterSpacing: 2,
            padding: "3px 10px", borderRadius: 20,
          }}>AVANT</span>
          <span style={{ fontSize: 28, marginTop: 16 }}>📷</span>
          <span style={{ color: "#4b5563", fontSize: 10, textAlign: "center" }}>Ta photo avant</span>
        </div>

        <div style={{
          position: "absolute",
          width: 28, height: 28,
          backgroundColor: GOLD,
          borderRadius: "50%",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 12, fontWeight: 900, color: DARK,
          marginLeft: 250, marginTop: 86,
          boxShadow: `0 0 0 3px ${DARK}`,
          zIndex: 10,
        }}>→</div>

        <div style={{
          flex: 1,
          backgroundColor: "#071a12",
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          gap: 8, padding: 12,
          position: "relative",
        }}>
          <span style={{
            position: "absolute", top: 8, right: 8,
            backgroundColor: "#064e31", color: "#4ade80",
            fontSize: 9, fontWeight: 800, letterSpacing: 2,
            padding: "3px 10px", borderRadius: 20,
          }}>APRÈS</span>
          <span style={{ fontSize: 28, marginTop: 16 }}>📷</span>
          <span style={{ color: "#166534", fontSize: 10, textAlign: "center" }}>Ta photo après</span>
        </div>
      </div>

      <div style={{ padding: "8px 24px 14px", display: "flex", alignItems: "center", gap: 10 }}>
        <ProdigelecMonogram size={34} light={false} />
        <div>
          <div style={{ color: GOLD, fontSize: 12, fontWeight: 700 }}>Sébastien PETACCIA — PRODIGELEC</div>
          <div style={{ color: "#475569", fontSize: 10 }}>Électricien & Sécurité Électronique · 28, 27 & 78</div>
        </div>
      </div>

      <BandeauBas />
    </div>
  );
}

function CouvertureFacebook() {
  const services = [
    {
      icon: "⚡",
      color: "#F59E0B",
      gradient: "linear-gradient(135deg, #1c1200 0%, #2a1c00 100%)",
      border: "rgba(245,158,11,0.25)",
      title: "Électricité Générale",
      image: "/img_carousel_hero_home/tableau-electrique.optimized.jpg",
      items: ["Dépannage & mise aux normes NF C 15-100", "Tableau électrique & disjoncteurs", "Éclairage LED, VMC & chauffage"],
    },
    {
      icon: "🔒",
      color: "#C9A227",
      gradient: "linear-gradient(135deg, #130f00 0%, #1e1800 100%)",
      border: "rgba(201,162,39,0.25)",
      title: "Sécurité Électronique",
      image: "/img_carousel_securite_page/videophonie_digicode.jpg",
      items: ["Digicode & contrôle d'accès", "Alarme & vidéosurveillance HD", "Visiophone & interphone"],
    },
    {
      icon: "⚙️",
      color: "#818cf8",
      gradient: "linear-gradient(135deg, #07071a 0%, #0d0d2a 100%)",
      border: "rgba(129,140,248,0.25)",
      title: "Automatismes",
      image: "/img_carousel_hero_home/Volet_Battant.avif",
      items: ["Volets roulants & battants motorisés", "Portails automatiques", "Portes de garage sectionnelles"],
    },
  ];

  return (
    <div style={{
      width: 820, height: 312,
      display: "flex",
      overflow: "hidden",
      fontFamily: "'Sora', 'Inter', sans-serif",
    }}>
      <div style={{
        width: 256,
        flexShrink: 0,
        background: "linear-gradient(160deg, #061525 0%, #0b1a2a 60%, #0f2336 100%)",
        borderRight: "1px solid rgba(201,162,39,0.2)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "24px 24px",
        gap: 16,
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", bottom: -60, right: -60, width: 180, height: 180, borderRadius: "50%", background: "radial-gradient(circle, rgba(201,162,39,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <div style={{ fontSize: 28, fontWeight: 900, letterSpacing: -0.5, lineHeight: 1 }}>
            <span style={{ color: "#ffffff" }}>PRODIG</span>
            <span style={{ color: "#ffd60a" }}>ELEC</span>
          </div>
          <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 7.5, letterSpacing: 3, textTransform: "uppercase", fontWeight: 600 }}>
            Électricité · Sécurité · Automatisme
          </span>
        </div>

        <div style={{ width: 40, height: 2, background: "linear-gradient(90deg, #C9A227, transparent)" }} />

        <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 11, lineHeight: 1.5 }}>
          Artisan indépendant<br />
          <span style={{ color: "#C9A227", fontWeight: 700 }}>23 ans d&apos;expérience</span>
        </div>

        <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 9.5, lineHeight: 1.6 }}>
          Eure-et-Loir · Eure · Yvelines<br />Dep. 28 · 27 · 78
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
          <div style={{
            backgroundColor: "#C9A227", borderRadius: 7, padding: "6px 12px",
            display: "flex", alignItems: "center", gap: 6, width: "fit-content",
          }}>
            <span style={{ fontSize: 11 }}>📞</span>
            <span style={{ color: "#061525", fontWeight: 900, fontSize: 12, whiteSpace: "nowrap" }}>06 38 19 47 52</span>
          </div>
          <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 9 }}>🌐 prodigelec.fr</span>
        </div>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {services.map((s, i) => (
          <div key={s.title} style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            gap: 0,
            borderBottom: i < 2 ? "1px solid rgba(0,0,0,0.5)" : "none",
            position: "relative",
            overflow: "hidden",
          }}>
            <div style={{
              position: "absolute", inset: 0,
              backgroundImage: `url(${s.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }} />
            <div style={{
              position: "absolute", inset: 0,
              background: s.gradient,
              opacity: 0.88,
            }} />
            <div style={{
              position: "absolute", left: 0, top: 0, bottom: 0,
              width: 3,
              backgroundColor: s.color,
            }} />

            <div style={{
              position: "relative", zIndex: 1,
              display: "flex", alignItems: "center",
              width: "100%", padding: "0 20px 0 18px", gap: 14,
            }}>
              <div style={{
                width: 38, height: 38, borderRadius: 10, flexShrink: 0,
                backgroundColor: `${s.color}20`,
                border: `1.5px solid ${s.color}60`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 18,
              }}>{s.icon}</div>

              <div style={{ flex: 1 }}>
                <div style={{ color: "#ffffff", fontWeight: 800, fontSize: 13, marginBottom: 5 }}>
                  {s.title}
                </div>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  {s.items.map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: 4 }}>
                      <span style={{ color: s.color, fontSize: 8 }}>▸</span>
                      <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 9.5 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{
                flexShrink: 0,
                border: `1px solid ${s.color}50`,
                borderRadius: 6, padding: "4px 10px",
              }}>
                <span style={{ color: s.color, fontSize: 9, fontWeight: 700 }}>Devis gratuit</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        height: 3,
        background: "linear-gradient(90deg, #C9A227, #ffd60a, #C9A227)",
        zIndex: 3,
      }} />
    </div>
  );
}

export default function FacebookPostContent() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#1a1a2e", display: "flex", flexDirection: "column", alignItems: "center", padding: "48px 24px", gap: 48, fontFamily: "Inter, sans-serif" }}>
      <h1 style={{ color: "white", fontSize: 22, fontWeight: 700 }}>Templates Facebook — PRODIGELEC</h1>

      <div>
        <p style={{ color: "#64748b", textAlign: "center", marginBottom: 8, fontSize: 13 }}>Photo de couverture — 820 × 312 px</p>
        <p style={{ color: "#475569", textAlign: "center", marginBottom: 16, fontSize: 11 }}>
          Clic droit → &quot;Enregistrer l&apos;image&quot; puis upload sur Facebook
        </p>
        <CouvertureFacebook />
      </div>

      <div style={{ width: 820, height: 1, background: "rgba(255,255,255,0.08)" }} />

      <div>
        <p style={{ color: "#64748b", textAlign: "center", marginBottom: 12, fontSize: 13 }}>Template 1 — Avant / Après (avec tes photos)</p>
        <TemplateAvantApres />
      </div>

      <div>
        <p style={{ color: "#64748b", textAlign: "center", marginBottom: 12, fontSize: 13 }}>Template 2 — Mise en avant d&apos;un service</p>
        <TemplateService
          icon="⚡"
          titre="Repérage de Tableau Électrique"
          sousTitre="Plus jamais de tâtonnement en cas de panne"
          couleurAccent="#F59E0B"
          points={[
            { icon: "🔍", titre: "Identification de chaque circuit", desc: "Chaque disjoncteur relié à sa prise ou lumière" },
            { icon: "🏷️", titre: "Étiquetage clair et durable", desc: "Étiquettes résistantes, lisibles au premier coup d'œil" },
            { icon: "📋", titre: "Schéma de repérage fourni", desc: "Document récapitulatif remis après intervention" },
            { icon: "✅", titre: "Vérification de cohérence", desc: "Détection d'éventuelles anomalies sur l'installation" },
          ]}
        />
      </div>

      <div>
        <p style={{ color: "#64748b", textAlign: "center", marginBottom: 12, fontSize: 13 }}>Template 3 — Conseil du pro</p>
        <TemplateConseil
          conseil="Vous ne savez pas quel disjoncteur coupe quoi ? C'est plus courant qu'on ne le pense."
          contexte="Un tableau non repéré, c'est du temps perdu à chaque panne. En 1h d'intervention, j'identifie et étiquette chaque circuit pour que vous sachiez exactement quoi couper, quand et pourquoi."
        />
      </div>
    </div>
  );
}
