"use client";

import { useState } from "react";

export function AuditForm() {
  const [fullname, setFullname] = useState("");
  const [contact, setContact] = useState("");
  const [website, setWebsite] = useState("");
  const [goal, setGoal] = useState("SEO (rank higher on Google)");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text =
      "Hello Data Megathos, I would like a free growth audit.\n" +
      `Name: ${fullname}\n` +
      `Contact: ${contact}\n` +
      `Website: ${website}\n` +
      `Goal: ${goal}`;
    window.open(
      `https://wa.me/2349068954455?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label
          htmlFor="fullname"
          className="block font-label-sm text-[11px] text-on-surface-variant uppercase tracking-wider mb-1.5"
        >
          Full Name
        </label>
        <input
          id="fullname"
          name="fullname"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          className="w-full bg-surface-container-low text-on-surface px-4 py-3 rounded-lg text-body-md focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-outline-variant"
          placeholder="e.g. Babatunde Adeyemi"
          required
          type="text"
        />
      </div>

      <div>
        <label
          htmlFor="contact"
          className="block font-label-sm text-[11px] text-on-surface-variant uppercase tracking-wider mb-1.5"
        >
          Work Email / WhatsApp
        </label>
        <input
          id="contact"
          name="contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          className="w-full bg-surface-container-low text-on-surface px-4 py-3 rounded-lg text-body-md focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-outline-variant"
          placeholder="tunde@company.ng or +234..."
          required
          type="text"
        />
      </div>

      <div>
        <label
          htmlFor="website"
          className="block font-label-sm text-[11px] text-on-surface-variant uppercase tracking-wider mb-1.5"
        >
          Company Website / App Link
        </label>
        <input
          id="website"
          name="website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          className="w-full bg-surface-container-low text-on-surface px-4 py-3 rounded-lg text-body-md focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-outline-variant"
          placeholder="https://yourcompany.com"
          required
          type="url"
        />
      </div>

      <div>
        <label
          htmlFor="goal"
          className="block font-label-sm text-[11px] text-on-surface-variant uppercase tracking-wider mb-1.5"
        >
          Primary Growth Objective
        </label>
        <select
          id="goal"
          name="goal"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          className="w-full bg-surface-container-low text-on-surface px-4 py-3 rounded-lg text-body-md focus:outline-none focus:ring-1 focus:ring-primary"
        >
          <option>SEO (rank higher on Google)</option>
          <option>Google Ads and Meta Ads</option>
          <option>Social media marketing services</option>
          <option>Conversion rate optimization</option>
        </select>
      </div>

      <button
        className="w-full mt-2 py-4 px-6 rounded-lg bg-primary-container text-on-primary-container font-label-sm text-label-sm tracking-wider uppercase shadow-xl hover:bg-surface-bright transition-all flex items-center justify-center gap-2 cursor-pointer"
        type="submit"
      >
        <span>Send Request on WhatsApp</span>
        <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
          arrow_forward
        </span>
      </button>
    </form>
  );
}
