'use client';

import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function LogoutButton() {
    const router = useRouter();

    const handleLogout = async () => {
        try {
            await fetch('/api/crm', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    endpoint: '/auth/logout',
                    method: 'POST'
                }),
            });

            // Refresh and redirect to public home
            router.push('/public');
            router.refresh();
        } catch (error) {
            console.error('Logout failed', error);
        }
    };

    return (
        <button
            onClick={handleLogout}
            className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-red-500 hover:border-red-100 transition-all duration-300 font-bold text-sm shadow-sm"
        >
            <LogOut size={18} />
            Déconnexion
        </button>
    );
}
