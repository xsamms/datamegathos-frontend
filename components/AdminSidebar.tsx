"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/lib/useAuth";

const sidebarLinks = [
  { label: "Content Editor", href: "/admin/posts/create", icon: "edit_note" },
  { label: "All Posts", href: "/admin/posts", icon: "article" },
  { label: "Portfolio", href: "/admin/portfolio", icon: "work" },
  { label: "Assets", href: "/admin/assets", icon: "perm_media" },
  { label: "Settings", href: "/admin/settings", icon: "settings" },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const { user } = useAuth();

  return (
    <aside className="cms-sidebar">
      {/* User Info */}
      <div className="px-6 mb-8 flex items-center space-x-3">
        <div className="w-10 h-10 rounded-full border border-[var(--primary-container)] bg-[var(--brand-surface-elevated)] flex items-center justify-center text-sm font-bold text-[var(--primary-container)]">
          {user?.name?.charAt(0)?.toUpperCase() || "A"}
        </div>
        <div>
          <div className="text-[var(--primary-container)] font-bold text-sm">
            {user?.name || "Admin"}
          </div>
          <div className="text-[var(--outline)] text-xs">
            {user?.role || "Editor"}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1">
        {sidebarLinks.map((link) => {
          const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center px-6 py-3 text-sm transition-all duration-200 ${
                isActive
                  ? "bg-[var(--brand-surface)] text-[var(--primary-container)] border-r-4 border-[var(--primary-container)]"
                  : "text-[var(--outline)] hover:bg-[var(--brand-surface)]/50 hover:text-white"
              }`}
            >
              <span className="material-symbols-outlined mr-3 text-[20px]">
                {link.icon}
              </span>
              <span>{link.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Back to site */}
      <div className="px-6 py-4 border-t border-[var(--brand-border)]">
        <Link
          href="/"
          className="flex items-center text-xs text-[var(--outline)] hover:text-white transition-colors"
        >
          <span className="material-symbols-outlined mr-2 text-[16px]">
            arrow_back
          </span>
          Back to website
        </Link>
      </div>
    </aside>
  );
}
