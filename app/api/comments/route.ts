import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const commentSchema = z.object({
  postId: z.number().int().positive(),
  parentId: z.number().int().positive().optional().nullable(),
  authorName: z.string().min(2, "Name must be at least 2 characters").max(100),
  authorEmail: z.string().email("Invalid email").optional().or(z.literal("")),
  content: z.string().min(5, "Comment must be at least 5 characters").max(2000),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validatedData = commentSchema.parse(body);

    // Ensure the post exists
    const postExists = await prisma.post.findUnique({
      where: { id: validatedData.postId },
    });

    if (!postExists) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    // Ensure parent comment exists if parentId is provided
    if (validatedData.parentId) {
      const parentExists = await prisma.comment.findUnique({
        where: { id: validatedData.parentId },
      });

      if (!parentExists || parentExists.postId !== validatedData.postId) {
        return NextResponse.json(
          { error: "Invalid parent comment" },
          { status: 400 }
        );
      }
    }

    const newComment = await prisma.comment.create({
      data: {
        postId: validatedData.postId,
        parentId: validatedData.parentId || null,
        authorName: validatedData.authorName,
        authorEmail: validatedData.authorEmail || null,
        content: validatedData.content,
        approved: true, // Auto-approve for now
      },
    });

    return NextResponse.json({ comment: newComment }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Validation failed", details: error.errors },
        { status: 400 }
      );
    }
    console.error("Error creating comment:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const postIdStr = searchParams.get("postId");

  if (!postIdStr) {
    return NextResponse.json(
      { error: "postId is required" },
      { status: 400 }
    );
  }

  const postId = parseInt(postIdStr, 10);

  if (isNaN(postId)) {
    return NextResponse.json(
      { error: "Invalid postId" },
      { status: 400 }
    );
  }

  try {
    // Fetch all comments for the post that are approved
    const comments = await prisma.comment.findMany({
      where: {
        postId: postId,
        approved: true,
      },
      orderBy: {
        createdAt: "asc",
      },
    });

    type CommentWithReplies = typeof comments[0] & { replies: CommentWithReplies[] };
    const commentMap = new Map<number, CommentWithReplies>();
    const rootComments: CommentWithReplies[] = [];

    comments.forEach((c) => {
      commentMap.set(c.id, { ...c, replies: [] });
    });

    comments.forEach((c) => {
      const commentWithReplies = commentMap.get(c.id)!;
      if (c.parentId) {
        const parent = commentMap.get(c.parentId);
        if (parent) {
          parent.replies.push(commentWithReplies);
        }
      } else {
        rootComments.push(commentWithReplies);
      }
    });

    return NextResponse.json({ comments: rootComments });
  } catch (error) {
    console.error("Error fetching comments:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
