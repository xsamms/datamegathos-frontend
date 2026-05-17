import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export interface Post {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  published: boolean;
  featured: boolean;
  author?: string;
  image?: string;
  category?: string;
  tags?: string;
  views: number;
  createdAt: string;
  updatedAt: string;
}

export interface CreatePostInput {
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  published?: boolean;
  featured?: boolean;
  author?: string;
  image?: string;
  category?: string;
  tags?: string;
}

export interface UpdatePostInput extends Partial<CreatePostInput> {}

// Fetch all posts
export const usePosts = (published?: boolean, limit = 10, page = 1) => {
  return useQuery({
    queryKey: ['posts', { published, limit, page }],
    queryFn: async () => {
      const searchParams = new URLSearchParams();
      if (published !== undefined) searchParams.append('published', published.toString());
      searchParams.append('limit', limit.toString());
      searchParams.append('page', page.toString());

      const response = await fetch(`/api/posts?${searchParams}`);
      if (!response.ok) throw new Error('Failed to fetch posts');
      return response.json();
    },
  });
};

// Fetch a single post by slug
export const usePost = (slug: string) => {
  return useQuery({
    queryKey: ['posts', slug],
    queryFn: async () => {
      const response = await fetch(`/api/posts/${slug}`);
      if (!response.ok) throw new Error('Failed to fetch post');
      return response.json();
    },
    enabled: !!slug,
  });
};

// Create a new post
export const useCreatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: CreatePostInput) => {
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error('Failed to create post');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });
};

// Update a post
export const useUpdatePost = (slug: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: UpdatePostInput) => {
      const response = await fetch(`/api/posts/${slug}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error('Failed to update post');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
      queryClient.invalidateQueries({ queryKey: ['posts', slug] });
    },
  });
};

// Delete a post
export const useDeletePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (slug: string) => {
      const response = await fetch(`/api/posts/${slug}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete post');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });
};
