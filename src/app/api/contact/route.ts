// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, service, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // send.one.com
      port: Number(process.env.SMTP_PORT), // 465
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
  } catch (err: any) {
    console.error("❌ Mail error:", err);
    return NextResponse.json(
      { success: false, error: err.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
