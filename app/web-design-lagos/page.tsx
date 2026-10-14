import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://datamegathos.com";

export const metadata: Metadata = {
  title: "Website Design Company in Lagos, Nigeria | Data Megathos",
  description:
    "Data Megathos is a website design company and web design agency in Lagos, Nigeria. Business websites, WordPress, e-commerce and web apps for startups and SMEs. Get a free quote.",
  alternates: {
    canonical: `${SITE_URL}/web-design-lagos`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    siteName: "Data Megathos",
    title: "Website Design Company in Lagos, Nigeria | Data Megathos",
    description:
      "Web design agency in Lagos building business websites, WordPress sites, e-commerce stores and web apps for startups and SMEs.",
    url: `${SITE_URL}/web-design-lagos`,
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Design Company in Lagos, Nigeria | Data Megathos",
    description:
      "Web design agency in Lagos building business websites, WordPress sites, e-commerce stores and web apps for startups and SMEs.",
  },
};

const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Data Megathos",
  url: "https://datamegathos.com/",
  description:
    "Website design company and web design agency in Lagos, Nigeria offering business website design, WordPress website design, e-commerce websites and web application development.",
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
    "WordPress website design",
    "E-commerce website design",
    "Website redesign",
    "Web application development",
    "Website SEO and speed optimization",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does a website design company in Lagos do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A website design company plans, designs and builds websites for businesses. At Data Megathos this covers business websites, WordPress websites, e-commerce stores, redesigns and custom web applications, built to be fast, mobile-friendly and easy for customers and search engines to find.",
      },
    },
    {
      "@type": "Question",
      name: "How much does website design cost in Lagos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The cost depends on the number of pages, the features you need, e-commerce, integrations and content. We review your requirements and give you a clear written quote before work begins.",
      },
    },
    {
      "@type": "Question",
      name: "Do you build WordPress websites?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We design and build custom WordPress websites, including custom themes, plugins and WooCommerce stores, set up so your team can update content without a developer.",
      },
    },
    {
      "@type": "Question",
      name: "How do I choose between web design firms in Lagos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Look at each firm's portfolio and client references, ask who will actually build your site, and confirm what is included: design, development, hosting, SEO basics and support. Get scope, timeline and price in writing.",
      },
    },
    {
      "@type": "Question",
      name: "Will my website rank on Google?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We build every site with technical SEO foundations: fast loading, mobile-first layouts, clean structure, metadata and schema. Rankings also depend on your content, competition and backlinks, so no agency can honestly guarantee a position.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with businesses outside Lagos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We are based in Lagos and work with businesses across Nigeria. Projects are managed remotely, so location is not a barrier.",
      },
    },
  ],
};

const services = [
  {
    icon: "web",
    title: "Business Website Design",
    description:
      "Custom, professional websites for companies in Lagos and across Nigeria, designed around your brand and built to turn visitors into enquiries.",
  },
  {
    icon: "dashboard_customize",
    title: "WordPress Website Design",
    description: (
      <>
        Custom WordPress websites with tailored themes and plugins that your team can manage without a developer.{" "}
        <Link href="#wordpress" className="text-primary underline">
          See our WordPress service
        </Link>
        .
      </>
    ),
  },
  {
    icon: "shopping_cart",
    title: "E-commerce Website Design",
    description:
      "Online stores with Paystack and Flutterwave payments, product management and a smooth mobile checkout, on WooCommerce or a custom stack.",
  },
  {
    icon: "autorenew",
    title: "Website Redesign",
    description:
      "Slow, outdated or hard-to-use site? We rebuild it for speed, clarity and conversions while protecting the search rankings you already have.",
  },
  {
    icon: "devices",
    title: "Web Application Development",
    description:
      "Portals, dashboards and SaaS products built with Next.js, React and Node.js for startups and businesses that need more than a brochure site.",
  },
  {
    icon: "trending_up",
    title: "Website SEO & Speed Optimization",
    description:
      "Technical SEO, schema markup, Core Web Vitals tuning and Search Console setup so your website can be found by customers searching in Lagos.",
  },
];

const faqs = [
  {
    q: "What does a website design company in Lagos do?",
    a: "A website design company plans, designs and builds websites for businesses. At Data Megathos this covers business websites, WordPress websites, e-commerce stores, redesigns and custom web applications, built to be fast, mobile-friendly and easy for customers and search engines to find.",
  },
  {
    q: "How much does website design cost in Lagos?",
    a: "The cost depends on the number of pages, the features you need, e-commerce, integrations and content. We review your requirements and give you a clear written quote before work begins.",
  },
  {
    q: "Do you build WordPress websites?",
    a: "Yes. We design and build custom WordPress websites, including custom themes, plugins and WooCommerce stores, set up so your team can update content without a developer.",
  },
  {
    q: "How do I choose between web design firms in Lagos?",
    a: "Look at each firm's portfolio and client references, ask who will actually build your site, and confirm what is included: design, development, hosting, SEO basics and support. Get scope, timeline and price in writing.",
  },
  {
    q: "Will my website rank on Google?",
    a: "We build every site with technical SEO foundations: fast loading, mobile-first layouts, clean structure, metadata and schema. Rankings also depend on your content, competition and backlinks, so no agency can honestly guarantee a position.",
  },
  {
    q: "Do you work with businesses outside Lagos?",
    a: "Yes. We are based in Lagos and work with businesses across Nigeria. Projects are managed remotely, so location is not a barrier.",
  },
];

export default function WebDesignLagosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="flex flex-col gap-16 py-6">
        {/* Hero */}
        <section className="@container">
          <div
            className="flex min-h-[520px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-2xl items-start justify-center px-6 py-16 @[480px]:px-12 relative overflow-hidden border border-border/60 shadow-xl"
            style={{
              backgroundImage:
                "linear-gradient(rgba(38, 0, 10, 0.85), rgba(38, 0, 10, 0.94)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuAmnbGntJm28wEk4NfAYPReeNQRRlJk_gIDzz1oRxjc2FjdWErFxzs5VE9Is8jhEzjUtOBxOLUO2GZ-DdOK3Cv2zQtu62NqJIply3afnphGxqsXX3tSD_WFGbUeNWDvuk_RS6wTZg69_LXkOzSW2ZYrS5EROCv2uTFMT62GTNp-EIiOr5LD7CZY7xXVNnUrHwTaxHA1-JFOemOhuzWwY5KIs8XJWHUrGcqCoDDA4NJSkXf-bNM5U_x52qeL7JQOTvlaHaZ5nda2ScB6')",
            }}
          >
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="z-10 flex flex-col gap-6 text-left max-w-4xl">
              <p className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-primary text-xs font-bold tracking-wider uppercase">
                <span className="material-symbols-outlined text-sm" aria-hidden="true">
                  location_on
                </span>
                <span>Web Design Agency in Lagos, Nigeria</span>
              </p>
              <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em]">
                Website Design Company in Lagos, Nigeria
              </h1>
              <p className="text-slate-200 text-base md:text-lg font-normal leading-relaxed max-w-3xl">
                Data Megathos is a tech company and web design agency in Lagos. We design and build fast, conversion-focused websites, WordPress websites, e-commerce stores and custom web applications for Nigerian businesses, startups and growing brands. We serve clients across Lagos, including Ikeja, Lekki and Victoria Island, and throughout Nigeria.
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-2">
                <Link
                  className="flex min-w-[150px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-12 px-8 bg-primary text-white text-base font-bold leading-normal hover:bg-primary/90 transition-colors shadow-lg"
                  href="#contact"
                >
                  <span>Get a Free Website Quote</span>
                  <span className="material-symbols-outlined text-sm" aria-hidden="true">
                    arrow_forward
                  </span>
                </Link>
                <Link
                  className="flex min-w-[150px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-12 px-8 bg-surface border border-border text-white text-base font-bold leading-normal hover:bg-surface-variant transition-colors"
                  href="/portfolio"
                >
                  <span className="material-symbols-outlined text-sm" aria-hidden="true">
                    visibility
                  </span>
                  <span>View Our Work</span>
                </Link>
              </div>
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-border/40 text-xs text-slate-300 font-medium">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-lg" aria-hidden="true">
                    bolt
                  </span>{" "}
                  Fast, mobile-first websites
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-lg" aria-hidden="true">
                    verified
                  </span>{" "}
                  Technical SEO built in
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-lg" aria-hidden="true">
                    payments
                  </span>{" "}
                  Paystack &amp; Flutterwave ready
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Trust bar */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 px-2 py-4" aria-label="What you get">
          <div className="bg-surface border border-border rounded-xl p-6 flex flex-col items-center text-center gap-1 shadow-md">
            <span className="material-symbols-outlined text-3xl text-primary" aria-hidden="true">
              smartphone
            </span>
            <span className="text-xs text-slate-300 font-medium">
              Mobile-first design for Nigerian mobile users
            </span>
          </div>
          <div className="bg-surface border border-border rounded-xl p-6 flex flex-col items-center text-center gap-1 shadow-md">
            <span className="material-symbols-outlined text-3xl text-white" aria-hidden="true">
              search
            </span>
            <span className="text-xs text-slate-300 font-medium">
              On-page SEO and schema included
            </span>
          </div>
          <div className="bg-surface border border-border rounded-xl p-6 flex flex-col items-center text-center gap-1 shadow-md">
            <span className="material-symbols-outlined text-3xl text-primary" aria-hidden="true">
              speed
            </span>
            <span className="text-xs text-slate-300 font-medium">
              Speed-optimized builds
            </span>
          </div>
          <div className="bg-surface border border-border rounded-xl p-6 flex flex-col items-center text-center gap-1 shadow-md">
            <span className="text-3xl font-black text-white">100%</span>
            <span className="text-xs text-slate-300 font-medium">
              Code &amp; CMS ownership handed over
            </span>
          </div>
        </section>

        {/* Services */}
        <section className="py-12 border-t border-border/50" id="services">
          <div className="flex flex-col items-center text-center gap-4 mb-12 max-w-3xl mx-auto px-4">
            <p className="text-primary text-xs font-bold tracking-wider uppercase">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight">
              Website Design Services in Lagos
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              As a website design agency in Lagos, we cover everything your business needs to look professional online and win customers: design, development, e-commerce and search visibility.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2">
            {services.map((item, idx) => (
              <article
                key={idx}
                className="bg-surface border border-border rounded-xl p-8 flex flex-col gap-3"
              >
                <span className="material-symbols-outlined text-4xl text-primary" aria-hidden="true">
                  {item.icon}
                </span>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <div className="text-sm text-slate-400 leading-relaxed">{item.description}</div>
              </article>
            ))}
          </div>
        </section>

        {/* WordPress */}
        <section className="py-12 border-t border-border/50" id="wordpress">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-2 items-start">
            <div className="flex flex-col gap-5">
              <p className="text-primary text-xs font-bold tracking-wider uppercase">
                WordPress Development
              </p>
              <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight">
                WordPress Website Design Company in Lagos
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                WordPress powers a large share of the web because it is flexible and easy to manage. We build custom WordPress websites for Nigerian businesses that need to update pages, publish posts and sell online without depending on a developer for every change.
              </p>
              <p className="text-slate-300 text-base leading-relaxed">
                Instead of dropping content into a generic template, we design a theme around your brand, set up the plugins you actually need, and configure SEO, speed and security from the start.
              </p>
            </div>
            <ul className="flex flex-col gap-3 text-sm text-slate-200">
              <li className="flex items-start gap-3 bg-surface border border-border rounded-xl p-5">
                <span className="material-symbols-outlined text-primary" aria-hidden="true">
                  check_circle
                </span>
                <span>
                  <strong>Custom WordPress themes</strong> designed for your brand, not off-the-shelf templates
                </span>
              </li>
              <li className="flex items-start gap-3 bg-surface border border-border rounded-xl p-5">
                <span className="material-symbols-outlined text-primary" aria-hidden="true">
                  check_circle
                </span>
                <span>
                  <strong>WooCommerce stores</strong> with Paystack and Flutterwave payments
                </span>
              </li>
              <li className="flex items-start gap-3 bg-surface border border-border rounded-xl p-5">
                <span className="material-symbols-outlined text-primary" aria-hidden="true">
                  check_circle
                </span>
                <span>
                  <strong>SEO-ready setup</strong> with clean structure, metadata, sitemap and schema
                </span>
              </li>
              <li className="flex items-start gap-3 bg-surface border border-border rounded-xl p-5">
                <span className="material-symbols-outlined text-primary" aria-hidden="true">
                  check_circle
                </span>
                <span>
                  <strong>Easy content management</strong> and handover training for your team
                </span>
              </li>
              <li className="flex items-start gap-3 bg-surface border border-border rounded-xl p-5">
                <span className="material-symbols-outlined text-primary" aria-hidden="true">
                  check_circle
                </span>
                <span>
                  <strong>Headless WordPress</strong> options when you need extra speed and flexibility
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Why choose us */}
        <section className="py-12 border-t border-border/50" id="why-us">
          <div className="flex flex-col items-center text-center gap-4 mb-12 max-w-3xl mx-auto px-4">
            <p className="text-primary text-xs font-bold tracking-wider uppercase">
              Why Data Megathos
            </p>
            <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight">
              Choosing a Web Design Company in Nigeria
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              There are many web design firms in Lagos. Here is what you get when you work with us.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-2">
            <div className="bg-surface border border-border rounded-xl p-8 flex flex-col gap-3">
              <span className="material-symbols-outlined text-3xl text-primary" aria-hidden="true">
                engineering
              </span>
              <h3 className="text-lg font-bold">Design and engineering in one team</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                As both a web design agency and a software company, we handle the design, the code, the integrations and the hosting setup together, with no hand-offs between vendors.
              </p>
            </div>
            <div className="bg-surface border border-border rounded-xl p-8 flex flex-col gap-3">
              <span className="material-symbols-outlined text-3xl text-primary" aria-hidden="true">
                travel_explore
              </span>
              <h3 className="text-lg font-bold">Built to be found on Google</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Keyword research, clean page structure, fast loading and local schema are part of every build, not an expensive add-on.
              </p>
            </div>
            <div className="bg-surface border border-border rounded-xl p-8 flex flex-col gap-3">
              <span className="material-symbols-outlined text-3xl text-primary" aria-hidden="true">
                key
              </span>
              <h3 className="text-lg font-bold">You own everything</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Full code, CMS and content ownership is handed over at launch, with clear scope, timeline and pricing agreed in writing before we start.
              </p>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-12 border-t border-border/50" id="process">
          <div className="flex flex-col items-center text-center gap-4 mb-12 max-w-3xl mx-auto px-4">
            <p className="text-primary text-xs font-bold tracking-wider uppercase">
              Structured Execution
            </p>
            <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight">
              Our 4-Step Web Design Process
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              How our website design agency in Lagos takes you from first call to a live, search-ready website.
            </p>
          </div>
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-2">
            <li className="bg-surface border border-border p-6 rounded-xl flex flex-col gap-3 relative">
              <span className="text-primary font-black text-3xl">01</span>
              <h3 className="text-lg font-bold text-white">Discovery &amp; Keyword Strategy</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                We analyze your Nigerian target audience, competitors in Lagos, core conversion pathways, and target keywords to structure a site architecture built to rank.
              </p>
            </li>
            <li className="bg-surface border border-border p-6 rounded-xl flex flex-col gap-3 relative">
              <span className="text-primary font-black text-3xl">02</span>
              <h3 className="text-lg font-bold text-white">UX/UI Wireframing &amp; Design</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Custom Figma prototypes with mobile-first layouts, intuitive user journeys, interactive previews, and design aligned to your brand identity.
              </p>
            </li>
            <li className="bg-surface border border-border p-6 rounded-xl flex flex-col gap-3 relative">
              <span className="text-primary font-black text-3xl">03</span>
              <h3 className="text-lg font-bold text-white">Development &amp; Speed Optimization</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Our software engineers code responsive templates, integrate payment gateways (Paystack/Flutterwave), and optimize for fast load times on Nigerian mobile networks.
              </p>
            </li>
            <li className="bg-surface border border-border p-6 rounded-xl flex flex-col gap-3 relative">
              <span className="text-primary font-black text-3xl">04</span>
              <h3 className="text-lg font-bold text-white">SEO Schema, Launch &amp; Training</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Thorough QA testing, Google Search Console setup, local schema markup, analytics tracking, and live deployment with training for your team.
              </p>
            </li>
          </ol>
        </section>

        {/* FAQ */}
        <section className="py-12 border-t border-border/50" id="faq">
          <div className="flex flex-col items-center text-center gap-4 mb-12 max-w-3xl mx-auto px-4">
            <p className="text-primary text-xs font-bold tracking-wider uppercase">Got Questions?</p>
            <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight">
              Web Design in Lagos: Frequently Asked Questions
            </h2>
          </div>
          <div className="max-w-3xl mx-auto flex flex-col gap-4 px-2">
            {faqs.map((faq, idx) => (
              <details key={idx} className="bg-surface border border-border rounded-xl p-6 group">
                <summary className="cursor-pointer text-lg font-bold leading-tight">
                  {faq.q}
                </summary>
                <p className="text-sm text-slate-300 leading-relaxed mt-4">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-12 border-t border-border/50" id="contact">
          <div className="bg-primary/10 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-primary/20 mx-2">
            <div className="flex flex-col gap-4 text-center md:text-left max-w-xl">
              <h2 className="text-2xl md:text-3xl font-black leading-tight">
                Ready to Work with a Web Design Company in Lagos?
              </h2>
              <p className="text-slate-300">
                Tell us about your project and get a free website quote. We will review your requirements and reply with scope, timeline and pricing.
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
              <a
                href="https://wa.me/2349068954455"
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-w-[150px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-12 px-6 bg-surface border border-border text-white text-base font-bold leading-normal hover:bg-surface-variant transition-colors"
              >
                <span className="material-symbols-outlined text-xl" aria-hidden="true">
                  chat
                </span>
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
