"use client";

import { useState } from "react";
import { useCreatePost, CreatePostInput } from "@/lib/hooks";
import { useRouter } from "next/navigation";

export function CreatePostForm() {
  const router = useRouter();
  const createPost = useCreatePost();
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<CreatePostInput>({
    title: "",
    slug: "",
    content: "",
    excerpt: "",
    author: "",
    category: "",
    image: "",
    tags: "",
    published: false,
    featured: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    const fieldValue =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
    setFormData((prev) => ({
      ...prev,
      [name]: fieldValue,
    }));
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setFormData((prev) => ({
      ...prev,
      title,
      slug: generateSlug(title),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createPost.mutateAsync(formData);
      setFormData({
        title: "",
        slug: "",
        content: "",
        excerpt: "",
        author: "",
        category: "",
        image: "",
        tags: "",
        published: false,
        featured: false,
      });
      setIsOpen(false);
      router.refresh();
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="btn btn-primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14" />
          <path d="M12 5v14" />
        </svg>
        Create New Post
      </button>

      {isOpen && (
        <div className="overlay" onClick={(e) => e.target === e.currentTarget && setIsOpen(false)}>
          <div className="modal">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-h2 text-on-surface">Create New Post</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="btn btn-ghost p-2 text-on-surface-variant hover:text-on-surface"
                aria-label="Close modal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-label-sm text-on-surface-variant block mb-1.5">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleTitleChange}
                  required
                  className="input"
                  placeholder="Post title"
                />
              </div>

              <div>
                <label className="text-label-sm text-on-surface-variant block mb-1.5">
                  Slug
                </label>
                <input
                  type="text"
                  name="slug"
                  value={formData.slug}
                  onChange={handleChange}
                  required
                  className="input"
                  placeholder="post-slug"
                />
              </div>

              <div>
                <label className="text-label-sm text-on-surface-variant block mb-1.5">
                  Content
                </label>
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  required
                  rows={8}
                  className="input"
                  placeholder="Post content in markdown or HTML"
                />
              </div>

              <div>
                <label className="text-label-sm text-on-surface-variant block mb-1.5">
                  Excerpt
                </label>
                <input
                  type="text"
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleChange}
                  className="input"
                  placeholder="Short excerpt"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-label-sm text-on-surface-variant block mb-1.5">
                    Author
                  </label>
                  <input
                    type="text"
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                    className="input"
                    placeholder="Author name"
                  />
                </div>

                <div>
                  <label className="text-label-sm text-on-surface-variant block mb-1.5">
                    Category
                  </label>
                  <input
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="input"
                    placeholder="Category"
                  />
                </div>
              </div>

              <div>
                <label className="text-label-sm text-on-surface-variant block mb-1.5">
                  Image URL
                </label>
                <input
                  type="url"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  className="input"
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <div>
                <label className="text-label-sm text-on-surface-variant block mb-1.5">
                  Tags (comma-separated)
                </label>
                <input
                  type="text"
                  name="tags"
                  value={formData.tags}
                  onChange={handleChange}
                  className="input"
                  placeholder="tag1, tag2, tag3"
                />
              </div>

              <div className="flex gap-5 py-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="published"
                    checked={formData.published}
                    onChange={handleChange}
                    className="checkbox"
                  />
                  <span className="text-sm text-on-surface-variant">
                    Published
                  </span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="featured"
                    checked={formData.featured}
                    onChange={handleChange}
                    className="checkbox"
                  />
                  <span className="text-sm text-on-surface-variant">
                    Featured
                  </span>
                </label>
              </div>

              <div className="flex gap-3 pt-4 border-t border-outline-variant">
                <button
                  type="submit"
                  disabled={createPost.isPending}
                  className="btn btn-primary flex-1"
                >
                  {createPost.isPending ? (
                    <>
                      <div className="spinner !w-4 !h-4 !border-2" />
                      Creating…
                    </>
                  ) : (
                    "Create Post"
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="btn btn-secondary flex-1"
                >
                  Cancel
                </button>
              </div>

              {createPost.isError && (
                <div className="p-3 rounded-md text-sm" style={{ background: "var(--error-container)", color: "var(--on-error-container)" }}>
                  Error:{" "}
                  {(createPost.error as Error)?.message ||
                    "Failed to create post"}
                </div>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
}
