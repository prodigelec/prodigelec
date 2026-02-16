"use client";
import { m } from "framer-motion";

export default function ServiceUrgency({ title, subtitle, description, steps, icon: Icon, theme = "electricite" }) {
  const themeConfig = {
    electricite: {
      gradient: "from-accent/20 to-accent-glow/20",
      border: "border-accent/20",
      blur: "bg-accent/20",
      iconBg: "bg-accent/20",
      iconColor: "text-accent",
      highlightColor: "text-accent",
      buttonBg: "bg-accent",
      buttonHover: "hover:bg-accent-glow",
      buttonShadow: "shadow-[0_10px_20px_-5px_rgba(var(--color-accent-rgb),0.4)]",
      pingColor: "bg-accent",
      pingShadow: "shadow-[0_0_10px_rgba(var(--color-accent-rgb),0.8)]",
      stepColor: "text-accent/50"
    },
    serrurerie: {
      gradient: "from-primary/20 to-primary-light/20",
      border: "border-primary/20",
      blur: "bg-primary/20",
      iconBg: "bg-primary/20",
      iconColor: "text-primary",
      highlightColor: "text-primary",
      buttonBg: "bg-primary",
      buttonHover: "hover:bg-primary-light",
      buttonShadow: "shadow-[0_10px_20px_-5px_rgba(201,162,39,0.4)]",
      pingColor: "bg-primary",
      pingShadow: "shadow-[0_0_10px_rgba(201,162,39,0.8)]",
      stepColor: "text-primary/50"
    }
  };

  const config = themeConfig[theme];

  return (
    <m.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="mb-24"
    >
      <div className={`bg-linear-to-r ${config.gradient} border ${config.border} rounded-3xl p-8 md:p-12 relative overflow-hidden`}>
        <div className={`absolute top-0 right-0 w-64 h-64 ${config.blur} rounded-full blur-[100px] -mr-32 -mt-32`} />

        <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${config.iconBg} ${config.iconColor} font-bold mb-6 text-sm uppercase tracking-wider`}>
              <Icon className="w-4 h-4" />
              Intervention Rapide
            </div>
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-6">
              {title}
            </h3>
            <div className="text-base md:text-xl text-gray-100 mb-4">
              {description}
            </div>
            <div className="flex flex-wrap gap-3 mb-10">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-2 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
                <span className="text-white font-bold text-sm whitespace-nowrap">Lun - Ven : 9h - 18h</span>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-2 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500/50" />
                <span className="text-gray-100 font-medium text-sm whitespace-nowrap">Samedi : Sur RDV</span>
              </div>
              <div className={`${config.iconBg} backdrop-blur-md border ${config.border} rounded-xl px-4 py-2 flex items-center gap-2`}>
                <div className={`w-2 h-2 rounded-full ${config.pingColor} animate-ping ${config.pingShadow}`} />
                <span className={`${config.highlightColor} font-black text-sm whitespace-nowrap uppercase tracking-tight`}>Urgence : 19h+</span>
              </div>
            </div>
            <br />
            <a href="tel:0638194752" className={`inline-flex items-center gap-2 px-10 py-5 ${config.buttonBg} text-background rounded-full font-black ${config.buttonHover} transition-all hover:scale-105 ${config.buttonShadow}`}>
             <span className="flex flex-col items-center leading-none">
                <span className="text-sm uppercase opacity-80">Appeler le</span>
                <span className="text-xl md:text-2xl">06 38 19 47 52</span>
             </span>
            </a>
          </div>

          <div className="space-y-4">
            {steps.map((item, i) => (
              <div key={i} className="bg-[#020617]/50 border border-white/10 p-4 rounded-xl flex items-center gap-4">
                <span className={`text-3xl font-black ${config.stepColor}`}>{item.step}</span>
                <div>
                  <div className="font-bold text-white">{item.title}</div>
                  <div className="text-sm text-gray-100">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </m.div>
  );
}
