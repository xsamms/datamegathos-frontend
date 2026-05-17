"use client";

import { use } from "react";
import { usePost, usePosts, Post } from "@/lib/hooks";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import { CommentSection } from "@/components/CommentSection";

// Static related posts data (shown when no API data available)
const relatedPosts = [
  {
    slug: "serverless-high-cost-of-convenience",
    category: "Infrastructure",
    title: "Serverless: The High Cost of Convenience",
    excerpt:
      "Exploring the hidden cloud egress fees and cold-start latencies of FaaS models.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC8fNakD48Ke1jlTkycda1KUo8OxXUS07FskeSE1iZ1mqijdpyyUntt77BsRZX3bZuIaLrFxkGnpD2Db9ew_6bEH54QawjtDo9YkTl_6iyNFigmjqcjOolfnB8giHDmYL1_wIXIrMyNUxPsl6FVTE3uPPY88wvuXz9YlvQgmwyrf4flIZ_QLG4jixT59ogcp2H1xWNMlH2L2zSQIsF61Vrx_2f2vzRPE9wqYUmUNj6pbuEuFxmtkvhgLdWQYZyRmbmPFFgrrvPs11X7",
    imageAlt:
      "A macro close-up of high-speed data processor units on a motherboard",
  },
  {
    slug: "zero-trust-protocol-implementation",
    category: "Cybersecurity",
    title: "Zero-Trust Protocol Implementation",
    excerpt:
      "How to secure internal service communications in a multi-region cluster.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCZwhYJe3iCL9BMYywLyZtzMQEFPZuMNOTpHr5xK5reN3nnfbKIWrqPISJAUgdWsFPhpv9fx-RxcrDvt89aLg-SvWvVsvQxMDsdiVTr7SGHtNJDIIBMwETTOIh5DJE4jg1kcacrj1-coPz8L1c_Ck4eW1IvfpVY7fgKfWPxP6JVPWfu9GxhjJENPSCuPuVQOQWwVg8GAEuVS8nDKoJ27cg02FXotjkITegseYqtwvkXJJbvI1--bJZnQXU81ESzJG_wX4XY1cutf35M",
    imageAlt:
      "A stylized digital visualization of a global neural network",
  },
  {
    slug: "state-of-modern-ssr-2024",
    category: "Frontend",
    title: "The State of Modern SSR in 2024",
    excerpt:
      "Comparing hydration strategies across Next.js, Remix, and SvelteKit.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCbBGjjE6si866UClgs68k9nus7IAU3aWn3KTMRI_RFlPRxFy3WT9d-Qf8hYu0tGuBzzh0rF0WNlUExwFQdiXL8TGZN9piSJuVMnJM2s29rOGYHzZ-GIcDpXdEBiCALMlIsHqbpRK47ebKDOx-2e4YBOEigQW_jB37XSvjs-CRsREKcTqYL9TXHmsXSR6-bekdDNDFl4ECe3rRYP0brNVwKyVD-Ws3jX_GfXab-MY-QfEUZaocCv0tenLX2Dp4VZSepmV4-FEv_w9Se",
    imageAlt:
      "A high-contrast photo of an intricate microchip under a microscope",
  },
];

// Table of contents items (can be derived from content headings)
const tocItems = [
  { id: "01", label: "The Architectural Shift" },
  { id: "02", label: "Microservices vs Monolith" },
  { id: "03", label: "Database Sharding" },
  { id: "04", label: "Cost Optimization" },
];

export default function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const { data: post, isLoading, isError } = usePost(slug);
  const { data: postsData } = usePosts(true, 3, 1);

  // Use API related posts if available, otherwise fallback
  const apiRelatedPosts: Post[] = postsData?.data?.filter(
    (p: Post) => p.slug !== slug
  )?.slice(0, 3) || [];
  const displayRelatedPosts =
    apiRelatedPosts.length > 0
      ? apiRelatedPosts.map((p: Post, i: number) => ({
          slug: p.slug,
          category: p.category || relatedPosts[i % relatedPosts.length]?.category || "General",
          title: p.title,
          excerpt: p.excerpt || p.content?.substring(0, 120) + "...",
          image: p.image || relatedPosts[i % relatedPosts.length]?.image,
          imageAlt: relatedPosts[i % relatedPosts.length]?.imageAlt || p.title,
        }))
      : relatedPosts;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-32">
        <div className="text-center">
          <div className="spinner mx-auto" />
          <p className="mt-4 text-sm text-on-surface-variant">
            Loading post…
          </p>
        </div>
      </div>
    );
  }

  if (isError || !post) {
    return (
      <div className="py-12 max-w-[1200px] mx-auto px-6">
        <div className="card border-error-container mb-4">
          <p className="text-error text-sm">Post not found</p>
        </div>
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary/70 transition-colors"
        >
          <span className="material-symbols-outlined text-base">
            arrow_back
          </span>
          Back to blog
        </Link>
      </div>
    );
  }

  // Estimate read time (~200 words per minute)
  const wordCount = post.content?.split(/\s+/).length || 0;
  const readTime = Math.max(1, Math.ceil(wordCount / 200));

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const handleShare = async () => {
    if (typeof window !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          url: window.location.href,
        });
      } catch {
        // User cancelled or share not supported
      }
    }
  };

  return (
    <main className="pt-8 pb-20">
      {/* Hero Section */}
      <article className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-16">
          <div className="lg:col-span-8">
            {/* Breadcrumb / Back */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-primary-container hover:text-primary transition-colors mb-6"
            >
              <span className="material-symbols-outlined text-base">
                arrow_back
              </span>
              Back to Insights
            </Link>

            {/* Category & Read Time */}
            <div className="flex items-center gap-3 mb-6">
              {post.category && (
                <span className="bg-primary-container/10 text-primary-container px-3 py-1 text-xs font-bold uppercase tracking-widest border border-primary-container/20">
                  {post.category}
                </span>
              )}
              <span className="text-surface-variant text-sm font-bold uppercase tracking-widest">
                {readTime} Min Read
              </span>
            </div>

            {/* Title */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-on-surface leading-none mb-8 font-black tracking-tight">
              {post.title}
            </h1>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-primary-container/30 bg-brand-surface flex items-center justify-center">
                {post.author ? (
                  <span className="text-primary-container font-bold text-lg">
                    {post.author
                      .split(" ")
                      .map((n: string) => n[0])
                      .join("")
                      .toUpperCase()}
                  </span>
                ) : (
                  <span className="material-symbols-outlined text-primary-container">
                    person
                  </span>
                )}
              </div>
              <div>
                <p className="text-lg text-on-surface leading-tight font-bold">
                  {post.author || "Data Megathos"}
                </p>
                <p className="text-surface-variant text-sm font-bold uppercase tracking-tight">
                  {formatDate(post.createdAt)}
                </p>
              </div>
            </div>
          </div>

          {/* Share Buttons */}
          <div className="lg:col-span-4 flex justify-end">
            <div className="flex flex-col gap-4 w-full md:w-auto">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-surface-variant text-right">
                Share Protocol
              </p>
              <div className="flex gap-2 justify-end">
                <a
                  href={`mailto:?subject=${encodeURIComponent(post.title)}&body=${typeof window !== "undefined" ? window.location.href : ""}`}
                  className="p-3 bg-brand-surface border border-brand-border text-on-surface hover:border-primary-container hover:text-primary-container transition-all"
                  aria-label="Share via email"
                >
                  <span className="material-symbols-outlined text-xl">
                    alternate_email
                  </span>
                </a>
                <button
                  onClick={handleShare}
                  className="p-3 bg-brand-surface border border-brand-border text-on-surface hover:border-primary-container hover:text-primary-container transition-all"
                  aria-label="Share"
                >
                  <span className="material-symbols-outlined text-xl">
                    share
                  </span>
                </button>
                <button
                  onClick={handleCopyLink}
                  className="p-3 bg-brand-surface border border-brand-border text-on-surface hover:border-primary-container hover:text-primary-container transition-all"
                  aria-label="Copy link"
                >
                  <span className="material-symbols-outlined text-xl">
                    link
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        {post.image && (
          <div className="relative w-full h-[500px] mb-16 overflow-hidden border border-brand-border shadow-2xl">
            <img
              className="w-full h-full object-cover grayscale contrast-125 opacity-60"
              src={post.image}
              alt={post.title}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 flex gap-2">
              {post.featured && (
                <span className="bg-primary-container text-white px-2 py-1 text-[10px] font-bold uppercase">
                  Featured
                </span>
              )}
              <span className="bg-brand-surface border border-brand-border text-white px-2 py-1 text-[10px] font-bold uppercase">
                {post.views} views
              </span>
            </div>
          </div>
        )}

        {/* Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sidebar / TOC */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24 space-y-8">
              {/* Tags as TOC Index */}
              {post.tags && (
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-container mb-6">
                    Tags
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {(typeof post.tags === "string"
                      ? post.tags.split(",")
                      : post.tags
                    ).map((tag: string) => (
                      <span
                        key={tag.trim()}
                        className="badge badge-secondary cursor-pointer hover:opacity-80 transition-opacity"
                      >
                        #{tag.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA Sidebar Card */}
              <div className="p-6 bg-brand-surface border border-brand-border">
                <p className="text-xs font-bold text-on-surface mb-2">
                  Need a partner?
                </p>
                <p className="text-xs text-surface-variant mb-4">
                  Accelerate your engineering output with our fractional
                  CTO services.
                </p>
                <Link
                  href="/contact"
                  className="w-full bg-primary-container text-white py-2 text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all block text-center"
                >
                  Enquire
                </Link>
              </div>
            </div>
          </aside>

          {/* Rich Text Content */}
          <div className="lg:col-span-9 max-w-3xl">
            <div className="prose-dark">
              {post.excerpt && (
                <p className="text-xl leading-relaxed mb-8 text-on-surface/90 italic border-l-4 border-primary-container pl-6 py-2">
                  {post.excerpt}
                </p>
              )}
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            {/* Social Sharing Footer */}
            <div className="border-t border-brand-border mt-16 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold uppercase tracking-widest text-surface-variant">
                  Share Knowledge:
                </span>
                <div className="flex gap-2">
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${typeof window !== "undefined" ? encodeURIComponent(window.location.href) : ""}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center bg-brand-surface border border-brand-border rounded hover:border-primary-container transition-all"
                    aria-label="Share on Twitter"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="opacity-60"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(post.title + " " + (typeof window !== "undefined" ? window.location.href : ""))}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center bg-brand-surface border border-brand-border rounded hover:border-primary-container transition-all"
                    aria-label="Share on WhatsApp"
                  >
                    <span className="material-symbols-outlined text-sm opacity-60">
                      chat
                    </span>
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${typeof window !== "undefined" ? encodeURIComponent(window.location.href) : ""}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center bg-brand-surface border border-brand-border rounded hover:border-primary-container transition-all"
                    aria-label="Share on LinkedIn"
                  >
                    <span className="material-symbols-outlined text-sm opacity-60">
                      work
                    </span>
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyLink}
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary-container hover:underline"
              >
                <span className="material-symbols-outlined text-sm">
                  bookmark
                </span>
                Save for Later
              </button>
            </div>

            {/* Comment Section */}
            <CommentSection postId={post.id} />
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="bg-brand-surface/30 border-y border-brand-border mt-24 py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-2xl font-bold uppercase tracking-tight">
              Related{" "}
              <span className="text-primary-container">Insights</span>
            </h2>
            <Link
              className="text-sm font-bold uppercase tracking-widest text-surface-variant hover:text-on-surface transition-colors"
              href="/blog"
            >
              View All Archive →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {displayRelatedPosts.map((rp) => (
              <Link
                key={rp.slug}
                href={`/blog/${rp.slug}`}
                className="group bg-brand-surface border border-brand-border overflow-hidden hover:border-primary-container transition-all duration-300 block"
              >
                {rp.image && (
                  <div className="h-48 overflow-hidden">
                    <img
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      src={rp.image}
                      alt={rp.imageAlt || rp.title}
                    />
                  </div>
                )}
                <div className="p-6">
                  <span className="text-[10px] font-bold text-primary-container uppercase tracking-widest mb-4 block">
                    {rp.category}
                  </span>
                  <h3 className="font-bold text-xl mb-4 group-hover:text-primary-container transition-colors">
                    {rp.title}
                  </h3>
                  <p className="text-surface-variant text-sm line-clamp-2">
                    {rp.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
