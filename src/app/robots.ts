import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/", "/account/"] }],
    sitemap: "https://ibps-po.koydo.app/sitemap.xml",
    host: "https://ibps-po.koydo.app",
  };
}
