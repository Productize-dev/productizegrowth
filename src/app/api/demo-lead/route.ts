import { readFile } from "node:fs/promises";
import path from "node:path";

import { Resend } from "resend";

export const runtime = "nodejs";

const PDF_PATH = path.join(
  process.cwd(),
  "public/downloads/leak-checklist.pdf"
);
const PDF_FILENAME = "leak-checklist-productize-growth.pdf";
const DOWNLOAD_PATH = "/downloads/leak-checklist.pdf";

type LeadBody = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
};

function clean(value: unknown, max = 120) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json(
      { error: "email is not configured yet. try again soon." },
      { status: 503 }
    );
  }

  let body: LeadBody;
  try {
    body = (await request.json()) as LeadBody;
  } catch {
    return Response.json({ error: "bad request." }, { status: 400 });
  }

  const firstName = clean(body.firstName, 80);
  const lastName = clean(body.lastName, 80);
  const email = clean(body.email, 160).toLowerCase();
  const phone = clean(body.phone, 40);

  if (!firstName || !lastName || !email || !phone) {
    return Response.json(
      { error: "fill every field — name, last name, email, and phone." },
      { status: 400 }
    );
  }

  if (!isEmail(email)) {
    return Response.json({ error: "that email looks off." }, { status: 400 });
  }

  if (phone.replace(/\D/g, "").length < 7) {
    return Response.json(
      { error: "add a real phone number." },
      { status: 400 }
    );
  }

  let pdf: Buffer;
  try {
    pdf = await readFile(PDF_PATH);
  } catch {
    return Response.json(
      { error: "the guide file is missing. ping us." },
      { status: 500 }
    );
  }

  const from =
    process.env.LEAD_FROM_EMAIL ??
    "productize growth <onboarding@resend.dev>";
  const notify =
    process.env.LEAD_NOTIFY_EMAIL ?? "productizecompany@gmail.com";
  const origin = new URL(request.url).origin;
  const downloadUrl = `${origin}${DOWNLOAD_PATH}`;
  const fullName = `${firstName} ${lastName}`;

  const resend = new Resend(apiKey);

  const userEmail = await resend.emails.send({
    from,
    to: email,
    subject: "your free leak checklist — productize growth",
    replyTo: notify,
    attachments: [
      {
        filename: PDF_FILENAME,
        content: pdf,
      },
    ],
    html: `
      <div style="font-family: system-ui, -apple-system, sans-serif; color: #0a0a0a; line-height: 1.5; max-width: 560px;">
        <p style="margin: 0 0 12px; font-size: 14px; color: #f47521; font-weight: 700;">productize growth</p>
        <h1 style="margin: 0 0 12px; font-size: 28px; line-height: 1.05; text-transform: lowercase;">hey ${firstName} — here's the leak checklist.</h1>
        <p style="margin: 0 0 16px; font-size: 16px; color: #4a433a;">
          free guide attached. use it to spot where leads die after hours —
          before you book the call.
        </p>
        <p style="margin: 0 0 24px;">
          <a href="${downloadUrl}" style="display:inline-block;background:#f47521;color:#0a0a0a;text-decoration:none;font-weight:800;padding:14px 22px;border-radius:999px;">
            download again →
          </a>
        </p>
        <p style="margin: 0; font-size: 13px; color: #4a433a;">
          want it installed for you? book the 30-min call on the demo page.
        </p>
      </div>
    `,
    text: `hey ${firstName} — here's the leak checklist.\n\nfree guide attached. download again: ${downloadUrl}\n\nwant it installed for you? book the 30-min call on the demo page.\n\n— productize growth`,
  });

  if (userEmail.error) {
    return Response.json(
      { error: "couldn't send the email. try again in a minute." },
      { status: 502 }
    );
  }

  // fire-and-forget internal lead ping — don't block the user if it fails
  void resend.emails.send({
    from,
    to: notify,
    subject: `new leak checklist lead — ${fullName}`,
    text: `new demo lead downloaded the leak checklist.\n\nname: ${fullName}\nemail: ${email}\nphone: ${phone}\n`,
    html: `
      <div style="font-family: system-ui, sans-serif; color: #0a0a0a;">
        <p><strong>new demo lead</strong> — leak checklist</p>
        <ul>
          <li>name: ${fullName}</li>
          <li>email: ${email}</li>
          <li>phone: ${phone}</li>
        </ul>
      </div>
    `,
  });

  return Response.json({ ok: true, downloadUrl });
}
