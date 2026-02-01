import { redirect } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Building2 } from 'lucide-react';
import axios from 'axios';

async function validateCode(code) {
    try {
        const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
        const res = await axios.post(`${appUrl}/api/auth/validate-code`, { code });
        return res.data.valid;
    } catch (error) {
        console.error('Error validating code:', error.message);
        return false;
    }
}

async function getCompanyData(code) {
    try {
        const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
        // Pass the code as a query param so the API route can forward it as a header
        const res = await axios.get(`${appUrl}/api/company/get`, {
            params: { code }
        });
        return res.data;
    } catch (error) {
        console.error('Error fetching company:', error.message);
        return null;
    }
}

/**
 * Dynamic Portal Layout
 * Handles URL access code validation and navigation.
 */
export default async function DynamicPortalLayout({ children, params }) {
    const { code } = await params;

    // Access Code Validation
    const isValid = await validateCode(code);
    if (!isValid) {
        redirect('/auth/crm-login');
    }

    const companyData = await getCompanyData(code);
    const company = companyData?.company;

    const navItems = [
        { href: `/p/${code}/portal` },
        { href: `/p/${code}/customers` },
        { href: `/p/${code}/projects` },
        { href: `/p/${code}/settings` },
    ];

    return (
        <div className="flex h-screen bg-[#FDFBF7] font-sans">
            {/* Sidebar - Clean & Minimal */}
            <aside className="w-20 bg-white border-r border-slate-200 flex flex-col items-center py-6 z-30">
                {/* Brand Logo */}
                <div className="w-10 h-10 mb-12 relative flex items-center justify-center">
                    {company?.logoUrl ? (
                         <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-slate-100 shadow-sm">
                            <Image 
                                src={company.logoUrl} 
                                alt={company.companyName || 'Logo'} 
                                fill
                                sizes="40px"
                                className="object-cover"
                            />
                        </div>
                    ) : (
                        <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center text-white">
                             <Building2 size={20} />
                        </div>
                    )}
                </div>

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
                    <div className="flex items-center gap-3">
                         <h1 className="text-lg font-bold text-slate-800">
                            {company?.companyName || 'Mon Espace'}
                        </h1>
                        {company?.legalForm && (
                            <span className="text-xs font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-500 border border-slate-200">
                                {company.legalForm}
                            </span>
                        )}
                    </div>
                    
                    <div className="flex items-center gap-4">
                        <div className="text-sm text-right hidden sm:block">
                            <div className="font-medium text-slate-900">Admin</div>
                            <div className="text-xs text-slate-500">Connecté</div>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs border border-primary/20">
                            AD
                        </div>
                    </div>
                </header>

                <div className="flex-1 overflow-auto p-8">
                    {children}
                </div>
            </main>
        </div>
    );
}
