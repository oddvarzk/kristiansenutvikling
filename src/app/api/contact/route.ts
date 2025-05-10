import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Define the shape of your incoming JSON
interface ContactRequest {
  name: string;
  email: string;
  service?: string;
  message: string;
}

export async function POST(req: NextRequest) {
  try {
    // Cast to your interface so TS knows what you expect
    const { name, email, service, message } =
      (await req.json()) as ContactRequest;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // e.g. send.one.com
      port: Number(process.env.SMTP_PORT), // e.g. 465
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Kontakt fra nettside" <${process.env.SMTP_USER}>`,
      to: process.env.TO_EMAIL,
      subject: `Ny henvendelse fra ${name}`,
      text: `
Navn: ${name}
E-post: ${email}
Tjeneste: ${service}
Melding:
${message}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    console.error("❌ Mail error:", err);
    const errorMessage = err instanceof Error ? err.message : String(err);
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}
