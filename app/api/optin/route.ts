import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  welcomeEmailHtml,
  welcomeEmailSubject,
  welcomeEmailText,
} from "../../../lib/welcome-email";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const RESEND_FROM = process.env.RESEND_FROM || "AI Brand Scale <onboarding@resend.dev>";

async function sendWelcomeEmail(to: string, name: string) {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.warn("[optin] RESEND_API_KEY not set — welcome email skipped");
    return;
  }
  try {
    const resend = new Resend(key);
    const res = await resend.emails.send({
      from: RESEND_FROM,
      to,
      subject: welcomeEmailSubject(),
      html: welcomeEmailHtml(name),
      text: welcomeEmailText(name),
    });
    if (res.error) console.error("[optin] Resend error", res.error);
  } catch (err) {
    console.error("[optin] Resend send failed", err);
  }
}

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const data = body as { name?: string; email?: string; phone?: string; hp?: string };

  // Honeypot — silently accept and drop
  if (data.hp && data.hp.trim().length > 0) {
    return NextResponse.json({ ok: true }, { status: 201 });
  }

  const name = (data.name ?? "").toString().trim();
  const email = (data.email ?? "").toString().trim();
  const phone = (data.phone ?? "").toString().trim();

  if (!name || !email || !phone) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 422 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 422 });
  }

  const crmUrl = process.env.CRM_WEBHOOK_URL;
  const crmSecret = process.env.CRM_WEBHOOK_SECRET;

  let forwarded = false;
  if (crmUrl) {
    try {
      const res = await fetch(crmUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(crmSecret ? { "X-Webhook-Secret": crmSecret } : {}),
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          source: "Landing — AI Challenge",
          eventSlug: process.env.EVENT_SLUG || undefined,
        }),
        cache: "no-store",
      });
      if (res.ok) {
        forwarded = true;
      } else {
        const text = await res.text().catch(() => "");
        console.error("[optin] CRM webhook failed", res.status, text);
      }
    } catch (err) {
      console.error("[optin] CRM webhook error", err);
    }
  } else {
    console.warn("[optin] CRM_WEBHOOK_URL is not set; submission accepted but not forwarded");
  }

  // Fire-and-forget welcome email so it doesn't slow the response.
  void sendWelcomeEmail(email, name);

  return NextResponse.json({ ok: true, forwarded }, { status: 201 });
}
