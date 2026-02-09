"use client";

import { Mail, CheckCircle2, Loader2 } from "lucide-react";

export default function Step3Contact({
  formData,
  handleChange,
  handleSubmit,
  handleBack,
  isLoading,
}) {
  return (
    <form
      id="step3-form"
      onSubmit={handleSubmit}
      className="space-y-6 animate-in slide-in-from-right-4 duration-500"
    >
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
          <Mail className="text-primary" size={20} />
          Contact Public
        </h3>
        <p className="text-sm text-slate-500 bg-blue-50 p-3 rounded-lg border border-blue-100">
          Ces informations apparaîtront sur vos devis et factures.
        </p>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">
            Email de contact
          </label>
          <input
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="contact@votre-entreprise.com"
            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">
            Téléphone
          </label>
          <input
            required
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="01 23 45 67 89"
            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
          />
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
          disabled={isLoading}
          className="px-8 py-2.5 bg-primary text-white rounded-lg font-bold hover:bg-primary-dark transition-colors flex items-center gap-2 disabled:opacity-70"
        >
          {isLoading ? (
            <>
              <Loader2 className="animate-spin" size={18} />
              Enregistrement...
            </>
          ) : (
            <>
              Terminer
              <CheckCircle2 size={18} />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
