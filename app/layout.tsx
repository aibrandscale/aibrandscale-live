import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

const SITE_URL = "https://live.aibrandscale.io";
const EVENT_DATE_ISO = "2026-05-15T18:00:00+03:00";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AI Brand Scale LIVE — Безплатно онлайн обучение на живо: 15 май",
    template: "%s · AI Brand Scale LIVE",
  },
  description:
    "Безплатен онлайн challenge на живо на 15 май: как да изградиш AI бизнес до €166/ден за 30 дни — без технически умения и без предишен опит.",
  applicationName: "AI Brand Scale LIVE",
  generator: "Next.js",
  authors: [{ name: "Венелин Йорданов", url: "https://aibrandscale.io" }],
  creator: "Венелин Йорданов",
  publisher: "AI Brand Scale",
  category: "education",
  referrer: "origin-when-cross-origin",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "bg_BG",
    url: SITE_URL,
    siteName: "AI Brand Scale LIVE",
    title: "AI Brand Scale LIVE — Безплатно онлайн обучение на живо: 15 май",
    description:
      "Безплатен онлайн challenge на живо на 15 май: AI бизнес до €166/ден за 30 дни.",
    images: [
      { url: "/og.png", width: 1200, height: 630, alt: "AI Brand Scale LIVE — Онлайн обучение на живо: 15 май", type: "image/png" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Brand Scale LIVE — 15 май",
    description:
      "Безплатен онлайн challenge на живо: AI бизнес до €166/ден за 30 дни.",
    images: ["/og.png"],
    creator: "@aibrandscale",
    site: "@aibrandscale",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  alternates: {
    canonical: SITE_URL,
    languages: { "bg-BG": SITE_URL, "x-default": SITE_URL },
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#0a0612",
  width: "device-width",
  initialScale: 1,
};

const ALFABET_FONTS = [
  "https://framerusercontent.com/assets/sIf2fVJGK0gmwbluERmSeUNkuw.woff2",
  "https://framerusercontent.com/assets/6bOkTp33nScsMROIc9ZF8AfE.woff2",
  "https://framerusercontent.com/assets/vaZ5MR4DhH9gd1BS7igOssKjLT4.woff2",
];

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}#organization`,
      name: "AI Brand Scale",
      url: "https://aibrandscale.io",
      logo: { "@type": "ImageObject", url: `https://aibrandscale.io/logo-white.png` },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}#person-venelin`,
      name: "Венелин Йорданов",
      jobTitle: "Лектор и основател",
      worksFor: { "@id": `${SITE_URL}#organization` },
    },
    {
      "@type": "Event",
      "@id": `${SITE_URL}#event`,
      name: "AI Brand Scale LIVE — Онлайн обучение на живо",
      description:
        "Безплатен онлайн challenge на живо: как да изградиш AI бизнес до €166/ден за 30 дни.",
      startDate: EVENT_DATE_ISO,
      eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
      eventStatus: "https://schema.org/EventScheduled",
      inLanguage: "bg",
      location: {
        "@type": "VirtualLocation",
        url: SITE_URL,
      },
      organizer: { "@id": `${SITE_URL}#organization` },
      performer: { "@id": `${SITE_URL}#person-venelin` },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
        url: SITE_URL,
        validFrom: "2026-04-30T00:00:00+03:00",
      },
      isAccessibleForFree: true,
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bg">
      <head>
        <link rel="preload" as="font" type="font/woff2" href={ALFABET_FONTS[0]} crossOrigin="anonymous" />
        <link rel="preconnect" href="https://framerusercontent.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <Script
          id="gfonts-async"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){var l=document.createElement('link');l.rel='stylesheet';l.href='https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=optional';document.head.appendChild(l);})();`,
          }}
        />
        <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=optional" /></noscript>
        <Script
          id="ld-json"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
        />
        <Script
          id="ms-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "wqefayc00x");`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
