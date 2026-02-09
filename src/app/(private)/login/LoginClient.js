"use client";

import { useRouter } from "next/navigation";
import LoginForm from "../components/auth/LoginForm";
import { ShieldCheck, CheckCircle2 } from "lucide-react";

/**
 * Page de login minimaliste sans navbar
 */
export default function LoginClient({ initialCode }) {
  const router = useRouter();

  const handleSuccess = (result) => {
    const finalCode = result.accessCode;
    if (finalCode) {
      router.push(`/p/${finalCode}/portal`);
      router.refresh();
    } else {
      console.error("No access code returned in login response");
      router.push("/portal");
    }
  };

  return (
    <div className="min-h-screen flex bg-background-dark">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-background-dark flex-col justify-center items-center p-12">
        <div className="max-w-md text-center">
          <div className="flex items-center justify-center gap-2 mb-8">
            <ShieldCheck className="w-8 h-8 text-primary" />
            <span className="text-primary font-bold text-xl">PRODIGELEC</span>
          </div>
          
          <h1 className="text-4xl font-bold text-white mb-6">
            Espace Professionnel
          </h1>
          
          <div className="space-y-4 text-white/80">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
              <span>Suivi des interventions en temps réel</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
              <span>Gestion centralisée des clients</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
              <span>Accès sécurisé et crypté</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 bg-white">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Connexion
            </h2>
            <p className="text-gray-600">
              Accédez à votre espace professionnel
            </p>
          </div>
          
          <LoginForm accessCode={initialCode} onSuccess={handleSuccess} />
        </div>
      </div>
    </div>
  );
}