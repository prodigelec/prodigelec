'use client';

import { useRouter } from 'next/navigation';
import LoginForm from '@/app/crm/components/LoginForm';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

/**
 * Client-side container for the CRM Login Page.
 * Implements a professional split-screen layout inspired by modern SaaS platforms.
 */
export default function CRMLoginClient({ initialCode }) {
    const router = useRouter();

    const handleSuccess = (result) => {
        const finalCode = result.accessCode;
        if (finalCode) {
            router.push(`/p/${finalCode}/portal`);
            router.refresh();
        } else {
            console.error('No access code returned in login response');
            router.push('/portal');
        }
    };

    return (
        <div className="min-h-screen flex bg-white">
            {/* Left Side - Visual & Value Prop (Desktop Only) */}
            <div className="hidden lg:flex lg:w-1/2 relative bg-#0b1a2a flex-col justify-between p-12 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
                            <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.5" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </div>
                
                {/* Abstract Shapes */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>

                {/* Content */}
                <div className="relative z-10">
                    <div className="flex items-center gap-2 text-white/90 font-bold tracking-widest uppercase text-xs">
                        <ShieldCheck className="w-4 h-4 text-primary" />
                        <span>Espace Professionnel</span>
                    </div>
                </div>

                <div className="relative z-10 max-w-lg">
                    <h1 className="text-4xl font-bold text-white mb-6 leading-tight">
                        Gérez votre activité en toute <span className="text-primary">sérénité</span>.
                    </h1>
                    <ul className="space-y-4">
                        {[
                            "Suivi des interventions en temps réel",
                            "Gestion centralisée des clients",
                            "Accès sécurisé et crypté"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-gray-300">
                                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                <span className="text-sm font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="relative z-10 text-xs text-gray-500">
                    © {new Date().getFullYear()} PRODIGELEC. Tous droits réservés.
                </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 lg:p-24 bg-white">
                <div className="w-full max-w-md space-y-8">
                    <LoginForm
                        accessCode={initialCode}
                        onSuccess={handleSuccess}
                    />
                </div>
            </div>
        </div>
    );
}
