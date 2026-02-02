import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import axios from 'axios';

const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:5000';

export async function PATCH(request, { params }) {
    try {
        const { id } = await params;
        const body = await request.json();
        const cookieStore = await cookies();
        const token = cookieStore.get('token')?.value;

        const headers = { 'Content-Type': 'application/json' };
        if (token) {
            headers['Cookie'] = `token=${token}`;
        }

        const response = await axios.patch(`${BACKEND_URL}/api/quotes/${id}/status`, body, {
            headers,
            withCredentials: true
        });

        return NextResponse.json(response.data);
    } catch (error) {
        console.error('API Proxy Error (quote-id-status-patch):', error.message);
        return NextResponse.json(
            { error: error.response?.data?.error || 'Backend Error' },
            { status: error.response?.status || 500 }
        );
    }
}
