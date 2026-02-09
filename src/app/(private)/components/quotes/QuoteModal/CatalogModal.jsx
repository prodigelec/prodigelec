"use client";

import { useState } from "react";
import {
  X,
  Search,
  Zap,
  Key,
  Package,
  Wrench,
  ChevronRight,
} from "lucide-react";

const CATALOG_ITEMS = [
  // --- Prestations Électricité ---
  {
    id: "elec_dep",
    label: "Dépannage Électricité",
    description: "Recherche de panne et réparation (1ère heure)",
    unity: "forfait",
    price: 90,
    type: "service",
    category: "electricite",
  },
  {
    id: "elec_prise",
    label: "Installation Prise",
    description: "Fourniture et pose prise 16A + terre encastrée",
    unity: "unité",
    price: 65,
    type: "service",
    category: "electricite",
  },
  {
    id: "elec_tab",
    label: "Remplacement Tableau",
    description: "Remplacement tableau électrique (jusqu'à 2 rangées)",
    unity: "forfait",
    price: 950,
    type: "service",
    category: "electricite",
  },
  {
    id: "elec_secu",
    label: "Mise en sécurité",
    description: "Mise en sécurité de l'installation électrique",
    unity: "forfait",
    price: 450,
    type: "service",
    category: "electricite",
  },
  {
    id: "elec_rad",
    label: "Pose Radiateur",
    description: "Installation et raccordement radiateur électrique",
    unity: "unité",
    price: 120,
    type: "service",
    category: "electricite",
  },

  // --- Prestations Serrurerie ---
  {
    id: "serr_ouv_c",
    label: "Ouverture de Porte (Claquée)",
    description: "Ouverture de porte claquée (sans destruction)",
    unity: "forfait",
    price: 110,
    type: "service",
    category: "serrurerie",
  },
  {
    id: "serr_ouv_v",
    label: "Ouverture de Porte (Verrouillée)",
    description: "Ouverture de porte verrouillée",
    unity: "forfait",
    price: 150,
    type: "service",
    category: "serrurerie",
  },
  {
    id: "serr_chg",
    label: "Changement Serrure",
    description: "Remplacement de cylindre ou serrure simple",
    unity: "forfait",
    price: 130,
    type: "service",
    category: "serrurerie",
  },
  {
    id: "serr_3pt",
    label: "Install. Serrure 3 points",
    description: "Fourniture et pose serrure 3 points en applique",
    unity: "forfait",
    price: 480,
    type: "service",
    category: "serrurerie",
  },
  {
    id: "serr_volet",
    label: "Réparation Volet Roulant",
    description: "Dépannage ou déblocage volet roulant",
    unity: "forfait",
    price: 140,
    type: "service",
    category: "serrurerie",
  },

  // --- Matériel Électrique ---
  {
    id: "mat_disj",
    label: "Disjoncteur 10A/16A/20A",
    description: "Disjoncteur magnéto-thermique Ph+N courbe C",
    unity: "unité",
    price: 18.5,
    type: "material",
    category: "materiel_elec",
  },
  {
    id: "mat_id",
    label: "Interrupteur Différentiel 63A",
    description: "Interrupteur différentiel 63A 30mA Type A",
    unity: "unité",
    price: 95.0,
    type: "material",
    category: "materiel_elec",
  },
  {
    id: "mat_prise",
    label: "Prise de courant",
    description: "Prise 2P+T Gamme Standard (ex: Legrand Mosaic)",
    unity: "unité",
    price: 12.0,
    type: "material",
    category: "materiel_elec",
  },
  {
    id: "mat_cable",
    label: "Câble 3G1.5 / 3G2.5",
    description: "Câble R2V (au mètre linéaire)",
    unity: "m",
    price: 2.5,
    type: "material",
    category: "materiel_elec",
  },

  // --- Matériel Serrurerie ---
  {
    id: "mat_cyl_std",
    label: "Cylindre Standard",
    description: "Cylindre européen 30x30 standard (3 clés)",
    unity: "unité",
    price: 45.0,
    type: "material",
    category: "materiel_serrurerie",
  },
  {
    id: "mat_cyl_secu",
    label: "Cylindre Sécurité",
    description: "Cylindre haute sécurité A2P* (carte de propriété)",
    unity: "unité",
    price: 180.0,
    type: "material",
    category: "materiel_serrurerie",
  },
  {
    id: "mat_serr_3pt",
    label: "Serrure 3 Points",
    description: "Serrure 3 points A2P* complète",
    unity: "unité",
    price: 350.0,
    type: "material",
    category: "materiel_serrurerie",
  },
  {
    id: "mat_poignee",
    label: "Poignée Blindée",
    description: "Ensemble poignée blindée palière",
    unity: "unité",
    price: 120.0,
    type: "material",
    category: "materiel_serrurerie",
  },
];

const CATEGORIES = [
  { id: "all", label: "Tout", icon: Package },
  { id: "electricite", label: "Électricité", icon: Zap },
  { id: "serrurerie", label: "Serrurerie", icon: Key },
  { id: "materiel_elec", label: "Matériel Élec.", icon: Zap },
  { id: "materiel_serrurerie", label: "Matériel Serr.", icon: Key },
];

export default function CatalogModal({ isOpen, onClose, onSelect }) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  if (!isOpen) return null;

  const filteredItems = CATALOG_ITEMS.filter((item) => {
    const matchesSearch =
      item.label.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      activeCategory === "all" || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-2xl h-[80vh] flex flex-col shadow-2xl animate-in zoom-in-95 duration-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
          <div>
            <h2 className="text-xl font-bold text-slate-800">Catalogue</h2>
            <p className="text-sm text-slate-500">
              Sélectionnez une prestation ou un produit
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-slate-600"
          >
            <X size={20} />
          </button>
        </div>

        {/* Search & Filter */}
        <div className="p-4 space-y-4 border-b border-slate-100 bg-white">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Rechercher (ex: Prise, Cylindre, Dépannage...)"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border-slate-200 rounded-xl focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary)]/10 outline-none transition-all"
              autoFocus
            />
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all border
                                    ${
                                      activeCategory === cat.id
                                        ? "bg-slate-800 text-white border-slate-800"
                                        : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                                    }`}
              >
                <cat.icon size={14} />
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* List */}
        <div className="flex-1 overflow-y-auto p-2">
          {filteredItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-slate-400 p-8 text-center">
              <Package size={48} className="mb-4 opacity-20" />
              <p>Aucun résultat trouvé pour &quot;{search}&quot;</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-2">
              {filteredItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onSelect(item)}
                  className="group flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all text-left w-full"
                >
                  <div
                    className={`mt-1 p-2 rounded-lg ${item.type === "service" ? "bg-amber-100 text-amber-600" : "bg-emerald-100 text-emerald-600"}`}
                  >
                    {item.type === "service" ? (
                      <Wrench size={18} />
                    ) : (
                      <Package size={18} />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-bold text-slate-700 truncate pr-2 group-hover:text-primary transition-colors">
                        {item.label}
                      </h3>
                      <span className="font-bold text-slate-900 whitespace-nowrap bg-white px-2 py-1 rounded-md shadow-sm border border-slate-100 text-xs">
                        {item.price.toLocaleString("fr-FR")} €
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 line-clamp-2">
                      {item.description}
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 text-slate-600 uppercase tracking-wide">
                        {item.unity}
                      </span>
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium uppercase tracking-wide ${item.type === "service" ? "bg-amber-50 text-amber-600" : "bg-emerald-50 text-emerald-600"}`}
                      >
                        {item.type === "service" ? "Prestation" : "Matériel"}
                      </span>
                    </div>
                  </div>
                  <ChevronRight
                    className="self-center text-slate-300 group-hover:text-[var(--color-primary)] transition-colors"
                    size={18}
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
