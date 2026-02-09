"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Eye, EyeOff, Lock } from "lucide-react";
import BrandName from "@/app/components/ui/BrandName";

/**
 * LoginForm - Professional Edition (Pennylane Style)
 * Clean, minimalist, and focused on usability.
 */
export default function LoginForm({ accessCode, onSuccess }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Console.log pour déboguer
    console.log("🚀 Tentative de connexion:", { username, password, accessCode });

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password, accessCode }),
      });

      console.log("📡 Réponse HTTP:", response.status, response.statusText);

      const result = await response.json();
      console.log("📋 Données reçues:", result);

      if (response.ok) {
        console.log("✅ Connexion réussie !");
        if (onSuccess) {
          onSuccess(result);
        } else {
          router.push("/portal");
          router.refresh();
        }
      } else {
        console.log("❌ Erreur de connexion:", result.error);
        setError(result.error || "Identifiants invalides.");
      }
    } catch (err) {
      console.log("💥 Erreur réseau:", err);
      setError("Erreur de connexion au serveur.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-10 text-center lg:text-left">
        <div className="inline-block mb-6 scale-90 origin-left">
          <BrandName />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
          Connexion à votre espace
        </h2>
        <p className="mt-2 text-sm text-gray-500">
          Saisissez vos identifiants pour accéder au portail CRM.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleLogin} className="space-y-6">
        {/* Username */}
        <div className="space-y-2">
          <label
            className="text-sm font-semibold text-gray-700 block"
            htmlFor="username"
          >
            Identifiant
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="block w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 sm:text-sm"
            placeholder="ex: admin"
            required
          />
        </div>

        {/* Password */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label
              className="text-sm font-semibold text-gray-700 block"
              htmlFor="password"
            >
              Mot de passe
            </label>
          </div>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 sm:text-sm pr-10"
              placeholder="••••••••"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          <div className="flex justify-end">
            <a
              href="#"
              className="text-xs font-medium text-primary hover:text-primary-dark transition-colors"
            >
              Mot de passe oublié ?
            </a>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="p-3 rounded-lg bg-red-50 border border-red-100 flex items-center gap-2 text-red-600 text-sm">
            <svg
              className="w-4 h-4 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {error}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-[#0b1a2a] bg-primary hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200"
        >
          {isLoading ? (
            <Loader2 className="animate-spin w-5 h-5" />
          ) : (
            "Se connecter"
          )}
        </button>
      </form>

      {/* Footer / Trust */}
      <div className="mt-8 pt-6 border-t border-gray-100">
        <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
          <Lock size={12} />
          <span>Connexion sécurisée SSL 256-bit</span>
        </div>
      </div>
    </div>
  );
}
