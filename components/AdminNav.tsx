"use client";

import { useAuth } from "@/lib/useAuth";

interface AdminNavProps {
  onSaveDraft?: () => void;
  onPublish?: () => void;
  isSaving?: boolean;
  isPublishing?: boolean;
}

export function AdminNav({
  onSaveDraft,
  onPublish,
  isSaving,
  isPublishing,
}: AdminNavProps) {
  const { logout, isLoggingOut } = useAuth();

  return (
    <nav className="cms-topnav">
      <div className="flex justify-between items-center px-6 h-16 max-w-full mx-auto">
        {/* Brand */}
        <div className="text-xl font-bold tracking-tighter text-[var(--primary-container)] antialiased">
          Data Megathos CMS
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-3">
          {onSaveDraft && (
            <button
              onClick={onSaveDraft}
              disabled={isSaving}
              className="bg-[var(--brand-surface)] border border-[var(--brand-border)] px-4 py-2 text-sm font-bold text-white hover:bg-[var(--brand-surface-elevated)] transition-all active:scale-95 duration-200 disabled:opacity-50"
            >
              {isSaving ? "Saving…" : "Save Draft"}
            </button>
          )}
          {onPublish && (
            <button
              onClick={onPublish}
              disabled={isPublishing}
              className="bg-[var(--primary-container)] px-4 py-2 text-sm font-bold text-white hover:opacity-90 transition-all active:scale-95 duration-200 disabled:opacity-50"
            >
              {isPublishing ? "Publishing…" : "Publish"}
            </button>
          )}
          <button
            onClick={logout}
            disabled={isLoggingOut}
            className="bg-transparent border border-[var(--brand-border)] px-4 py-2 text-sm font-bold text-[var(--outline)] hover:text-white hover:border-[var(--primary-container)] transition-all active:scale-95 duration-200"
          >
            <span className="material-symbols-outlined text-[18px] align-middle mr-1">
              logout
            </span>
            {isLoggingOut ? "…" : "Logout"}
          </button>
        </div>
      </div>
    </nav>
  );
}
