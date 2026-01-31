import CRMLoginClient from './CRMLoginClient';

/**
 * Server-side entry for CRM Login.
 * Safely fetches the initial access code from the secure backend.
 */
export default async function CRMLoginPage() {
    let initialCode = '';
    try {
        const res = await fetch(`${process.env.BACKEND_URL || 'http://localhost:5000'}/api/auth/access-code`, {
            cache: 'no-store'
        });
        if (res.ok) {
            const data = await res.json();
            initialCode = data.code;
        }
    } catch (e) {
        console.error('Server-side code generation failed:', e);
    }

    return <CRMLoginClient initialCode={initialCode} />;
}
