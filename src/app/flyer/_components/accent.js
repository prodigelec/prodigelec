// Map des classes Tailwind par accent.
// Tailwind v4 détecte les classes statiquement — pas de templating possible.
// Ajouter un accent = dupliquer un bloc et remplacer le nom de couleur.

export const ACCENTS = {
  emerald: {
    // panel (FlyerShell)
    panelTitle: "text-emerald-500",
    sectionTitle: "text-xs font-bold uppercase tracking-wider text-emerald-500 font-sora",
    formatButtonActive: "bg-emerald-500 text-slate-950 border-emerald-500 font-black",
    inputFocus: "focus:border-emerald-500",
    printButton: "bg-emerald-500 hover:bg-emerald-600 text-slate-950 shadow-emerald-500/10",
    showPanelButton: "text-emerald-500 hover:text-emerald-400 hover:bg-slate-900",

    // print body
    text300: "text-emerald-300",
    text400: "text-emerald-400",
    text500: "text-emerald-500",
    text600: "text-emerald-600",
    text700: "text-emerald-700",
    bg500_10: "bg-emerald-500/10",
    bg500_15: "bg-emerald-500/15",
    border500_20: "border-emerald-500/20",
    border500_30: "border-emerald-500/30",
    border500_40: "border-emerald-500/40",
    border500_60: "border-emerald-500/60",
    border500_50: "border-emerald-500/50",
    borderColor400: "border-emerald-400",
    shadow500_15: "shadow-emerald-500/15",
    shadow500_25: "shadow-emerald-500/25",
    shadow500_30: "shadow-emerald-500/30",
    shadow500_40: "shadow-emerald-500/40",
    via500_30: "via-emerald-500/30",
    via500_70: "via-emerald-500/70",
    from500_20: "from-emerald-500/20",
    to500_10: "to-emerald-500/10",
    gradFromTo: "from-emerald-500 to-emerald-600",
    gradFromYellow: "from-emerald-500 to-[#ffd60a]",
    gradFooter: "from-emerald-600 via-[#ffd60a] to-emerald-600",
    footerSep: "text-emerald-800",
    via400: "via-emerald-400",
    border600: "border-emerald-600",
  },

  amber: {
    panelTitle: "text-amber-500",
    sectionTitle: "text-xs font-bold uppercase tracking-wider text-amber-500 font-sora",
    formatButtonActive: "bg-amber-500 text-slate-950 border-amber-500 font-black",
    inputFocus: "focus:border-amber-500",
    printButton: "bg-amber-500 hover:bg-amber-600 text-slate-950 shadow-amber-500/10",
    showPanelButton: "text-amber-500 hover:text-amber-400 hover:bg-slate-900",

    text300: "text-amber-300",
    text400: "text-amber-400",
    text500: "text-amber-500",
    text600: "text-amber-600",
    text700: "text-amber-700",
    bg500_10: "bg-amber-500/10",
    bg500_15: "bg-amber-500/15",
    border500_20: "border-amber-500/20",
    border500_30: "border-amber-500/30",
    border500_40: "border-amber-500/40",
    border500_60: "border-amber-500/60",
    border500_50: "border-amber-500/50",
    borderColor400: "border-amber-400",
    shadow500_15: "shadow-amber-500/15",
    shadow500_25: "shadow-amber-500/25",
    shadow500_30: "shadow-amber-500/30",
    shadow500_40: "shadow-amber-500/40",
    via500_30: "via-amber-500/30",
    via500_70: "via-amber-500/70",
    from500_20: "from-amber-500/20",
    to500_10: "to-amber-500/10",
    gradFromTo: "from-amber-500 to-amber-600",
    gradFromYellow: "from-amber-500 to-[#ffd60a]",
    gradFooter: "from-amber-600 via-[#ffd60a] to-amber-600",
    footerSep: "text-amber-800",
    via400: "via-amber-400",
    border600: "border-amber-600",
  },
};

export function getAccent(name) {
  return ACCENTS[name] || ACCENTS.emerald;
}
