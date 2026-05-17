'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export interface AuthUser {
  id: number;
  email: string;
  name: string;
  role: 'ADMIN' | 'EDITOR';
  avatar: string | null;
  createdAt: string;
}

async function fetchCurrentUser(): Promise<AuthUser> {
  const res = await fetch('/api/auth/me');
  if (!res.ok) throw new Error('Not authenticated');
  const data = await res.json();
  return data.user;
}

export function useAuth() {
  const router = useRouter();
  const queryClient = useQueryClient();

  const {
    data: user,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['auth', 'me'],
    queryFn: fetchCurrentUser,
    retry: false,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  const logoutMutation = useMutation({
    mutationFn: async () => {
      const res = await fetch('/api/auth/logout', { method: 'POST' });
      if (!res.ok) throw new Error('Logout failed');
    },
    onSuccess: () => {
      queryClient.clear();
      router.push('/admin/login');
    },
  });

  return {
    user: user ?? null,
    isLoading,
    isAuthenticated: !!user && !isError,
    isAdmin: user?.role === 'ADMIN',
    logout: () => logoutMutation.mutate(),
    isLoggingOut: logoutMutation.isPending,
  };
}
