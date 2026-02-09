"use client";

import { useState, useEffect, useRef } from "react";
import { Download, ChevronDown, FileSpreadsheet, FileText } from "lucide-react";

export default function ExportDropdown({ onExportCSV, onExportPDF }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleExportCSV = () => {
    onExportCSV();
    setIsOpen(false);
  };

  const handleExportPDF = () => {
    onExportPDF();
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2.5 bg-white border border-slate-200 text-slate-600 rounded-xl font-medium hover:bg-slate-50 hover:text-slate-900 transition-colors flex items-center justify-center gap-2 shadow-sm"
        title="Exporter"
      >
        <Download size={20} />
        <span className="hidden xl:inline">Exporter</span>
        <ChevronDown
          size={16}
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-slate-200 rounded-xl shadow-lg z-50 overflow-hidden">
          <button
            onClick={handleExportCSV}
            className="w-full px-4 py-3 text-left text-sm text-slate-700 hover:bg-slate-50 flex items-center gap-3 transition-colors"
          >
            <FileSpreadsheet size={18} className="text-(--color-primary)" />
            Exporter en CSV
          </button>
          <button
            onClick={handleExportPDF}
            className="w-full px-4 py-3 text-left text-sm text-slate-700 hover:bg-slate-50 flex items-center gap-3 transition-colors border-t border-slate-100"
          >
            <FileText size={18} className="text-(--color-danger)" />
            Exporter en PDF
          </button>
        </div>
      )}
    </div>
  );
}
