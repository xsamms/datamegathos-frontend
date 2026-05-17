import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact & Support - Data Megathos",
  description:
    "Get in touch with Data Megathos for custom software development, web and mobile applications, data engineering, and AI automation inquiries.",
};

const contactCards = [
  {
    icon: "location_on",
    title: "Office Address",
    content: (
      <>
        Villa C, Eleganza Estate,
        <br />
        by Chevron, Lekki - Lagos
      </>
    ),
  },
  {
    icon: "mail",
    title: "Email Us",
    content: (
      <a
        className="text-on-surface-variant hover:text-primary transition-colors"
        href="mailto:creative@datamegathos.com"
      >
        creative@datamegathos.com
      </a>
    ),
  },
  {
    icon: "call",
    title: "Call Us",
    content: (
      <a
        className="text-on-surface-variant hover:text-primary transition-colors"
        href="tel:+2349068954455"
      >
        +2349068954455
      </a>
    ),
  },
];

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

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center py-10 px-4 md:px-10 w-full">
      <div className="w-full max-w-[1200px] flex flex-col gap-10">
        {/* Page Header */}
        <div className="flex flex-col gap-3 max-w-2xl">
          <h1 className="text-on-surface text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
            Contact Us
          </h1>
          <p className="text-on-surface-variant text-lg font-normal leading-relaxed">
            Ready to transform your digital presence? Get in touch with our team
            for inquiries, support, or to discuss your next big project.
          </p>
        </div>

        {/* Split Screen Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column: Contact Info & Map */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-on-surface text-[22px] font-bold leading-tight tracking-[-0.015em] mb-6">
                Contact Information
              </h2>
              <div className="flex flex-col gap-4">
                {contactCards.map((card) => (
                  <div
                    key={card.title}
                    className="flex items-start gap-4 p-4 rounded-xl bg-brand-surface border border-brand-border shadow-sm transition-transform hover:-translate-y-1 duration-300"
                  >
                    <div className="text-primary flex items-center justify-center rounded-lg bg-primary/10 shrink-0 size-12">
                      <span className="material-symbols-outlined">
                        {card.icon}
                      </span>
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className="text-on-surface text-base font-semibold leading-normal">
                        {card.title}
                      </p>
                      <p className="text-on-surface-variant text-sm font-normal leading-normal mt-1">
                        {card.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp Button */}
            <div>
              <a
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-brand-accent-green hover:bg-brand-accent-green/90 text-white font-bold text-base transition-all shadow-lg shadow-brand-accent-green/20 w-full sm:w-auto"
                href="https://wa.me/2349068954455"
              >
                <span className="material-symbols-outlined">forum</span>
                Chat on WhatsApp
              </a>
            </div>

            {/* Embedded Map Placeholder */}
            <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden relative border border-brand-border shadow-inner group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Map showing office location in Silicon Valley"
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDuwXfGpz0gPFUcp66gOns9ImWx-Kn6kPdGGoGeWVtYaoNmNGf6klvBu1cZhv-0pWRsO2Z2MO2c0VUsxIe_kdgotGIc1CzbQAOZ4WSRTL5GOIAnycromBX6ehBa5bIZOGGLLzj6N61GhD2wIvgrg9ITq9v7vNSmKyoeqdJI5hnLNvqkViRo2ZR1Cvq825w7Qf_YZtqs9M7-TFS01JdLDfuuysCvyihmk2AzVXEy5sXzTSQgJKWcSxMyowBGkXKL1XfHJChsg-Lc5--"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/80 to-transparent" />
              {/* Red Pin */}
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center animate-bounce"
                style={{ animationDuration: "2s" }}
              >
                <span
                  className="material-symbols-outlined filled text-primary"
                  style={{ fontSize: "48px" }}
                >
                  location_on
                </span>
                <div className="w-4 h-1 bg-black/30 rounded-full blur-[2px] mt-1" />
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-brand-surface p-8 md:p-10 rounded-2xl border border-brand-border shadow-xl shadow-black/20 h-fit">
            <h2 className="text-on-surface text-[28px] font-bold leading-tight mb-2">
              Send a Message
            </h2>
            <p className="text-on-surface-variant text-sm mb-8">
              Fill out the form below and we&apos;ll get back to you within 24
              hours.
            </p>

            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
