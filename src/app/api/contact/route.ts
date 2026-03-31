import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

interface ContactRequest {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  referral?: string;
  message: string;
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, service, referral, message } =
      (await req.json()) as ContactRequest;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: process.env.FROM_EMAIL ?? "Kristiansen Utvikling <onboarding@resend.dev>",
      to: process.env.TO_EMAIL!,
      replyTo: email,
      subject: `Ny henvendelse fra ${name}`,
      text: [
        `Navn: ${name}`,
        `E-post: ${email}`,
        phone ? `Telefon: ${phone}` : null,
        service ? `Tjeneste: ${service}` : null,
        referral ? `Fant meg via: ${referral}` : null,
        ``,
        `Melding:`,
        message,
      ]
        .filter((line) => line !== null)
        .join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    console.error("Mail error:", err);
    const errorMessage = err instanceof Error ? err.message : String(err);
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}
