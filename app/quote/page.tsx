import type { Metadata } from "next";
import Link from "next/link";
import { QuoteForm } from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Request a Quote - Data Megathos",
  description:
    "Get a detailed proposal for your next software project. Mobile apps, web platforms, AI automation, WordPress, and custom development solutions.",
};

const valueProps = [
  {
    icon: "groups",
    title: "Expert Team",
    description: "Experienced professionals dedicated to your success.",
  },
  {
    icon: "support_agent",
    title: "24/7 Support",
    description: "Always here to help you navigate challenges.",
  },
  {
    icon: "psychology",
    title: "AI-Driven Solutions",
    description: "Smart and scalable solutions for the future.",
  },
];

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

export default function QuotePage() {
  return (
    <div className="flex flex-col lg:flex-row gap-0 -mx-4 lg:-mx-10 my-[-20px] min-h-[calc(100vh-var(--header-height))]">
      {/* Left Side: Information & Value Prop */}
      <section className="lg:w-1/2 bg-brand-bg p-10 lg:p-16 xl:p-20 flex flex-col justify-center text-white relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-20 -left-10 w-72 h-72 rounded-full bg-primary blur-[120px]" />
          <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-primary blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-lg mx-auto lg:mx-0">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black leading-tight tracking-[-0.033em] mb-6">
            Let&apos;s Build <br />
            <span className="text-primary">Something Great</span>
          </h1>
          <p className="text-lg lg:text-xl font-normal leading-relaxed text-on-surface-variant mb-12">
            We help you build high-converting software solutions tailored to
            your unique business needs. Partner with us for innovation and
            excellence.
          </p>

          {/* Value Props */}
          <div className="space-y-8 mb-16">
            {valueProps.map((prop) => (
              <div key={prop.title} className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-lg text-primary shrink-0">
                  <span className="material-symbols-outlined text-3xl">
                    {prop.icon}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">{prop.title}</h3>
                  <p className="text-on-surface-variant">{prop.description}</p>
                </div>
              </div>
            ))}
          </div>

          <Link
            className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors text-lg font-medium group"
            href="#"
          >
            <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">
              chat
            </span>
            Chat with us on WhatsApp
          </Link>
        </div>
      </section>

      {/* Right Side: Form */}
      <section className="lg:w-1/2 p-10 lg:p-16 xl:p-20 flex flex-col justify-center">
        <div className="max-w-xl mx-auto w-full">
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-2">Request a Quote</h2>
            <p className="text-on-surface-variant">
              Fill out the form below and we&apos;ll get back to you with a
              detailed proposal.
            </p>
          </div>

          <QuoteForm />
        </div>
      </section>
    </div>
  );
}
