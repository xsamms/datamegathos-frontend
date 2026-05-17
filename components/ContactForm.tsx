"use client";

import { useState } from "react";
import { z } from "zod";

const serviceOptions = [
  { value: "custom_software", label: "Custom Software Development" },
  { value: "web_app", label: "Web Application" },
  { value: "mobile_app", label: "Mobile Application" },
  { value: "wordpress", label: "Wordpress Development" },
  { value: "ai_automation", label: "AI Automation" },
  { value: "software_integration", label: "Software Integration" },
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

const contactSchema = z.object({
  fullName: z.string().min(2, "Full Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  countryCode: z.string().min(1, "Country code is required"),
  phone: z.string().min(5, "Please enter a valid phone number"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export function ContactForm() {
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
      type: "contact",
      fullName: formData.get("fullName") as string,
      email: formData.get("email") as string,
      countryCode: formData.get("countryCode") as string,
      phone: formData.get("phone") as string,
      service: formData.get("service") as string,
      message: formData.get("message") as string,
    };

    // Client side validation
    try {
      contactSchema.parse(data);
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
      setErrors({ form: "An error occurred while sending your message. Please try again later." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit} noValidate>
      {success && (
        <div className="p-4 bg-brand-accent-green/20 text-brand-accent-green border border-brand-accent-green rounded-lg mb-2">
          Your message has been sent successfully! We will get back to you soon.
        </div>
      )}
      
      {errors.form && (
        <div className="p-4 bg-primary/20 text-primary border border-primary rounded-lg mb-2">
          {errors.form}
        </div>
      )}

      {/* Full Name Field */}
      <div className="flex flex-col gap-2">
        <label
          className="text-on-surface-variant text-sm font-semibold"
          htmlFor="fullName"
        >
          Full Name
        </label>
        <div className="relative">
          <input
            className={`input pl-4 ${errors.fullName ? "border-primary" : ""}`}
            id="fullName"
            name="fullName"
            placeholder="John Doe"
            type="text"
          />
        </div>
        {errors.fullName && <p className="text-primary text-xs">{errors.fullName}</p>}
      </div>

      {/* Email Field */}
      <div className="flex flex-col gap-2">
        <label
          className="text-on-surface-variant text-sm font-semibold"
          htmlFor="email"
        >
          Email Address
        </label>
        <div className="relative">
          <input
            className={`input pl-4 ${errors.email ? "border-primary" : ""}`}
            id="email"
            name="email"
            placeholder="john@example.com"
            type="email"
          />
        </div>
        {errors.email && <p className="text-primary text-xs">{errors.email}</p>}
      </div>

      {/* Phone Number (International) Field */}
      <div className="flex flex-col gap-2">
        <label
          className="text-on-surface-variant text-sm font-semibold"
          htmlFor="phone"
        >
          Phone Number
        </label>
        <div className="flex gap-2">
          <div className="relative shrink-0">
            <select
              className="input w-[110px] pr-8 appearance-none cursor-pointer"
              id="countryCode"
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
              className={`input pl-4 ${errors.phone ? "border-primary" : ""}`}
              id="phone"
              name="phone"
              placeholder="(555) 123-4567"
              type="tel"
            />
          </div>
        </div>
        {errors.phone && <p className="text-primary text-xs">{errors.phone}</p>}
      </div>

      {/* Service Interest Field */}
      <div className="flex flex-col gap-2">
        <label
          className="text-on-surface-variant text-sm font-semibold"
          htmlFor="service"
        >
          Service Interest
        </label>
        <div className="relative">
          <select
            className={`input pl-4 pr-10 appearance-none cursor-pointer ${errors.service ? "border-primary" : ""}`}
            id="service"
            name="service"
            defaultValue=""
          >
            <option disabled value="">
              Select a service...
            </option>
            {serviceOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-outline">
            <span className="material-symbols-outlined text-[20px]">
              expand_more
            </span>
          </div>
        </div>
        {errors.service && <p className="text-primary text-xs">{errors.service}</p>}
      </div>

      {/* Message Field */}
      <div className="flex flex-col gap-2">
        <label
          className="text-on-surface-variant text-sm font-semibold"
          htmlFor="message"
        >
          Your Message
        </label>
        <textarea
          className={`input resize-y p-4 ${errors.message ? "border-primary" : ""}`}
          id="message"
          name="message"
          placeholder="Tell us about your project or inquiry..."
          rows={5}
        />
        {errors.message && <p className="text-primary text-xs">{errors.message}</p>}
      </div>

      {/* Submit Button */}
      <button
        className="btn btn-primary mt-2 w-full py-4 text-base shadow-lg shadow-primary/20 disabled:opacity-50 flex items-center justify-center gap-2"
        type="submit"
        disabled={loading}
      >
        <span>{loading ? "Sending..." : "Send Message"}</span>
        {!loading && (
          <span className="material-symbols-outlined text-[20px]">
            send
          </span>
        )}
      </button>
    </form>
  );
}
