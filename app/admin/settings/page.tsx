"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/useAuth";
import { AdminSidebar } from "@/components/AdminSidebar";
import { AdminNav } from "@/components/AdminNav";

interface SiteSettings {
  siteName: string;
  siteDescription: string;
  contactEmail: string;
  whatsappNumber: string;
  socialTwitter: string;
  socialLinkedin: string;
  socialGithub: string;
  analyticsId: string;
}

const defaultSettings: SiteSettings = {
  siteName: "Data Megathos",
  siteDescription:
    "High-end software development agency specializing in mobile/web development, bespoke software solutions, and intelligent AI automation.",
  contactEmail: "",
  whatsappNumber: "",
  socialTwitter: "",
  socialLinkedin: "",
  socialGithub: "",
  analyticsId: "",
};

export default function AdminSettingsPage() {
  const router = useRouter();
  const { user, isLoading: authLoading, isAuthenticated } = useAuth();

  const [settings, setSettings] = useState<SiteSettings>(defaultSettings);
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [activeSection, setActiveSection] = useState<
    "general" | "social" | "account" | "danger"
  >("general");

  // Password change state
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      router.push("/admin/login");
    }
  }, [authLoading, isAuthenticated, router]);

  // Load settings from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("dm-site-settings");
    if (stored) {
      try {
        setSettings({ ...defaultSettings, ...JSON.parse(stored) });
      } catch {
        // Ignore
      }
    }
  }, []);

  const handleSave = () => {
    setIsSaving(true);
    setSaveSuccess(false);
    // Simulate save
    setTimeout(() => {
      localStorage.setItem("dm-site-settings", JSON.stringify(settings));
      setIsSaving(false);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    }, 500);
  };

  const handleChange = (
    key: keyof SiteSettings,
    value: string
  ) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
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

  const sections = [
    { id: "general" as const, label: "General", icon: "tune" },
    { id: "social" as const, label: "Social & Links", icon: "share" },
    { id: "account" as const, label: "Account", icon: "person" },
    { id: "danger" as const, label: "Danger Zone", icon: "warning" },
  ];

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-[var(--surface)]">
      <AdminNav />

      <div className="flex flex-1 overflow-hidden">
        <AdminSidebar />

        <main className="flex-1 overflow-y-auto cms-scrollbar bg-[var(--surface)] p-8">
          <div className="max-w-[900px] mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-black text-white tracking-tight">
                  Settings
                </h1>
                <p className="text-sm text-[var(--outline)] mt-1">
                  Configure your site, social links, and account preferences.
                </p>
              </div>
              <button
                onClick={handleSave}
                disabled={isSaving}
                className="bg-[var(--primary-container)] text-white px-5 py-3 font-bold text-sm uppercase tracking-widest hover:opacity-90 transition-all active:scale-95 flex items-center gap-2 disabled:opacity-50"
              >
                {isSaving ? (
                  <>
                    <div className="spinner !w-4 !h-4 !border-2" />
                    Saving…
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-[18px]">
                      save
                    </span>
                    Save Settings
                  </>
                )}
              </button>
            </div>

            {/* Success Banner */}
            {saveSuccess && (
              <div className="mb-6 bg-[var(--tertiary-container)] border border-[var(--tertiary-container)] text-[var(--on-tertiary-container)] px-4 py-3 text-sm flex items-center gap-2 animate-[slideUp_200ms_var(--ease-out)]">
                <span className="material-symbols-outlined text-[18px]">
                  check_circle
                </span>
                Settings saved successfully!
              </div>
            )}

            {/* Section Tabs */}
            <div className="flex gap-1 mb-8 bg-[var(--brand-surface)] border border-[var(--brand-border)] p-1 overflow-x-auto">
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setActiveSection(s.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-widest transition-all whitespace-nowrap ${
                    activeSection === s.id
                      ? "bg-[var(--primary-container)] text-white"
                      : "text-[var(--outline)] hover:text-white"
                  }`}
                >
                  <span className="material-symbols-outlined text-[16px]">
                    {s.icon}
                  </span>
                  {s.label}
                </button>
              ))}
            </div>

            {/* General Section */}
            {activeSection === "general" && (
              <div className="space-y-6">
                <div className="bg-[var(--brand-surface)] border border-[var(--brand-border)] p-6 space-y-6">
                  <h2 className="text-lg font-bold text-white flex items-center gap-2">
                    <span className="material-symbols-outlined text-[var(--primary-container)]">
                      tune
                    </span>
                    General Settings
                  </h2>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--outline)]">
                        Site Name
                      </label>
                      <input
                        type="text"
                        value={settings.siteName}
                        onChange={(e) =>
                          handleChange("siteName", e.target.value)
                        }
                        className="w-full bg-[var(--brand-bg)] border border-[var(--brand-border)] p-3 text-sm text-white focus:outline-none focus:border-[var(--primary-container)] transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--outline)]">
                        Site Description
                      </label>
                      <textarea
                        value={settings.siteDescription}
                        onChange={(e) =>
                          handleChange("siteDescription", e.target.value)
                        }
                        rows={3}
                        className="w-full bg-[var(--brand-bg)] border border-[var(--brand-border)] p-3 text-sm text-white focus:outline-none focus:border-[var(--primary-container)] transition-colors resize-none"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--outline)]">
                        Contact Email
                      </label>
                      <input
                        type="email"
                        value={settings.contactEmail}
                        onChange={(e) =>
                          handleChange("contactEmail", e.target.value)
                        }
                        placeholder="hello@datamegathos.com"
                        className="w-full bg-[var(--brand-bg)] border border-[var(--brand-border)] p-3 text-sm text-white focus:outline-none focus:border-[var(--primary-container)] transition-colors placeholder-[var(--outline-variant)]"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--outline)]">
                        WhatsApp Number
                      </label>
                      <input
                        type="text"
                        value={settings.whatsappNumber}
                        onChange={(e) =>
                          handleChange("whatsappNumber", e.target.value)
                        }
                        placeholder="+27 12 345 6789"
                        className="w-full bg-[var(--brand-bg)] border border-[var(--brand-border)] p-3 text-sm text-white focus:outline-none focus:border-[var(--primary-container)] transition-colors placeholder-[var(--outline-variant)]"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--outline)]">
                        Analytics Tracking ID
                      </label>
                      <input
                        type="text"
                        value={settings.analyticsId}
                        onChange={(e) =>
                          handleChange("analyticsId", e.target.value)
                        }
                        placeholder="G-XXXXXXXXXX"
                        className="w-full bg-[var(--brand-bg)] border border-[var(--brand-border)] p-3 text-sm text-white focus:outline-none focus:border-[var(--primary-container)] transition-colors placeholder-[var(--outline-variant)]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Social Section */}
            {activeSection === "social" && (
              <div className="space-y-6">
                <div className="bg-[var(--brand-surface)] border border-[var(--brand-border)] p-6 space-y-6">
                  <h2 className="text-lg font-bold text-white flex items-center gap-2">
                    <span className="material-symbols-outlined text-[var(--primary-container)]">
                      share
                    </span>
                    Social Media & Links
                  </h2>

                  <div className="space-y-4">
                    {[
                      {
                        key: "socialTwitter" as const,
                        label: "Twitter / X",
                        icon: "alternate_email",
                        placeholder: "https://x.com/datamegathos",
                      },
                      {
                        key: "socialLinkedin" as const,
                        label: "LinkedIn",
                        icon: "work",
                        placeholder:
                          "https://linkedin.com/company/datamegathos",
                      },
                      {
                        key: "socialGithub" as const,
                        label: "GitHub",
                        icon: "code",
                        placeholder: "https://github.com/datamegathos",
                      },
                    ].map((social) => (
                      <div key={social.key} className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--outline)] flex items-center gap-2">
                          <span className="material-symbols-outlined text-[14px]">
                            {social.icon}
                          </span>
                          {social.label}
                        </label>
                        <input
                          type="url"
                          value={settings[social.key]}
                          onChange={(e) =>
                            handleChange(social.key, e.target.value)
                          }
                          placeholder={social.placeholder}
                          className="w-full bg-[var(--brand-bg)] border border-[var(--brand-border)] p-3 text-sm text-white focus:outline-none focus:border-[var(--primary-container)] transition-colors placeholder-[var(--outline-variant)]"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Account Section */}
            {activeSection === "account" && (
              <div className="space-y-6">
                {/* Profile Info */}
                <div className="bg-[var(--brand-surface)] border border-[var(--brand-border)] p-6 space-y-6">
                  <h2 className="text-lg font-bold text-white flex items-center gap-2">
                    <span className="material-symbols-outlined text-[var(--primary-container)]">
                      person
                    </span>
                    Account Information
                  </h2>

                  <div className="flex items-center gap-5 p-4 bg-[var(--brand-bg)] border border-[var(--brand-border)]">
                    <div className="w-16 h-16 rounded-full border-2 border-[var(--primary-container)] bg-[var(--brand-surface-elevated)] flex items-center justify-center text-xl font-bold text-[var(--primary-container)]">
                      {user?.name?.charAt(0)?.toUpperCase() || "A"}
                    </div>
                    <div>
                      <p className="font-bold text-white text-lg">
                        {user?.name || "Admin"}
                      </p>
                      <p className="text-sm text-[var(--outline)]">
                        {user?.email || "admin@datamegathos.com"}
                      </p>
                      <span className="inline-flex items-center gap-1 mt-1 bg-[var(--primary-container)]/15 text-[var(--primary-container)] text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                        {user?.role || "ADMIN"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Change Password */}
                <div className="bg-[var(--brand-surface)] border border-[var(--brand-border)] p-6 space-y-6">
                  <h2 className="text-lg font-bold text-white flex items-center gap-2">
                    <span className="material-symbols-outlined text-[var(--primary-container)]">
                      lock
                    </span>
                    Change Password
                  </h2>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--outline)]">
                        Current Password
                      </label>
                      <input
                        type="password"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        className="w-full bg-[var(--brand-bg)] border border-[var(--brand-border)] p-3 text-sm text-white focus:outline-none focus:border-[var(--primary-container)] transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--outline)]">
                          New Password
                        </label>
                        <input
                          type="password"
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          className="w-full bg-[var(--brand-bg)] border border-[var(--brand-border)] p-3 text-sm text-white focus:outline-none focus:border-[var(--primary-container)] transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--outline)]">
                          Confirm New Password
                        </label>
                        <input
                          type="password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          className="w-full bg-[var(--brand-bg)] border border-[var(--brand-border)] p-3 text-sm text-white focus:outline-none focus:border-[var(--primary-container)] transition-colors"
                        />
                      </div>
                    </div>

                    <button
                      disabled
                      className="bg-[var(--primary-container)] text-white px-5 py-3 font-bold text-sm uppercase tracking-widest opacity-50 cursor-not-allowed"
                    >
                      Update Password
                    </button>
                    <p className="text-[10px] text-[var(--outline-variant)]">
                      Password change requires a dedicated API endpoint (not
                      yet implemented).
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Danger Zone */}
            {activeSection === "danger" && (
              <div className="space-y-6">
                <div className="bg-[var(--brand-surface)] border border-[var(--error-container)] p-6 space-y-6">
                  <h2 className="text-lg font-bold text-[var(--error)] flex items-center gap-2">
                    <span className="material-symbols-outlined">warning</span>
                    Danger Zone
                  </h2>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-[var(--brand-bg)] border border-[var(--error-container)]/30 rounded">
                      <div>
                        <p className="text-sm font-bold text-white">
                          Clear Local Cache
                        </p>
                        <p className="text-xs text-[var(--outline)]">
                          Remove all cached settings and asset references from
                          the browser.
                        </p>
                      </div>
                      <button
                        onClick={() => {
                          if (
                            confirm(
                              "Clear all local CMS data? This won't affect your database."
                            )
                          ) {
                            localStorage.removeItem("dm-site-settings");
                            localStorage.removeItem("dm-admin-assets");
                            window.location.reload();
                          }
                        }}
                        className="px-4 py-2 border border-[var(--error-container)] text-[var(--error)] text-xs font-bold uppercase tracking-widest hover:bg-[var(--error-container)]/20 transition-all shrink-0"
                      >
                        Clear Cache
                      </button>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-[var(--brand-bg)] border border-[var(--error-container)]/30 rounded">
                      <div>
                        <p className="text-sm font-bold text-white">
                          Reset All Settings
                        </p>
                        <p className="text-xs text-[var(--outline)]">
                          Reset site settings to their default values.
                        </p>
                      </div>
                      <button
                        onClick={() => {
                          if (
                            confirm(
                              "Reset all settings to defaults? This cannot be undone."
                            )
                          ) {
                            setSettings(defaultSettings);
                            localStorage.removeItem("dm-site-settings");
                            setSaveSuccess(true);
                            setTimeout(() => setSaveSuccess(false), 3000);
                          }
                        }}
                        className="px-4 py-2 border border-[var(--error-container)] text-[var(--error)] text-xs font-bold uppercase tracking-widest hover:bg-[var(--error-container)]/20 transition-all shrink-0"
                      >
                        Reset
                      </button>
                    </div>
                  </div>
                </div>
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
