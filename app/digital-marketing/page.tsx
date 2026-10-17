import type { Metadata } from "next";
import Link from "next/link";
import { AuditForm } from "@/components/AuditForm";

const SITE_URL = "https://www.datamegathos.com";

export const metadata: Metadata = {
  title: "Digital Marketing Agency in Lagos, Nigeria | Data Megathos",
  description:
    "Digital marketing agency in Lagos, Nigeria offering SEO, Google Ads and social media marketing services for startups and SMEs. Request a free growth audit.",
  alternates: {
    canonical: `${SITE_URL}/digital-marketing`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    siteName: "Data Megathos",
    title: "Digital Marketing Agency in Lagos, Nigeria | Data Megathos",
    description:
      "SEO company, Google Ads agency and social media marketing agency in Lagos, Nigeria for startups and SMEs.",
    url: `${SITE_URL}/digital-marketing`,
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Agency in Lagos, Nigeria | Data Megathos",
    description:
      "SEO company, Google Ads agency and social media marketing agency in Lagos, Nigeria for startups and SMEs.",
  },
};

const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Data Megathos",
  url: "https://www.datamegathos.com/",
  description:
    "Digital marketing agency in Lagos, Nigeria offering SEO, Google Ads, social media marketing, conversion rate optimization and marketing automation.",
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
    "Digital marketing",
    "Search engine optimization",
    "Google Ads management",
    "Social media marketing",
    "Conversion rate optimization",
    "Marketing automation",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does a digital marketing agency in Lagos do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A digital marketing agency helps businesses get found and win customers online. At Data Megathos that means SEO, Google Ads, social media marketing, conversion rate optimization, and the tracking and automation that connect it all to revenue.",
      },
    },
    {
      "@type": "Question",
      name: "How is Data Megathos different from other digital marketing companies in Nigeria?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We are a software engineering team as well as a marketing team, so tracking, landing pages and automation are built properly. We focus reporting on leads, revenue and cost per acquisition rather than likes and impressions.",
      },
    },
    {
      "@type": "Question",
      name: "Are you an SEO company in Lagos, and how long does SEO take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, SEO is one of our core services. Technical fixes can show results within weeks, but ranking for competitive keywords usually takes several months and depends on competition, content and backlinks. Nobody can honestly guarantee a position.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work as a Google Ads agency for small businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We set up and manage Google Ads campaigns for small businesses and startups, with tight keyword targeting, negative keywords and conversion tracking so a modest budget is spent carefully.",
      },
    },
    {
      "@type": "Question",
      name: "What do your social media marketing services include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Content planning, short-form video and creative, paid campaigns on Meta, TikTok and LinkedIn, community management and influencer outreach, connected to your WhatsApp or CRM follow-up.",
      },
    },
    {
      "@type": "Question",
      name: "How much does digital marketing cost in Nigeria?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on the channels, your goals and competition. Our management fee is separate from any ad spend you pay to Google or Meta. After a free audit we send a clear proposal.",
      },
    },
    {
      "@type": "Question",
      name: "How do you track and report ROI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We set up conversion tracking, including server-side tracking where suitable, and give you a live Looker Studio dashboard connected to your ad accounts and, where possible, your CRM or payment processor.",
      },
    },
  ],
};

const services = [
  {
    id: "seo",
    icon: "manage_search",
    iconColor: "text-primary",
    title: "SEO Company in Lagos & Nigeria",
    description:
      "As an SEO company in Nigeria, we combine technical site audits, local keyword research, content, link building and Core Web Vitals work to help your business rank on Google across Lagos and Nigeria.",
    features: [
      "Technical SEO & Core Web Vitals Audits",
      "Local SEO & Google Business Profile",
      "Keyword Research & Content Planning",
      "Link Building & Digital PR",
    ],
  },
  {
    id: "google-ads",
    icon: "ads_click",
    iconColor: "text-tertiary",
    title: "Google Ads Agency for Small Business",
    description:
      "As a Google Ads agency, we build and manage search, display and YouTube campaigns with tight keyword targeting, negative keywords and conversion tracking, so small and mid-size budgets are spent carefully.",
    features: [
      "Search, Shopping & Performance Max",
      "Negative Keyword Management",
      "Bid & Budget Optimization",
      "High-Intent Keyword Targeting",
    ],
  },
  {
    id: "paid-social",
    icon: "campaign",
    iconColor: "text-primary",
    title: "Social Media Marketing Agency in Lagos: Paid Social",
    description:
      "Our social media marketing agency in Lagos runs targeted paid campaigns on Instagram, Facebook, TikTok and LinkedIn that turn Nigerian and international audiences into leads and customers.",
    features: [
      "UGC & Video Creative Testing",
      "Meta CAPI & Server-Side Tracking",
      "Lookalike & Retargeting Audiences",
      "B2B LinkedIn Lead Generation",
    ],
  },
  {
    id: "social-media-marketing-services",
    icon: "groups",
    iconColor: "text-tertiary",
    title: "Social Media Marketing Services: Organic & Community",
    description:
      "End-to-end social media marketing services to build brand authority and loyal communities: content planning, short-form video, community management and influencer outreach for Nigerian audiences.",
    features: [
      "Reels & Short-Form Video Scripts",
      "Community Management",
      "Influencer Outreach",
      "Content Editorial Calendar",
    ],
  },
  {
    id: "cro",
    icon: "touch_app",
    iconColor: "text-primary",
    title: "Conversion Rate Optimization",
    description:
      "Traffic only matters if it converts. As a full-service ad agency with in-house developers, we test and rebuild landing pages and checkout flows to turn clicks into enquiries and sales.",
    features: [
      "A/B & Multivariate Testing",
      "Heatmap & Session Analysis",
      "Mobile Checkout Improvements",
      "Landing Page Design & Build",
    ],
  },
  {
    id: "automation",
    icon: "hub",
    iconColor: "text-tertiary",
    title: "Marketing Automation & Analytics",
    description:
      "Connect your CRM, email and WhatsApp Business into automated follow-up, with attribution dashboards that show which channels actually bring in revenue.",
    features: [
      "WhatsApp Business Funnels",
      "Email & Lifecycle Automation",
      "Looker Studio Dashboards",
      "Customer Lifetime Value Tracking",
    ],
  },
];

const faqs = [
  {
    q: "What does a digital marketing agency in Lagos do?",
    a: "A digital marketing agency helps businesses get found and win customers online. At Data Megathos that means SEO, Google Ads, social media marketing, conversion rate optimization, and the tracking and automation that connect it all to revenue.",
  },
  {
    q: "How is Data Megathos different from other digital marketing companies in Nigeria?",
    a: "We are a software engineering team as well as a marketing team, so tracking, landing pages and automation are built properly. We focus reporting on leads, revenue and cost per acquisition rather than likes and impressions.",
  },
  {
    q: "Are you an SEO company in Lagos, and how long does SEO take?",
    a: "Yes, SEO is one of our core services. Technical fixes can show results within weeks, but ranking for competitive keywords usually takes several months and depends on competition, content and backlinks. Nobody can honestly guarantee a position.",
  },
  {
    q: "Do you work as a Google Ads agency for small businesses?",
    a: "Yes. We set up and manage Google Ads campaigns for small businesses and startups, with tight keyword targeting, negative keywords and conversion tracking so a modest budget is spent carefully.",
  },
  {
    q: "What do your social media marketing services include?",
    a: "Content planning, short-form video and creative, paid campaigns on Meta, TikTok and LinkedIn, community management and influencer outreach, connected to your WhatsApp or CRM follow-up.",
  },
  {
    q: "How much does digital marketing cost in Nigeria?",
    a: "It depends on the channels, your goals and competition. Our management fee is separate from any ad spend you pay to Google or Meta. After a free audit we send a clear proposal.",
  },
  {
    q: "How do you track and report ROI?",
    a: "We set up conversion tracking, including server-side tracking where suitable, and give you a live Looker Studio dashboard connected to your ad accounts and, where possible, your CRM or payment processor.",
  },
];

export default function DigitalMarketingLagosPage() {
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

      <main className="w-full bg-background min-h-screen">
        <div className="flex flex-col w-full">
          {/* HERO */}
          <section className="relative w-full overflow-hidden bg-background py-12 lg:py-20">
            <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary-container/10 blur-[120px] rounded-full" />
            <div className="max-w-container-max mx-auto px-gutter relative z-10 flex flex-col items-center text-center">
              <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-high border border-outline-variant/30 text-primary text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span>Digital Marketing in Lagos &amp; Nigeria</span>
              </p>
              <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em] max-w-4xl mb-6">
                Digital Marketing Agency in{" "}
                <span className="text-primary underline decoration-primary/40 decoration-4 underline-offset-8">
                  Lagos &amp; Nigeria
                </span>
                : SEO, Google Ads &amp; Social Media
              </h1>
              <p className="text-slate-200 text-base md:text-lg font-normal leading-relaxed max-w-3xl mb-10">
                Data Megathos is a performance-focused{" "}
                <span className="text-white font-semibold">
                  digital marketing agency in Lagos
                </span>{" "}
                and full-service ad agency. We help startups, SMEs and established brands in Nigeria
                get found on Google, win customers with paid ads and social media, and measure what
                each naira of marketing returns.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-14">
                <Link
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary text-white font-bold text-base shadow-xl hover:bg-primary/90 transition-all"
                  href="#audit-form"
                >
                  <span>Get a Free Growth Audit</span>
                  <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                    bolt
                  </span>
                </Link>
                <Link
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-surface border border-border text-white font-bold text-base hover:bg-surface-variant transition-all"
                  href="#services"
                >
                  <span>See Our Services</span>
                  <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                    query_stats
                  </span>
                </Link>
              </div>
              <ul className="w-full grid grid-cols-2 md:grid-cols-4 gap-3 pt-6 bg-surface-container-low rounded-xl p-4">
                <li className="flex items-center justify-center gap-2.5 p-3 rounded-lg bg-surface-container">
                  <span className="material-symbols-outlined text-primary text-[20px]" aria-hidden="true">
                    manage_search
                  </span>
                  <span className="text-xs font-medium text-slate-300">
                    SEO Company in Lagos
                  </span>
                </li>
                <li className="flex items-center justify-center gap-2.5 p-3 rounded-lg bg-surface-container">
                  <span className="material-symbols-outlined text-tertiary text-[20px]" aria-hidden="true">
                    ads_click
                  </span>
                  <span className="text-xs font-medium text-slate-300">
                    Google Ads Agency
                  </span>
                </li>
                <li className="flex items-center justify-center gap-2.5 p-3 rounded-lg bg-surface-container">
                  <span className="material-symbols-outlined text-primary text-[20px]" aria-hidden="true">
                    campaign
                  </span>
                  <span className="text-xs font-medium text-slate-300">
                    Social Media Marketing
                  </span>
                </li>
                <li className="flex items-center justify-center gap-2.5 p-3 rounded-lg bg-surface-container">
                  <span className="material-symbols-outlined text-tertiary text-[20px]" aria-hidden="true">
                    insights
                  </span>
                  <span className="text-xs font-medium text-slate-300">
                    Tracking &amp; Reporting
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* WHAT YOU GET */}
          <section className="w-full py-10 bg-surface-container-lowest" aria-label="What we cover">
            <div className="max-w-container-max mx-auto px-gutter">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-card-padding rounded-xl bg-surface-container flex flex-col justify-between shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-primary text-xs font-bold uppercase tracking-wider">
                      Search
                    </span>
                    <span className="material-symbols-outlined text-outline-variant text-[22px]" aria-hidden="true">
                      search_check
                    </span>
                  </div>
                  <div className="text-3xl font-black text-white mb-2">
                    SEO
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Technical, local and content SEO for businesses in Lagos and across Nigeria.
                  </p>
                </div>
                <div className="p-card-padding rounded-xl bg-surface-container flex flex-col justify-between shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-tertiary text-xs font-bold uppercase tracking-wider">
                      Paid
                    </span>
                    <span className="material-symbols-outlined text-outline-variant text-[22px]" aria-hidden="true">
                      trending_up
                    </span>
                  </div>
                  <div className="text-3xl font-black text-white mb-2">
                    Ads
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Google Ads and paid social campaigns built around cost per lead and return on ad spend.
                  </p>
                </div>
                <div className="p-card-padding rounded-xl bg-surface-container flex flex-col justify-between shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-primary text-xs font-bold uppercase tracking-wider">
                      Social
                    </span>
                    <span className="material-symbols-outlined text-outline-variant text-[22px]" aria-hidden="true">
                      groups
                    </span>
                  </div>
                  <div className="text-3xl font-black text-white mb-2">
                    Social
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Content, creative and community management for Instagram, Facebook, TikTok and LinkedIn.
                  </p>
                </div>
                <div className="p-card-padding rounded-xl bg-surface-container flex flex-col justify-between shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-tertiary text-xs font-bold uppercase tracking-wider">
                      Measurement
                    </span>
                    <span className="material-symbols-outlined text-outline-variant text-[22px]" aria-hidden="true">
                      speed
                    </span>
                  </div>
                  <div className="text-3xl font-black text-white mb-2">
                    Data
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Conversion tracking, server-side events and live dashboards so you can see what works.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SERVICES */}
          <section className="w-full py-16 lg:py-24 bg-background" id="services">
            <div className="max-w-container-max mx-auto px-gutter">
              <div className="flex flex-col items-start mb-12">
                <p className="text-primary text-xs font-bold tracking-wider uppercase mb-2">
                  What We Do
                </p>
                <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight text-white max-w-3xl">
                  Digital Marketing Services in Lagos &amp; Nigeria
                </h2>
                <p className="text-slate-300 text-base leading-relaxed max-w-3xl mt-4">
                  Many digital marketing companies in Lagos sell reach and impressions. We pair
                  marketing with engineering, so your tracking, landing pages and automation are built
                  properly and every campaign is tied to leads and revenue. We work with businesses
                  across Lagos, including Ikeja, Lekki and Victoria Island, and throughout Nigeria.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((item) => (
                  <article
                    key={item.id}
                    id={item.id}
                    className="rounded-xl bg-surface-container p-card-padding flex flex-col justify-between hover:bg-surface-container-high transition-all shadow-md"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 rounded-lg bg-surface-container-lowest flex items-center justify-center">
                          <span
                            className={`material-symbols-outlined text-[26px] ${item.iconColor}`}
                            aria-hidden="true"
                          >
                            {item.icon}
                          </span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                      <p className="text-sm text-slate-300 leading-relaxed mb-6">
                        {item.description}
                      </p>
                    </div>
                    <ul className="flex flex-col gap-2 pt-4 bg-surface-container-low rounded-lg p-3.5">
                      {item.features.map((feat) => (
                        <li
                          key={feat}
                          className="flex items-center gap-2 text-on-surface text-xs font-medium"
                        >
                          <span
                            className={`material-symbols-outlined text-[16px] ${item.iconColor}`}
                            aria-hidden="true"
                          >
                            check_circle
                          </span>
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* COMPARISON */}
          <section className="w-full py-16 bg-surface-container-low" id="why-us">
            <div className="max-w-container-max mx-auto px-gutter">
              <div className="flex flex-col items-start mb-10">
                <p className="text-primary text-xs font-bold tracking-wider uppercase mb-2">
                  Why Data Megathos
                </p>
                <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight text-white max-w-3xl">
                  How to Choose Among Digital Marketing Companies in Nigeria
                </h2>
              </div>
              <div className="overflow-x-auto">
                <div className="min-w-[760px] bg-surface-container rounded-xl overflow-hidden shadow-xl border border-border/50">
                  <table className="w-full text-left border-collapse">
                    <caption className="sr-only">
                      Comparison of Data Megathos, traditional ad agencies and in-house or freelance
                      marketing
                    </caption>
                    <thead>
                      <tr className="bg-surface-container-high text-white text-xs font-bold uppercase tracking-wider">
                        <th scope="col" className="py-4 px-6">
                          What to compare
                        </th>
                        <th scope="col" className="py-4 px-6 text-primary">
                          Data Megathos
                        </th>
                        <th scope="col" className="py-4 px-6 text-slate-400">
                          Traditional ad agency
                        </th>
                        <th scope="col" className="py-4 px-6 text-slate-400">
                          In-house / freelancers
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-surface-variant/30 text-sm">
                      <tr className="bg-surface-container/60">
                        <th scope="row" className="py-5 px-6 font-bold text-white">
                          Success metrics
                        </th>
                        <td className="py-5 px-6 text-white font-medium">
                          Leads, revenue, cost per acquisition and return on ad spend
                        </td>
                        <td className="py-5 px-6 text-slate-400">
                          Often reach, clicks and impressions
                        </td>
                        <td className="py-5 px-6 text-slate-400">Varies by individual</td>
                      </tr>
                      <tr>
                        <th scope="row" className="py-5 px-6 font-bold text-white">
                          Technical depth
                        </th>
                        <td className="py-5 px-6 text-white font-medium">
                          Developers handle site speed, tracking and landing pages
                        </td>
                        <td className="py-5 px-6 text-slate-400">
                          Development is often outsourced
                        </td>
                        <td className="py-5 px-6 text-slate-400">Depends on who you hire</td>
                      </tr>
                      <tr className="bg-surface-container/60">
                        <th scope="row" className="py-5 px-6 font-bold text-white">
                          Tracking &amp; attribution
                        </th>
                        <td className="py-5 px-6 text-white font-medium">
                          Conversion tracking including server-side events where suitable
                        </td>
                        <td className="py-5 px-6 text-slate-400">
                          Varies; often browser pixels only
                        </td>
                        <td className="py-5 px-6 text-slate-400">Often basic or manual</td>
                      </tr>
                      <tr>
                        <th scope="row" className="py-5 px-6 font-bold text-white">
                          Ad budget care
                        </th>
                        <td className="py-5 px-6 text-white font-medium">
                          Tight targeting, negative keywords and regular optimization
                        </td>
                        <td className="py-5 px-6 text-slate-400">
                          Varies; check how often campaigns are reviewed
                        </td>
                        <td className="py-5 px-6 text-slate-400">Can involve trial and error</td>
                      </tr>
                      <tr className="bg-surface-container/60">
                        <th scope="row" className="py-5 px-6 font-bold text-white">
                          Reporting
                        </th>
                        <td className="py-5 px-6 text-white font-medium">
                          Live dashboards plus regular performance reviews
                        </td>
                        <td className="py-5 px-6 text-slate-400">Often monthly reports</td>
                        <td className="py-5 px-6 text-slate-400">Varies</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* PROCESS */}
          <section className="w-full py-16 bg-surface-container-lowest" id="process">
            <div className="max-w-container-max mx-auto px-gutter">
              <div className="flex flex-col items-center text-center mb-16">
                <p className="text-primary text-xs font-bold tracking-wider uppercase mb-3">
                  How We Work
                </p>
                <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight text-white max-w-2xl">
                  Our 4-Step Digital Marketing Process
                </h2>
                <p className="text-slate-300 text-base leading-relaxed max-w-2xl mt-3">
                  How our digital marketing agency in Nigeria takes you from unmeasured traffic to a
                  marketing system you can track and scale.
                </p>
              </div>
              <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <li className="p-card-padding rounded-xl bg-surface-container relative flex flex-col justify-between shadow-md border border-border/40">
                  <div>
                    <div className="text-primary font-black text-3xl font-mono mb-4">
                      01
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Audit &amp; Tracking</h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      A technical audit of your site health, competitors in Nigeria, current ad spend
                      efficiency and conversion tracking.
                    </p>
                  </div>
                </li>
                <li className="p-card-padding rounded-xl bg-surface-container relative flex flex-col justify-between shadow-md border border-border/40">
                  <div>
                    <div className="text-tertiary font-black text-3xl font-mono mb-4">
                      02
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      Keyword &amp; Audience Research
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      We find high-intent Nigerian search queries and define the audiences most likely to
                      buy from you.
                    </p>
                  </div>
                </li>
                <li className="p-card-padding rounded-xl bg-surface-container relative flex flex-col justify-between shadow-md border border-border/40">
                  <div>
                    <div className="text-primary font-black text-3xl font-mono mb-4">
                      03
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Multi-Channel Launch</h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      We launch Google Ads, Meta campaigns, local SEO fixes and conversion-focused landing
                      pages built for Nigerian buyers.
                    </p>
                  </div>
                </li>
                <li className="p-card-padding rounded-xl bg-surface-container relative flex flex-col justify-between shadow-md border border-border/40">
                  <div>
                    <div className="text-tertiary font-black text-3xl font-mono mb-4">
                      04
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Testing &amp; Scaling</h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      We move budget to what works, refine keywords and audiences, and scale the channels
                      that return the most.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </section>

          {/* FAQ */}
          <section className="w-full py-16 lg:py-24 bg-background" id="faq">
            <div className="max-w-container-max mx-auto px-gutter">
              <div className="flex flex-col items-start mb-12">
                <p className="text-primary text-xs font-bold tracking-wider uppercase mb-3">
                  Got Questions?
                </p>
                <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight text-white max-w-3xl">
                  Digital Marketing in Lagos &amp; Nigeria: Frequently Asked Questions
                </h2>
              </div>
              <div className="flex flex-col gap-4 max-w-4xl">
                {faqs.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group bg-surface border border-border rounded-xl overflow-hidden shadow-sm open:bg-surface-container transition-all"
                  >
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none select-none">
                      <h3 className="text-lg font-bold text-white leading-tight pr-4">
                        {faq.q}
                      </h3>
                      <span
                        className="material-symbols-outlined text-primary text-[24px] group-open:rotate-180 transition-transform shrink-0"
                        aria-hidden="true"
                      >
                        keyboard_arrow_down
                      </span>
                    </summary>
                    <div className="px-6 pb-6 pt-2 text-sm text-slate-300 leading-relaxed">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </section>

          {/* AUDIT CTA + FORM */}
          <section
            className="w-full py-16 lg:py-24 bg-surface-container-low relative overflow-hidden"
            id="audit-form"
          >
            <div className="max-w-container-max mx-auto px-gutter relative z-10">
              <div className="rounded-2xl bg-surface-container p-8 md:p-14 shadow-2xl relative overflow-hidden">
                <div className="pointer-events-none absolute -bottom-12 -right-12 w-96 h-96 bg-primary-container/20 blur-[90px] rounded-full" />
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  <div className="lg:col-span-7 flex flex-col items-start">
                    <p className="px-3.5 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold uppercase tracking-wider mb-4">
                      Free Growth Audit
                    </p>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black leading-tight text-white mb-4">
                      Ready to Grow with a Digital Marketing Agency in Lagos?
                    </h2>
                    <p className="text-slate-300 text-base leading-relaxed mb-8 max-w-xl">
                      Book a free growth audit with our team. We will review your website, search
                      visibility and ad accounts, then send you a clear action plan for what to fix and
                      where to invest first.
                    </p>
                    <ul className="flex flex-wrap items-center gap-4 text-on-surface text-xs font-medium uppercase tracking-wide">
                      <li className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-primary text-[18px]" aria-hidden="true">
                          lock
                        </span>
                        <span>NDA available on request</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-primary text-[18px]" aria-hidden="true">
                          done_all
                        </span>
                        <span>No obligation</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-primary text-[18px]" aria-hidden="true">
                          finance
                        </span>
                        <span>Custom growth roadmap</span>
                      </li>
                    </ul>
                  </div>
                  <div className="lg:col-span-5 bg-surface-container-high p-6 md:p-8 rounded-xl shadow-lg border border-border/40">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[20px]" aria-hidden="true">
                        analytics
                      </span>
                      Request Free Growth Audit
                    </h3>
                    <AuditForm />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
