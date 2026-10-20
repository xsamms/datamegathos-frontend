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

// ── Portfolio Hooks ──

export interface PortfolioItem {
  id: number;
  title: string;
  slug: string;
  description: string;
  client?: string;
  category: string;
  techs?: string;
  image: string;
  images?: string;
  liveUrl?: string;
  caseStudy?: string;
  featured: boolean;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreatePortfolioInput {
  title: string;
  slug: string;
  description: string;
  client?: string;
  category: string;
  techs?: string;
  image: string;
  images?: string;
  liveUrl?: string;
  caseStudy?: string;
  featured?: boolean;
  published?: boolean;
}

export interface UpdatePortfolioInput extends Partial<CreatePortfolioInput> {}

// Fetch all portfolio items
export const usePortfolioItems = (category?: string, published?: boolean, limit = 20, page = 1) => {
  return useQuery({
    queryKey: ['portfolio', { category, published, limit, page }],
    queryFn: async () => {
      const searchParams = new URLSearchParams();
      if (category && category !== 'All') searchParams.append('category', category);
      if (published !== undefined) searchParams.append('published', published.toString());
      searchParams.append('limit', limit.toString());
      searchParams.append('page', page.toString());

      const response = await fetch(`/api/portfolio?${searchParams}`);
      if (!response.ok) throw new Error('Failed to fetch portfolio items');
      return response.json();
    },
  });
};

// Fetch a single portfolio item by slug
export const usePortfolioItem = (slug: string) => {
  return useQuery({
    queryKey: ['portfolio', slug],
    queryFn: async () => {
      const response = await fetch(`/api/portfolio/${slug}`);
      if (!response.ok) throw new Error('Failed to fetch portfolio item');
      return response.json();
    },
    enabled: !!slug,
  });
};

// Create a new portfolio item
export const useCreatePortfolio = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: CreatePortfolioInput) => {
      const response = await fetch('/api/portfolio', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error || 'Failed to create portfolio item');
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['portfolio'] });
    },
  });
};

// Update a portfolio item
export const useUpdatePortfolio = (slug: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: UpdatePortfolioInput) => {
      const response = await fetch(`/api/portfolio/${slug}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error('Failed to update portfolio item');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['portfolio'] });
      queryClient.invalidateQueries({ queryKey: ['portfolio', slug] });
    },
  });
};

// Delete a portfolio item
export const useDeletePortfolio = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (slug: string) => {
      const response = await fetch(`/api/portfolio/${slug}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete portfolio item');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['portfolio'] });
    },
  });
};
