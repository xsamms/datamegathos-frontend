"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/useAuth";
import { AdminSidebar } from "@/components/AdminSidebar";
import { AdminNav } from "@/components/AdminNav";

interface UploadedAsset {
  name: string;
  url: string;
  size: string;
  type: string;
  uploadedAt: string;
}

export default function AdminAssetsPage() {
  const router = useRouter();
  const { isLoading: authLoading, isAuthenticated } = useAuth();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [assets, setAssets] = useState<UploadedAsset[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const [copiedUrl, setCopiedUrl] = useState("");

  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      router.push("/admin/login");
    }
  }, [authLoading, isAuthenticated, router]);

  // Load assets from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("dm-admin-assets");
    if (stored) {
      try {
        setAssets(JSON.parse(stored));
      } catch {
        // Ignore invalid JSON
      }
    }
  }, []);

  const saveAssets = (newAssets: UploadedAsset[]) => {
    setAssets(newAssets);
    localStorage.setItem("dm-admin-assets", JSON.stringify(newAssets));
  };

  const uploadFile = useCallback(
    async (file: File) => {
      setIsUploading(true);
      setUploadError("");
      try {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("folder", "assets");

        const res = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });

        if (!res.ok) {
          const data = await res.json();
          throw new Error(data.error || "Upload failed");
        }

        const data = await res.json();
        const newAsset: UploadedAsset = {
          name: file.name,
          url: data.url,
          size: formatFileSize(file.size),
          type: file.type,
          uploadedAt: new Date().toISOString(),
        };

        saveAssets([newAsset, ...assets]);
      } catch (err) {
        setUploadError(
          err instanceof Error ? err.message : "Upload failed"
        );
      } finally {
        setIsUploading(false);
      }
    },
    [assets]
  );

  const handleFileDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragOver(false);
      const file = e.dataTransfer.files[0];
      if (file) uploadFile(file);
    },
    [uploadFile]
  );

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) uploadFile(file);
  };

  const handleCopyUrl = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedUrl(url);
    setTimeout(() => setCopiedUrl(""), 2000);
  };

  const handleDeleteAsset = (index: number) => {
    const updated = assets.filter((_, i) => i !== index);
    saveAssets(updated);
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
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-black text-white tracking-tight">
                Assets
              </h1>
              <p className="text-sm text-[var(--outline)] mt-1">
                Upload and manage media assets for posts and portfolio.
              </p>
            </div>

            {/* Upload Zone */}
            <div
              onClick={() => fileInputRef.current?.click()}
              onDragOver={(e) => {
                e.preventDefault();
                setIsDragOver(true);
              }}
              onDragLeave={() => setIsDragOver(false)}
              onDrop={handleFileDrop}
              className={`relative w-full h-48 border-2 border-dashed flex flex-col items-center justify-center cursor-pointer transition-all mb-8 ${
                isDragOver
                  ? "border-[var(--primary-container)] bg-[var(--primary-container)]/5"
                  : "border-[var(--brand-border)] bg-[var(--brand-surface)] hover:border-[var(--primary-container)]"
              }`}
            >
              {isUploading ? (
                <>
                  <div className="spinner !w-8 !h-8 !border-2 mb-3" />
                  <p className="text-white font-bold text-sm">Uploading…</p>
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-4xl text-[var(--primary-container)] mb-3">
                    cloud_upload
                  </span>
                  <p className="text-white font-bold text-sm">
                    Drag and drop files here, or click to browse
                  </p>
                  <p className="text-xs text-[var(--outline)] mt-1">
                    Images (PNG, JPG, WebP, GIF) up to 10MB
                  </p>
                </>
              )}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/jpeg,image/png,image/webp,image/gif"
                onChange={handleFileSelect}
                className="hidden"
              />
            </div>

            {/* Upload Error */}
            {uploadError && (
              <div className="mb-6 bg-[var(--error-container)] border border-[var(--error-container)] text-[var(--on-error-container)] px-4 py-3 text-sm flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">
                  error
                </span>
                {uploadError}
                <button
                  onClick={() => setUploadError("")}
                  className="ml-auto hover:opacity-70"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    close
                  </span>
                </button>
              </div>
            )}

            {/* Assets Grid */}
            {assets.length === 0 ? (
              <div className="text-center py-20 bg-[var(--brand-surface)] border border-[var(--brand-border)]">
                <span className="material-symbols-outlined text-5xl text-[var(--outline-variant)] mb-4 block">
                  perm_media
                </span>
                <p className="text-[var(--outline)] mb-2">
                  No assets uploaded yet.
                </p>
                <p className="text-xs text-[var(--outline-variant)]">
                  Upload images to use across your posts and portfolio.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {assets.map((asset, index) => (
                  <div
                    key={`${asset.url}-${index}`}
                    className="bg-[var(--brand-surface)] border border-[var(--brand-border)] overflow-hidden group hover:border-[var(--primary-container)] transition-all"
                  >
                    {/* Preview */}
                    <div className="relative aspect-square overflow-hidden bg-[var(--brand-bg)]">
                      <img
                        src={asset.url}
                        alt={asset.name}
                        className="w-full h-full object-cover"
                      />
                      {/* Overlay Actions */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                        <button
                          onClick={() => handleCopyUrl(asset.url)}
                          className="p-2 bg-[var(--brand-surface)] border border-[var(--brand-border)] text-white hover:border-[var(--primary-container)] transition-all"
                          title="Copy URL"
                        >
                          <span className="material-symbols-outlined text-[18px]">
                            {copiedUrl === asset.url
                              ? "check"
                              : "content_copy"}
                          </span>
                        </button>
                        <a
                          href={asset.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-[var(--brand-surface)] border border-[var(--brand-border)] text-white hover:border-[var(--primary-container)] transition-all"
                          title="Open in new tab"
                        >
                          <span className="material-symbols-outlined text-[18px]">
                            open_in_new
                          </span>
                        </a>
                        <button
                          onClick={() => handleDeleteAsset(index)}
                          className="p-2 bg-[var(--brand-surface)] border border-[var(--brand-border)] text-white hover:border-[var(--error)] hover:text-[var(--error)] transition-all"
                          title="Remove from list"
                        >
                          <span className="material-symbols-outlined text-[18px]">
                            delete
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="p-3">
                      <p className="text-xs font-bold text-white truncate">
                        {asset.name}
                      </p>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-[10px] text-[var(--outline-variant)]">
                          {asset.size}
                        </span>
                        <span className="text-[10px] text-[var(--outline-variant)] uppercase">
                          {asset.type.split("/")[1]}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
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

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return bytes + " B";
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
  return (bytes / (1024 * 1024)).toFixed(1) + " MB";
}
