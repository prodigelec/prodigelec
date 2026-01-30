import '../../(private)/private.css';
import { validateAccessCode } from '@/utils/crm/accessCode';
import LoginForm from '../components/LoginForm';
import { notFound } from 'next/navigation';
import { ShieldAlert } from 'lucide-react';

export const metadata = {
    title: 'Accès Sécurisé - PRODIGELEC CRM',
    robots: 'noindex, nofollow',
};

export default async function CRMEntryPage({ params }) {
    const { code } = await params;

    const isValid = validateAccessCode(code);

    if (!isValid) {
        // If code is invalid, we return notFound() to hide the existence of the CRM endpoint
        return notFound();
    }

    return (
        <div className="min-h-screen bg-[#fafafa] flex flex-col items-center justify-center p-6 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/5 rounded-full blur-[120px]"></div>
                <div className="absolute top-[20%] right-[10%] w-[20%] h-[20%] bg-blue-500/5 rounded-full blur-[100px]"></div>
            </div>

            <div className="w-full relative z-10">
                <LoginForm accessCode={code} />
            </div>

            <div className="mt-12 group flex items-center gap-2 text-gray-300 pointer-events-none">
                <ShieldAlert size={14} />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Système de Protection Active</span>
            </div>
        </div>
    );
}
