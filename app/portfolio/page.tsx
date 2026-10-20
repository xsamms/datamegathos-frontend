"use client";

import { useState } from "react";
import { usePortfolioItems, PortfolioItem } from "@/lib/hooks";

type Category = "All" | "Mobile" | "Web" | "AI" | "CMS";

const categories: Category[] = ["All", "Mobile", "Web", "AI", "CMS"];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<Category>("All");
  const [page, setPage] = useState(1);
  const limit = 12;

  // Fetch published portfolio items from the database
  const { data, isLoading } = usePortfolioItems(
    activeFilter !== "All" ? activeFilter : undefined,
    true, // only published
    limit,
    page
  );

  const projects: PortfolioItem[] = data?.data || [];
  const pagination = data?.pagination || {};

  const handleFilterChange = (cat: Category) => {
    setActiveFilter(cat);
    setPage(1); // Reset to first page on filter change
  };

  return (
    <div className="flex flex-col gap-8 py-10 px-4 lg:px-10">
      {/* Page Header */}
      <div className="flex flex-col gap-4 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight">
          Portfolio &amp; Case Studies
        </h1>
        <p className="text-on-surface-variant text-lg font-normal leading-relaxed">
          Explore our recent projects across Mobile, Web, AI, and CMS
          development. See how we&apos;ve helped businesses achieve their
          digital goals.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex gap-3 flex-wrap overflow-x-auto pb-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleFilterChange(cat)}
            className={`flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg px-6 text-sm font-bold leading-normal transition-colors ${
              activeFilter === cat
                ? "bg-primary text-white"
                : "bg-brand-surface border border-brand-border hover:bg-primary/20"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      {isLoading ? (
        <div className="flex items-center justify-center py-32">
          <div className="text-center">
            <div className="spinner mx-auto" />
            <p className="mt-4 text-sm text-on-surface-variant">
              Loading projects…
            </p>
          </div>
        </div>
      ) : projects.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <span className="material-symbols-outlined text-5xl text-outline mb-4">
            work
          </span>
          <p className="text-on-surface-variant text-lg mb-2">
            No projects found{activeFilter !== "All" ? ` in ${activeFilter}` : ""}.
          </p>
          <p className="text-on-surface-variant text-sm">
            Check back soon for exciting new case studies.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          {projects.map((project) => {
            // Parse techs from JSON string
            let techs: string[] = [];
            try {
              techs = project.techs ? JSON.parse(project.techs) : [];
            } catch {
              techs = project.techs ? [project.techs] : [];
            }

            return (
              <article
                key={project.id}
                className="flex flex-col gap-4 group cursor-pointer"
              >
                {/* Project Image */}
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl overflow-hidden relative shadow-lg"
                  style={{ backgroundImage: `url("${project.image}")` }}
                >
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-primary text-white px-6 py-2 rounded-full font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      View Case Study
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold leading-normal group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <span className="bg-brand-surface text-xs font-bold px-2 py-1 rounded text-primary border border-brand-border shrink-0 ml-2">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-on-surface-variant text-sm font-normal leading-normal">
                    {project.description}
                  </p>
                  {project.client && (
                    <p className="text-on-surface-variant text-xs mt-1">
                      Client: {project.client}
                    </p>
                  )}
                  <div className="flex items-center gap-2 mt-2 flex-wrap">
                    {techs.map((tech: string) => (
                      <span
                        key={tech}
                        className="text-xs font-medium text-on-surface-variant bg-brand-surface border border-brand-border px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary font-medium hover:underline text-sm gap-1 mt-2"
                    >
                      View Live Site
                      <span className="material-symbols-outlined text-base">
                        open_in_new
                      </span>
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      )}

      {/* Pagination */}
      {pagination.pages && pagination.pages > 1 && (
        <div className="flex items-center justify-center py-8 gap-2">
          <button
            onClick={() => setPage(Math.max(1, page - 1))}
            disabled={page === 1}
            className="flex size-10 items-center justify-center text-outline hover:text-primary transition-colors disabled:cursor-not-allowed disabled:opacity-50"
            aria-label="Previous page"
          >
            <span className="material-symbols-outlined text-[18px]">
              chevron_left
            </span>
          </button>
          {Array.from({ length: pagination.pages }, (_, i) => i + 1).map(
            (p) => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`text-sm font-bold leading-normal flex size-10 items-center justify-center rounded-lg transition-colors ${
                  p === page
                    ? "text-white bg-primary"
                    : "font-medium hover:bg-brand-surface"
                }`}
                aria-current={p === page ? "page" : undefined}
              >
                {p}
              </button>
            )
          )}
          <button
            onClick={() => setPage(Math.min(pagination.pages, page + 1))}
            disabled={page === pagination.pages}
            className="flex size-10 items-center justify-center text-outline hover:text-primary transition-colors disabled:cursor-not-allowed disabled:opacity-50"
            aria-label="Next page"
          >
            <span className="material-symbols-outlined text-[18px]">
              chevron_right
            </span>
          </button>
        </div>
      )}
    </div>
  );
}
