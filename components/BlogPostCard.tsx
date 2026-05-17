"use client";

import Link from "next/link";
import { Post } from "@/lib/hooks";
import { formatDate } from "@/lib/utils";

interface BlogPostCardProps {
  post: Post;
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <article className="card group flex flex-col">
      {post.image && (
        <div className="relative h-48 -mx-8 -mt-8 mb-6 overflow-hidden rounded-t-[calc(var(--rounded-md)-1px)]">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      )}

      <div className="flex items-center gap-2 mb-3">
        {post.featured && (
          <span className="badge badge-warning">Featured</span>
        )}
        {post.category && (
          <span className="badge badge-primary">{post.category}</span>
        )}
      </div>

      <h2 className="text-lg font-bold text-on-surface mb-2 group-hover:text-primary transition-colors duration-200">
        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
      </h2>

      <p className="text-sm text-on-surface-variant leading-relaxed mb-4 flex-1">
        {post.excerpt || post.content.substring(0, 150) + "..."}
      </p>

      <div className="flex items-center justify-between text-xs text-outline pt-3 border-t border-outline-variant">
        <div className="flex items-center gap-3">
          {post.author && (
            <span className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              {post.author}
            </span>
          )}
          <span>{formatDate(post.createdAt)}</span>
        </div>
        <span className="flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          {post.views}
        </span>
      </div>
    </article>
  );
}
