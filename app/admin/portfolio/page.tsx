"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/lib/useAuth";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { formatDate } from "@/lib/utils";
import { AdminSidebar } from "@/components/AdminSidebar";
import { AdminNav } from "@/components/AdminNav";

interface PortfolioItem {
  id: number;
  title: string;
  slug: string;
  description: string;
  client?: string;
  category: string;
  techs?: string;
  image: string;
  liveUrl?: string;
  featured: boolean;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

function usePortfolioAdmin(limit = 20, page = 1) {
  return useQuery({
    queryKey: ["portfolio-admin", { limit, page }],
    queryFn: async () => {
      const params = new URLSearchParams({
        limit: limit.toString(),
        page: page.toString(),
        published: "false", // Fetch all (including unpublished)
      });
      const response = await fetch(`/api/portfolio?${params}`);
      if (!response.ok) throw new Error("Failed to fetch portfolio items");
      return response.json();
    },
  });
}

function useDeletePortfolio() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (slug: string) => {
      const response = await fetch(`/api/portfolio/${slug}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete portfolio item");
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["portfolio-admin"] });
    },
  });
}

export default function AdminPortfolioPage() {
  const router = useRouter();
  const { isLoading: authLoading, isAuthenticated } = useAuth();
  const deletePortfolio = useDeletePortfolio();

  const [page, setPage] = useState(1);
  const limit = 20;
  const { data, isLoading } = usePortfolioAdmin(limit, page);

  const items: PortfolioItem[] = data?.data || [];
  const pagination = data?.pagination || {};

  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      router.push("/admin/login");
    }
  }, [authLoading, isAuthenticated, router]);

  const handleDelete = async (slug: string, title: string) => {
    if (!confirm(`Delete "${title}"? This action cannot be undone.`)) return;
    try {
      await deletePortfolio.mutateAsync(slug);
    } catch {
      alert("Failed to delete portfolio item.");
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
                  Portfolio
                </h1>
                <p className="text-sm text-[var(--outline)] mt-1">
                  Manage your portfolio projects and case studies.
                </p>
              </div>
              <button
                disabled
                className="bg-[var(--primary-container)] text-white px-5 py-3 font-bold text-sm uppercase tracking-widest opacity-50 flex items-center gap-2 self-start cursor-not-allowed"
                title="Create from the Portfolio API"
              >
                <span className="material-symbols-outlined text-[18px]">
                  add
                </span>
                New Project
              </button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                {
                  label: "Total Projects",
                  value: pagination.total ?? "—",
                  icon: "work",
                },
                {
                  label: "Published",
                  value: items.filter((i) => i.published).length,
                  icon: "public",
                },
                {
                  label: "Featured",
                  value: items.filter((i) => i.featured).length,
                  icon: "star",
                },
                {
                  label: "Categories",
                  value: new Set(items.map((i) => i.category)).size,
                  icon: "category",
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[var(--brand-surface)] border border-[var(--brand-border)] p-5"
                >
                  <div className="flex items-center gap-2 text-[var(--outline)] mb-2">
                    <span className="material-symbols-outlined text-[16px]">
                      {stat.icon}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest">
                      {stat.label}
                    </span>
                  </div>
                  <p className="text-2xl font-black text-white">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Portfolio Grid */}
            {isLoading ? (
              <div className="flex items-center justify-center py-20">
                <div className="text-center">
                  <div className="spinner mx-auto" />
                  <p className="mt-4 text-sm text-[var(--outline)]">
                    Loading portfolio…
                  </p>
                </div>
              </div>
            ) : items.length === 0 ? (
              <div className="text-center py-20 bg-[var(--brand-surface)] border border-[var(--brand-border)]">
                <span className="material-symbols-outlined text-5xl text-[var(--outline-variant)] mb-4 block">
                  work
                </span>
                <p className="text-[var(--outline)] mb-2">
                  No portfolio projects yet.
                </p>
                <p className="text-xs text-[var(--outline-variant)]">
                  Create portfolio items via the API.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-[var(--brand-surface)] border border-[var(--brand-border)] overflow-hidden group hover:border-[var(--primary-container)] transition-all"
                  >
                    {/* Image */}
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                      <div className="absolute top-2 right-2 flex gap-1">
                        {item.featured && (
                          <span className="bg-[var(--primary-container)] text-white px-2 py-0.5 text-[10px] font-bold uppercase">
                            Featured
                          </span>
                        )}
                        {!item.published && (
                          <span className="bg-[var(--surface-container-high)] text-[var(--outline)] px-2 py-0.5 text-[10px] font-bold uppercase">
                            Draft
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <span className="text-[10px] font-bold text-[var(--primary-container)] uppercase tracking-widest mb-2 block">
                        {item.category}
                      </span>
                      <h3 className="font-bold text-white mb-2 group-hover:text-[var(--primary-container)] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[var(--outline)] line-clamp-2 mb-3">
                        {item.description}
                      </p>
                      {item.client && (
                        <p className="text-[10px] text-[var(--outline-variant)] uppercase tracking-wider mb-3">
                          Client: {item.client}
                        </p>
                      )}

                      {/* Actions */}
                      <div className="flex items-center justify-between pt-3 border-t border-[var(--brand-border)]">
                        <span className="text-[10px] text-[var(--outline-variant)]">
                          {formatDate(item.createdAt)}
                        </span>
                        <div className="flex gap-1">
                          <Link
                            href={`/portfolio`}
                            className="p-1.5 hover:bg-[var(--brand-bg)] rounded transition-colors text-[var(--outline)] hover:text-white"
                            title="View on site"
                          >
                            <span className="material-symbols-outlined text-[16px]">
                              visibility
                            </span>
                          </Link>
                          <button
                            onClick={() =>
                              handleDelete(item.slug, item.title)
                            }
                            disabled={deletePortfolio.isPending}
                            className="p-1.5 hover:bg-[var(--error-container)]/30 rounded transition-colors text-[var(--outline)] hover:text-[var(--error)]"
                            title="Delete"
                          >
                            <span className="material-symbols-outlined text-[16px]">
                              delete
                            </span>
                          </button>
                        </div>
                      </div>
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
              <div className="py-8 flex justify-between items-center text-[var(--outline-variant)]">
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
