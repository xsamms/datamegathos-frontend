"use client";

import { useState } from "react";
import Link from "next/link";
import { usePosts, Post } from "@/lib/hooks";
import type { Metadata } from "next";

// Blog post card data for static/fallback cards when no API data is available
const fallbackPosts = [
  {
    slug: "future-of-ai-enterprise-development",
    category: "AI & Machine Learning",
    title: "The Future of AI in Enterprise Development",
    excerpt:
      "How large language models are fundamentally changing the way we build, deploy, and scale enterprise software solutions in 2024 and beyond.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBthV2aXTCrMPu6kzlTqykuZJb67Sb9eLzg5PUvY7bKbH7C7eMxPgKwoWRf_bLew9LooJiyVXcLhWerNN0I3_cNESSA7iFCcQQLYt3e4Rnvzi78pZV7LlvgfQQ_6fVPPqdFjipnkbUwy7y_Pzy2PsA_aedjirFstWklv5t2q-JVJ49wYU34V3n5RaU-TVk6VMbMp5yqLSj6vq7ITPmZa1WZbeH-m6nC4tUeCp77VfXPlj91XiC7k6UE_e8UNV_Uwt2RPttBd4bkiM4c",
    imageAlt: "AI neural network visualization",
    aspectRatio: "aspect-[4/3]",
  },
  {
    slug: "top-5-digital-trends-q3-2024",
    category: "Digital Trends",
    title: "Top 5 Digital Trends for Q3 2024",
    excerpt:
      "From spatial computing to edge AI, exploring the emerging technologies that are moving from hype to practical business application.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBuABHIJUspr3E49MhklbRqz_EfuccGesSIyOJrgEqU0jJmJfc_zStyKWPUy5yBaaJqK5K1UVvyNDzXA8FLSGxfUH-yS6ADrboMzkqhd-Njts_jZH7p44rjD9vDGJMgARV5XT49VePc7WW7NqOALnGleW85o2TUy536s9ZWIeyYZCOk16-kgm0cjon6Ymeh_wE4XJtFrj5y_8U7dv6V5Oviz3iWxrJNr4imRvbfB862QrPJfazP7tqZBHpN9dnE9IGRAEmK3yOAnZb4",
    imageAlt: "Data analytics dashboard screen",
    aspectRatio: "aspect-square",
  },
  {
    slug: "scaling-software-engineering-team",
    category: "Engineering Management",
    title: "Scaling Your Software Engineering Team Responsibly",
    excerpt:
      "Strategies for maintaining velocity and culture while doubling your engineering headcount in a remote-first environment.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBu_ebJ6ZXusv6K2tnl1mmajNlJ3YV7z2SeGwE7ONguxTpefeYkzcb_yGQb7AQ8dFd1I0szcByFee5-uH_nFFKqgGGNef6nUMQg-P972onVDYeOM0ty1w6yuY9yPsqwGpJmPWrBoCnNcZIzUWxJeWeFygM4jbnfqe1gs6CPU1XGO0XeTcUjqLp9RubjolGvyt-tSS9SkRBeCK5s1Lcykc5eORJhVRzMfSC3yzpvbmAnnTvnuVNDnFKg1TRZaEQHFGlGZeYeJX-m5t4n",
    imageAlt: "Team collaborating around laptop",
    aspectRatio: "aspect-[16/9]",
  },
  {
    slug: "understanding-multi-cloud-architecture",
    category: "Cloud Architecture",
    title: "Understanding Multi-Cloud Architecture Realities",
    excerpt:
      "When does multi-cloud actually make sense? Breaking down the cost, complexity, and redundancy trade-offs for modern applications.",
    image: null,
    imageAlt: null,
    aspectRatio: null,
  },
  {
    slug: "why-react-ecosystem-remains-dominant",
    category: "Web Development",
    title: "Why React Ecosystem Remains Dominant",
    excerpt:
      "Despite new contenders, Next.js and the broader React ecosystem continue to solve enterprise UI challenges effectively.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAabdcLWO-M_C6Ej3eY3jGL9ar_zQn6OZ0rB7nsLxpFSkbRWovZi1ONJZjPjNyZscD9lpmKj4eeosFgf41P9m3zqK9gXCpCn2GQr0X3KfPfTo5aUZpJwKpsp7uz75kQXZkLAfaymKzfaYsA8ttmxs8_xS6_f5Tq4luZQitM4DvdkyuSOKmZmmOLZjAGFUwy8p7HcT-IOfdvGzI6qSuxp7rrSjjcvL8BZSe1EM3dJCRpSDS8zGmvAHRuvvP_QJqqQ8bgsehSsyn5nA5Q",
    imageAlt: "React code on screen",
    aspectRatio: "aspect-video",
  },
];

const trendingPosts = [
  {
    title: "Optimizing PostgreSQL for Heavy Read Workloads",
    tag: "Database Eng",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBeruTLSiFnA-1jQ6HHswVfHw_OLTrhDS5CtrZH7vwZozyG2SjbvstQM6fruFcTu5u_DQ18B5d0GsqmeBkgOZzFXqkhecxrxK7JqVFrBnuS1hGK_EF6ZK-mLu2jPl4RnrmcrdRG-PhvE0DmGT7Ao7TG_j-OKjHuvbNYqYh0F9Uys5xlA6eC8dHj_oetaS5M3k-F7bvWhHrqvSh9KqXairf6AAXGUAXDQRMvPkMz2qB9N5YfQQIJSYfP82jw1XJ_jrhnUlMMGHOWvUw9",
    imageAlt: "Code on screen",
  },
  {
    title: "Data Megathos Engineering Culture Explained",
    tag: "Culture",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDK3wFkbaA4GNEBmPKnPSdpevi_OO4D2Sn0H3uVG7bvohpXRwZHSY_Z7ILTzw2poOntqwS18LFknh0ROvq2514RQnDj7SZuO2Q5kr5YCmWfZUu_2f9p46NzEg1izbYS24BDH4KQxCpVtH8GEXWOoqT-1WRNxaL2hk3AezR4JDw6ZAHXYpfX4Y78gdg3x7ctrsw-RaKmMxFr-fVXZI7LsZoXr0lnCanmE75hQzPa5ebc9PLKzVtx7tmai66u3jSSt2-lPJy7i_FHu-uw",
    imageAlt: "Server rack lights",
  },
  {
    title: "Security First: Implementing Zero Trust",
    tag: "Security",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCm1X2tmDjkZ5cu6SQFIYCTXqyRliSi4H8kgAuJlHSI_q_axFzQmanrf8NE70idTnEjuScRK2bxijuyx_LlK0N2f4w8J-WLLsrnF6htZwxacksw53z7sguTsHFwXxPbfJOwiypsrb_5HIMyteu8oKJJh5FTxg_XmxnchbVj2YQCLIGB_Ib00YsSWRg9FM2gQDSGBBF0QtwPKGvHjn750ugvNoRMYnQHUtiq4ocxbsqLdTXkgvQC4TU-86LJGWlOC4v-lo-oBkCq_z_E",
    imageAlt: "Matrix code style",
  },
];

const popularTags = [
  "AI",
  "Cloud Native",
  "React",
  "DevOps",
  "Culture",
  "Architecture",
];

export default function BlogPage() {
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const limit = 10;
  const { data, isLoading } = usePosts(true, limit, page);

  const posts: Post[] = data?.data || [];
  const pagination = data?.pagination || {};

  // Merge API posts with fallback cards for the masonry layout
  const displayPosts =
    posts.length > 0
      ? posts.map((post, i) => ({
          slug: post.slug,
          category: post.category || fallbackPosts[i % fallbackPosts.length]?.category || "General",
          title: post.title,
          excerpt:
            post.excerpt || post.content?.substring(0, 150) + "...",
          image: post.image || fallbackPosts[i % fallbackPosts.length]?.image || null,
          imageAlt:
            fallbackPosts[i % fallbackPosts.length]?.imageAlt || post.title,
          aspectRatio:
            fallbackPosts[i % fallbackPosts.length]?.aspectRatio || "aspect-video",
        }))
      : fallbackPosts;

  return (
    <main className="flex h-full grow flex-col px-4 md:px-10 lg:px-20 py-10 max-w-7xl mx-auto w-full">
      {/* Hero Section */}
      <section className="mb-12">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
            Insights &amp; Blog
          </h1>
          <p className="text-on-surface-variant text-lg md:text-xl font-normal leading-relaxed max-w-2xl">
            Deep dives into AI advancements, software development
            methodologies, and the digital trends shaping tomorrow&apos;s
            technology landscape.
          </p>
        </div>
      </section>

      <div className="flex flex-col lg:flex-row gap-10 items-start">
        {/* Main Content — Masonry Layout */}
        <div className="flex-1 w-full lg:w-2/3">
          {isLoading ? (
            <div className="flex items-center justify-center py-32">
              <div className="text-center">
                <div className="spinner mx-auto" />
                <p className="mt-4 text-sm text-on-surface-variant">
                  Loading posts…
                </p>
              </div>
            </div>
          ) : (
            <>
              <div className="columns-1 md:columns-2 gap-6 space-y-6">
                {displayPosts.map((post) => (
                  <article
                    key={post.slug}
                    className="break-inside-avoid bg-brand-surface rounded-xl overflow-hidden shadow-sm border border-brand-border hover:border-primary/30 transition-all duration-300 group"
                  >
                    {post.image && (
                      <div
                        className={`w-full bg-surface-container-high ${post.aspectRatio} bg-cover bg-center`}
                        role="img"
                        aria-label={post.imageAlt || post.title}
                        style={{
                          backgroundImage: `url('${post.image}')`,
                        }}
                      />
                    )}
                    <div className="p-6">
                      <span className="text-primary text-xs font-bold uppercase tracking-wider mb-2 block">
                        {post.category}
                      </span>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                        <Link href={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-on-surface-variant text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <Link
                        className="inline-flex items-center text-primary font-medium hover:underline text-sm gap-1"
                        href={`/blog/${post.slug}`}
                      >
                        Read More
                        <span className="material-symbols-outlined text-base">
                          arrow_forward
                        </span>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              {pagination.pages && pagination.pages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-10">
                  <button
                    onClick={() => setPage(Math.max(1, page - 1))}
                    disabled={page === 1}
                    className="btn btn-secondary text-sm"
                  >
                    Previous
                  </button>
                  {Array.from(
                    { length: pagination.pages },
                    (_, i) => i + 1
                  ).map((p) => (
                    <button
                      key={p}
                      onClick={() => setPage(p)}
                      className={`btn text-sm min-w-[2.5rem] ${
                        p === page ? "btn-primary" : "btn-ghost"
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                  <button
                    onClick={() =>
                      setPage(Math.min(pagination.pages, page + 1))
                    }
                    disabled={page === pagination.pages}
                    className="btn btn-secondary text-sm"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </div>

        {/* Sidebar */}
        <aside className="w-full lg:w-1/3 flex flex-col gap-8 sticky top-24">
          {/* Search */}
          <div className="bg-brand-surface p-6 rounded-xl border border-brand-border">
            <label className="flex flex-col w-full">
              <span className="text-sm font-bold mb-2">Search Insights</span>
              <div className="flex w-full items-stretch rounded-lg h-12 bg-surface-container border border-transparent focus-within:border-primary/50 transition-colors">
                <div className="text-outline flex items-center justify-center pl-4">
                  <span className="material-symbols-outlined">search</span>
                </div>
                <input
                  className="flex w-full min-w-0 flex-1 bg-transparent border-none focus:ring-0 focus:outline-none text-sm px-3 placeholder:text-outline"
                  placeholder="Keywords, topics, tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </label>
          </div>

          {/* Newsletter */}
          <div className="bg-brand-bg p-8 rounded-xl border border-brand-border text-on-surface relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/30 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
              <p className="text-on-surface-variant text-sm mb-6">
                Get our latest insights on software engineering and AI
                delivered directly to your inbox.
              </p>
              <form className="flex flex-col gap-3">
                <input
                  className="input"
                  placeholder="Your email address"
                  type="email"
                />
                <button
                  className="btn btn-primary w-full"
                  type="button"
                >
                  Subscribe Now
                </button>
              </form>
              <p className="text-xs text-outline mt-4 text-center">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* Trending Posts */}
          <div className="bg-brand-surface p-6 rounded-xl border border-brand-border">
            <h3 className="text-lg font-bold mb-4 border-b border-brand-border pb-2">
              Trending Posts
            </h3>
            <div className="flex flex-col gap-4">
              {trendingPosts.map((tp) => (
                <Link
                  key={tp.title}
                  className="group flex gap-3 items-center"
                  href="#"
                >
                  <div
                    className="w-16 h-16 rounded bg-surface-container-high bg-cover bg-center shrink-0"
                    role="img"
                    aria-label={tp.imageAlt}
                    style={{
                      backgroundImage: `url('${tp.image}')`,
                    }}
                  />
                  <div>
                    <h4 className="text-sm font-semibold group-hover:text-primary transition-colors line-clamp-2">
                      {tp.title}
                    </h4>
                    <p className="text-xs text-outline mt-1">{tp.tag}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Popular Tags */}
          <div className="bg-brand-surface p-6 rounded-xl border border-brand-border">
            <h3 className="text-lg font-bold mb-4 border-b border-brand-border pb-2">
              Popular Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {popularTags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-surface-container rounded-full text-xs font-medium cursor-pointer hover:bg-primary hover:text-white transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
