import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

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

  if (!crmUrl) {
    console.warn("[optin] CRM_WEBHOOK_URL is not set; submission accepted but not forwarded");
    return NextResponse.json({ ok: true, forwarded: false }, { status: 201 });
  }

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
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      console.error("[optin] CRM webhook failed", res.status, text);
      // Still return success to the user — we'll capture in logs and retry later.
      return NextResponse.json({ ok: true, forwarded: false }, { status: 201 });
    }
    return NextResponse.json({ ok: true, forwarded: true }, { status: 201 });
  } catch (err) {
    console.error("[optin] CRM webhook error", err);
    return NextResponse.json({ ok: true, forwarded: false }, { status: 201 });
  }
}
