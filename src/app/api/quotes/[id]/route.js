import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import axios from 'axios';

const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:5000';

export async function GET(request, { params }) {
    try {
        const { id } = await params;
        const cookieStore = await cookies();
        const token = cookieStore.get('token')?.value;

        const headers = { 'Content-Type': 'application/json' };
        if (token) {
            headers['Cookie'] = `token=${token}`;
        }

        const response = await axios.get(`${BACKEND_URL}/api/quotes/${id}`, {
            headers,
            withCredentials: true
        });

        return NextResponse.json(response.data);
    } catch (error) {
        console.error('API Proxy Error (quote-id-get):', error.message);
        return NextResponse.json(
            { error: error.response?.data?.error || 'Backend Error' },
            { status: error.response?.status || 500 }
        );
    }
}

export async function PUT(request, { params }) {
    try {
        const { id } = await params;
        const body = await request.json();
        const cookieStore = await cookies();
        const token = cookieStore.get('token')?.value;

        const headers = { 'Content-Type': 'application/json' };
        if (token) {
            headers['Cookie'] = `token=${token}`;
        }

        const response = await axios.put(`${BACKEND_URL}/api/quotes/${id}`, body, {
            headers,
            withCredentials: true
        });

        return NextResponse.json(response.data);
    } catch (error) {
        console.error('API Proxy Error (quote-id-put):', error.message);
        return NextResponse.json(
            { error: error.response?.data?.error || 'Backend Error' },
            { status: error.response?.status || 500 }
        );
    }
}

export async function DELETE(request, { params }) {
    try {
        const { id } = await params;
        const cookieStore = await cookies();
        const token = cookieStore.get('token')?.value;

        const headers = { 'Content-Type': 'application/json' };
        if (token) {
            headers['Cookie'] = `token=${token}`;
        }

        const response = await axios.delete(`${BACKEND_URL}/api/quotes/${id}`, {
            headers,
            withCredentials: true
        });

        return NextResponse.json(response.data);
    } catch (error) {
        console.error('API Proxy Error (quote-id-delete):', error.message);
        return NextResponse.json(
            { error: error.response?.data?.error || 'Backend Error' },
            { status: error.response?.status || 500 }
        );
    }
}
