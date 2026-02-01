'use client';

import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { MapPin, Loader2 } from 'lucide-react';

export default function AddressAutocomplete({ value, onChange, onSelect, placeholder, className, name }) {
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
        // Propagate change to parent immediately so input updates
        onChange(e);

        // Debounce API call
        if (timeoutRef.current) clearTimeout(timeoutRef.current);

        if (val.length > 2) {
            setLoading(true);
            timeoutRef.current = setTimeout(async () => {
                try {
                    // Call our own Next.js API proxy instead of external URL directly
                    const res = await axios.get('/api/address/autocomplete', {
                        params: { q: val }
                    });
                    setSuggestions(res.data.features);
                    setIsOpen(true);
                } catch (error) {
                    console.error("Address API error", error);
                } finally {
                    setLoading(false);
                }
            }, 300); // 300ms delay
        } else {
            setSuggestions([]);
            setIsOpen(false);
            setLoading(false);
        }
    };

    const handleSelect = (feature) => {
        // feature.properties: { label, name, postcode, city, ... }
        const address = feature.properties.name;
        const city = feature.properties.city;
        const zip_code = feature.properties.postcode;
        
        // Call parent select with structured data
        if (onSelect) {
            onSelect({ address, city, zip_code });
        }
        setIsOpen(false);
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
                    {suggestions.map((feature) => (
                        <button
                            key={feature.properties.id || Math.random()}
                            type="button"
                            onClick={() => handleSelect(feature)}
                            className="w-full text-left px-4 py-2 hover:bg-slate-50 text-sm flex items-start gap-2 border-b border-slate-50 last:border-0"
                        >
                            <MapPin size={16} className="mt-0.5 text-slate-400 shrink-0" />
                            <div>
                                <div className="font-medium text-slate-700">{feature.properties.name}</div>
                                <div className="text-xs text-slate-500">{feature.properties.postcode} {feature.properties.city}</div>
                            </div>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
