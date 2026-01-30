import { NextResponse } from 'next/server';

/**
 * Next.js API Route acting as a bridge to the Express backend.
 */
export async function POST(req) {
    try {
        const body = await req.json();
        const { endpoint, method = 'POST', data } = body;

        const response = await fetch(`${process.env.BACKEND_URL || 'http://localhost:5000'}/api${endpoint}`, {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();

        // Create response
        const nextResponse = NextResponse.json(result, { status: response.status });

        // Handle cookies (transfer from backend to frontend)
        const setCookie = response.headers.get('set-cookie');
        if (setCookie) {
            nextResponse.headers.set('set-cookie', setCookie);
        }

        return nextResponse;
    } catch (error) {
        console.error('CRM Bridge Error:', error);
        return NextResponse.json({ error: 'Erreur de communication avec le backend CRM.' }, { status: 500 });
    }
}

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const endpoint = searchParams.get('endpoint');

    if (!endpoint) {
        return NextResponse.json({ error: 'Endpoint manquant.' }, { status: 400 });
    }

    try {
        // Forward cookie if present
        const cookie = req.headers.get('cookie');

        const response = await fetch(`${process.env.BACKEND_URL || 'http://localhost:5000'}/api${endpoint}`, {
            headers: {
                'Cookie': cookie || '',
            },
        });

        const result = await response.json();
        return NextResponse.json(result, { status: response.status });
    } catch (error) {
        return NextResponse.json({ error: 'Erreur de communication avec le backend CRM.' }, { status: 500 });
    }
}
