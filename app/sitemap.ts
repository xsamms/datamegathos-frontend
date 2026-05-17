import { MetadataRoute } from "next";
import { prisma } from "@/lib/prisma";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://datamegathos.com";

  // Static routes
  const routes = [
    "",
    "/about",
    "/services",
    "/portfolio",
    "/blog",
    "/contact",
    "/quote",
    "/careers",
    "/privacy-policy",
    "/terms-of-service",
    "/pay",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Dynamic blog posts
  let blogPosts: MetadataRoute.Sitemap = [];
  try {
    const posts = await prisma.post.findMany({
      where: { published: true },
      select: { slug: true, updatedAt: true },
    });

    blogPosts = posts.map((post: { slug: string; updatedAt: Date }) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));
  } catch (error) {
    console.error("Error fetching posts for sitemap:", error);
  }

  return [...routes, ...blogPosts];
}
