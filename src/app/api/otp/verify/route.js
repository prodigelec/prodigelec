import { NextResponse } from 'next/server';

const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:5000';

/**
 * POST /api/otp/verify - Verify OTP code
 */
export async function POST(request) {
    try {
        const body = await request.json();

        const response = await fetch(`${BACKEND_URL}/api/otp/verify`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        const data = await response.json();

        if (!response.ok) {
            return NextResponse.json(data, { status: response.status });
        }

        return NextResponse.json(data);
    } catch (error) {
        console.error('OTP Verify Error:', error);
        return NextResponse.json(
            { error: 'Erreur lors de la vérification' },
            { status: 500 }
        );
    }
}
