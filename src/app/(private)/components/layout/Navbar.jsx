"use client";

import { Menu, Bell, Search, User } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar({ onMenuClick, company }) {
  const pathname = usePathname();

  const getPageTitle = () => {
    if (pathname?.includes("/portal")) return "Tableau de bord";
    if (pathname?.includes("/customers")) return "Gestion Clients";
    if (pathname?.includes("/quotes")) return "Devis & Facturation";
    if (pathname?.includes("/projects")) return "Suivi de Chantiers";
    if (pathname?.includes("/settings")) return "Paramètres";
    return "Espace Pro";
  };

  return (
    <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-200/60 sticky top-0 z-30 px-4 md:px-8 flex items-center justify-between transition-all">
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="p-2 -ml-2 hover:bg-slate-100 rounded-xl lg:hidden text-slate-600 transition-colors"
        >
          <Menu size={24} />
        </button>

        <div className="flex flex-col">
          <h1 className="text-xl font-bold text-slate-800 tracking-tight">
            {getPageTitle()}
          </h1>
          <span className="text-xs text-slate-500 font-medium hidden md:block">
            {company?.companyName} •{" "}
            {new Date().toLocaleDateString("fr-FR", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3 md:gap-6">
        {/* Search Bar (Desktop) */}
        <div className="hidden md:flex items-center bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 w-64 focus-within:ring-2 focus-within:ring-[#c9a227]/20 focus-within:border-[#c9a227] transition-all">
          <Search size={18} className="text-slate-400" />
          <input
            type="text"
            placeholder="Rechercher..."
            className="bg-transparent border-none outline-none text-sm ml-3 w-full text-slate-600 placeholder:text-slate-400"
          />
        </div>

        <div className="h-8 w-[1px] bg-slate-200 hidden md:block"></div>

        <button className="relative p-2 text-slate-400 hover:text-[#c9a227] hover:bg-[#c9a227]/5 rounded-xl transition-all">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
      </div>
    </header>
  );
}
