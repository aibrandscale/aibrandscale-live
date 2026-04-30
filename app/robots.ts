import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://live.aibrandscale.io/sitemap.xml",
    host: "https://live.aibrandscale.io",
  };
}
