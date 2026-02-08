'use client';

import { Building2, Image as ImageIcon } from 'lucide-react';

export default function Step1Identity({
    formData,
    handleChange,
    handleSiretBlur,
    isCheckingSiret,
    siretError,
    logoPreview,
    handleLogoChange,
    handleNext
}) {
    return (
        <form id="step1-form" onSubmit={handleNext} className="space-y-6 animate-in slide-in-from-right-4 duration-500">
            <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
                    <Building2 className="text-primary" size={20} />
                    Identité de l'entreprise
                </h3>

                {/* Logo Upload */}
                <div className="flex items-center gap-6 p-4 bg-slate-50 border border-slate-200 rounded-lg">
                    <div className="relative h-20 w-20 rounded-full bg-white border-2 border-dashed border-slate-300 flex items-center justify-center overflow-hidden group hover:border-primary transition-colors">
                        {logoPreview ? (
                            <img src={logoPreview} alt="Logo" className="h-full w-full object-cover" />
                        ) : (
                            <ImageIcon className="text-slate-400 group-hover:text-primary transition-colors" size={24} />
                        )}
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleLogoChange}
                            className="absolute inset-0 opacity-0 cursor-pointer"
                        />
                    </div>
                    <div className="flex-1">
                        <h4 className="text-sm font-medium text-slate-900">Logo de l'entreprise</h4>
                        <p className="text-xs text-slate-500 mt-1">Format PNG, JPG ou SVG. Max 2MB.</p>
                        <button
                            type="button"
                            onClick={() => document.querySelector('input[type=file]').click()}
                            className="mt-2 text-xs font-semibold text-primary hover:text-primary-dark"
                        >
                            Importer un fichier
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Nom de la société</label>
                        <input
                            required
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            placeholder="ex: Elec Renov 75"
                            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Forme Juridique</label>
                        <select
                            name="legalForm"
                            value={formData.legalForm}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                        >
                            <option value="SAS">SAS</option>
                            <option value="SARL">SARL</option>
                            <option value="EI">Entreprise Individuelle</option>
                            <option value="EURL">EURL</option>
                            <option value="SASU">SASU</option>
                            <option value="SA">SA</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Numéro SIRET</label>
                        <input
                            required
                            name="siret"
                            value={formData.siret}
                            onChange={handleChange}
                            onBlur={handleSiretBlur}
                            placeholder="14 chiffres"
                            className={`w-full px-4 py-2.5 bg-slate-50 border rounded-lg focus:ring-2 outline-none transition-all ${siretError ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:ring-primary/20 focus:border-primary'
                                }`}
                        />
                        {isCheckingSiret && <p className="text-xs text-blue-500">Vérification...</p>}
                        {siretError && <p className="text-xs text-red-500">{siretError}</p>}
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Numéro TVA (Optionnel)</label>
                        <input
                            name="vatNumber"
                            value={formData.vatNumber}
                            onChange={handleChange}
                            placeholder="FR..."
                            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                        />
                    </div>
                </div>
            </div>

            <div className="flex justify-end pt-6">
                <button
                    type="submit"
                    className="px-8 py-2.5 bg-primary text-white rounded-lg font-bold hover:bg-primary-dark transition-colors"
                >
                    Suivant
                </button>
            </div>
        </form>
    );
}
