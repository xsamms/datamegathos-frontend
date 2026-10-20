"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useAuth } from "@/lib/useAuth";
import { useCreatePortfolio } from "@/lib/hooks";
import { AdminSidebar } from "@/components/AdminSidebar";
import { AdminNav } from "@/components/AdminNav";

const CATEGORIES = ["Web", "Mobile", "AI", "CMS"];

function generateSlug(title: string) {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default function CreatePortfolioPage() {
  const router = useRouter();
  const { isLoading: authLoading, isAuthenticated } = useAuth();
  const createPortfolio = useCreatePortfolio();
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Form state
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [client, setClient] = useState("");
  const [liveUrl, setLiveUrl] = useState("");
  const [techs, setTechs] = useState<string[]>([]);
  const [techInput, setTechInput] = useState("");
  const [featured, setFeatured] = useState(false);
  const [visibility, setVisibility] = useState<"public" | "private">("public");

  // Image state
  const [imageUrl, setImageUrl] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);

  // Status
  const [isSavingDraft, setIsSavingDraft] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      router.push("/admin/login");
    }
  }, [authLoading, isAuthenticated, router]);

  // Auto-generate slug from title
  const handleTitleChange = (value: string) => {
    setTitle(value);
    setSlug(generateSlug(value));
  };

  // Image upload
  const uploadImage = useCallback(async (file: File) => {
    setIsUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("folder", "portfolio");

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Upload failed");
      }

      const data = await res.json();
      setImageUrl(data.url);
      setImagePreview(data.url);
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : "Image upload failed"
      );
    } finally {
      setIsUploading(false);
    }
  }, []);

  const handleFileDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragOver(false);
      const file = e.dataTransfer.files[0];
      if (file && file.type.startsWith("image/")) {
        uploadImage(file);
      }
    },
    [uploadImage]
  );

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) uploadImage(file);
  };

  // Techs management
  const addTech = () => {
    const tech = techInput.trim();
    if (tech && !techs.includes(tech)) {
      setTechs([...techs, tech]);
      setTechInput("");
    }
  };

  const removeTech = (techToRemove: string) => {
    setTechs(techs.filter((t) => t !== techToRemove));
  };

  // Completeness score
  const completenessScore = Math.min(
    100,
    Math.round(
      (title.length > 5 ? 20 : 0) +
        (description.length > 20 ? 20 : 0) +
        (imageUrl ? 25 : 0) +
        (techs.length > 0 ? 15 : 0) +
        (client ? 10 : 0) +
        (liveUrl ? 10 : 0)
    )
  );

  // Submit handlers
  const handleSaveDraft = async () => {
    if (!title.trim() || !description.trim()) {
      setSubmitError("Title and description are required");
      return;
    }
    if (!imageUrl) {
      setSubmitError("A project image is required");
      return;
    }
    setIsSavingDraft(true);
    setSubmitError("");
    try {
      await createPortfolio.mutateAsync({
        title,
        slug: slug || generateSlug(title),
        description,
        client: client || undefined,
        category,
        techs: techs.length > 0 ? JSON.stringify(techs) : undefined,
        image: imageUrl,
        liveUrl: liveUrl || undefined,
        featured,
        published: false,
      });
      setSubmitSuccess(true);
      setTimeout(() => router.push("/admin/portfolio"), 1500);
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : "Failed to save draft"
      );
    } finally {
      setIsSavingDraft(false);
    }
  };

  const handlePublish = async () => {
    if (!title.trim() || !description.trim()) {
      setSubmitError("Title and description are required");
      return;
    }
    if (!imageUrl) {
      setSubmitError("A project image is required");
      return;
    }
    setSubmitError("");
    try {
      await createPortfolio.mutateAsync({
        title,
        slug: slug || generateSlug(title),
        description,
        client: client || undefined,
        category,
        techs: techs.length > 0 ? JSON.stringify(techs) : undefined,
        image: imageUrl,
        liveUrl: liveUrl || undefined,
        featured,
        published: visibility === "public",
      });
      setSubmitSuccess(true);
      setTimeout(() => router.push("/admin/portfolio"), 1500);
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : "Failed to publish"
      );
    }
  };

  // Loading state
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
      {/* Top Nav */}
      <AdminNav
        onSaveDraft={handleSaveDraft}
        onPublish={handlePublish}
        isSaving={isSavingDraft}
        isPublishing={createPortfolio.isPending && !isSavingDraft}
      />

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <AdminSidebar />

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto cms-scrollbar bg-[var(--surface)] p-8">
          {/* Success Banner */}
          {submitSuccess && (
            <div className="mb-6 bg-[var(--tertiary-container)] border border-[var(--tertiary-container)] text-[var(--on-tertiary-container)] px-4 py-3 text-sm rounded flex items-center gap-2 animate-[slideUp_200ms_var(--ease-out)]">
              <span className="material-symbols-outlined text-[18px]">
                check_circle
              </span>
              Portfolio project saved successfully! Redirecting…
            </div>
          )}

          {/* Error Banner */}
          {submitError && (
            <div className="mb-6 bg-[var(--error-container)] border border-[var(--error-container)] text-[var(--on-error-container)] px-4 py-3 text-sm rounded flex items-center gap-2 animate-[slideUp_200ms_var(--ease-out)]">
              <span className="material-symbols-outlined text-[18px]">
                error
              </span>
              {submitError}
              <button
                onClick={() => setSubmitError("")}
                className="ml-auto text-[var(--on-error-container)] hover:opacity-70"
              >
                <span className="material-symbols-outlined text-[18px]">
                  close
                </span>
              </button>
            </div>
          )}

          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column — Main Fields */}
            <div className="lg:col-span-8 space-y-8">
              {/* Title */}
              <section className="space-y-3">
                <label
                  htmlFor="portfolio-title"
                  className="text-label-sm text-[var(--primary-container)]"
                >
                  Project Title
                </label>
                <input
                  id="portfolio-title"
                  type="text"
                  value={title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  placeholder="Enter project title..."
                  className="w-full bg-[var(--brand-surface)] border border-[var(--brand-border)] p-6 text-2xl md:text-3xl font-bold text-white placeholder-[var(--outline-variant)] focus:outline-none focus:border-[var(--primary-container)] transition-colors"
                />
              </section>

              {/* Category + Slug */}
              <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label
                    htmlFor="portfolio-category"
                    className="text-label-sm text-[var(--primary-container)]"
                  >
                    Category
                  </label>
                  <select
                    id="portfolio-category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full bg-[var(--brand-surface)] border border-[var(--brand-border)] p-4 text-white focus:outline-none focus:border-[var(--primary-container)] appearance-none cursor-pointer"
                  >
                    {CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-3">
                  <label
                    htmlFor="portfolio-slug"
                    className="text-label-sm text-[var(--primary-container)]"
                  >
                    URL Slug
                  </label>
                  <div className="flex items-center bg-[var(--brand-surface)] border border-[var(--brand-border)] p-4 text-[var(--outline)]">
                    <span className="text-sm shrink-0">megathos.io/portfolio/</span>
                    <input
                      id="portfolio-slug"
                      type="text"
                      value={slug}
                      onChange={(e) => setSlug(e.target.value)}
                      placeholder="project-slug"
                      className="bg-transparent border-none p-0 focus:ring-0 focus:outline-none text-white w-full ml-1 text-sm"
                    />
                  </div>
                </div>
              </section>

              {/* Featured Image */}
              <section className="space-y-3">
                <label className="text-label-sm text-[var(--primary-container)]">
                  Project Image
                </label>
                <div
                  onClick={() => fileInputRef.current?.click()}
                  onDragOver={(e) => {
                    e.preventDefault();
                    setIsDragOver(true);
                  }}
                  onDragLeave={() => setIsDragOver(false)}
                  onDrop={handleFileDrop}
                  className={`relative w-full aspect-video bg-[var(--brand-surface)] border-2 border-dashed flex flex-col items-center justify-center group cursor-pointer transition-all overflow-hidden ${
                    isDragOver
                      ? "border-[var(--primary-container)] bg-[var(--primary-container)]/5"
                      : "border-[var(--brand-border)] hover:border-[var(--primary-container)]"
                  }`}
                >
                  {/* Preview */}
                  {imagePreview && (
                    <Image
                      src={imagePreview}
                      alt="Project image preview"
                      fill
                      className="object-cover opacity-30 group-hover:scale-105 transition-transform duration-500"
                    />
                  )}

                  {/* Upload indicator */}
                  <div className="relative z-10 flex flex-col items-center">
                    {isUploading ? (
                      <>
                        <div className="spinner !w-8 !h-8 !border-2 mb-2" />
                        <p className="text-white font-bold text-sm">
                          Uploading…
                        </p>
                      </>
                    ) : (
                      <>
                        <span className="material-symbols-outlined text-4xl text-[var(--primary-container)] mb-2">
                          upload_file
                        </span>
                        <p className="text-white font-bold text-sm">
                          {imagePreview
                            ? "Click to replace image"
                            : "Drag and drop project screenshot"}
                        </p>
                        <p className="text-xs text-[var(--outline)] mt-1">
                          PNG, JPG, WebP up to 10MB
                        </p>
                      </>
                    )}
                  </div>

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/jpeg,image/png,image/webp,image/gif"
                    onChange={handleFileSelect}
                    className="hidden"
                  />
                </div>
              </section>

              {/* Description */}
              <section className="space-y-3">
                <label
                  htmlFor="portfolio-description"
                  className="text-label-sm text-[var(--primary-container)]"
                >
                  Project Description
                </label>
                <textarea
                  id="portfolio-description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe the project, the challenge, and the solution you delivered..."
                  className="w-full min-h-[200px] bg-[var(--brand-surface)] border border-[var(--brand-border)] p-6 text-[var(--on-surface)] leading-relaxed text-base placeholder-[var(--outline-variant)] focus:outline-none focus:border-[var(--primary-container)] transition-colors resize-y"
                />
              </section>
            </div>

            {/* Right Column — Settings */}
            <div className="lg:col-span-4 space-y-8">
              {/* Publish Settings */}
              <div className="bg-[var(--brand-surface)] border border-[var(--brand-border)] p-6 space-y-6">
                <h3 className="text-xl font-bold text-white">
                  Publish Settings
                </h3>
                <div className="space-y-3">
                  {/* Visibility */}
                  <div className="flex items-center justify-between p-3 bg-[var(--brand-bg)] border border-[var(--brand-border)] rounded">
                    <div className="flex items-center text-[var(--outline)]">
                      <span className="material-symbols-outlined text-sm mr-2">
                        visibility
                      </span>
                      <span className="text-xs uppercase font-bold tracking-widest">
                        Visibility
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        setVisibility(
                          visibility === "public" ? "private" : "public"
                        )
                      }
                      className="text-[var(--primary-container)] text-xs font-bold hover:opacity-80 transition-opacity"
                    >
                      {visibility === "public" ? "Public" : "Private"}
                    </button>
                  </div>

                  {/* Featured */}
                  <div className="flex items-center justify-between p-3 bg-[var(--brand-bg)] border border-[var(--brand-border)] rounded">
                    <div className="flex items-center text-[var(--outline)]">
                      <span className="material-symbols-outlined text-sm mr-2">
                        star
                      </span>
                      <span className="text-xs uppercase font-bold tracking-widest">
                        Featured
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setFeatured(!featured)}
                      className="text-[var(--primary-container)] text-xs font-bold hover:opacity-80 transition-opacity"
                    >
                      {featured ? "Yes" : "No"}
                    </button>
                  </div>
                </div>

                <div className="pt-6 border-t border-[var(--brand-border)] space-y-3">
                  <button
                    type="button"
                    onClick={handlePublish}
                    disabled={createPortfolio.isPending}
                    className="w-full bg-[var(--primary-container)] text-white py-4 font-bold tracking-widest uppercase hover:opacity-90 transition-all active:scale-[0.98] flex items-center justify-center disabled:opacity-50"
                  >
                    {createPortfolio.isPending && !isSavingDraft ? (
                      <>
                        <div className="spinner !w-4 !h-4 !border-2 mr-2" />
                        Publishing…
                      </>
                    ) : (
                      <>
                        <span className="material-symbols-outlined mr-2">
                          send
                        </span>
                        Publish Project
                      </>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={handleSaveDraft}
                    disabled={isSavingDraft}
                    className="w-full border border-[var(--primary-container)] text-[var(--primary-container)] py-4 font-bold tracking-widest uppercase hover:bg-[var(--primary-container)]/10 transition-all active:scale-[0.98] disabled:opacity-50"
                  >
                    {isSavingDraft ? "Saving…" : "Save as Draft"}
                  </button>
                </div>
              </div>

              {/* Client */}
              <div className="bg-[var(--brand-surface)] border border-[var(--brand-border)] p-6 space-y-4">
                <h3 className="text-label-sm text-[var(--primary-container)]">
                  Client Name
                </h3>
                <input
                  type="text"
                  value={client}
                  onChange={(e) => setClient(e.target.value)}
                  placeholder="e.g., Acme Corporation"
                  className="w-full bg-[var(--brand-bg)] border border-[var(--brand-border)] p-3 text-sm text-white focus:outline-none focus:border-[var(--primary-container)] transition-colors"
                />
              </div>

              {/* Live URL */}
              <div className="bg-[var(--brand-surface)] border border-[var(--brand-border)] p-6 space-y-4">
                <h3 className="text-label-sm text-[var(--primary-container)]">
                  Live Project URL
                </h3>
                <input
                  type="url"
                  value={liveUrl}
                  onChange={(e) => setLiveUrl(e.target.value)}
                  placeholder="https://example.com"
                  className="w-full bg-[var(--brand-bg)] border border-[var(--brand-border)] p-3 text-sm text-white focus:outline-none focus:border-[var(--primary-container)] transition-colors"
                />
              </div>

              {/* Technologies */}
              <div className="bg-[var(--brand-surface)] border border-[var(--brand-border)] p-6 space-y-4">
                <h3 className="text-label-sm text-[var(--primary-container)]">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech) => (
                    <span
                      key={tech}
                      className="bg-[var(--brand-bg)] border border-[var(--brand-border)] px-2 py-1 text-[10px] text-[var(--outline)] flex items-center gap-1 group"
                    >
                      {tech}
                      <button
                        type="button"
                        onClick={() => removeTech(tech)}
                        className="text-[var(--outline)] hover:text-[var(--error)] transition-colors opacity-0 group-hover:opacity-100"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                  <div className="flex items-center gap-1">
                    <input
                      type="text"
                      value={techInput}
                      onChange={(e) => setTechInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          addTech();
                        }
                      }}
                      placeholder="e.g., React"
                      className="bg-transparent border-none text-[10px] text-white w-16 focus:outline-none placeholder-[var(--outline-variant)]"
                    />
                    <button
                      type="button"
                      onClick={addTech}
                      className="text-[var(--primary-container)] text-[10px] font-bold hover:opacity-80"
                    >
                      + Add
                    </button>
                  </div>
                </div>
              </div>

              {/* Completeness Score */}
              <div className="bg-gradient-to-br from-[var(--brand-surface)] to-[var(--brand-bg)] border border-[var(--primary-container)]/30 p-6">
                <div className="flex items-center text-[var(--primary-container)] mb-2">
                  <span className="material-symbols-outlined mr-2">bolt</span>
                  <h3 className="text-label-sm">Completeness Score</h3>
                </div>
                <div className="w-full bg-gray-900 h-1.5 rounded-full overflow-hidden mb-4">
                  <div
                    className="h-full rounded-full transition-all duration-700 ease-out"
                    style={{
                      width: `${completenessScore}%`,
                      background:
                        completenessScore >= 70
                          ? "var(--tertiary)"
                          : completenessScore >= 40
                            ? "#ffd166"
                            : "var(--primary-container)",
                    }}
                  />
                </div>
                <p className="text-xs text-[var(--outline)]">
                  {completenessScore >= 70
                    ? "Your project is ready for publication."
                    : completenessScore >= 40
                      ? "Add more details, a client name, and live URL to improve."
                      : "Fill in the title, description, and upload an image to get started."}{" "}
                  ({completenessScore}/100)
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="w-full border-t border-[var(--brand-border)] mt-16 text-xs uppercase tracking-widest">
            <div className="max-w-[1200px] mx-auto py-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[var(--outline-variant)]">
              <div>
                © {new Date().getFullYear()} Data Megathos Engineering.
              </div>
              <div className="flex space-x-6">
                <a
                  href="/"
                  className="hover:text-[var(--primary-container)] transition-colors"
                >
                  Website
                </a>
                <a
                  href="/portfolio"
                  className="hover:text-[var(--primary-container)] transition-colors"
                >
                  Portfolio
                </a>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
