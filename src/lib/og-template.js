export function OgTemplate({ title, subtitle, label, accent = "#c9a227" }) {
  return (
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
      {/* Gradient overlay top */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "200px",
          background: `linear-gradient(180deg, ${accent}18 0%, transparent 100%)`,
          display: "flex",
        }}
      />

      {/* Left golden bar */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "6px",
          background: `linear-gradient(180deg, ${accent} 0%, #ffd60a 100%)`,
          display: "flex",
        }}
      />

      {/* Top row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: "52px",
          marginBottom: "auto",
        }}
      >
        <span
          style={{
            fontSize: "30px",
            fontWeight: 800,
            letterSpacing: "-0.5px",
            color: "white",
          }}
        >
          PRODIG
          <span style={{ color: "#ffd60a" }}>ELEC</span>
        </span>
        <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "18px" }}>
          prodigelec.fr
        </span>
      </div>

      {/* Label */}
      {label && (
        <div style={{ display: "flex", marginBottom: "14px" }}>
          <span
            style={{
              color: accent,
              fontSize: "15px",
              fontWeight: 700,
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            {label}
          </span>
        </div>
      )}

      {/* Title */}
      <div
        style={{
          color: "white",
          fontSize: title.length > 28 ? "58px" : "70px",
          fontWeight: 800,
          lineHeight: 1.1,
          letterSpacing: "-1.5px",
          marginBottom: "18px",
        }}
      >
        {title}
      </div>

      {/* Subtitle */}
      <div
        style={{
          color: "rgba(255,255,255,0.55)",
          fontSize: "23px",
          lineHeight: 1.45,
          maxWidth: "820px",
          marginBottom: "auto",
        }}
      >
        {subtitle}
      </div>

      {/* Bottom separator */}
      <div
        style={{
          display: "flex",
          height: "1px",
          backgroundColor: "rgba(255,255,255,0.08)",
          margin: "36px 0 28px",
        }}
      />

      {/* Bottom row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", gap: "10px" }}>
          {["Électricité", "Sécurité", "Automatismes"].map((s) => (
            <div
              key={s}
              style={{
                display: "flex",
                padding: "7px 16px",
                borderRadius: "100px",
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "rgba(255,255,255,0.6)",
                fontSize: "15px",
              }}
            >
              {s}
            </div>
          ))}
        </div>
        <span style={{ color: accent, fontSize: "19px", fontWeight: 700 }}>
          06 38 19 47 52
        </span>
      </div>
    </div>
  );
}
