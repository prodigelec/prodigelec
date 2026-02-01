import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const backendUrl = process.env.BACKEND_URL || 'http://localhost:5000';
        
        // Use native fetch
        const response = await fetch(`${backendUrl}/api/auth/access-code`, {
            cache: 'no-store' // Ensure we always get a fresh code
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            return NextResponse.json(
                { error: errorData.error || `Backend responded with ${response.status}` },
                { status: response.status }
            );
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error('API Proxy Error (auth-access-code):', error.message);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
