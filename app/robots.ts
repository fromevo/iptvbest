import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://iptv-best.ru";

  return {
    rules: {
      userAgent: "*",
      allow: ["/"],
      disallow: ["/api/", "/go/"]
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl
  };
}

