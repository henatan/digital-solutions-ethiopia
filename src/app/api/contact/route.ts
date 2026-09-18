import { NextResponse } from "next/server";
import { Resend } from "resend";

// Where consultation requests get delivered. Can be overridden with an
// env var if you ever want to send to a different inbox without a code
// change.
const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "digitalsolutionsethiopia@gmail.com";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, business, email, phone, message } = body as Record<string, string>;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please fill in your name, email, and message." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error(
        "RESEND_API_KEY is not set. Add it to your environment variables to enable contact form emails."
      );
      return NextResponse.json(
        { error: "Email service is not configured yet. Please try again later." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const html = `
      <div style="font-family: sans-serif; font-size: 14px; color: #101827;">
        <h2 style="margin-bottom: 16px;">New consultation request</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Business:</strong> ${escapeHtml(business || "—")}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || "—")}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
      </div>
    `;

    const { error } = await resend.emails.send({
      // Resend's shared sending domain — works immediately with no DNS
      // setup. Once you verify your own domain in Resend, change this to
      // something like "Digital Solutions Ethiopia <hello@yourdomain.com>".
      from: "Digital Solutions Ethiopia <onboarding@resend.dev>",
      to: TO_EMAIL,
      replyTo: email,
      subject: `New consultation request from ${name}`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Something went wrong sending your message. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
