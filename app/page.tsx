import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://www.datamegathos.com";

export const metadata: Metadata = {
  title: "Software Development Company in Lagos | Data Megathos",
  description:
    "Data Megathos is a software development company and agency in Lagos, Nigeria. Custom software, web design, mobile apps and AI automation for startups and SMEs.",
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    siteName: "Data Megathos",
    title: "Software Development Company in Lagos | Data Megathos",
    description:
      "Software development agency in Lagos building custom software, websites, mobile apps and AI automation for startups and SMEs.",
    url: `${SITE_URL}/`,
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Development Company in Lagos | Data Megathos",
    description:
      "Software development agency in Lagos building custom software, websites, mobile apps and AI automation for startups and SMEs.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Data Megathos",
  url: "https://www.datamegathos.com/",
  description:
    "Software development company and agency in Lagos, Nigeria offering custom software development, web design, mobile apps, WordPress, AI automation and software integrations.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lagos",
    addressCountry: "NG",
  },
  areaServed: [
    { "@type": "City", name: "Lagos" },
    { "@type": "Country", name: "Nigeria" },
  ],
  serviceType: [
    "Custom software development",
    "Web application development",
    "Mobile app development",
    "WordPress development",
    "AI automation",
    "Software integration",
  ],
};

const serviceCards = [
  {
    href: "/services#custom-software",
    icon: "code_blocks",
    title: "Custom Software Development",
    description:
      "Bespoke enterprise software, scalable backends, microservices, and databases engineered by experienced software engineers to power critical workflows.",
    action: "Explore Custom Software",
  },
  {
    href: "/services#web-design",
    icon: "devices",
    title: "Web Application & Web Design",
    description:
      "High-speed, responsive web applications and websites built with Next.js, React, Node.js, and TypeScript, engineered for performance and search visibility.",
    action: "Explore Web Apps",
  },
  {
    href: "/services#mobile-apps",
    icon: "smartphone",
    title: "Mobile App Development",
    description:
      "Native iOS, Android, and cross-platform Flutter and React Native mobile apps crafted with fluid UX, high retention, and offline-first syncing.",
    action: "Explore Mobile Apps",
  },
  {
    href: "/services#wordpress",
    icon: "web",
    title: "WordPress & Headless CMS",
    description:
      "Custom WordPress architectures, headless CMS (Sanity, Strapi), and tailored e-commerce portals optimized for speed and editorial autonomy.",
    action: "Explore CMS Solutions",
  },
  {
    href: "/services#ai-automation",
    icon: "smart_toy",
    title: "AI & Growth Automation",
    description:
      "Bespoke LLM integrations, AI copilots, machine learning models, and automated business workflows that eliminate manual friction.",
    action: "Explore AI & Automation",
  },
  {
    href: "/services#integrations",
    icon: "cloud_sync",
    title: "Software Integrations & Cloud",
    description:
      "Secure API bridges, AWS/GCP cloud migration, payment processor gateways, and microservices orchestrations for reliable interoperability.",
    action: "Explore Cloud Integrations",
  },
];

const faqs = [
  {
    q: "Is Data Megathos a software development company in Lagos?",
    a: "Yes. Data Megathos is a software development company and agency based in Lagos, Nigeria. We build custom software, websites, mobile apps and AI automation for startups and businesses, and work with clients remotely.",
  },
  {
    q: "What makes Data Megathos a leading software development company?",
    a: "Unlike standard outsourcing shops, we combine senior software engineers, rigorous agile processes, and built-in growth and SEO strategy. We build scalable custom software and web applications with clean, maintainable code.",
  },
  {
    q: "How do your software engineers build MVPs for startups?",
    a: "We use a rapid prototyping approach focused strictly on core value metrics. Our software engineers build high-fidelity MVPs in 4 to 8 weeks, ensuring early user feedback, investor readiness, and room to scale.",
  },
  {
    q: "What range of services do software development firms like yours provide?",
    a: "Our software agency delivers custom software development, iOS/Android mobile apps, Next.js web applications, WordPress/CMS systems, AI integrations, API ecosystems, and full-funnel digital marketing services.",
  },
  {
    q: "How can software development and digital marketing work together?",
    a: "A great software application needs search visibility and user acquisition. By pairing software architecture with technical SEO, page speed optimization, and targeted digital marketing, we help your software get found and start driving revenue sooner.",
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main>
        {/* Hero Section */}
        <div className="@container mb-16">
          <div className="@[480px]:p-0">
            <div
              className="flex min-h-[500px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-start justify-center px-6 py-16 @[480px]:px-12 relative overflow-hidden"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(38, 0, 10, 0.7), rgba(38, 0, 10, 0.9)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAmnbGntJm28wEk4NfAYPReeNQRRlJk_gIDzz1oRxjc2FjdWErFxzs5VE9Is8jhEzjUtOBxOLUO2GZ-DdOK3Cv2zQtu62NqJIply3afnphGxqsXX3tSD_WFGbUeNWDvuk_RS6wTZg69_LXkOzSW2ZYrS5EROCv2uTFMT62GTNp-EIiOr5LD7CZY7xXVNnUrHwTaxHA1-JFOemOhuzWwY5KIs8XJWHUrGcqCoDDA4NJSkXf-bNM5U_x52qeL7JQOTvlaHaZ5nda2ScB6")',
              }}
            >
              <div className="z-10 flex flex-col gap-6 text-left max-w-3xl">
                <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl lg:text-6xl">
                  Software Development Company in Lagos: Launch Your MVP Faster &amp; Scale with Confidence
                </h1>
                <p className="text-slate-200 text-base md:text-lg font-normal leading-relaxed max-w-2xl">
                  Data Megathos is a software development agency in Lagos, Nigeria. We are the strategic software partner for startups and SMEs, building robust MVPs, scalable architectures, and intelligent automation to power your growth journey.
                </p>
                <div className="flex flex-wrap gap-4 mt-4">
                  <Link
                    href="#contact"
                    className="flex min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors"
                  >
                    <span className="truncate">Build Your MVP</span>
                  </Link>
                  <Link
                    href="#startups"
                    className="flex min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-surface border border-border text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-surface-variant transition-colors"
                  >
                    <span className="truncate">Scale Your Team</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Who We Are */}
        <section
          className="flex flex-col gap-10 px-4 py-16 @container border-t border-border/50"
          id="about"
        >
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="flex flex-col gap-6 flex-1">
              <p className="text-primary text-sm font-bold tracking-wider uppercase">
                Who We Are | The Firm
              </p>
              <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight">
                A Software Development Firm in Lagos Delivering Technical Precision
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-lg font-normal leading-relaxed">
                Data Megathos is a software development company dedicated to engineered excellence. We don&apos;t just assemble templates: our experienced software engineers design bespoke software systems, high-performing cloud architectures, and conversion-centered digital platforms built to help SMEs and startups grow.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1.5 rounded-lg bg-surface border border-border text-xs font-medium text-slate-200">
                  Full-Stack Engineering
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-surface border border-border text-xs font-medium text-slate-200">
                  Cloud Microservices
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-surface border border-border text-xs font-medium text-slate-200">
                  SEO &amp; Growth Acceleration
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-surface border border-border text-xs font-medium text-slate-200">
                  Agile Sprint Delivery
                </span>
              </div>
            </div>
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              <div className="flex gap-4 rounded-xl border border-border bg-surface p-6 flex-col shadow-lg">
                <div className="text-primary bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl" aria-hidden="true">
                    engineering
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-bold leading-tight">Experienced Software Engineers</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm font-normal leading-relaxed">
                    Senior software engineer talent experienced in modern tech stacks, high-load scaling, and resilient codebases.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 rounded-xl border border-border bg-surface p-6 flex-col shadow-lg">
                <div className="text-primary bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl" aria-hidden="true">
                    speed
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-bold leading-tight">Rapid Agile Sprints</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm font-normal leading-relaxed">
                    Bi-weekly iterations, clear roadmaps, and continuous delivery pipelines keep your software development moving fast.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 rounded-xl border border-border bg-surface p-6 flex-col shadow-lg">
                <div className="text-primary bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl" aria-hidden="true">
                    security
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-bold leading-tight">Security-First Engineering</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm font-normal leading-relaxed">
                    Zero-trust principles, OWASP-aligned practices, and data governance built into every software development milestone.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 rounded-xl border border-border bg-surface p-6 flex-col shadow-lg">
                <div className="text-primary bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl" aria-hidden="true">
                    trending_up
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-bold leading-tight">Data-Backed ROI</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm font-normal leading-relaxed">
                    Combining software engineering with performance marketing to drive measurable user acquisition and business growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* High-Growth Startups & Scaleups */}
        <section className="py-16 border-t border-border/50 px-4" id="startups">
          <div className="flex flex-col md:flex-row items-center gap-10 bg-surface rounded-2xl border border-border p-8 md:p-12 relative overflow-hidden">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="flex-1 flex flex-col gap-5 z-10">
              <p className="text-primary text-xs font-bold uppercase tracking-wider">
                High-Growth Startups &amp; Scaleups
              </p>
              <h2 className="text-2xl md:text-3xl font-black leading-tight">
                The Software Development Agency for Ambitious Founders in Lagos and Beyond
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                Early-stage founders cannot afford slow cycles or architectural debt. Our dedicated software company pods function as your fractional CTO and core engineering squad, shipping high-converting MVPs in 4 to 8 weeks while laying the technical runway for Series A funding and beyond.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-200 mt-2">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-base" aria-hidden="true">
                    check_circle
                  </span>{" "}
                  Rapid MVP Prototyping &amp; Launch
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-base" aria-hidden="true">
                    check_circle
                  </span>{" "}
                  Fractional CTO Technical Leadership
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-base" aria-hidden="true">
                    check_circle
                  </span>{" "}
                  Investor-Ready Scalable Codebases
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-base" aria-hidden="true">
                    check_circle
                  </span>{" "}
                  Cost-Efficient Serverless &amp; Cloud Stacks
                </li>
              </ul>
            </div>
            <div className="w-full md:w-auto flex flex-col gap-4 z-10">
              <div className="p-6 rounded-xl border border-primary/30 bg-background-dark/80 backdrop-blur-md flex flex-col gap-2 min-w-[260px]">
                <div className="text-2xl font-black text-primary">4-8 Weeks</div>
                <div className="text-xs text-slate-400 font-medium">Average Market MVP Delivery</div>
              </div>
              <div className="p-6 rounded-xl border border-border bg-background-dark/80 backdrop-blur-md flex flex-col gap-2 min-w-[260px]">
                <div className="text-2xl font-black text-white">100% IP Ownership</div>
                <div className="text-xs text-slate-400 font-medium">Full Source Code &amp; Infrastructure Handover</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 border-t border-border/50" id="services">
          <div className="flex flex-col items-center text-center mb-12 gap-4 px-4">
            <p className="text-primary text-sm font-bold tracking-wider uppercase">
              End-to-End Capabilities
            </p>
            <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight">
              Full-Lifecycle Software Development &amp; Digital Solutions
            </h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl text-base">
              As a full-service software development firm, we cover everything from custom software development to technical SEO and digital marketing, so you get one team for complete digital transformation.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            {serviceCards.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group relative flex flex-col gap-4 rounded-xl border border-border bg-surface p-8 hover:border-primary transition-colors overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 transition-transform group-hover:scale-110" />
                <div className="text-primary mb-2">
                  <span className="material-symbols-outlined text-4xl" aria-hidden="true">
                    {service.icon}
                  </span>
                </div>
                <h3 className="text-xl font-bold leading-tight">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {service.description}
                </p>
                <span className="mt-auto text-primary text-xs font-bold inline-flex items-center gap-1">
                  {service.action}{" "}
                  <span className="material-symbols-outlined text-sm" aria-hidden="true">
                    arrow_forward
                  </span>
                </span>
              </Link>
            ))}

            {/* Digital Marketing & SEO (Wide) */}
            <div className="group relative flex flex-col gap-4 rounded-xl border border-border bg-surface p-8 hover:border-primary transition-colors overflow-hidden sm:col-span-2 lg:col-span-3">
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-bl-full -z-10 transition-transform group-hover:scale-110" />
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="text-primary">
                    <span className="material-symbols-outlined text-4xl" aria-hidden="true">
                      ads_click
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold leading-tight">
                      Digital Marketing &amp; Search Engine Optimization (SEO)
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm max-w-3xl mt-1 leading-relaxed">
                      Software without users yields zero value. Our integrated digital marketing arm handles technical SEO, paid user acquisition, funnel optimization (CRO), and content marketing so your software platform gets found and drives revenue.
                    </p>
                  </div>
                </div>
                <Link
                  className="flex min-w-[140px] cursor-pointer items-center justify-center gap-2 rounded-lg h-10 px-5 bg-primary/20 border border-primary/40 text-primary text-sm font-bold hover:bg-primary hover:text-white transition-colors shrink-0"
                  href="#contact"
                >
                  <span>Boost Digital Growth</span>
                  <span className="material-symbols-outlined text-sm" aria-hidden="true">
                    north_east
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why us */}
        <section className="py-16 border-t border-border/50 px-4" id="why-us">
          <div className="flex flex-col items-center text-center mb-12 gap-4">
            <p className="text-primary text-sm font-bold tracking-wider uppercase">
              Engineering Superiority
            </p>
            <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight">
              Why Partner with Data Megathos as Your Software Development Company?
            </h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl text-base">
              We stand apart from generic software development firms through senior-led engineering, high standards, and total transparency.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface border border-border p-8 rounded-xl flex flex-col gap-3">
              <div className="text-primary">
                <span className="material-symbols-outlined text-3xl" aria-hidden="true">
                  verified_user
                </span>
              </div>
              <h3 className="text-lg font-bold">Senior Software Engineer Pods</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                No bait-and-switch junior outsourcing. Every line of code is produced or reviewed by experienced software engineers with deep production backgrounds.
              </p>
            </div>
            <div className="bg-surface border border-border p-8 rounded-xl flex flex-col gap-3">
              <div className="text-primary">
                <span className="material-symbols-outlined text-3xl" aria-hidden="true">
                  sync_alt
                </span>
              </div>
              <h3 className="text-lg font-bold">Transparent Agile Operations</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Live demo sessions every two weeks, direct Slack channels with developers, and clear pricing with no surprise fees. You remain in total command.
              </p>
            </div>
            <div className="bg-surface border border-border p-8 rounded-xl flex flex-col gap-3">
              <div className="text-primary">
                <span className="material-symbols-outlined text-3xl" aria-hidden="true">
                  hub
                </span>
              </div>
              <h3 className="text-lg font-bold">Unified Software + Marketing</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Unlike disconnected development agencies, we pair software architecture with technical SEO and conversion funnels from Day 1.</p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 border-t border-border/50" id="testimonials">
          <div className="flex flex-col items-center text-center mb-12 gap-4">
            <p className="text-primary text-sm font-bold tracking-wider uppercase">
              Client Validation &amp; Results
            </p>
            <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight">
              Trusted by Tech Founders, CTOs, and SME Leaders
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
            <figure className="bg-surface border border-border p-8 rounded-xl relative">
              <span
                className="material-symbols-outlined absolute top-6 right-6 text-primary/20 text-6xl"
                aria-hidden="true"
              >
                format_quote
              </span>
              <div className="flex gap-1 text-primary mb-4" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-sm" aria-hidden="true">
                    star
                  </span>
                ))}
              </div>
              <blockquote className="text-slate-600 dark:text-slate-300 italic mb-6 relative z-10">
                &ldquo;As a fast-paced fintech startup, we needed a top-tier software development company that could build scalable microservices and native mobile apps without cutting security corners. Data Megathos acted as our dedicated engineering arm, delivering on-time and investor-ready.&rdquo;
              </blockquote>
              <figcaption className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-variant flex items-center justify-center font-bold text-primary">
                  LD
                </div>
                <div>
                  <p className="font-bold">Liam Dawson</p>
                  <p className="text-sm text-slate-500">Founder &amp; CEO, NexoApp</p>
                </div>
              </figcaption>
            </figure>
            <figure className="bg-surface border border-border p-8 rounded-xl relative">
              <span
                className="material-symbols-outlined absolute top-6 right-6 text-primary/20 text-6xl"
                aria-hidden="true"
              >
                format_quote
              </span>
              <div className="flex gap-1 text-primary mb-4" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-sm" aria-hidden="true">
                    star
                  </span>
                ))}
              </div>
              <blockquote className="text-slate-600 dark:text-slate-300 italic mb-6 relative z-10">
                &ldquo;We previously hired another software development firm that left us with unmaintainable legacy code. Data Megathos&apos;s senior software engineers refactored our entire stack, improved page speeds by 65%, and integrated technical SEO that tripled our inbound demo requests.&rdquo;
              </blockquote>
              <figcaption className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-variant flex items-center justify-center font-bold text-primary">
                  AM
                </div>
                <div>
                  <p className="font-bold">Aria Miller</p>
                  <p className="text-sm text-slate-500">Head of Product, ScaleScale</p>
                </div>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 border-t border-border/50 px-4" id="faq">
          <div className="flex flex-col items-center text-center mb-12 gap-4">
            <p className="text-primary text-sm font-bold tracking-wider uppercase">
              Got Questions?
            </p>
            <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight">
              Software Development Company FAQ
            </h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl text-base">
              Answers about our software development process, tech stacks, and how we work with startups and SMEs.
            </p>
          </div>
          <div className="max-w-3xl mx-auto flex flex-col gap-4">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="bg-surface border border-border rounded-xl p-6 flex flex-col gap-2"
              >
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-xl" aria-hidden="true">
                    help_outline
                  </span>
                  {faq.q}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed pl-7">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 border-t border-border/50" id="contact">
          <div className="bg-primary/10 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-primary/20 mx-4">
            <div className="flex flex-col gap-4 text-center md:text-left max-w-xl">
              <div className="inline-flex items-center justify-center md:justify-start gap-2 text-primary font-bold text-xs uppercase tracking-wider">
                <span className="material-symbols-outlined text-sm" aria-hidden="true">
                  handshake
                </span>
                Partner With Us Today
              </div>
              <h2 className="text-2xl md:text-3xl font-black leading-tight">
                Ready to Build with a Software Development Agency in Lagos?
              </h2>
              <p className="text-slate-600 dark:text-slate-300">
                Schedule a free engineering consultation or request a quote for your custom software development project.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <Link
                href="/quote"
                className="flex min-w-[150px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal hover:bg-primary/90 transition-colors shadow-lg"
              >
                <span className="material-symbols-outlined text-xl" aria-hidden="true">
                  rocket_launch
                </span>
                <span>Get a Quote</span>
              </Link>
              <Link
                href="/pay"
                className="flex min-w-[150px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-12 px-6 bg-surface border border-border text-white text-base font-bold leading-normal hover:bg-surface-variant transition-colors"
              >
                <span className="material-symbols-outlined text-xl" aria-hidden="true">
                  credit_card
                </span>
                <span>Make Payment</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
