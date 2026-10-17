import type { Metadata } from "next";
import Link from "next/link";

// TODO: replace with your real production domain
const SITE_URL = "https://www.datamegathos.com";

export const metadata: Metadata = {
  title: "Website Design Services in Lagos, Nigeria | Data Megathos",
  description:
    "Website design services, mobile app development, WordPress websites and AI automation from Data Megathos, a web design company and tech company in Lagos, Nigeria.",
  alternates: { canonical: `${SITE_URL}/services` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/services`,
    siteName: "Data Megathos",
    title: "Website Design Services in Lagos, Nigeria | Data Megathos",
    description:
      "Web design agency in Lagos offering website design, mobile apps, WordPress, custom software and AI automation.",
    locale: "en_NG",
  },
};

const services = [
  {
    id: "web-design",
    icon: "web",
    title: "Website Design & Development",
    tag: "For Businesses & SMEs",
    href: "/web-design",
    description:
      "Professional website design services in Lagos for companies that want a fast, modern site that wins customers. We design and build business websites, landing pages and redesigns that look sharp on every device and are structured to rank on Google.",
    features: [
      "Custom UI/UX Website Design",
      "Mobile-first Responsive Development",
      "On-page SEO & Speed Optimization",
    ],
  },
  {
    id: "mobile-apps",
    icon: "smartphone",
    title: "Mobile App Development",
    tag: "For Startups",
    href: "/mobile-app-development",
    description:
      "Turn your vision into a market-ready product. We prioritize speed-to-market with high-performance MVP development for iOS and Android, ensuring your startup can scale rapidly as your user base grows.",
    features: [
      "Rapid MVP Prototyping",
      "Flutter & React Native Apps",
      "Scalable Cloud Backends",
    ],
  },
  {
    id: "digital-marketing",
    icon: "campaign",
    title: "Digital Marketing & SEO",
    tag: "Growth & Acquisition",
    href: "/digital-marketing",
    description:
      "Turn clicks into measurable revenue. We combine technical SEO, Google Ads, and targeted social media marketing with conversion rate optimization to drive customer acquisition for businesses in Lagos and across Nigeria.",
    features: [
      "Technical SEO & Google Ads Management",
      "Paid Social Media (Meta, TikTok & LinkedIn)",
      "Conversion Tracking & Live Analytics",
    ],
  },
  {
    id: "web-apps",
    icon: "language",
    title: "Web Application Engineering",
    tag: "For Startups",
    href: "/web-design",
    description:
      "Bespoke SaaS and web platforms built for performance. We focus on modern architectures that support rapid iteration and massive scalability, helping startups maintain a competitive edge.",
    features: [
      "SaaS Platform Development",
      "Progressive Web Apps (PWAs)",
      "Real-time Data Systems",
    ],
  },
  {
    id: "wordpress",
    icon: "desktop_windows",
    title: "WordPress Website Design",
    tag: "For SMEs",
    href: "/web-design",
    description:
      "Professional, SEO-optimized web presence designed for business growth. We deliver customized WordPress websites that are easy for your team to manage while maintaining premium aesthetics.",
    features: [
      "Custom Theme & Plugin Dev",
      "Advanced SEO Integration",
      "SME E-commerce (WooCommerce)",
    ],
  },
  {
    id: "custom-software",
    icon: "code_blocks",
    title: "Custom Software Development",
    tag: "Bespoke Engineering",
    href: "/services#custom-software",
    description:
      "Unique business challenges require tailored software. We engineer complex internal tools, proprietary algorithms, and enterprise-grade systems from the ground up for total control.",
    features: [
      "Legacy System Modernization",
      "Distributed Systems",
      "Security-first Architecture",
    ],
  },
  {
    id: "ai-automation",
    icon: "psychology",
    title: "AI & Workflow Automation",
    tag: "Startups & SMEs",
    href: "/services#ai-automation",
    description:
      "Maximize efficiency and reduce overhead. We implement intelligent AI agents and automated workflows that handle repetitive tasks, allowing your team to focus on high-value strategic goals.",
    features: [
      "LLM & Chatbot Integration",
      "Process Mining & Optimization",
      "Data Intelligence Dashboards",
    ],
  },
  {
    id: "integrations",
    icon: "hub",
    title: "Software Integration",
    tag: "Startups & SMEs",
    href: "/services#integrations",
    description:
      "Eliminate data silos by connecting your tech stack. We modernize workflows by ensuring your CRM, ERP, and internal tools communicate flawlessly through robust API development.",
    features: [
      "Custom API Connectors",
      "Enterprise Service Bus (ESB)",
      "Third-party Platform Sync",
    ],
  },
];

const faqs = [
  {
    q: "What website design services do you offer in Lagos?",
    a: "We design and build business websites, landing pages, WordPress websites, e-commerce stores and web applications, and we redesign existing sites that are slow, outdated or not generating enquiries.",
  },
  {
    q: "Are you a web design agency or a software company?",
    a: "Both. Data Megathos is a web design company and software development agency, so the same team can handle your website, mobile app, integrations and automation.",
  },
  {
    q: "Will my website be built to rank on Google?",
    a: "Yes. Every site we build is mobile-first, fast-loading and structured with search engines in mind, including clean headings, metadata and schema. Rankings also depend on content and links, which we can advise on.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Data Megathos services",
  itemListElement: services.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Service",
      name: s.title,
      description: s.description,
      areaServed: [
        { "@type": "City", name: "Lagos" },
        { "@type": "Country", name: "Nigeria" },
      ],
      provider: { "@type": "ProfessionalService", name: "Data Megathos", url: SITE_URL },
    },
  })),
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <div className="p-4 lg:p-0 mt-6">
        <div
          className="flex min-h-[400px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-8 relative overflow-hidden"
          style={{
            backgroundImage:
              "linear-gradient(rgba(30, 15, 16, 0.85), rgba(38, 0, 10, 0.95)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuCGpMIT3VwQ9d3dNU1P7gb1kX4oUTCk7CuPYjMP6d9LJwUBUCaIkShLllvm3eLWI68bz12qlHvoW5QvhafTgXEs9LrTNA_kH0vpJiuTuh3E3CnBCGDiXwtf5eF7QpjliX7xmMTIuYxjY8VtwRC0wfUmcMSWTXQTNgvdbejpEH2byxxfxSV8kjkCJtlR0lUfvfmIa8f_CYSkJ2BfUG13veC5tBzLUXBnvnVj-FxHldxT0vkFeR7PI1rxMrKdVKGmeyePg0TVEFvKUnv3')",
          }}
        >
          <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />
          <div className="flex flex-col gap-4 text-center relative z-10 max-w-3xl">
            <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] lg:text-6xl text-white">
              Website Design Services in Lagos, Nigeria
            </h1>
            <p className="text-lg lg:text-xl font-normal leading-relaxed text-slate-300">
              Data Megathos is a web design company and tech company in Lagos.
              From business websites to mobile apps, WordPress, custom
              software and AI automation, we build scalable, robust and
              innovative digital products.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="p-4 lg:px-0 lg:pt-16">
        <h2 className="text-3xl font-bold mb-2">
          What our web design agency in Lagos delivers
        </h2>
        <p className="text-slate-400 max-w-3xl">
          Explore our website design services and software solutions. See
          examples in our <Link href="/portfolio" className="text-primary underline">portfolio</Link>{" "}
          or <Link href="/quote" className="text-primary underline">request a quote</Link>.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 lg:px-0 lg:py-10">
        {services.map((service) => (
          <Link
            key={service.title}
            href={service.href}
            className="block"
          >
            <article
              id={service.id}
              className="flex flex-col gap-6 p-8 rounded-2xl bg-surface-container border border-primary/10 hover:border-primary/40 transition-all group scroll-mt-24 h-full"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-3xl" aria-hidden="true">
                  {service.icon}
                </span>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl font-bold">{service.title}</h3>
                <p className="text-sm font-medium text-primary uppercase tracking-wider">
                  {service.tag}
                </p>
                <p className="text-slate-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
              <ul className="space-y-2 text-sm text-slate-300">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-xs" aria-hidden="true">
                      check_circle
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <span className="inline-flex items-center gap-1 text-primary text-sm font-bold mt-auto group-hover:underline">
                Learn more
                <span className="material-symbols-outlined text-sm" aria-hidden="true">
                  arrow_forward
                </span>
              </span>
            </article>
          </Link>
        ))}
      </div>

      {/* FAQ */}
      <section className="p-4 lg:px-0 lg:py-16">
        <h2 className="text-3xl font-bold mb-8">
          Website design services: common questions
        </h2>
        <div className="flex flex-col gap-4 max-w-3xl">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="rounded-xl border border-primary/10 bg-surface-container p-6"
            >
              <summary className="cursor-pointer text-lg font-bold leading-tight">
                {item.q}
              </summary>
              <p className="text-slate-400 leading-relaxed mt-4">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <div className="px-4 py-16 text-center bg-brand-bg/30 rounded-3xl mx-4 mb-20 border border-primary/10">
        <h2 className="text-3xl font-bold mb-4">
          Ready to work with a web design company in Lagos?
        </h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          Whether you&apos;re a scaling startup or an established SME, we have
          the technical expertise to bring your ideas to life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-bold transition-all"
          >
            Start a Project
          </Link>
          <a
            href="https://wa.me/2349068954455"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-primary/40 hover:bg-primary/10 text-primary px-8 py-3 rounded-lg font-bold transition-all"
          >
            Chat with an Expert
          </a>
        </div>
      </div>
    </div>
  );
}
