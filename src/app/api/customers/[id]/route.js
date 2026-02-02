import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import axios from 'axios';

export async function PUT(request, { params }) {
    try {
        const { id } = await params;
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

        const response = await axios.put(`${backendUrl}/api/customers/${id}`, body, {
            headers,
            withCredentials: true
        });

        return NextResponse.json(response.data);
    } catch (error) {
        console.error('API Proxy Error (customers-update):', error.message);
        
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

export async function DELETE(request, { params }) {
    try {
        const { id } = await params;
        const backendUrl = process.env.BACKEND_URL || 'http://localhost:5000';
        
        const cookieStore = await cookies();
        const token = cookieStore.get('token')?.value;

        // Prepare headers
        const headers = { 'Content-Type': 'application/json' };
        
        // Forward Admin Token if present
        if (token) {
            headers['Cookie'] = `token=${token}`;
        }

        const response = await axios.delete(`${backendUrl}/api/customers/${id}`, {
            headers,
            withCredentials: true
        });

        return NextResponse.json(response.data); // Likely empty/204
    } catch (error) {
        console.error('API Proxy Error (customers-delete):', error.message);
        
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

export async function GET(request, { params }) {
    try {
        const { id } = await params;
        const backendUrl = process.env.BACKEND_URL || 'http://localhost:5000';
        
        const cookieStore = await cookies();
        const token = cookieStore.get('token')?.value;

        // Prepare headers
        const headers = { 'Content-Type': 'application/json' };
        
        // Forward Admin Token if present
        if (token) {
            headers['Cookie'] = `token=${token}`;
        }

        const response = await axios.get(`${backendUrl}/api/customers/${id}`, {
            headers,
            withCredentials: true
        });

        return NextResponse.json(response.data);
    } catch (error) {
        console.error('API Proxy Error (customers-get-one):', error.message);
        
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
