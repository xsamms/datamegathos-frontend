"use client";

import { useState, useEffect } from "react";
import { z } from "zod";
import { formatDate } from "@/lib/utils";

// Types
export interface Comment {
  id: number;
  content: string;
  authorName: string;
  authorEmail: string | null;
  postId: number;
  parentId: number | null;
  createdAt: string;
  replies: Comment[];
}

const commentSchema = z.object({
  authorName: z.string().min(2, "Name must be at least 2 characters").max(100),
  authorEmail: z.string().email("Invalid email").optional().or(z.literal("")),
  content: z.string().min(5, "Comment must be at least 5 characters").max(2000),
});

export function CommentSection({ postId }: { postId: number }) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchComments = async () => {
    try {
      const res = await fetch(`/api/comments?postId=${postId}`);
      if (!res.ok) throw new Error("Failed to load comments");
      const data = await res.json();
      setComments(data.comments || []);
    } catch (err) {
      setError("Failed to load comments.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [postId]);

  const addCommentToState = (newComment: Comment) => {
    newComment.replies = [];
    if (!newComment.parentId) {
      setComments([...comments, newComment]);
    } else {
      const addReply = (list: Comment[]): Comment[] => {
        return list.map(c => {
          if (c.id === newComment.parentId) {
            return { ...c, replies: [...c.replies, newComment] };
          }
          if (c.replies.length > 0) {
            return { ...c, replies: addReply(c.replies) };
          }
          return c;
        });
      };
      setComments(addReply(comments));
    }
  };

  const countComments = (list: Comment[]): number => {
    let count = list.length;
    list.forEach(c => {
      if (c.replies) count += countComments(c.replies);
    });
    return count;
  };

  return (
    <section className="mt-20">
      <h2 className="text-2xl font-bold mb-10 uppercase tracking-tight">
        Comment Protocol ({countComments(comments)})
      </h2>

      {/* Main Comment Form */}
      <CommentForm postId={postId} onSuccess={addCommentToState} />

      {loading && <div className="spinner my-8" />}
      {error && <p className="text-primary mt-4">{error}</p>}
      
      {!loading && !error && comments.length === 0 && (
        <p className="text-surface-variant text-sm mt-8">No comments yet. Be the first to start the protocol.</p>
      )}

      {/* Comments List */}
      <div className="mt-12 space-y-8">
        {comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} postId={postId} onSuccess={addCommentToState} />
        ))}
      </div>
    </section>
  );
}

function CommentItem({ comment, postId, onSuccess, depth = 0 }: { comment: Comment, postId: number, onSuccess: (c: Comment) => void, depth?: number }) {
  const [isReplying, setIsReplying] = useState(false);

  return (
    <div className={`flex flex-col gap-4 ${depth > 0 ? "ml-4 lg:ml-12 border-l border-brand-border/50 pl-4" : ""}`}>
      <div className="bg-brand-surface border border-brand-border p-6 relative group transition-colors hover:border-primary-container/50">
        <div className="flex flex-wrap items-center justify-between mb-4 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand-bg border border-brand-border flex items-center justify-center shadow-inner">
              <span className="font-bold text-primary-container text-sm">
                {comment.authorName.charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <p className="text-sm font-bold text-on-surface uppercase tracking-widest">{comment.authorName}</p>
              <p className="text-[10px] text-surface-variant uppercase tracking-widest">{formatDate(comment.createdAt)}</p>
            </div>
          </div>
          {depth < 3 && (
            <button 
              onClick={() => setIsReplying(!isReplying)}
              className="text-xs font-bold text-surface-variant uppercase tracking-widest hover:text-primary-container transition-colors"
            >
              Reply
            </button>
          )}
        </div>
        <p className="text-on-surface-variant text-sm leading-relaxed whitespace-pre-wrap">{comment.content}</p>
      </div>

      {isReplying && (
        <div className="mt-2 mb-6 ml-4 lg:ml-6">
          <CommentForm postId={postId} parentId={comment.id} onSuccess={(c) => { onSuccess(c); setIsReplying(false); }} onCancel={() => setIsReplying(false)} />
        </div>
      )}

      {/* Render Replies */}
      {comment.replies && comment.replies.length > 0 && (
        <div className="space-y-6 mt-4">
          {comment.replies.map(reply => (
            <CommentItem key={reply.id} comment={reply} postId={postId} onSuccess={onSuccess} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

function CommentForm({ postId, parentId, onSuccess, onCancel }: { postId: number, parentId?: number, onSuccess: (c: Comment) => void, onCancel?: () => void }) {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    const formData = new FormData(e.currentTarget);
    const data = {
      postId,
      parentId,
      authorName: formData.get("authorName") as string,
      authorEmail: formData.get("authorEmail") as string,
      content: formData.get("content") as string,
    };

    try {
      commentSchema.parse(data);
    } catch (err) {
      if (err instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        err.errors.forEach((error) => {
          if (error.path[0]) {
            fieldErrors[error.path[0] as string] = error.message;
          }
        });
        setErrors(fieldErrors);
      }
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to submit");
      const resData = await res.json();
      
      onSuccess(resData.comment);
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setErrors({ form: "Failed to submit comment." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`bg-brand-surface p-6 lg:p-8 border border-brand-border ${parentId ? 'bg-brand-bg/50' : ''}`}>
      <h3 className="text-lg font-bold mb-6 uppercase tracking-widest text-on-surface">
        {parentId ? "Reply to Comment" : "Leave a Comment"}
      </h3>
      {errors.form && <p className="text-primary text-xs mb-4 p-3 bg-primary/10 border border-primary/20 rounded">{errors.form}</p>}
      
      <form className="space-y-6" onSubmit={handleSubmit} noValidate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-surface-variant">
              Signature
            </label>
            <input
              className={`input ${errors.authorName ? 'border-primary' : ''}`}
              name="authorName"
              placeholder="Your Name"
              type="text"
            />
            {errors.authorName && <p className="text-primary text-xs">{errors.authorName}</p>}
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-surface-variant">
              Identification
            </label>
            <input
              className={`input ${errors.authorEmail ? 'border-primary' : ''}`}
              name="authorEmail"
              placeholder="Email (Not Published)"
              type="email"
            />
            {errors.authorEmail && <p className="text-primary text-xs">{errors.authorEmail}</p>}
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-widest text-surface-variant">
            Transmission
          </label>
          <textarea
            className={`input resize-y min-h-[100px] ${errors.content ? 'border-primary' : ''}`}
            name="content"
            placeholder="Enter technical feedback or inquiry..."
            rows={4}
          />
          {errors.content && <p className="text-primary text-xs">{errors.content}</p>}
        </div>
        <div className="flex flex-wrap gap-4">
          <button
            className="btn btn-primary text-xs uppercase tracking-[0.2em] disabled:opacity-50"
            type="submit"
            disabled={loading}
          >
            {loading ? "Transmitting..." : "Submit Comment"}
          </button>
          {onCancel && (
            <button
              className="btn bg-transparent border border-brand-border text-on-surface hover:border-primary-container text-xs uppercase tracking-[0.2em] disabled:opacity-50"
              type="button"
              onClick={onCancel}
              disabled={loading}
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
