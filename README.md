# AI Brand Scale LIVE

Webinar registration page for `live.aibrandscale.io`. Mirrors the design system of the main `aibrandscale.io` landing.

## Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS v4
- TypeScript

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run start
```

## Sections

1. PromoBar (marquee with event date)
2. Sticky header + LIVE badge
3. Hero — €166/day in 30 days, no skills/no experience
4. Brands strip — businesses & influencers who trusted Венелин
5. Event details (What/When/Where) — Google Meet
6. Speaker timeline (2022 → today)
7. Registration form (name, email, phone +359)
8. Footer

## Tracking

Tracking (Meta Pixel, CAPI, Microsoft Clarity, Google Sheets webhook, `/api/optin`) is intentionally **not yet wired**. The form's submit is a placeholder. Plan: wire after content is finalized using the same setup as the main landing — see `aibrandscale-landing/TRACKING_SETUP.md`.

## Deploy

- New Vercel project from this repo.
- Add custom domain `live.aibrandscale.io` in Vercel → Settings → Domains.
- Add CNAME `live` → `cname.vercel-dns.com` in `aibrandscale.io` DNS.
