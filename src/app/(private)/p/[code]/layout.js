import { redirect } from 'next/navigation';
import Link from 'next/link';
import { validateAccessCode } from '@/utils/crm/accessCode';

/**
 * Dynamic Portal Layout
 * Handles URL access code validation and navigation.
 */
export default async function DynamicPortalLayout({ children, params }) {
    const { code } = await params;

    // Access Code Validation
    if (!validateAccessCode(code)) {
        redirect('/auth/crm-login');
    }

    const navItems = [
        { href: `/p/${code}/portal` },
        { href: `/p/${code}/customers` },
        { href: `/p/${code}/projects` },
        { href: `/p/${code}/settings` },
    ];

    return (
        <div className="flex h-screen bg-[#f8f9fa] font-sans">
            {/* Sidebar - Clean & Minimal */}
            <aside className="w-20 bg-white border-r border-slate-200 flex flex-col items-center py-6 z-30">
                {/* Brand Placeholder */}
                <div className="w-10 h-10 bg-slate-900 rounded-lg mb-12"></div>

                <nav className="flex-1 w-full flex flex-col items-center gap-4">
                    {navItems.map((item, i) => (
                        <Link
                            key={i}
                            href={item.href}
                            className="w-10 h-10 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors"
                        />
                    ))}
                </nav>

                {/* Bottom Actions */}
                <div className="mt-auto flex flex-col gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-100"></div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col overflow-hidden">
                {/* Header - Empty & Clean */}
                <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8">
                    <div className="w-32 h-4 bg-slate-100 rounded"></div>
                    <div className="flex items-center gap-4">
                        <div className="w-24 h-4 bg-slate-100 rounded"></div>
                        <div className="w-8 h-8 rounded-full bg-slate-100"></div>
                    </div>
                </header>

                <div className="flex-1 overflow-auto p-8">
                    {children}
                </div>
            </main>
        </div>
    );
}
