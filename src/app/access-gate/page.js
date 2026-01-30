import '../(private)/private.css';
import { redirect, notFound } from 'next/navigation';
import { generateAccessCode } from '@/utils/crm/accessCode';

/**
 * Master Gatekeeper Redirector.
 * Automatically validates the master key and redirects to the dynamic CRM URL.
 */
export default async function AccessGatePage({ searchParams }) {
    const { key } = await searchParams;
    const masterKey = process.env.MASTER_GATEKEEPER_KEY;

    if (!key || key !== masterKey) {
        // Silently fail if key is missing or wrong to hide the gate
        return notFound();
    }

    let accessCode;
    try {
        accessCode = generateAccessCode();
    } catch (error) {
        console.error('Gatekeeper Error:', error);
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 p-8">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-red-100 text-red-500 font-bold">
                    Erreur de configuration du système de sécurité.
                </div>
            </div>
        );
    }

    redirect(`/crm/${accessCode}`);
}
