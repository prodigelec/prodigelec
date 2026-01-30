import { NextResponse } from 'next/server';
import { generateAccessCode } from '@/utils/crm/accessCode';

/**
 * API route to retrieve the current rotating access code.
 */
export async function GET() {
    try {
        const code = generateAccessCode();
        return NextResponse.json({ code });
    } catch (error) {
        return NextResponse.json({ error: 'Erreur lors de la génération du code d\'accès.' }, { status: 500 });
    }
}
