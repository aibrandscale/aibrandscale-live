/** @type {import('next').NextConfig} */
const CRM_URL = process.env.CRM_APP_URL || "https://aibrandscale-crm.vercel.app";

const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "framerusercontent.com" },
      { protocol: "https", hostname: "fast.wistia.com" },
    ],
  },
  // Multi-zone: forward CRM paths to the CRM Next.js project hosted on Vercel.
  // The CRM sets `assetPrefix` to its own origin, so its _next/* assets load
  // directly and don't need to be rewritten here.
  async rewrites() {
    return [
      { source: "/dashboard", destination: `${CRM_URL}/dashboard` },
      { source: "/dashboard/:path*", destination: `${CRM_URL}/dashboard/:path*` },
      { source: "/login", destination: `${CRM_URL}/login` },
      { source: "/login/:path*", destination: `${CRM_URL}/login/:path*` },
      { source: "/leads", destination: `${CRM_URL}/leads` },
      { source: "/leads/:path*", destination: `${CRM_URL}/leads/:path*` },
      { source: "/calls", destination: `${CRM_URL}/calls` },
      { source: "/calls/:path*", destination: `${CRM_URL}/calls/:path*` },
      { source: "/events", destination: `${CRM_URL}/events` },
      { source: "/events/:path*", destination: `${CRM_URL}/events/:path*` },
      { source: "/team", destination: `${CRM_URL}/team` },
      { source: "/team/:path*", destination: `${CRM_URL}/team/:path*` },
      { source: "/book/:path*", destination: `${CRM_URL}/book/:path*` },
      { source: "/api/auth/:path*", destination: `${CRM_URL}/api/auth/:path*` },
      { source: "/api/events/:path*", destination: `${CRM_URL}/api/events/:path*` },
      { source: "/api/booking/:path*", destination: `${CRM_URL}/api/booking/:path*` },
    ];
  },
};

export default nextConfig;
