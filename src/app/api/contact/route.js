import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const body = await req.json();
    const { user_name, user_email, user_phone, user_city, service, message } = body;

    // Validation basique
    if (!user_name || !user_email || !message) {
      return NextResponse.json(
        { error: 'Champs obligatoires manquants' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true, // true pour le port 465, false pour les autres
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"${user_name}" <${process.env.SMTP_FROM}>`, // L'expéditeur doit être votre adresse authentifiée
      to: process.env.SMTP_USER, // Vous recevez l'email
      replyTo: user_email, // Pour répondre directement au client
      subject: `Nouveau message de ${user_name} - ${service}`,
      text: `
        Nouveau message reçu via le site Prodigelec.

        --- INFORMATIONS CLIENT ---
        Nom : ${user_name}
        Email : ${user_email}
        Téléphone : ${user_phone}
        Ville : ${user_city}

        --- DÉTAILS DE LA DEMANDE ---
        Service concerné : ${service}

        --- MESSAGE ---
        ${message}
      `,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Nouveau contact Prodigelec</title>
        </head>
        <body style="margin: 0; padding: 0; background-color: #f4f4f5; font-family: Arial, sans-serif;">
          <div style="max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            
            <!-- Header -->
            <div style="background-color: #0b1a2a; padding: 30px 20px; text-align: center;">
              <h1 style="margin: 0; color: #c9a227; font-size: 28px; font-weight: bold; letter-spacing: 1px;">PRODIGELEC</h1>
              <p style="margin: 5px 0 0; color: #a1a1aa; font-size: 14px;">Électricité & Serrurerie - Eure-et-Loir / Eure</p>
            </div>

            <!-- Content -->
            <div style="padding: 40px 30px;">
              <h2 style="color: #0b1a2a; margin-top: 0; font-size: 22px; border-bottom: 2px solid #c9a227; padding-bottom: 10px; display: inline-block;">Nouvelle demande de contact</h2>
              
              <!-- Service Badge -->
              <div style="margin: 20px 0;">
                <span style="background-color: #c9a227; color: #0b1a2a; padding: 6px 12px; border-radius: 4px; font-weight: bold; font-size: 14px; text-transform: uppercase;">
                  ${service}
                </span>
              </div>

              <!-- Info Grid -->
              <table style="width: 100%; border-collapse: collapse; margin-top: 25px;">
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; width: 120px; font-size: 14px;">Nom complet</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #1f2937; font-weight: 600;">${user_name}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">Email</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #1f2937; font-weight: 600;">
                    <a href="mailto:${user_email}" style="color: #0b1a2a; text-decoration: none;">${user_email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">Téléphone</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #1f2937; font-weight: 600;">
                    <a href="tel:${user_phone}" style="color: #0b1a2a; text-decoration: none;">${user_phone}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">Ville</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #1f2937; font-weight: 600;">${user_city}</td>
                </tr>
              </table>

              <!-- Message -->
              <div style="margin-top: 30px; background-color: #f8fafc; padding: 20px; border-radius: 6px; border-left: 4px solid #0b1a2a;">
                <h3 style="margin-top: 0; color: #0b1a2a; font-size: 16px; margin-bottom: 10px;">Message du client :</h3>
                <p style="margin: 0; color: #334155; line-height: 1.6; white-space: pre-wrap;">${message}</p>
              </div>
              
            </div>

            <!-- Footer -->
            <div style="background-color: #f8fafc; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0; color: #94a3b8; font-size: 12px;">
                Cet email a été envoyé automatiquement depuis le site <a href="https://prodigelec.fr" style="color: #c9a227; text-decoration: none;">prodigelec.fr</a>
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email envoyé avec succès' }, { status: 200 });
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi de l\'email' },
      { status: 500 }
    );
  }
}
