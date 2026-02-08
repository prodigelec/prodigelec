import { NextResponse } from 'next/server';
import axios from 'axios';

const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:5000';

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const token = searchParams.get('token');

        if (!token) {
            return NextResponse.json({ error: 'Token is required' }, { status: 400 });
        }

        const response = await axios.get(`${BACKEND_URL}/api/public/signature/document?token=${token}`);

        return NextResponse.json(response.data);
    } catch (error) {
        console.error('API Proxy Error (public-signature-document):', error.message);
        return NextResponse.json(
            { error: error.response?.data?.error || 'Backend Error' },
            { status: error.response?.status || 500 }
        );
    }
}
