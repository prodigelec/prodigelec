import { generateAccessCode } from '@/utils/crm/accessCode';
import CRMLoginClient from './CRMLoginClient';

/**
 * Server-side entry for CRM Login.
 * Safely generates the initial access code using server-side environment variables.
 */
export default async function CRMLoginPage() {
    let initialCode = '';
    try {
        // This runs on the server, so it has access to CRM_ACCESS_SECRET
        initialCode = generateAccessCode();
    } catch (e) {
        console.error('Server-side code generation failed:', e);
    }

    return <CRMLoginClient initialCode={initialCode} />;
}
