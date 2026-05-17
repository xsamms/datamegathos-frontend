"use client";

import { useState } from "react";
import { z } from "zod";
import Link from "next/link";

const projectTypes = [
  { value: "mobile", label: "Mobile App" },
  { value: "web", label: "Web App" },
  { value: "ai", label: "AI Automation" },
  { value: "wordpress", label: "WordPress" },
  { value: "custom", label: "Custom Software" },
  { value: "integration", label: "Integration" },
];

const budgetOptions = [
  { value: "<10k", label: "< $10k" },
  { value: "10k-25k", label: "$10k - $25k" },
  { value: "25k-50k", label: "$25k - $50k" },
  { value: "50k+", label: "$50k+" },
];

const countryCodes = [
  { code: "+1", label: "US", flag: "🇺🇸" },
  { code: "+44", label: "UK", flag: "🇬🇧" },
  { code: "+91", label: "IN", flag: "🇮🇳" },
  { code: "+49", label: "DE", flag: "🇩🇪" },
  { code: "+33", label: "FR", flag: "🇫🇷" },
  { code: "+81", label: "JP", flag: "🇯🇵" },
  { code: "+86", label: "CN", flag: "🇨🇳" },
  { code: "+61", label: "AU", flag: "🇦🇺" },
  { code: "+55", label: "BR", flag: "🇧🇷" },
  { code: "+234", label: "NG", flag: "🇳🇬" },
  { code: "+27", label: "ZA", flag: "🇿🇦" },
  { code: "+971", label: "AE", flag: "🇦🇪" },
  { code: "+65", label: "SG", flag: "🇸🇬" },
  { code: "+82", label: "KR", flag: "🇰🇷" },
  { code: "+52", label: "MX", flag: "🇲🇽" },
  { code: "+254", label: "KE", flag: "🇰🇪" },
];

const quoteSchema = z.object({
  fullName: z.string().min(2, "Full Name must be at least 2 characters"),
  companyName: z.string().optional(),
  email: z.string().email("Please enter a valid email address"),
  countryCode: z.string().min(1, "Country code is required"),
  phone: z.string().min(5, "Please enter a valid phone number"),
  projectType: z.string().min(1, "Please select a project type"),
  budget: z.string().min(1, "Please select an estimated budget"),
  description: z.string().min(10, "Description must be at least 10 characters"),
});

export function QuoteForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});
    setSuccess(false);

    const formData = new FormData(e.currentTarget);
    const data = {
      type: "quote",
      fullName: formData.get("fullName") as string,
      companyName: formData.get("companyName") as string,
      email: formData.get("email") as string,
      countryCode: formData.get("countryCode") as string,
      phone: formData.get("phone") as string,
      projectType: formData.get("projectType") as string,
      budget: formData.get("budget") as string,
      description: formData.get("description") as string,
    };

    // Client side validation
    try {
      quoteSchema.parse(data);
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

    // Submission
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to submit form");
      }

      setSuccess(true);
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setErrors({ form: "An error occurred while sending your request. Please try again later." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit} noValidate>
      {success && (
        <div className="p-4 bg-brand-accent-green/20 text-brand-accent-green border border-brand-accent-green rounded-lg mb-2">
          Your quote request has been sent successfully! We will get back to you shortly.
        </div>
      )}
      
      {errors.form && (
        <div className="p-4 bg-primary/20 text-primary border border-primary rounded-lg mb-2">
          {errors.form}
        </div>
      )}

      {/* Full Name & Company */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label
            className="text-sm font-medium leading-normal mb-2"
            htmlFor="fullName"
          >
            Full Name
          </label>
          <input
            className={`input h-12 px-4 ${errors.fullName ? "border-primary" : ""}`}
            id="fullName"
            name="fullName"
            placeholder="John Doe"
            type="text"
          />
          {errors.fullName && <p className="text-primary text-xs mt-1">{errors.fullName}</p>}
        </div>
        <div className="flex flex-col">
          <label
            className="text-sm font-medium leading-normal mb-2"
            htmlFor="companyName"
          >
            Company Name
          </label>
          <input
            className="input h-12 px-4"
            id="companyName"
            name="companyName"
            placeholder="Acme Corp"
            type="text"
          />
        </div>
      </div>

      {/* Email */}
      <div className="flex flex-col">
        <label
          className="text-sm font-medium leading-normal mb-2"
          htmlFor="quoteEmail"
        >
          Email Address
        </label>
        <input
          className={`input h-12 px-4 ${errors.email ? "border-primary" : ""}`}
          id="quoteEmail"
          name="email"
          placeholder="john@example.com"
          type="email"
        />
        {errors.email && <p className="text-primary text-xs mt-1">{errors.email}</p>}
      </div>

      {/* Phone Number (International) */}
      <div className="flex flex-col">
        <label
          className="text-sm font-medium leading-normal mb-2"
          htmlFor="quotePhone"
        >
          Phone Number
        </label>
        <div className="flex gap-2">
          <div className="relative shrink-0">
            <select
              className="input h-12 w-[110px] pr-8 appearance-none cursor-pointer"
              id="quoteCountryCode"
              name="countryCode"
              defaultValue="+1"
              aria-label="Country code"
            >
              {countryCodes.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.flag} {country.code}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 pr-2 flex items-center pointer-events-none text-outline">
              <span className="material-symbols-outlined text-[18px]">
                expand_more
              </span>
            </div>
          </div>
          <div className="relative flex-1">
            <input
              className={`input h-12 pl-4 pr-4 ${errors.phone ? "border-primary" : ""}`}
              id="quotePhone"
              name="phone"
              placeholder="(555) 123-4567"
              type="tel"
            />
          </div>
        </div>
        {errors.phone && <p className="text-primary text-xs mt-1">{errors.phone}</p>}
      </div>

      {/* Project Type */}
      <div className="flex flex-col">
        <label
          className="text-sm font-medium leading-normal mb-2"
          htmlFor="projectType"
        >
          Project Type
        </label>
        <div className="relative">
          <select
            className={`input h-12 pl-4 pr-10 appearance-none cursor-pointer ${errors.projectType ? "border-primary" : ""}`}
            id="projectType"
            name="projectType"
            defaultValue=""
          >
            <option disabled value="">
              Select a project type
            </option>
            {projectTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-outline">
            <span className="material-symbols-outlined">
              expand_more
            </span>
          </div>
        </div>
        {errors.projectType && <p className="text-primary text-xs mt-1">{errors.projectType}</p>}
      </div>

      {/* Estimated Budget */}
      <div className="flex flex-col">
        <label className="text-sm font-medium leading-normal mb-2">
          Estimated Budget
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {budgetOptions.map((opt) => (
            <label key={opt.value} className="cursor-pointer">
              <input
                className="peer sr-only"
                name="budget"
                type="radio"
                value={opt.value}
              />
              <div className="rounded-lg border border-brand-border px-3 py-3 text-center text-sm font-medium peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:text-primary transition-all hover:bg-brand-surface-elevated">
                {opt.label}
              </div>
            </label>
          ))}
        </div>
        {errors.budget && <p className="text-primary text-xs mt-1">{errors.budget}</p>}
      </div>

      {/* Project Description */}
      <div className="flex flex-col">
        <label
          className="text-sm font-medium leading-normal mb-2"
          htmlFor="quoteDescription"
        >
          Project Description
        </label>
        <textarea
          className={`input resize-y p-4 ${errors.description ? "border-primary" : ""}`}
          id="quoteDescription"
          name="description"
          placeholder="Briefly describe your project goals, features, and any specific requirements..."
          rows={4}
        />
        {errors.description && <p className="text-primary text-xs mt-1">{errors.description}</p>}
      </div>

      {/* Submit */}
      <button
        className="btn btn-primary w-full h-14 text-lg shadow-lg shadow-primary/30 mt-8 disabled:opacity-50 flex items-center justify-center gap-2"
        type="submit"
        disabled={loading}
      >
        <span>{loading ? "Sending..." : "Request Quote"}</span>
        {!loading && (
          <span className="material-symbols-outlined text-xl">
            arrow_forward
          </span>
        )}
      </button>

      <p className="text-xs text-center text-outline mt-4">
        By submitting this form, you agree to our{" "}
        <Link
          className="text-primary hover:underline"
          href="/privacy-policy"
        >
          Privacy Policy
        </Link>
        .
      </p>
    </form>
  );
}
