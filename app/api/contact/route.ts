import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { CONTACT } from "@/lib/contact";

export const runtime = "nodejs";

type Payload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  company?: string;
  teamSize?: string;
  message?: string;
  /** Honeypot — real users never fill this. */
  website?: string;
};

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const clean = (v: unknown, max = 2000) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

function transporter() {
  const host = process.env.SMTP_SERVER;
  const port = Number(process.env.SMTP_PORT || 465);
  const user = process.env.EMAIL_ADDRESS;
  const pass = process.env.EMAIL_PASSWORD;

  if (!host || !user || !pass) return null;

  return nodemailer.createTransport({
    host,
    port,
    secure: process.env.SMTP_SECURE
      ? process.env.SMTP_SECURE.toLowerCase() === "true"
      : port === 465,
    auth: { user, pass },
  });
}

export async function POST(req: NextRequest) {
  let body: Payload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Silently accept bots so they don't retry, but send nothing.
  if (clean(body.website)) {
    return NextResponse.json({ ok: true });
  }

  const firstName = clean(body.firstName, 80);
  const lastName = clean(body.lastName, 80);
  const email = clean(body.email, 160);
  const company = clean(body.company, 120);
  const teamSize = clean(body.teamSize, 40);
  const message = clean(body.message, 4000);

  if (!firstName || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Please fill in your name, email and message." },
      { status: 400 }
    );
  }
  if (!isEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "That email address doesn't look right." },
      { status: 400 }
    );
  }

  const mailer = transporter();
  if (!mailer) {
    // No SMTP configured — tell the truth rather than pretend it sent.
    console.error(
      "[contact] SMTP not configured. Set SMTP_SERVER, EMAIL_ADDRESS and EMAIL_PASSWORD."
    );
    return NextResponse.json(
      { ok: false, error: "NOT_CONFIGURED" },
      { status: 503 }
    );
  }

  const name = [firstName, lastName].filter(Boolean).join(" ");
  const to = process.env.CONTACT_TO_EMAIL || CONTACT.emails.general;

  const rows: Array<[string, string]> = [
    ["Name", name],
    ["Email", email],
    ["Company", company || "—"],
    ["Team size", teamSize || "—"],
  ];

  try {
    await mailer.sendMail({
      from: process.env.EMAIL_ADDRESS,
      to,
      replyTo: { name, address: email },
      subject: `New enquiry from ${name}${company ? ` (${company})` : ""} — aipathcrm.com`,
      text: [
        ...rows.map(([k, v]) => `${k}: ${v}`),
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <div style="font-family:system-ui,-apple-system,sans-serif;line-height:1.6">
          <h2 style="margin:0 0 16px">New enquiry from aipathcrm.com</h2>
          <table cellpadding="6" style="border-collapse:collapse;margin-bottom:16px">
            ${rows
              .map(
                ([k, v]) =>
                  `<tr><td style="color:#666">${k}</td><td><strong>${escapeHtml(v)}</strong></td></tr>`
              )
              .join("")}
          </table>
          <p style="color:#666;margin:0 0 4px">Message</p>
          <p style="white-space:pre-wrap;margin:0">${escapeHtml(message)}</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] send failed:", err);
    return NextResponse.json(
      { ok: false, error: "SEND_FAILED" },
      { status: 502 }
    );
  }
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
