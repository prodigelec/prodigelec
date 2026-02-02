import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import axios from 'axios';

export async function GET(request) {
    try {
        const backendUrl = process.env.BACKEND_URL || 'http://localhost:5000';
        
        const cookieStore = await cookies();
        const token = cookieStore.get('token')?.value;

        // Prepare headers
        const headers = { 'Content-Type': 'application/json' };
        
        // Forward Admin Token if present
        if (token) {
            headers['Cookie'] = `token=${token}`;
        }

        const response = await axios.get(`${backendUrl}/api/customers`, {
            headers,
            withCredentials: true
        });

        return NextResponse.json(response.data);
    } catch (error) {
        console.error('API Proxy Error (customers-get):', error.message);
        
        if (error.response) {
            return NextResponse.json(
                { error: error.response.data?.error || 'Backend Error' },
                { status: error.response.status }
            );
        }

        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}

export async function POST(request) {
    try {
        const body = await request.json();
        const backendUrl = process.env.BACKEND_URL || 'http://localhost:5000';
        
        const cookieStore = await cookies();
        const token = cookieStore.get('token')?.value;

        // Prepare headers
        const headers = { 'Content-Type': 'application/json' };
        
        // Forward Admin Token if present
        if (token) {
            headers['Cookie'] = `token=${token}`;
        }

        const response = await axios.post(`${backendUrl}/api/customers`, body, {
            headers,
            withCredentials: true
        });

        return NextResponse.json(response.data);
    } catch (error) {
        console.error('API Proxy Error (customers-create):', error.message);
        
        if (error.response) {
            console.error('Backend Response:', error.response.data);
            return NextResponse.json(
                { error: error.response.data?.error || 'Backend Error' },
                { status: error.response.status }
            );
        }

        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
