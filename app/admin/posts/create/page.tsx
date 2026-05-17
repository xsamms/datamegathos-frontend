"use client";

import { useState, useRef, useCallback, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useAuth } from "@/lib/useAuth";
import { useCreatePost } from "@/lib/hooks";
import { AdminSidebar } from "@/components/AdminSidebar";
import { AdminNav } from "@/components/AdminNav";
import { marked } from "marked";

const CATEGORIES = ["MVP Strategy", "SME Growth", "AI Insights", "Engineering", "Case Study"];

function generateSlug(title: string) {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default function CreatePostPage() {
  const router = useRouter();
  const { user, isLoading: authLoading, isAuthenticated } = useAuth();
  const createPost = useCreatePost();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  // Form state
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [content, setContent] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [tags, setTags] = useState<string[]>(["engineering", "data_strategy"]);
  const [tagInput, setTagInput] = useState("");
  const [visibility, setVisibility] = useState<"public" | "private">("public");
  const [scheduleType, setScheduleType] = useState<"immediate" | "scheduled">("immediate");
  const [editorMode, setEditorMode] = useState<"write" | "preview">("write");

  // Image state
  const [imageUrl, setImageUrl] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);

  // Status
  const [isSavingDraft, setIsSavingDraft] = useState(false);
  const [publishError, setPublishError] = useState("");
  const [publishSuccess, setPublishSuccess] = useState(false);

  // Markdown to HTML preview
  const renderedPreview = useMemo(() => {
    if (!content) return "";
    return marked.parse(content, { breaks: true, gfm: true }) as string;
  }, [content]);

  // Convert markdown content to HTML for storage
  const contentToHtml = useCallback((md: string): string => {
    if (!md) return "";
    return marked.parse(md, { breaks: true, gfm: true }) as string;
  }, []);

  // Toolbar: insert markdown syntax around selection
  const insertMarkdown = useCallback(
    (before: string, after: string = "", placeholder: string = "") => {
      const textarea = contentRef.current;
      if (!textarea) return;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const selected = content.substring(start, end);
      const replacement = selected || placeholder;
      const newContent =
        content.substring(0, start) +
        before +
        replacement +
        after +
        content.substring(end);
      setContent(newContent);
      // Restore cursor position after React re-render
      requestAnimationFrame(() => {
        textarea.focus();
        const cursorPos = start + before.length + replacement.length + (selected ? 0 : 0);
        textarea.setSelectionRange(
          start + before.length,
          start + before.length + replacement.length
        );
      });
    },
    [content]
  );

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

  // Readability score (simple heuristic)
  const readabilityScore = Math.min(
    100,
    Math.round(
      (title.length > 10 ? 20 : 0) +
        (content.length > 100 ? 30 : content.length > 50 ? 15 : 0) +
        (excerpt.length > 20 ? 15 : 0) +
        (metaDescription.length > 30 ? 10 : 0) +
        (tags.length > 0 ? 10 : 0) +
        (imageUrl ? 15 : 0)
    )
  );

  // Image upload
  const uploadImage = useCallback(
    async (file: File) => {
      setIsUploading(true);
      try {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("folder", "blog");

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
        setPublishError(
          err instanceof Error ? err.message : "Image upload failed"
        );
      } finally {
        setIsUploading(false);
      }
    },
    []
  );

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

  // Tags
  const addTag = () => {
    const tag = tagInput.trim().toLowerCase().replace(/\s+/g, "_");
    if (tag && !tags.includes(tag)) {
      setTags([...tags, tag]);
      setTagInput("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((t) => t !== tagToRemove));
  };

  // Submit handlers
  const handleSaveDraft = async () => {
    if (!title.trim() || !content.trim()) {
      setPublishError("Title and content are required");
      return;
    }
    setIsSavingDraft(true);
    setPublishError("");
    try {
      await createPost.mutateAsync({
        title,
        slug: slug || generateSlug(title),
        content: contentToHtml(content),
        excerpt: excerpt || undefined,
        author: user?.name || undefined,
        category,
        image: imageUrl || undefined,
        tags: tags.length > 0 ? JSON.stringify(tags) : undefined,
        published: false,
        featured: false,
      });
      setPublishSuccess(true);
      setTimeout(() => router.push("/admin/posts"), 1500);
    } catch (err) {
      setPublishError(
        err instanceof Error ? err.message : "Failed to save draft"
      );
    } finally {
      setIsSavingDraft(false);
    }
  };

  const handlePublish = async () => {
    if (!title.trim() || !content.trim()) {
      setPublishError("Title and content are required");
      return;
    }
    setPublishError("");
    try {
      await createPost.mutateAsync({
        title,
        slug: slug || generateSlug(title),
        content: contentToHtml(content),
        excerpt: excerpt || undefined,
        author: user?.name || undefined,
        category,
        image: imageUrl || undefined,
        tags: tags.length > 0 ? JSON.stringify(tags) : undefined,
        published: visibility === "public",
        featured: false,
      });
      setPublishSuccess(true);
      setTimeout(() => router.push("/admin/posts"), 1500);
    } catch (err) {
      setPublishError(
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
        isPublishing={createPost.isPending && !isSavingDraft}
      />

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <AdminSidebar />

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto cms-scrollbar bg-[var(--surface)] p-8">
          {/* Success Banner */}
          {publishSuccess && (
            <div className="mb-6 bg-[var(--tertiary-container)] border border-[var(--tertiary-container)] text-[var(--on-tertiary-container)] px-4 py-3 text-sm rounded flex items-center gap-2 animate-[slideUp_200ms_var(--ease-out)]">
              <span className="material-symbols-outlined text-[18px]">
                check_circle
              </span>
              Post saved successfully! Redirecting…
            </div>
          )}

          {/* Error Banner */}
          {publishError && (
            <div className="mb-6 bg-[var(--error-container)] border border-[var(--error-container)] text-[var(--on-error-container)] px-4 py-3 text-sm rounded flex items-center gap-2 animate-[slideUp_200ms_var(--ease-out)]">
              <span className="material-symbols-outlined text-[18px]">
                error
              </span>
              {publishError}
              <button
                onClick={() => setPublishError("")}
                className="ml-auto text-[var(--on-error-container)] hover:opacity-70"
              >
                <span className="material-symbols-outlined text-[18px]">
                  close
                </span>
              </button>
            </div>
          )}

          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column — Editor */}
            <div className="lg:col-span-8 space-y-8">
              {/* Title */}
              <section className="space-y-3">
                <label
                  htmlFor="post-title"
                  className="text-label-sm text-[var(--primary-container)]"
                >
                  Article Title
                </label>
                <input
                  id="post-title"
                  type="text"
                  value={title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  placeholder="Enter headline for technical engineering insights..."
                  className="w-full bg-[var(--brand-surface)] border border-[var(--brand-border)] p-6 text-2xl md:text-3xl font-bold text-white placeholder-[var(--outline-variant)] focus:outline-none focus:border-[var(--primary-container)] transition-colors"
                />
              </section>

              {/* Category + Slug */}
              <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label
                    htmlFor="post-category"
                    className="text-label-sm text-[var(--primary-container)]"
                  >
                    Category
                  </label>
                  <select
                    id="post-category"
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
                    htmlFor="post-slug"
                    className="text-label-sm text-[var(--primary-container)]"
                  >
                    URL Slug
                  </label>
                  <div className="flex items-center bg-[var(--brand-surface)] border border-[var(--brand-border)] p-4 text-[var(--outline)]">
                    <span className="text-sm shrink-0">megathos.io/blog/</span>
                    <input
                      id="post-slug"
                      type="text"
                      value={slug}
                      onChange={(e) => setSlug(e.target.value)}
                      placeholder="post-title-here"
                      className="bg-transparent border-none p-0 focus:ring-0 focus:outline-none text-white w-full ml-1 text-sm"
                    />
                  </div>
                </div>
              </section>

              {/* Featured Image */}
              <section className="space-y-3">
                <label className="text-label-sm text-[var(--primary-container)]">
                  Featured Image
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
                      alt="Featured image preview"
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
                            : "Drag and drop high-res asset"}
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

              {/* Content Editor */}
              <section className="space-y-3">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="post-content"
                    className="text-label-sm text-[var(--primary-container)]"
                  >
                    Content Editor
                    <span className="ml-2 text-[10px] text-[var(--outline)] font-normal normal-case tracking-normal">
                      Markdown supported
                    </span>
                  </label>

                  <div className="flex items-center gap-2">
                    {/* Toolbar (only in write mode) */}
                    {editorMode === "write" && (
                      <div className="flex space-x-1">
                        {[
                          {
                            icon: "format_bold",
                            label: "Bold",
                            action: () => insertMarkdown("**", "**", "bold text"),
                          },
                          {
                            icon: "format_italic",
                            label: "Italic",
                            action: () => insertMarkdown("*", "*", "italic text"),
                          },
                          {
                            icon: "link",
                            label: "Link",
                            action: () => insertMarkdown("[", "](url)", "link text"),
                          },
                          {
                            icon: "code",
                            label: "Code",
                            action: () => insertMarkdown("`", "`", "code"),
                          },
                          {
                            icon: "title",
                            label: "Heading",
                            action: () => insertMarkdown("## ", "", "Heading"),
                          },
                          {
                            icon: "format_list_bulleted",
                            label: "List",
                            action: () => insertMarkdown("- ", "", "list item"),
                          },
                          {
                            icon: "format_quote",
                            label: "Quote",
                            action: () => insertMarkdown("> ", "", "quote"),
                          },
                        ].map((btn) => (
                          <button
                            key={btn.icon}
                            type="button"
                            title={btn.label}
                            onClick={btn.action}
                            className="p-2 hover:bg-[var(--brand-surface)] rounded transition-colors text-[var(--outline)] hover:text-white"
                          >
                            <span className="material-symbols-outlined text-[20px]">
                              {btn.icon}
                            </span>
                          </button>
                        ))}
                        <div className="w-px h-6 bg-[var(--brand-border)] mx-1 self-center" />
                        <button
                          type="button"
                          title="Insert image"
                          onClick={() =>
                            insertMarkdown(
                              "![alt text](",
                              ")",
                              "image-url"
                            )
                          }
                          className="p-2 hover:bg-[var(--brand-surface)] rounded transition-colors text-[var(--outline)] hover:text-white"
                        >
                          <span className="material-symbols-outlined text-[20px]">
                            image
                          </span>
                        </button>
                        <button
                          type="button"
                          title="Code block"
                          onClick={() =>
                            insertMarkdown(
                              "```\n",
                              "\n```",
                              "code here"
                            )
                          }
                          className="p-2 hover:bg-[var(--brand-surface)] rounded transition-colors text-[var(--outline)] hover:text-white"
                        >
                          <span className="material-symbols-outlined text-[20px]">
                            code_blocks
                          </span>
                        </button>
                      </div>
                    )}

                    {/* Write / Preview Toggle */}
                    <div className="flex bg-[var(--brand-bg)] border border-[var(--brand-border)] ml-2">
                      <button
                        type="button"
                        onClick={() => setEditorMode("write")}
                        className={`px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest transition-all ${
                          editorMode === "write"
                            ? "bg-[var(--primary-container)] text-white"
                            : "text-[var(--outline)] hover:text-white"
                        }`}
                      >
                        Write
                      </button>
                      <button
                        type="button"
                        onClick={() => setEditorMode("preview")}
                        className={`px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest transition-all ${
                          editorMode === "preview"
                            ? "bg-[var(--primary-container)] text-white"
                            : "text-[var(--outline)] hover:text-white"
                        }`}
                      >
                        Preview
                      </button>
                    </div>
                  </div>
                </div>

                {editorMode === "write" ? (
                  <textarea
                    ref={contentRef}
                    id="post-content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder={`Start writing in Markdown…\n\n# Heading 1\n## Heading 2\n\n**bold text** and *italic text*\n\n- bullet point\n- another point\n\n> blockquote\n\n\`inline code\` or code block:\n\n\`\`\`\ncode here\n\`\`\``}
                    className="w-full min-h-[500px] bg-[var(--brand-surface)] border border-[var(--brand-border)] p-8 text-[var(--on-surface)] leading-relaxed text-base placeholder-[var(--outline-variant)] focus:outline-none focus:border-[var(--primary-container)] transition-colors resize-y font-mono whitespace-pre-wrap"
                  />
                ) : (
                  <div className="w-full min-h-[500px] bg-[var(--brand-surface)] border border-[var(--brand-border)] p-8 overflow-y-auto">
                    {content ? (
                      <div
                        className="prose-dark"
                        dangerouslySetInnerHTML={{ __html: renderedPreview }}
                      />
                    ) : (
                      <p className="text-[var(--outline-variant)] italic">
                        Nothing to preview yet. Switch to Write mode and start
                        typing.
                      </p>
                    )}
                  </div>
                )}
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

                  {/* Schedule */}
                  <div className="flex items-center justify-between p-3 bg-[var(--brand-bg)] border border-[var(--brand-border)] rounded">
                    <div className="flex items-center text-[var(--outline)]">
                      <span className="material-symbols-outlined text-sm mr-2">
                        calendar_month
                      </span>
                      <span className="text-xs uppercase font-bold tracking-widest">
                        Schedule
                      </span>
                    </div>
                    <span className="text-[var(--primary-container)] text-xs font-bold">
                      {scheduleType === "immediate" ? "Immediate" : "Scheduled"}
                    </span>
                  </div>
                </div>

                <div className="pt-6 border-t border-[var(--brand-border)] space-y-3">
                  <button
                    type="button"
                    onClick={handlePublish}
                    disabled={createPost.isPending}
                    className="w-full bg-[var(--primary-container)] text-white py-4 font-bold tracking-widest uppercase hover:opacity-90 transition-all active:scale-[0.98] flex items-center justify-center disabled:opacity-50"
                  >
                    {createPost.isPending && !isSavingDraft ? (
                      <>
                        <div className="spinner !w-4 !h-4 !border-2 mr-2" />
                        Publishing…
                      </>
                    ) : (
                      <>
                        <span className="material-symbols-outlined mr-2">
                          send
                        </span>
                        Publish Post
                      </>
                    )}
                  </button>
                  <button
                    type="button"
                    className="w-full border border-[var(--primary-container)] text-[var(--primary-container)] py-4 font-bold tracking-widest uppercase hover:bg-[var(--primary-container)]/10 transition-all active:scale-[0.98]"
                  >
                    Preview Content
                  </button>
                </div>
              </div>

              {/* Excerpt */}
              <div className="bg-[var(--brand-surface)] border border-[var(--brand-border)] p-6 space-y-4">
                <h3 className="text-label-sm text-[var(--primary-container)]">
                  Post Excerpt
                </h3>
                <textarea
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  placeholder="Brief summary shown on blog listing page..."
                  className="w-full bg-[var(--brand-bg)] border border-[var(--brand-border)] p-3 text-xs text-white h-20 focus:outline-none focus:border-[var(--primary-container)] resize-none transition-colors"
                />
              </div>

              {/* SEO */}
              <div className="bg-[var(--brand-surface)] border border-[var(--brand-border)] p-6 space-y-4">
                <h3 className="text-label-sm text-[var(--primary-container)]">
                  Search Optimization
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-xs text-[var(--outline)] block mb-1">
                      Meta Description
                    </label>
                    <textarea
                      value={metaDescription}
                      onChange={(e) => setMetaDescription(e.target.value)}
                      placeholder="Concise summary for search engines..."
                      className="w-full bg-[var(--brand-bg)] border border-[var(--brand-border)] p-3 text-xs text-white h-24 focus:outline-none focus:border-[var(--primary-container)] resize-none transition-colors"
                    />
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-[var(--brand-bg)] border border-[var(--brand-border)] px-2 py-1 text-[10px] text-[var(--outline)] flex items-center gap-1 group"
                      >
                        #{tag}
                        <button
                          type="button"
                          onClick={() => removeTag(tag)}
                          className="text-[var(--outline)] hover:text-[var(--error)] transition-colors opacity-0 group-hover:opacity-100"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                    <div className="flex items-center gap-1">
                      <input
                        type="text"
                        value={tagInput}
                        onChange={(e) => setTagInput(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            addTag();
                          }
                        }}
                        placeholder="new tag"
                        className="bg-transparent border-none text-[10px] text-white w-16 focus:outline-none placeholder-[var(--outline-variant)]"
                      />
                      <button
                        type="button"
                        onClick={addTag}
                        className="text-[var(--primary-container)] text-[10px] font-bold hover:opacity-80"
                      >
                        + Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Readability Score */}
              <div className="bg-gradient-to-br from-[var(--brand-surface)] to-[var(--brand-bg)] border border-[var(--primary-container)]/30 p-6">
                <div className="flex items-center text-[var(--primary-container)] mb-2">
                  <span className="material-symbols-outlined mr-2">bolt</span>
                  <h3 className="text-label-sm">Readability Score</h3>
                </div>
                <div className="w-full bg-gray-900 h-1.5 rounded-full overflow-hidden mb-4">
                  <div
                    className="h-full rounded-full transition-all duration-700 ease-out"
                    style={{
                      width: `${readabilityScore}%`,
                      background:
                        readabilityScore >= 70
                          ? "var(--tertiary)"
                          : readabilityScore >= 40
                            ? "#ffd166"
                            : "var(--primary-container)",
                    }}
                  />
                </div>
                <p className="text-xs text-[var(--outline)]">
                  {readabilityScore >= 70
                    ? "Your content is highly optimized for technical decision makers."
                    : readabilityScore >= 40
                      ? "Add more content, tags, and a featured image to improve."
                      : "Fill in the title, content, and metadata to boost your score."}
                  {" "}
                  ({readabilityScore}/100)
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="w-full border-t border-[var(--brand-border)] mt-16 text-xs uppercase tracking-widest">
            <div className="max-w-[1200px] mx-auto py-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[var(--outline-variant)]">
              <div>
                © {new Date().getFullYear()} Data Megathos Engineering.
                Technical Superiority.
              </div>
              <div className="flex space-x-6">
                <a
                  href="/"
                  className="hover:text-[var(--primary-container)] transition-colors"
                >
                  Website
                </a>
                <a
                  href="/blog"
                  className="hover:text-[var(--primary-container)] transition-colors"
                >
                  Blog
                </a>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
