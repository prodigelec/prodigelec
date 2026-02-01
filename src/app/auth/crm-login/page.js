import CRMLoginClient from './CRMLoginClient';

/**
 * Server-side entry for CRM Login.
 * Safely fetches the initial access code from the internal Next.js API.
 */
export default async function CRMLoginPage() {
    let initialCode = '';
    
    // Use the internal Next.js API URL (default to localhost:3000)
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

    try {
        // Call the Next.js API route which acts as a proxy to the backend
        // Using fetch for better Server Component compatibility
        const response = await fetch(`${appUrl}/api/auth/access-code`, {
            cache: 'no-store',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            const data = await response.json();
            initialCode = data.code;
        } else {
            console.error(`Server-side code generation failed with status: ${response.status}`);
        }
    } catch (e) {
        console.error('Server-side code generation failed:', e.message);
    }

    return <CRMLoginClient initialCode={initialCode} />;
}
