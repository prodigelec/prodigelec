"use client";

import { MapPin } from "lucide-react";

export default function Step2Coordinates({
  formData,
  handleChange,
  handleNext,
  handleBack,
}) {
  return (
    <form
      id="step2-form"
      onSubmit={handleNext}
      className="space-y-6 animate-in slide-in-from-right-4 duration-500"
    >
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
          <MapPin className="text-primary" size={20} />
          Coordonnées
        </h3>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">
            Adresse du siège
          </label>
          <input
            required
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="12 rue de la République"
            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
          />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-1 space-y-2">
            <label className="text-sm font-medium text-slate-700">
              Code Postal
            </label>
            <input
              required
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              placeholder="75001"
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
            />
          </div>
          <div className="col-span-2 space-y-2">
            <label className="text-sm font-medium text-slate-700">Ville</label>
            <input
              required
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Paris"
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between pt-6">
        <button
          type="button"
          onClick={handleBack}
          className="px-6 py-2.5 border border-slate-200 rounded-lg text-slate-600 font-medium hover:bg-slate-50 transition-colors"
        >
          Retour
        </button>
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
