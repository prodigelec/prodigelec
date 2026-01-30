import { supabase } from "@/lib/supabase";
import { encrypt, hash } from "@/lib/crypto";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { email } = await request.json();

        if (!email || !email.includes('@')) {
            return NextResponse.json(
                { error: "Une adresse e-mail valide est requise." },
                { status: 400 }
            );
        }

        // Compute hash for uniqueness check
        const emailHash = hash(email.toLowerCase());

        // Encrypt the email
        const { encryptedData, iv, authTag } = encrypt(email);

        // Insert into Supabase
        const { error } = await supabase
            .from('newsletter')
            .insert([{
                encrypted_email: encryptedData,
                email_hash: emailHash,
                iv: iv,
                auth_tag: authTag
            }]);

        if (error) {
            // Handle duplicate hash error (code 23505)
            if (error.code === '23505') {
                return NextResponse.json(
                    { error: "Cette adresse e-mail est déjà inscrite." },
                    { status: 409 }
                );
            }
            throw error;
        }

        return NextResponse.json({ success: true });

    } catch (error) {
        console.error("Newsletter subscription error:", error);
        return NextResponse.json(
            { error: "Une erreur est survenue lors de l'inscription." },
            { status: 500 }
        );
    }
}
