"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/lib/useAuth";
import { usePosts, useDeletePost, Post } from "@/lib/hooks";
import { formatDate } from "@/lib/utils";
import { AdminSidebar } from "@/components/AdminSidebar";
import { AdminNav } from "@/components/AdminNav";

export default function AllPostsPage() {
  const router = useRouter();
  const { isLoading: authLoading, isAuthenticated } = useAuth();
  const deletePost = useDeletePost();

  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState<"all" | "published" | "drafts">("all");
  const limit = 10;

  // Fetch all posts (published + drafts) for admin view
  const publishedParam =
    filter === "published" ? true : filter === "drafts" ? false : undefined;
  const { data, isLoading, refetch } = usePosts(publishedParam, limit, page);

  const posts: Post[] = data?.data || [];
  const pagination = data?.pagination || {};

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      router.push("/admin/login");
    }
  }, [authLoading, isAuthenticated, router]);

  const handleDelete = async (slug: string, title: string) => {
    if (!confirm(`Delete "${title}"? This action cannot be undone.`)) return;
    try {
      await deletePost.mutateAsync(slug);
    } catch {
      alert("Failed to delete post.");
    }
  };

  if (authLoading) {
    return (
      <div className="min-h-screen bg-[var(--brand-bg)] flex items-center justify-center">
        <div className="text-center">
          <div className="spinner mx-auto" />
          <p className="mt-4 text-sm text-[var(--outline)]">Loading CMS…</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) return null;

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-[var(--surface)]">
      <AdminNav />

      <div className="flex flex-1 overflow-hidden">
        <AdminSidebar />

        <main className="flex-1 overflow-y-auto cms-scrollbar bg-[var(--surface)] p-8">
          <div className="max-w-[1200px] mx-auto">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
              <div>
                <h1 className="text-3xl font-black text-white tracking-tight">
                  All Posts
                </h1>
                <p className="text-sm text-[var(--outline)] mt-1">
                  Manage, edit, and organize your blog content.
                </p>
              </div>
              <Link
                href="/admin/posts/create"
                className="bg-[var(--primary-container)] text-white px-5 py-3 font-bold text-sm uppercase tracking-widest hover:opacity-90 transition-all active:scale-95 flex items-center gap-2 self-start"
              >
                <span className="material-symbols-outlined text-[18px]">
                  add
                </span>
                New Post
              </Link>
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-1 mb-6 bg-[var(--brand-surface)] border border-[var(--brand-border)] p-1 w-fit">
              {(["all", "published", "drafts"] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => {
                    setFilter(f);
                    setPage(1);
                  }}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all ${
                    filter === f
                      ? "bg-[var(--primary-container)] text-white"
                      : "text-[var(--outline)] hover:text-white"
                  }`}
                >
                  {f === "all"
                    ? `All (${pagination.total ?? "…"})`
                    : f === "published"
                      ? "Published"
                      : "Drafts"}
                </button>
              ))}
            </div>

            {/* Posts Table */}
            {isLoading ? (
              <div className="flex items-center justify-center py-20">
                <div className="text-center">
                  <div className="spinner mx-auto" />
                  <p className="mt-4 text-sm text-[var(--outline)]">
                    Loading posts…
                  </p>
                </div>
              </div>
            ) : posts.length === 0 ? (
              <div className="text-center py-20 bg-[var(--brand-surface)] border border-[var(--brand-border)]">
                <span className="material-symbols-outlined text-5xl text-[var(--outline-variant)] mb-4 block">
                  article
                </span>
                <p className="text-[var(--outline)] mb-2">No posts found.</p>
                <Link
                  href="/admin/posts/create"
                  className="text-[var(--primary-container)] text-sm font-bold hover:underline"
                >
                  Create your first post →
                </Link>
              </div>
            ) : (
              <div className="bg-[var(--brand-surface)] border border-[var(--brand-border)] overflow-hidden">
                {/* Table Header */}
                <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3 border-b border-[var(--brand-border)] text-[10px] font-bold uppercase tracking-widest text-[var(--outline)]">
                  <div className="col-span-5">Title</div>
                  <div className="col-span-2">Category</div>
                  <div className="col-span-1 text-center">Status</div>
                  <div className="col-span-1 text-center">Views</div>
                  <div className="col-span-2">Date</div>
                  <div className="col-span-1 text-right">Actions</div>
                </div>

                {/* Rows */}
                {posts.map((post) => (
                  <div
                    key={post.id}
                    className="grid grid-cols-1 md:grid-cols-12 gap-4 px-6 py-4 border-b border-[var(--brand-border)] last:border-b-0 hover:bg-[var(--brand-surface-elevated)]/30 transition-colors items-center group"
                  >
                    {/* Title & Image */}
                    <div className="col-span-5 flex items-center gap-4">
                      {post.image ? (
                        <img
                          src={post.image}
                          alt=""
                          className="w-12 h-12 object-cover rounded shrink-0 border border-[var(--brand-border)]"
                        />
                      ) : (
                        <div className="w-12 h-12 bg-[var(--brand-bg)] border border-[var(--brand-border)] rounded flex items-center justify-center shrink-0">
                          <span className="material-symbols-outlined text-[var(--outline-variant)] text-lg">
                            image
                          </span>
                        </div>
                      )}
                      <div className="min-w-0">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="font-bold text-sm text-white hover:text-[var(--primary-container)] transition-colors block truncate"
                        >
                          {post.title}
                        </Link>
                        <p className="text-[11px] text-[var(--outline)] truncate">
                          /blog/{post.slug}
                        </p>
                      </div>
                    </div>

                    {/* Category */}
                    <div className="col-span-2">
                      <span className="text-xs text-[var(--outline)]">
                        {post.category || "—"}
                      </span>
                    </div>

                    {/* Status */}
                    <div className="col-span-1 text-center">
                      {post.published ? (
                        <span className="inline-flex items-center gap-1 bg-[var(--tertiary-container)]/20 text-[var(--tertiary)] text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                          <span className="w-1.5 h-1.5 bg-[var(--tertiary)] rounded-full" />
                          Live
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 bg-[var(--surface-container-high)] text-[var(--outline)] text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                          <span className="w-1.5 h-1.5 bg-[var(--outline)] rounded-full" />
                          Draft
                        </span>
                      )}
                    </div>

                    {/* Views */}
                    <div className="col-span-1 text-center text-xs text-[var(--outline)]">
                      {post.views}
                    </div>

                    {/* Date */}
                    <div className="col-span-2 text-xs text-[var(--outline)]">
                      {formatDate(post.createdAt)}
                    </div>

                    {/* Actions */}
                    <div className="col-span-1 flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="p-2 hover:bg-[var(--brand-bg)] rounded transition-colors text-[var(--outline)] hover:text-white"
                        title="View"
                      >
                        <span className="material-symbols-outlined text-[18px]">
                          visibility
                        </span>
                      </Link>
                      <button
                        onClick={() => handleDelete(post.slug, post.title)}
                        disabled={deletePost.isPending}
                        className="p-2 hover:bg-[var(--error-container)]/30 rounded transition-colors text-[var(--outline)] hover:text-[var(--error)]"
                        title="Delete"
                      >
                        <span className="material-symbols-outlined text-[18px]">
                          delete
                        </span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Pagination */}
            {pagination.pages && pagination.pages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-8">
                <button
                  onClick={() => setPage(Math.max(1, page - 1))}
                  disabled={page === 1}
                  className="px-4 py-2 bg-[var(--brand-surface)] border border-[var(--brand-border)] text-sm font-bold text-[var(--outline)] hover:text-white disabled:opacity-40 transition-all"
                >
                  Previous
                </button>
                <span className="text-xs text-[var(--outline)] px-4">
                  Page {page} of {pagination.pages}
                </span>
                <button
                  onClick={() =>
                    setPage(Math.min(pagination.pages, page + 1))
                  }
                  disabled={page === pagination.pages}
                  className="px-4 py-2 bg-[var(--brand-surface)] border border-[var(--brand-border)] text-sm font-bold text-[var(--outline)] hover:text-white disabled:opacity-40 transition-all"
                >
                  Next
                </button>
              </div>
            )}

            {/* Footer */}
            <footer className="w-full border-t border-[var(--brand-border)] mt-16 text-xs uppercase tracking-widest">
              <div className="py-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[var(--outline-variant)]">
                <div>
                  © {new Date().getFullYear()} Data Megathos Engineering.
                </div>
              </div>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}
