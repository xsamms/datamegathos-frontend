"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Invalid credentials");
        return;
      }

      router.push("/admin/posts/create");
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--brand-bg)] flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[var(--primary-container)] opacity-[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] bg-[var(--primary-container)] opacity-[0.05] rounded-full blur-[100px] pointer-events-none" />

      {/* Login Card */}
      <div className="w-full max-w-md relative z-10">
        {/* Logo */}
        <div className="flex flex-col items-center mb-10">
          <Image
            src="/images/Data-Megathos-logo.jpg"
            alt="Data Megathos Logo"
            width={48}
            height={48}
            className="size-12 object-contain mb-4 rounded-lg"
          />
          <h1 className="text-2xl font-bold tracking-tight text-white">
            Data Megathos
          </h1>
          <p className="text-[var(--outline)] text-sm mt-1 tracking-wider uppercase font-bold">
            Content Management System
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-[var(--brand-surface)] border border-[var(--brand-border)] p-8 space-y-6"
        >
          <div className="text-center mb-2">
            <h2 className="text-lg font-bold text-white">Sign In</h2>
            <p className="text-xs text-[var(--outline)] mt-1">
              Access restricted to authorized administrators
            </p>
          </div>

          {/* Error */}
          {error && (
            <div className="bg-[var(--error-container)] border border-[var(--error-container)] text-[var(--on-error-container)] px-4 py-3 text-sm rounded flex items-center gap-2 animate-[slideUp_200ms_var(--ease-out)]">
              <span className="material-symbols-outlined text-[18px]">
                error
              </span>
              {error}
            </div>
          )}

          {/* Email */}
          <div className="space-y-2">
            <label
              htmlFor="admin-email"
              className="text-label-sm text-[var(--primary-container)] block"
            >
              Email Address
            </label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[var(--outline)] text-[20px]">
                mail
              </span>
              <input
                id="admin-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                placeholder="admin@datamegathos.com"
                className="w-full bg-[var(--brand-bg)] border border-[var(--brand-border)] pl-10 pr-4 py-3 text-white text-sm placeholder-[var(--outline)] focus:outline-none focus:border-[var(--primary-container)] focus:ring-1 focus:ring-[var(--primary-container)]/30 transition-all"
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label
              htmlFor="admin-password"
              className="text-label-sm text-[var(--primary-container)] block"
            >
              Password
            </label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[var(--outline)] text-[20px]">
                lock
              </span>
              <input
                id="admin-password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
                placeholder="••••••••"
                className="w-full bg-[var(--brand-bg)] border border-[var(--brand-border)] pl-10 pr-12 py-3 text-white text-sm placeholder-[var(--outline)] focus:outline-none focus:border-[var(--primary-container)] focus:ring-1 focus:ring-[var(--primary-container)]/30 transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--outline)] hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">
                  {showPassword ? "visibility_off" : "visibility"}
                </span>
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[var(--primary-container)] text-white py-3 font-bold tracking-widest uppercase text-sm hover:opacity-90 transition-all active:scale-[0.98] duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <div className="spinner !w-4 !h-4 !border-2" />
                Authenticating…
              </>
            ) : (
              <>
                <span className="material-symbols-outlined text-[18px]">
                  login
                </span>
                Sign In
              </>
            )}
          </button>
        </form>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-[10px] text-[var(--outline)] uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} Data Megathos Engineering
          </p>
        </div>
      </div>
    </div>
  );
}
