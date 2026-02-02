import { redirect } from 'next/navigation';
import axios from 'axios';
import DashboardShell from '../../components/layout/DashboardShell';

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

    return (
        <DashboardShell company={company} code={code}>
            {children}
        </DashboardShell>
    );
}
