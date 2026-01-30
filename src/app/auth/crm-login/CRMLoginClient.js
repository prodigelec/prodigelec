'use client';

import { useRouter } from 'next/navigation';
import LoginForm from '../../crm/components/LoginForm';
import { ShieldAlert } from 'lucide-react';

/**
 * Client-side container for the CRM Login Page.
 * Handles the redirection logic after a successful login using the code 
 * provided by the backend response.
 */
export default function CRMLoginClient({ initialCode }) {
    const router = useRouter();

    const handleSuccess = (result) => {
        // Use the code provided by the backend success response
        const finalCode = result.accessCode;
        if (finalCode) {
            router.push(`/p/${finalCode}/portal`);
            router.refresh();
        } else {
            console.error('No access code returned in login response');
            // Fallback to portal if something went wrong but login was successful
            router.push('/portal');
        }
    };

    return (
        <div className="theme-private min-h-screen">
            <div className="bg-[#fafafa] flex flex-col items-center justify-center p-6 relative overflow-hidden min-h-screen">
                {/* Background decoration */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/5 rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-slate-500/5 rounded-full blur-[120px]"></div>
                </div>

                <div className="w-full relative z-10">
                    <LoginForm
                        accessCode={initialCode}
                        onSuccess={handleSuccess}
                    />
                </div>

                <div className="mt-12 group flex items-center gap-2 text-gray-300 pointer-events-none">
                    <ShieldAlert size={14} />
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Système d'Accès Authentifié</span>
                </div>
            </div>
        </div>
    );
}
