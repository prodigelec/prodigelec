import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET() {
    try {
        const backendUrl = process.env.BACKEND_URL || 'http://localhost:5000';
        
        const response = await axios.get(`${backendUrl}/api/auth/access-code`);

        return NextResponse.json(response.data);
    } catch (error) {
        console.error('API Proxy Error:', error.message);
        
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
