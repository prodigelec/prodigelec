'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import LoginForm from '../../crm/components/LoginForm';
import { generateAccessCode } from '@/utils/crm/accessCode';
import { ShieldAlert } from 'lucide-react';

export default function CRMLoginPage() {
    const [currentCode, setCurrentCode] = useState('');
    const router = useRouter();

    useEffect(() => {
        // Generate current code for the login process (required by backend session check)
        try {
            setCurrentCode(generateAccessCode());
        } catch (e) {
            console.error('Failed to generate code:', e);
        }
    }, []);

    const handleSuccess = () => {
        // After successful login, generate a fresh code and redirect to the dynamic portal
        const finalCode = generateAccessCode();
        router.push(`/p/${finalCode}/portal`);
        router.refresh();
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
                        accessCode={currentCode}
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
