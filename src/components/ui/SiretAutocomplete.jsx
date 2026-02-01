'use client';

import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Building2, Loader2, MapPin } from 'lucide-react';

export default function SiretAutocomplete({ value, onChange, onSelect, placeholder, className, name }) {
    const [suggestions, setSuggestions] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const wrapperRef = useRef(null);

    // Debounce timer ref
    const timeoutRef = useRef(null);

    // Click outside to close
    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [wrapperRef]);

    const handleInput = (e) => {
        const val = e.target.value;
        // Propagate change to parent immediately
        onChange(e);

        // Debounce API call
        if (timeoutRef.current) clearTimeout(timeoutRef.current);

        if (val.length > 2) {
            setLoading(true);
            timeoutRef.current = setTimeout(async () => {
                try {
                    const res = await axios.get('/api/companies/search', {
                        params: { q: val }
                    });
                    setSuggestions(res.data.results || []);
                    setIsOpen(true);
                } catch (error) {
                    console.error("Company Search API error", error);
                } finally {
                    setLoading(false);
                }
            }, 300);
        } else {
            setSuggestions([]);
            setIsOpen(false);
            setLoading(false);
        }
    };

    const calculateTVA = (siren) => {
        if (!siren || siren.length !== 9) return '';
        const sirenNum = parseInt(siren, 10);
        const key = (12 + 3 * (sirenNum % 97)) % 97;
        return `FR${key.toString().padStart(2, '0')}${siren}`;
    };

    const handleSelect = (company) => {
        // company structure from API
        const companyName = company.nom_complet;
        const siren = company.siren;
        const siret = company.siege.siret; // Use siege siret by default
        const address = company.siege.adresse;
        const city = company.siege.libelle_commune;
        const zip_code = company.siege.code_postal;
        const tva = calculateTVA(siren);

        if (onSelect) {
            onSelect({
                company_name: companyName,
                siret: siret,
                vat_number: tva,
                address: address,
                city: city,
                zip_code: zip_code
            });
        }
        setIsOpen(false);
        // We don't clear suggestions here immediately if we want to show selected? 
        // No, usually we close the dropdown.
    };

    return (
        <div className="relative" ref={wrapperRef}>
            <div className="relative">
                <input
                    type="text"
                    name={name}
                    value={value}
                    onChange={handleInput}
                    placeholder={placeholder}
                    className={className}
                    autoComplete="off"
                />
                {loading && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                        <Loader2 className="animate-spin text-slate-400" size={16} />
                    </div>
                )}
            </div>
            
            {isOpen && suggestions.length > 0 && (
                <div className="absolute z-50 w-full mt-1 bg-white border border-slate-200 rounded-lg shadow-lg max-h-60 overflow-auto border-t-0">
                    {suggestions.map((company) => (
                        <button
                            key={company.siret || company.siren}
                            type="button"
                            onClick={() => handleSelect(company)}
                            className="w-full text-left px-4 py-2 hover:bg-slate-50 text-sm flex items-start gap-2 border-b border-slate-50 last:border-0"
                        >
                            <Building2 size={16} className="mt-0.5 text-slate-400 shrink-0" />
                            <div>
                                <div className="font-medium text-slate-900">
                                    {company.nom_complet}
                                    {company.nom_commercial && company.nom_commercial !== company.nom_complet && (
                                        <span className="text-slate-500 font-normal ml-2">({company.nom_commercial})</span>
                                    )}
                                </div>
                                <div className="text-xs text-slate-500 flex items-center gap-1 flex-wrap">
                                    <span>SIRET: {company.siege.siret}</span>
                                    {company.siege.libelle_commune && (
                                        <>
                                            <span>•</span>
                                            <span className="flex items-center gap-0.5">
                                                <MapPin size={10} /> {company.siege.code_postal} {company.siege.libelle_commune}
                                            </span>
                                        </>
                                    )}
                                </div>
                            </div>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
