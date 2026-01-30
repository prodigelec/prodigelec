import { notFound, redirect } from 'next/navigation';
import Link from 'next/link';
import {
    LayoutDashboard,
    Users,
    Settings,
    UserCircle,
    FolderOpen,
    ShieldCheck
} from 'lucide-react';
import LogoutButton from '@/app/crm/components/LogoutButton';
import { validateAccessCode } from '@/utils/crm/accessCode';

/**
 * Dynamic Portal Layout
 * Handles URL access code validation and navigation.
 */
export default async function DynamicPortalLayout({ children, params }) {
    const { code } = await params;

    // Access Code Validation
    if (!validateAccessCode(code)) {
        // If code is expired/invalid, we don't just redirect to login (the user might have a session)
        // but we hide the content. Redirecting to login is usually safer.
        redirect('/auth/crm-login');
    }

    const navItems = [
        { name: 'Vue d\'ensemble', href: `/p/${code}/portal`, icon: <LayoutDashboard size={20} /> },
        { name: 'Gestion Clients', href: `/p/${code}/customers`, icon: <Users size={20} /> },
        { name: 'Projets / Chantiers', href: `/p/${code}/projects`, icon: <FolderOpen size={20} /> },
        { name: 'Configuration', href: `/p/${code}/settings`, icon: <Settings size={20} /> },
    ];

    return (
        <div className="flex h-screen text-slate-900 font-sans">
            {/* Sidebar - Icon Only Mode */}
            <aside className="w-24 bg-white border-r border-slate-100 flex flex-col z-30 transition-all duration-500">
                <div className="p-6 flex flex-col items-center gap-8">
                    <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
                        <ShieldCheck size={28} />
                    </div>
                </div>

                <nav className="flex-1 px-3 py-6 space-y-4 flex flex-col items-center">
                    {navItems.map((item) => {
                        const isActive = false;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                title={item.name}
                                className={`w-14 h-14 flex items-center justify-center rounded-2xl transition-all duration-300 group ${isActive ? 'bg-emerald-50 text-emerald-600' : 'text-slate-300 hover:bg-slate-50 hover:text-slate-900'}`}
                            >
                                <span className={`${isActive ? 'text-emerald-500' : 'opacity-60 group-hover:opacity-100'}`}>
                                    {item.icon}
                                </span>
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-4 mt-auto flex flex-col items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center shadow-sm">
                        <UserCircle className="text-slate-300" size={32} />
                    </div>

                    <LogoutButton iconOnly={true} />
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-auto flex flex-col">
                <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-10 sticky top-0 z-20">
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Système En Ligne</span>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="flex flex-col items-end">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Dernier Back-up</span>
                            <span className="text-sm font-bold">Il y a 14 min</span>
                        </div>
                        <div className="w-px h-8 bg-slate-200"></div>
                        <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-slate-100 transition-colors">
                            <Settings size={18} />
                        </button>
                    </div>
                </header>

                <div className="p-10 max-w-7xl mx-auto w-full">
                    {children}
                </div>
            </main>
        </div>
    );
}
