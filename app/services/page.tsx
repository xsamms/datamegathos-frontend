import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services - Data Megathos",
  description:
    "Driving digital transformation through precision engineering and innovative software solutions. Mobile apps, web platforms, WordPress, AI automation, and more.",
};

const services = [
  {
    icon: "smartphone",
    title: "Mobile App Development",
    tag: "For Startups",
    description:
      "Turn your vision into a market-ready product. We prioritize speed-to-market with high-performance MVP development for iOS and Android, ensuring your startup can scale rapidly as your user base grows.",
    features: [
      "Rapid MVP Prototyping",
      "Flutter & React Native Apps",
      "Scalable Cloud Backends",
    ],
  },
  {
    icon: "language",
    title: "Web Application Engineering",
    tag: "For Startups",
    description:
      "Bespoke SaaS and web platforms built for performance. We focus on modern architectures that support rapid iteration and massive scalability, helping startups maintain a competitive edge.",
    features: [
      "SaaS Platform Development",
      "Progressive Web Apps (PWAs)",
      "Real-time Data Systems",
    ],
  },
  {
    icon: "desktop_windows",
    title: "WordPress Solutions",
    tag: "For SMEs",
    description:
      "Professional, SEO-optimized web presence designed for business growth. We deliver customized WordPress sites that are easy for your team to manage while maintaining premium aesthetics.",
    features: [
      "Custom Theme & Plugin Dev",
      "Advanced SEO Integration",
      "SME E-commerce (WooCommerce)",
    ],
  },
  {
    icon: "code_blocks",
    title: "Custom Development",
    tag: "Bespoke Engineering",
    description:
      "Unique business challenges require tailored software. We engineer complex internal tools, proprietary algorithms, and enterprise-grade systems from the ground up for total control.",
    features: [
      "Legacy System Modernization",
      "Distributed Systems",
      "Security-first Architecture",
    ],
  },
  {
    icon: "psychology",
    title: "AI & Workflow Automation",
    tag: "Startups & SMEs",
    description:
      "Maximize efficiency and reduce overhead. We implement intelligent AI agents and automated workflows that handle repetitive tasks, allowing your team to focus on high-value strategic goals.",
    features: [
      "LLM & Chatbot Integration",
      "Process Mining & Optimization",
      "Data Intelligence Dashboards",
    ],
  },
  {
    icon: "hub",
    title: "Software Integration",
    tag: "Startups & SMEs",
    description:
      "Eliminate data silos by connecting your tech stack. We modernize workflows by ensuring your CRM, ERP, and internal tools communicate flawlessly through robust API development.",
    features: [
      "Custom API Connectors",
      "Enterprise Service Bus (ESB)",
      "Third-party Platform Sync",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
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
              Our Services
            </h1>
            <p className="text-lg lg:text-xl font-normal leading-relaxed text-slate-300">
              Comprehensive software development solutions tailored to your business needs. We build scalable, robust, and innovative digital products.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 lg:px-0 lg:py-16">
        {services.map((service) => (
          <div
            key={service.title}
            className="flex flex-col gap-6 p-8 rounded-2xl bg-surface-container border border-primary/10 hover:border-primary/40 transition-all group"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-3xl">
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
                  <span className="material-symbols-outlined text-primary text-xs">
                    check_circle
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="px-4 py-16 text-center bg-brand-bg/30 rounded-3xl mx-4 mb-20 border border-primary/10">
        <h2 className="text-3xl font-bold mb-4">
          Ready to accelerate your growth?
        </h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          Whether you&apos;re a scaling startup or an established SME, we have
          the technical expertise to bring your ideas to life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/#contact"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-bold transition-all"
          >
            Start a Project
          </Link>
          <Link
            href="/#contact"
            className="border border-primary/40 hover:bg-primary/10 text-primary px-8 py-3 rounded-lg font-bold transition-all"
          >
            Talk to an Expert
          </Link>
        </div>
      </div>
    </div>
  );
}
