import { NextResponse } from 'next/server';

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q');

    if (!query) {
        return NextResponse.json({ error: 'Query parameter "q" is required' }, { status: 400 });
    }

    try {
        // Search for active companies (etat_administratif=A) and increase limit to 25
        const response = await fetch(`https://recherche-entreprises.api.gouv.fr/search?q=${encodeURIComponent(query)}&per_page=25&etat_administratif=A`);
        
        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error('Company Search API Error:', error);
        return NextResponse.json(
            { error: 'Failed to fetch company data' },
            { status: 500 }
        );
    }
}
