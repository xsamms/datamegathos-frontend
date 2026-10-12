import type { Metadata } from "next";
import Link from "next/link";

// TODO: replace with your real production domain
const SITE_URL = "https://www.datamegathos.com";

export const metadata: Metadata = {
  title: "Web Design Company in Lagos, Nigeria | Data Megathos",
  description:
    "Data Megathos is a web design and tech company in Lagos, Nigeria. Website design services, mobile apps, WordPress sites and AI automation for startups and businesses.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Data Megathos",
    title: "Web Design Company in Lagos, Nigeria | Data Megathos",
    description:
      "Website design agency in Lagos building websites, mobile apps, WordPress sites and AI automation for startups and businesses.",
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design Company in Lagos, Nigeria | Data Megathos",
    description:
      "Website design services, mobile apps, WordPress and AI automation from a Lagos tech company.",
  },
};

// Structured data. Only include details that are true and match your Google Business Profile.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Data Megathos",
  url: SITE_URL,
  description:
    "Web design company and software development agency in Lagos, Nigeria offering website design, mobile app development, WordPress development and AI automation.",
  // TODO: add logo, telephone, email and street address once confirmed
  // logo: `${SITE_URL}/logo.png`,
  // telephone: "+234...",
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
    "Website design",
    "Web application development",
    "Mobile app development",
    "WordPress development",
    "AI automation",
    "Software integration",
  ],
  // sameAs: ["https://www.linkedin.com/company/...", "https://x.com/..."],
};

const services = [
  {
    icon: "web",
    title: "Website Design & Development",
    href: "/services#web-design",
    description:
      "Website design services in Lagos: responsive, fast and search-friendly websites and web apps built with modern frameworks.",
  },
  {
    icon: "smartphone",
    title: "Mobile App Development",
    href: "/services#mobile-apps",
    description:
      "Native and cross-platform mobile applications designed for exceptional user experiences on iOS and Android.",
  },
  {
    icon: "dashboard_customize",
    title: "WordPress Website Design",
    href: "/services#wordpress",
    description:
      "Custom WordPress theme and plugin development for robust, easily manageable business websites and content platforms.",
  },
  {
    icon: "code",
    title: "Custom Software Development",
    href: "/services#custom-software",
    description:
      "Bespoke software solutions engineered specifically to address your unique business challenges and workflows.",
  },
  {
    icon: "smart_toy",
    title: "AI Automation",
    href: "/services#ai-automation",
    description:
      "Intelligent automation solutions leveraging machine learning and AI to optimize operations and reduce costs.",
  },
  {
    icon: "integration_instructions",
    title: "Software Integrations",
    href: "/services#integrations",
    description:
      "Seamless connection of disparate systems and APIs to create unified, efficient digital ecosystems.",
  },
];

const faqs = [
  {
    q: "What does a web design company in Lagos do?",
    a: "A web design company plans, designs and builds websites for businesses. At Data Megathos that covers business websites, web apps, WordPress sites, online stores and the integrations behind them, all built to load fast, work on mobile and be found on Google.",
  },
  {
    q: "How do I choose a web design agency in Lagos?",
    a: "Look at the agency's portfolio, ask who will actually build your site, confirm what is included (design, development, hosting, SEO basics, support) and get a clear timeline and quote in writing. Reviews from past clients are also a good signal.",
  },
  {
    q: "Do you offer website design services outside Lagos?",
    a: "Yes. We are based in Lagos and work with clients across Nigeria and internationally, with projects managed remotely.",
  },
  {
    q: "What types of websites do you build?",
    a: "Company websites, startup MVPs, WordPress websites, web applications, customer portals and e-commerce sites, plus mobile apps and AI-powered automation to go with them.",
  },
  {
    q: "How can I get a quote for a website?",
    a: "Use the Start Your Project page to describe what you need. We will review it and come back with scope, timeline and pricing.",
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <div className="mb-16">
        <div
          className="flex min-h-[500px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-start justify-center px-6 py-16 sm:px-12 relative overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(rgba(38, 0, 10, 0.7), rgba(38, 0, 10, 0.9)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAmnbGntJm28wEk4NfAYPReeNQRRlJk_gIDzz1oRxjc2FjdWErFxzs5VE9Is8jhEzjUtOBxOLUO2GZ-DdOK3Cv2zQtu62NqJIply3afnphGxqsXX3tSD_WFGbUeNWDvuk_RS6wTZg69_LXkOzSW2ZYrS5EROCv2uTFMT62GTNp-EIiOr5LD7CZY7xXVNnUrHwTaxHA1-JFOemOhuzWwY5KIs8XJWHUrGcqCoDDA4NJSkXf-bNM5U_x52qeL7JQOTvlaHaZ5nda2ScB6")`,
          }}
        >
          <div className="z-10 flex flex-col gap-6 text-left max-w-3xl">
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl lg:text-6xl">
              Web Design Company in Lagos, Nigeria: Websites, Apps &amp; AI
              Automation
            </h1>
            <p className="text-slate-200 text-base md:text-lg font-normal leading-relaxed max-w-2xl">
              Data Megathos is a web design agency and tech company in Lagos.
              We provide website design services, mobile app development,
              WordPress websites, bespoke software and intelligent AI
              automation for startups and growing businesses across Nigeria.
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <Link
                href="/quote"
                className="flex min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors"
              >
                <span className="truncate">Start Your Project</span>
              </Link>
              <Link
                href="/portfolio"
                className="flex min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-surface border border-border text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-surface-variant transition-colors"
              >
                <span className="truncate">View Our Work</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Who We Are */}
      <section
        className="flex flex-col gap-10 px-4 py-16 border-t border-border/50"
        id="about"
      >
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="flex flex-col gap-6 flex-1">
            <p className="text-primary text-sm font-bold tracking-wider uppercase">
              Who We Are
            </p>
            <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight">
              A Lagos web design company building technology that grows
              businesses
            </h2>
            <p className="text-slate-300 text-lg font-normal leading-relaxed">
              Data Megathos is a software development agency and web design
              company in Lagos, Nigeria. We combine technical excellence with
              strategic thinking to build business websites, WordPress
              websites, mobile apps, web applications, intelligent AI
              automation and seamless software integrations.
            </p>
          </div>
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            <div className="flex gap-4 rounded-xl border border-border bg-surface p-6 flex-col shadow-lg">
              <div className="text-primary bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl" aria-hidden="true">
                  rocket_launch
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold leading-tight">Our Mission</h3>
                <p className="text-slate-300 text-sm font-normal leading-relaxed">
                  To deliver innovative, reliable, and scalable software
                  solutions that solve real-world problems and empower
                  businesses to achieve their full potential.
                </p>
              </div>
            </div>
            <div className="flex gap-4 rounded-xl border border-border bg-surface p-6 flex-col shadow-lg">
              <div className="text-primary bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl" aria-hidden="true">
                  lightbulb
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold leading-tight">Our Expertise</h3>
                <p className="text-slate-300 text-sm font-normal leading-relaxed">
                  Website design services, mobile app development, WordPress
                  websites, AI-driven automation and custom digital
                  experiences for clients in Lagos and across Nigeria.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Startups */}
      <section className="py-16 border-t border-border/50" id="for-startup">
        <div className="flex flex-col items-center text-center mb-12 gap-4">
          <p className="text-primary text-sm font-bold tracking-wider uppercase">
            For Startups
          </p>
          <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight">
            The website design agency for startups and SMEs
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          <div className="flex flex-col gap-4 rounded-xl border border-border bg-surface p-8">
            <h3 className="text-2xl md:text-3xl font-black leading-tight tracking-tight">
              Launch Your MVP Faster &amp; Scale with Confidence
            </h3>
            <p className="text-slate-300 text-base leading-relaxed">
              The strategic software partner for startups and SMEs. We build
              robust MVPs, scalable architectures, and intelligent automation
              to power your growth journey.
            </p>
          </div>
          <div className="flex flex-col gap-4 rounded-xl border border-border bg-surface p-8">
            <h3 className="text-2xl md:text-3xl font-black leading-tight tracking-tight">
              High-velocity development for ambitious founders
            </h3>
            <p className="text-slate-300 text-base leading-relaxed">
              Data Megathos is built for the startup ecosystem. We strip away
              the overhead of traditional agencies to focus on what matters:
              speed-to-market and lean, cost-effective development that scales
              as you grow.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 border-t border-border/50" id="services">
        <div className="flex flex-col items-center text-center mb-12 gap-4">
          <p className="text-primary text-sm font-bold tracking-wider uppercase">
            Our Services
          </p>
          <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight">
            Website Design Services &amp; Software Solutions
          </h2>
          <p className="text-slate-300 max-w-2xl">
            Comprehensive digital solutions from a Lagos tech company,
            tailored to elevate your business operations and customer
            experience.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {services.map((service) => (
            <Link
              key={service.title}
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
              <p className="text-slate-400 text-sm">{service.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-16 border-t border-border/50" id="why-us">
        <div className="px-4 max-w-4xl flex flex-col gap-6">
          <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight">
            Why businesses choose Data Megathos as their web design company
            in Nigeria
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            Choosing among web design firms can be hard. Our approach is
            simple: we build websites that look professional, load quickly on
            mobile networks, and are structured so customers and search
            engines can find you. Every project starts with your business
            goals, not a template.
          </p>
          {/* TODO: replace with real, verifiable points (years in business, number of projects, tools, support terms) */}
          <ul className="text-slate-300 text-base leading-relaxed list-disc pl-6 flex flex-col gap-2">
            <li>One team for design, development, WordPress, mobile and AI automation</li>
            <li>Mobile-first, fast-loading websites with SEO fundamentals built in</li>
            <li>Clear scope, timeline and pricing before work begins</li>
            <li>Ongoing support after launch</li>
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 border-t border-border/50" id="testimonials">
        <div className="flex flex-col items-center text-center mb-12 gap-4">
          <p className="text-primary text-sm font-bold tracking-wider uppercase">
            Client Success
          </p>
          <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight">
            What Our Partners Say
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          {[
            {
              quote:
                "Data Megathos completely transformed our internal processes. Their AI automation solution reduced our manual data entry by 80%, allowing our team to focus on strategic initiatives. Truly a game-changer.",
              initials: "SJ",
              name: "Sarah Jenkins",
              role: "CTO, TechLogix",
            },
            {
              quote:
                "The mobile app they built for us exceeded all expectations. The UI is flawless, and the performance is incredibly fast. Their team was professional, communicative, and delivered on time.",
              initials: "MR",
              name: "Marcus Reed",
              role: "Founder, FitStream",
            },
          ].map((testimonial) => (
            <figure
              key={testimonial.name}
              className="bg-surface border border-border p-8 rounded-xl relative"
            >
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
              <blockquote className="text-slate-300 italic mb-6 relative z-10">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-variant flex items-center justify-center font-bold text-primary">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 border-t border-border/50" id="faq">
        <div className="flex flex-col items-center text-center mb-12 gap-4">
          <p className="text-primary text-sm font-bold tracking-wider uppercase">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight">
            Web Design in Lagos: Frequently Asked Questions
          </h2>
        </div>
        <div className="flex flex-col gap-4 px-4 max-w-3xl mx-auto">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="rounded-xl border border-border bg-surface p-6 group"
            >
              <summary className="cursor-pointer text-lg font-bold leading-tight">
                {item.q}
              </summary>
              <p className="text-slate-300 text-base leading-relaxed mt-4">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section className="py-16 border-t border-border/50" id="contact">
        <div className="bg-primary/10 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-primary/20 mx-4">
          <div className="flex flex-col gap-4 text-center md:text-left max-w-xl">
            <h2 className="text-2xl md:text-3xl font-black leading-tight">
              Ready to work with a web design company in Lagos?
            </h2>
            <p className="text-slate-300">
              Let&apos;s discuss how we can help transform your business with
              a new website, mobile app or custom software solution.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Link
              href="/contact"
              className="flex min-w-[140px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal hover:bg-primary/90 transition-colors"
            >
              <span className="material-symbols-outlined text-xl" aria-hidden="true">mail</span>
              <span>Contact Us</span>
            </Link>
            <Link
              href="/pay"
              className="flex min-w-[140px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-12 px-6 bg-surface border border-border text-white text-base font-bold leading-normal hover:bg-surface-variant transition-colors"
            >
              <span className="material-symbols-outlined text-xl" aria-hidden="true">credit_card</span>
              <span>Make a Payment</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
