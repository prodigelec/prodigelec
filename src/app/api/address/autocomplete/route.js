import { NextResponse } from 'next/server';

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const q = searchParams.get('q');

    if (!q || q.length < 3) {
        return NextResponse.json({ features: [] });
    }

    try {
        // Use native fetch instead of axios for better Next.js compatibility
        const externalUrl = `https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(q)}&limit=5&autocomplete=1`;
        
        const response = await fetch(externalUrl);

        if (!response.ok) {
            throw new Error(`External API responded with status: ${response.status}`);
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error('Address API Proxy Error:', error);
        // Return empty results instead of crashing, to not break the UI
        return NextResponse.json({ features: [] });
    }
}
