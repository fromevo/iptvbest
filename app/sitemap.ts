import type { MetadataRoute } from "next";
import { providers } from "../data/providers";
import { blogPosts } from "../data/blogPosts";

const baseUrl = "https://iptv-best.ru";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    "",
    "/top",
    "/compare",
    "/matrix",
    "/about",
    "/faq",
    "/blog",
    "/collections",
    "/tools",
    "/tools/bandwidth",
    "/tools/checklist",
    "/tools/savings",
    "/wizard",
    "/providers",
    "/devices",
    "/apps",
    "/search",
    "/privacy",
    "/contact"
  ].map((path) => ({
    url: `${baseUrl}${path || "/"}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7
  }));

  const providerPages: MetadataRoute.Sitemap = providers.map((provider) => ({
    url: `${baseUrl}/providers/${provider.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8
  }));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.publishedDate ? new Date(post.publishedDate) : new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6
  }));

  return [...staticPages, ...providerPages, ...blogPages];
}

