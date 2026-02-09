"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";

/**
 * Custom Select Component
 * @param {Object} props
 * @param {string} props.value - Current selected value
 * @param {function} props.onChange - Callback function(value)
 * @param {Array} props.options - Array of { value, label } or { label: 'Group', options: [{ value, label }] }
 * @param {string} props.placeholder - Placeholder text
 * @param {string} props.className - Additional classes
 * @param {LucideIcon} props.icon - Optional icon component
 */
export default function CustomSelect({
  value,
  onChange,
  options = [],
  placeholder = "Sélectionner...",
  className = "",
  icon: Icon,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Find label for current value
  const findLabel = () => {
    if (!value) return placeholder;

    for (const opt of options) {
      if (opt.options) {
        // Group
        const found = opt.options.find((o) => o.value === value);
        if (found) return found.label;
      } else {
        if (opt.value === value) return opt.label;
      }
    }
    return value; // Fallback to value if label not found
  };

  return (
    <div className={`relative ${className}`} ref={containerRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full text-left pl-4 pr-10 py-2.5 bg-white border rounded-xl outline-none transition-all shadow-sm flex items-center gap-2 ${
          isOpen
            ? "border-primary ring-2 ring-primary/30"
            : "border-slate-200 hover:border-primary"
        }`}
      >
        {Icon && <Icon size={18} className="text-slate-400" />}
        <span
          className={`block truncate ${!value ? "text-slate-400" : "text-slate-700 font-medium"}`}
        >
          {findLabel()}
        </span>
        <div
          className={`absolute right-3 top-1/2 -translate-y-1/2 text-primary transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        >
          <ChevronDown size={16} />
        </div>
      </button>

      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-slate-200 rounded-xl shadow-lg max-h-60 overflow-auto focus:outline-none py-1 animate-in fade-in zoom-in-95 duration-100">
          {options.map((opt, idx) =>
            opt.options ? (
              <div key={idx}>
                <div className="px-3 py-2 text-xs font-bold text-primary uppercase tracking-wider bg-(--color-primary-soft)">
                  {opt.label}
                </div>
                {opt.options.map((subOpt) => (
                  <div
                    key={subOpt.value}
                    onClick={() => {
                      onChange(subOpt.value);
                      setIsOpen(false);
                    }}
                    className={`cursor-pointer select-none relative py-2.5 pl-4 pr-9 transition-colors 
                                            ${
                                              value === subOpt.value
                                                ? "bg-(--color-info-soft) text-primary font-medium"
                                                : "text-slate-700 hover:bg-(--color-info-soft)"
                                            }`}
                  >
                    <span className="block truncate">{subOpt.label}</span>
                    {value === subOpt.value && (
                      <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-primary">
                        <Check size={16} />
                      </span>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div
                key={opt.value}
                onClick={() => {
                  onChange(opt.value);
                  setIsOpen(false);
                }}
                className={`cursor-pointer select-none relative py-2.5 pl-4 pr-9 transition-colors ${
                  value === opt.value
                    ? "bg-(--color-primary-soft) text-primary font-medium"
                    : "text-slate-700 hover:bg-(--color-info-soft)"
                }`}
              >
                <span className="block truncate">{opt.label}</span>
                {value === opt.value && (
                  <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-primary">
                    <Check size={16} />
                  </span>
                )}
              </div>
            ),
          )}
          {options.length === 0 && (
            <div className="px-4 py-2 text-sm text-slate-500 text-center">
              Aucune option
            </div>
          )}
        </div>
      )}
    </div>
  );
}
