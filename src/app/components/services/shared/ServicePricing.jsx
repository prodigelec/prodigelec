"use client";
import { m } from "framer-motion";

// Sépare le préfixe ("À partir de") du montant ("1 200€ TTC"),
// en supportant l'espace insécable des milliers en français.
function parsePrice(price) {
  if (price === "Sur Devis") return { amount: price, prefix: "" };
  const match = price.match(/(\d[\d\s ]*€(?:\s*TTC?)?)\s*$/);
  if (!match) return { amount: price, prefix: "" };
  return {
    amount: match[1].trim(),
    prefix: price.slice(0, -match[0].length).trim(),
  };
}

export default function ServicePricing({ title, subtitle, description, prices, theme = "electricite" }) {
  const themeConfig = {
    electricite: {
      highlightColor: "text-accent",
      borderColor: "border-accent/40",
      shadowColor: "shadow-[0_0_40px_-15px_rgba(var(--color-accent-rgb),0.3)]",
      badgeBg: "bg-accent",
      badgeShadow: "shadow-[0_0_20px_rgba(var(--color-accent-rgb),0.6)]",
      decorBg: "bg-accent/10",
      decorBgHover: "group-hover:bg-accent/20",
      priceColor: "text-accent",
      priceShadow: "drop-shadow-[0_0_10px_rgba(var(--color-accent-rgb),0.3)]",
      checkColor: "text-accent",
      // Couleur du texte posé sur l'aplat coloré, badge et bouton : le bleu
      // nuit se lit mieux que le blanc sur le jaune comme sur l'or.
      badgeText: "text-background"
    },
    securite: {
      highlightColor: "text-primary",
      borderColor: "border-primary/40",
      shadowColor: "shadow-[0_0_40px_-15px_rgba(201,162,39,0.3)]",
      badgeBg: "bg-primary",
      badgeShadow: "shadow-[0_0_20px_rgba(201,162,39,0.6)]",
      decorBg: "bg-primary/10",
      decorBgHover: "group-hover:bg-primary/20",
      priceColor: "text-primary",
      priceShadow: "drop-shadow-[0_0_10px_rgba(201,162,39,0.3)]",
      checkColor: "text-primary",
      badgeText: "text-background"
    },
    // Palette d'une carte, pas d'une page : un plan peut la demander par sa clé
    // `variant`. Le dépannage s'en sert pour rester rouge sur les trois pages
    // services, là où il prenait la couleur du thème et changeait de teinte
    // d'une page à l'autre.
    urgence: {
      highlightColor: "text-red-300",
      borderColor: "border-red-500/25",
      shadowColor: "shadow-[0_0_40px_-18px_rgba(220,38,38,0.28)]",
      badgeBg: "bg-red-600",
      badgeShadow: "shadow-[0_0_16px_rgba(220,38,38,0.35)]",
      badgeText: "text-white",
      decorBg: "bg-red-600/8",
      decorBgHover: "group-hover:bg-red-600/15",
      priceColor: "text-red-300",
      priceShadow: "drop-shadow-[0_0_10px_rgba(220,38,38,0.25)]",
      checkColor: "text-red-300"
    },
    borne: {
      highlightColor: "text-emerald-400",
      borderColor: "border-emerald-500/40",
      shadowColor: "shadow-[0_0_40px_-15px_rgba(16,185,129,0.4)]",
      badgeBg: "bg-emerald-500",
      badgeShadow: "shadow-[0_0_20px_rgba(16,185,129,0.6)]",
      decorBg: "bg-emerald-500/10",
      decorBgHover: "group-hover:bg-emerald-500/20",
      priceColor: "text-emerald-400",
      priceShadow: "drop-shadow-[0_0_10px_rgba(16,185,129,0.4)]",
      checkColor: "text-emerald-400",
      badgeText: "text-background"
    }
  };

  const config = themeConfig[theme];

  return (
    <section className="mb-32 relative">
      <div className="text-center mb-16 px-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 uppercase italic tracking-tighter">
          {title} <span className={`${config.highlightColor} italic`}>{subtitle}</span>
        </h2>
        <p className="text-gray-100 text-sm md:text-lg max-w-2xl mx-auto">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12 px-6 max-w-5xl mx-auto">
        {prices.map((plan, idx) => {
          const c = themeConfig[plan.variant] ?? config;
          return (
          <m.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            whileHover={{ y: -10 }}
            className="relative group h-full"
          >
            {/* Urgence Badge */}
            {plan.tag && (
              <div className={`absolute -top-[18px] left-1/2 -translate-x-1/2 ${c.badgeBg} ${c.badgeText} font-black px-5 py-2 rounded-full text-xs uppercase tracking-widest ${c.badgeShadow} whitespace-nowrap z-50`}>
                {plan.tag}
              </div>
            )}

            <div className={`relative h-full overflow-hidden bg-white/[0.03] backdrop-blur-xl border ${plan.highlight ? `${c.borderColor} ${c.shadowColor}` : 'border-white/10'
              } rounded-[40px] p-8 transition-all duration-500 hover:border-white/20 flex flex-col z-10`}
            >
              {/* Background Decor */}
              <div className={`absolute -top-24 -right-24 w-48 h-48 ${c.decorBg} rounded-full blur-[80px] ${c.decorBgHover} transition-colors duration-700 pointer-events-none`} />

              <div className="relative z-20 flex flex-col h-full">
                <h3 className="text-lg lg:text-xl font-black text-white mb-2 uppercase tracking-tight min-h-[56px] flex items-center leading-tight">
                  {plan.title}
                </h3>

                {(() => {
                  const { amount, prefix } = parsePrice(plan.price);
                  return (
                    <div className="flex items-baseline gap-2 mb-6">
                      <span className={`text-2xl lg:text-3xl font-black ${c.priceColor} ${c.priceShadow}`}>
                        {amount}
                      </span>
                      {prefix && (
                        <span className="text-sm text-gray-100 font-medium ml-1">
                          {prefix}
                        </span>
                      )}
                    </div>
                  );
                })()}

                <p className="text-gray-100 text-sm md:text-base mb-8 pb-8 border-b border-white/10">
                  {plan.description}
                </p>

                <ul className="space-y-4 mb-8 grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-100">
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${c.badgeBg}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a href="/contact" className={`w-full py-4 rounded-xl font-bold text-center transition-all duration-300 ${plan.highlight ? `${c.badgeBg} ${c.badgeText} hover:brightness-110` : 'bg-white/5 text-white hover:bg-white/10'}`}>
                  {plan.cta ?? "Demander un devis"}
                </a>
              </div>
            </div>
          </m.div>
          );
        })}
      </div>
    </section>
  );
}
