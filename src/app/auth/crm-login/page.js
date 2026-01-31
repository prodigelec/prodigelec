import CRMLoginClient from './CRMLoginClient';
import axios from 'axios';

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
        const response = await axios.get(`${appUrl}/api/auth/access-code`);
        initialCode = response.data.code;
    } catch (e) {
        console.error('Server-side code generation failed:', e.message);
    }

    return <CRMLoginClient initialCode={initialCode} />;
}
