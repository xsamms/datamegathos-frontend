import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://datamegathos.com";

export const metadata: Metadata = {
  title: "Mobile App Developers in Lagos, Nigeria | Data Megathos",
  description:
    "Hire mobile app developers in Lagos, Nigeria. Data Megathos builds iOS, Android, Flutter and React Native apps for startups and businesses. Get a free quote.",
  alternates: {
    canonical: `${SITE_URL}/mobile-app-development`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    siteName: "Data Megathos",
    title: "Mobile App Developers in Lagos, Nigeria | Data Megathos",
    description:
      "Mobile app development company in Lagos building iOS, Android, Flutter and React Native apps for startups and businesses.",
    url: `${SITE_URL}/mobile-app-development`,
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile App Developers in Lagos, Nigeria | Data Megathos",
    description:
      "Mobile app development company in Lagos building iOS, Android, Flutter and React Native apps for startups and businesses.",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Mobile App Development",
  serviceType: "Mobile application development",
  description:
    "iOS, Android, Flutter and React Native mobile app development for startups and businesses in Lagos and across Nigeria.",
  areaServed: [
    { "@type": "City", name: "Lagos" },
    { "@type": "Country", name: "Nigeria" },
  ],
  provider: {
    "@type": "ProfessionalService",
    name: "Data Megathos",
    url: "https://datamegathos.com/",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lagos",
      addressCountry: "NG",
    },
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I choose the best mobile app developers for my business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Look at the developers' shipped apps and client references, ask who will actually build your product, and confirm what is included: design, development, testing, store submission and support. Get scope, timeline and price in writing.",
      },
    },
    {
      "@type": "Question",
      name: "Why choose Flutter development over native iOS and Android development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Flutter lets one codebase serve both iOS and Android, which usually lowers cost and speeds up launch. If your app needs deep OS-level features, we can build natively with Swift and Kotlin instead.",
      },
    },
    {
      "@type": "Question",
      name: "How much does mobile app development cost and how long does it take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cost and timeline depend on features, platforms, integrations and design. A focused MVP is the fastest and most affordable way to launch. We review your idea and send a written estimate with scope and timeline.",
      },
    },
    {
      "@type": "Question",
      name: "Will you handle Google Play Store and Apple App Store submission?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We handle store listings, privacy and data-safety declarations, screenshots and the submission process, and help resolve review feedback from Apple or Google.",
      },
    },
    {
      "@type": "Question",
      name: "Do I own the app's source code and intellectual property?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You own the source code, design files and project assets, and we hand over documented repositories and deployment details.",
      },
    },
    {
      "@type": "Question",
      name: "Are you mobile app developers based in Lagos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Data Megathos is based in Lagos, Nigeria, and builds apps for startups and businesses across Nigeria and beyond, working with clients remotely.",
      },
    },
  ],
};

const serviceCards = [
  {
    id: "flutter",
    icon: "flutter_dash",
    iconColor: "text-primary-container",
    title: "Flutter Development & Cross-Platform Apps",
    hoverColor: "group-hover:text-primary",
    description:
      "Our Flutter development team builds iOS and Android apps from a single codebase, with smooth native-quality performance. It is usually the fastest, most cost-effective route to launch an MVP on both platforms.",
    tags: ["Dart", "Riverpod / Bloc", "Impeller"],
    hasGlow: true,
  },
  {
    id: "android",
    icon: "android",
    iconColor: "text-tertiary",
    title: "Android Developers & Native Android Apps",
    hoverColor: "group-hover:text-tertiary",
    description:
      "Work with Android developers fluent in Kotlin, Jetpack Compose and Coroutines, building fast, reliable native Android apps with deep device and hardware integrations.",
    tags: ["Kotlin", "Jetpack Compose", "Play Integrity API"],
    hasGlow: false,
  },
  {
    id: "ios",
    icon: "phone_iphone",
    iconColor: "text-primary",
    title: "iOS Application Developers",
    hoverColor: "group-hover:text-primary",
    description:
      "Bespoke iPhone and iPad apps built with Swift and SwiftUI, following Apple's Human Interface Guidelines, with support for widgets, Live Activities and push notifications.",
    tags: ["Swift", "SwiftUI", "TestFlight CI/CD"],
    hasGlow: false,
  },
  {
    id: "react-native",
    icon: "dynamic_feed",
    iconColor: "text-on-surface",
    title: "React Native App Builders",
    hoverColor: "group-hover:text-primary",
    description:
      "Our app builders create React Native apps with TypeScript that share logic with your web product, so teams already working in JavaScript can move quickly across web and mobile.",
    tags: ["Expo EAS", "TypeScript", "TurboModules"],
    hasGlow: false,
  },
  {
    id: "backend",
    icon: "hub",
    iconColor: "text-primary-container",
    title: "Mobile App Backend & APIs",
    hoverColor: "group-hover:text-primary",
    description:
      "Scalable backends for your mobile application: REST and GraphQL APIs, real-time features with WebSockets, push notifications via Firebase and APNs, and payment integrations.",
    tags: ["GraphQL / REST", "FCM & APNs", "Redis"],
    hasGlow: false,
  },
  {
    id: "security",
    icon: "shield_lock",
    iconColor: "text-tertiary",
    title: "App Security & Offline Sync",
    hoverColor: "group-hover:text-tertiary",
    description:
      "Security built in from the start, aligned with OWASP MASVS: encrypted local storage, biometric authentication, certificate pinning, and offline sync that keeps working without a connection.",
    tags: ["OWASP MASVS", "SQLCipher / Realm", "Certificate Pinning"],
    hasGlow: false,
  },
];

const faqs = [
  {
    q: "How do I choose the best mobile app developers for my business?",
    a: "Look at the developers' shipped apps and client references, ask who will actually build your product, and confirm what is included: design, development, testing, store submission and support. Get scope, timeline and price in writing.",
  },
  {
    q: "Why choose Flutter development over native iOS and Android development?",
    a: "Flutter lets one codebase serve both iOS and Android, which usually lowers cost and speeds up launch. If your app needs deep OS-level features, we can build natively with Swift and Kotlin instead.",
  },
  {
    q: "How much does mobile app development cost and how long does it take?",
    a: "Cost and timeline depend on features, platforms, integrations and design. A focused MVP is the fastest and most affordable way to launch. We review your idea and send a written estimate with scope and timeline.",
  },
  {
    q: "Will you handle Google Play Store and Apple App Store submission?",
    a: "Yes. We handle store listings, privacy and data-safety declarations, screenshots and the submission process, and help resolve review feedback from Apple or Google.",
  },
  {
    q: "Do I own the app's source code and intellectual property?",
    a: "Yes. You own the source code, design files and project assets, and we hand over documented repositories and deployment details.",
  },
  {
    q: "Are you mobile app developers based in Lagos?",
    a: "Yes. Data Megathos is based in Lagos, Nigeria, and builds apps for startups and businesses across Nigeria and beyond, working with clients remotely.",
  },
];

export default function MobileAppDevelopmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="flex flex-col gap-16 py-6">
        <div className="flex flex-col w-full">
          {/* Hero */}
          <div className="relative w-full overflow-hidden">
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[340px] bg-primary-container/15 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute top-48 -right-24 w-80 h-80 bg-tertiary-container/10 blur-[100px] rounded-full pointer-events-none" />
            <section className="relative pt-6 pb-16 lg:pb-24 flex flex-col gap-10">
              <div className="flex flex-col items-start gap-6 max-w-4xl">
                <p className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-surface-container-high border border-outline-variant/30 text-primary text-xs font-bold tracking-widest uppercase">
                  <span className="size-2 rounded-full bg-primary animate-pulse" />
                  Mobile App Development Company in Lagos
                </p>
                <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em]">
                  Mobile App Developers in{" "}
                  <span className="text-primary">Lagos, Nigeria</span>: iOS, Android &amp;
                  Flutter
                </h1>
                <p className="text-slate-200 text-base md:text-lg font-normal leading-relaxed max-w-3xl">
                  Data Megathos is a team of mobile app developers, Android developers and iOS
                  application developers building apps for startups and businesses. We specialize in
                  Flutter development and cross-platform mobile application development, from MVP
                  app builds to scalable, secure mobile products.
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg bg-primary text-white font-bold text-base tracking-wide shadow-xl hover:bg-primary/90 active:scale-[0.98] transition-all"
                    href="#contact-quote"
                  >
                    <span>Hire App Developers</span>
                    <span className="material-symbols-outlined text-lg" aria-hidden="true">
                      arrow_forward
                    </span>
                  </Link>
                  <Link
                    className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-lg bg-surface border border-border text-white font-bold text-base hover:bg-surface-variant transition-colors"
                    href="/portfolio"
                  >
                    <span
                      className="material-symbols-outlined text-primary text-lg"
                      aria-hidden="true"
                    >
                      layers
                    </span>
                    <span>View Our Work</span>
                  </Link>
                </div>
              </div>
              <ul className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-4 pt-4">
                <li className="flex items-center gap-3 p-4 rounded-xl bg-surface-container-low border border-outline-variant/20">
                  <span
                    className="material-symbols-outlined text-primary text-2xl shrink-0"
                    aria-hidden="true"
                  >
                    verified
                  </span>
                  <span className="text-xs font-medium text-slate-300">
                    Flutter, React Native &amp; Native
                  </span>
                </li>
                <li className="flex items-center gap-3 p-4 rounded-xl bg-surface-container-low border border-outline-variant/20">
                  <span
                    className="material-symbols-outlined text-primary text-2xl shrink-0"
                    aria-hidden="true"
                  >
                    published_with_changes
                  </span>
                  <span className="text-xs font-medium text-slate-300">
                    App Store &amp; Google Play submission handled
                  </span>
                </li>
                <li className="flex items-center gap-3 p-4 rounded-xl bg-surface-container-low border border-outline-variant/20">
                  <span
                    className="material-symbols-outlined text-primary text-2xl shrink-0"
                    aria-hidden="true"
                  >
                    fingerprint
                  </span>
                  <span className="text-xs font-medium text-slate-300">
                    Offline-first &amp; biometric security
                  </span>
                </li>
                <li className="flex items-center gap-3 p-4 rounded-xl bg-surface-container-low border border-outline-variant/20">
                  <span
                    className="material-symbols-outlined text-primary text-2xl shrink-0"
                    aria-hidden="true"
                  >
                    key
                  </span>
                  <span className="text-xs font-medium text-slate-300">
                    100% IP &amp; source code ownership
                  </span>
                </li>
              </ul>
            </section>
          </div>

          {/* Metrics bar */}
          <section
            className="my-4 py-8 px-6 lg:px-12 rounded-2xl bg-surface-container border border-outline-variant/30 shadow-2xl relative overflow-hidden"
            aria-label="How we work"
          >
            <div className="absolute right-0 top-0 w-96 h-full bg-gradient-to-l from-primary-container/10 to-transparent pointer-events-none" />
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              <div className="flex flex-col gap-1">
                <span className="text-3xl lg:text-4xl font-black text-primary leading-none">
                  iOS + Android
                </span>
                <p className="text-xs text-slate-400 uppercase tracking-wider mt-2 font-medium">
                  One team, both platforms
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-3xl lg:text-4xl font-black text-white leading-none">Flutter</span>
                <p className="text-xs text-slate-400 uppercase tracking-wider mt-2 font-medium">
                  Single codebase, faster launch
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-3xl lg:text-4xl font-black text-white leading-none">Bi-weekly</span>
                <p className="text-xs text-slate-400 uppercase tracking-wider mt-2 font-medium">
                  Sprint demos of working builds
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-3xl lg:text-4xl font-black text-white leading-none">100%</span>
                <p className="text-xs text-slate-400 uppercase tracking-wider mt-2 font-medium">
                  Source code ownership
                </p>
              </div>
            </div>
          </section>

          {/* Services */}
          <section className="py-16 flex flex-col gap-12" id="services">
            <div className="flex flex-col gap-3 max-w-3xl">
              <p className="text-primary text-xs font-bold tracking-wider uppercase">
                Capabilities
              </p>
              <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight text-white">
                Mobile App Development Services in Lagos
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                Our application developer teams build modular, secure apps for iOS and Android,
                designed for how people in Nigeria actually use their phones: mobile payments with
                Paystack and Flutterwave, and offline-friendly experiences for patchy connectivity.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceCards.map((service) => (
                <article
                  key={service.id}
                  id={service.id}
                  className="group p-8 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:border-primary-container transition-all flex flex-col justify-between gap-6 relative overflow-hidden"
                >
                  {service.hasGlow && (
                    <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-primary-container/10 rounded-full blur-2xl group-hover:bg-primary-container/20 transition-all" />
                  )}
                  <div className="flex flex-col gap-4 relative z-10">
                    <div
                      className={`size-12 rounded-xl bg-surface-container-high flex items-center justify-center ${service.iconColor}`}
                    >
                      <span className="material-symbols-outlined text-3xl" aria-hidden="true">
                        {service.icon}
                      </span>
                    </div>
                    <h3
                      className={`text-xl font-bold text-white ${service.hoverColor} transition-colors`}
                    >
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-outline-variant/20 relative z-10">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded bg-surface text-xs font-mono text-on-surface-variant"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Comparison / Why us */}
          <section className="py-16 flex flex-col gap-10" id="why-us">
            <div className="flex flex-col gap-3 max-w-3xl">
              <p className="text-primary text-xs font-bold tracking-wider uppercase">
                Choosing a Team
              </p>
              <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight text-white">
                How to Choose Mobile App Developers: Freelancers vs Agencies
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                Building a reliable mobile app takes more than one skill: design, engineering,
                testing and store know-how. Here is what to compare when hiring mobile app
                developers.
              </p>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-outline-variant/30 bg-surface-container-low">
              <table className="w-full text-left border-collapse">
                <caption className="sr-only">
                  Comparison of Data Megathos, freelance app developers and traditional web agencies
                </caption>
                <thead>
                  <tr className="border-b border-outline-variant/30 bg-surface-container">
                    <th
                      scope="col"
                      className="p-5 text-xs font-bold uppercase tracking-wider text-white"
                    >
                      What to compare
                    </th>
                    <th
                      scope="col"
                      className="p-5 text-xs font-bold uppercase tracking-wider text-primary bg-surface-container-high"
                    >
                      Data Megathos
                    </th>
                    <th
                      scope="col"
                      className="p-5 text-xs font-bold uppercase tracking-wider text-slate-400"
                    >
                      Freelance app developers
                    </th>
                    <th
                      scope="col"
                      className="p-5 text-xs font-bold uppercase tracking-wider text-slate-400"
                    >
                      Web-focused agencies
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/20 text-sm">
                  <tr>
                    <th scope="row" className="p-5 font-bold text-white">
                      Team
                    </th>
                    <td className="p-5 text-white bg-surface-container-high/40 font-medium">
                      A dedicated team covering development, backend, design and QA
                    </td>
                    <td className="p-5 text-slate-400">One person; availability and coverage vary</td>
                    <td className="p-5 text-slate-400">
                      Mobile may be outsourced or a secondary skill
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="p-5 font-bold text-white">
                      Technology range
                    </th>
                    <td className="p-5 text-white bg-surface-container-high/40 font-medium">
                      Flutter and React Native, plus native Swift and Kotlin when needed
                    </td>
                    <td className="p-5 text-slate-400">Often specialized in one framework</td>
                    <td className="p-5 text-slate-400">Varies; some rely on web wrappers</td>
                  </tr>
                  <tr>
                    <th scope="row" className="p-5 font-bold text-white">
                      Delivery
                    </th>
                    <td className="p-5 text-white bg-surface-container-high/40 font-medium">
                      Bi-weekly sprint demos with installable test builds
                    </td>
                    <td className="p-5 text-slate-400">Varies by individual</td>
                    <td className="p-5 text-slate-400">Varies by agency</td>
                  </tr>
                  <tr>
                    <th scope="row" className="p-5 font-bold text-white">
                      Testing
                    </th>
                    <td className="p-5 text-white bg-surface-container-high/40 font-medium">
                      Automated tests plus real-device checks before each release
                    </td>
                    <td className="p-5 text-slate-400">Varies; ask what devices they test on</td>
                    <td className="p-5 text-slate-400">Varies; ask for their mobile QA process</td>
                  </tr>
                  <tr>
                    <th scope="row" className="p-5 font-bold text-white">
                      Store submission
                    </th>
                    <td className="p-5 text-white bg-surface-container-high/40 font-medium">
                      We handle App Store and Google Play submission and review feedback
                    </td>
                    <td className="p-5 text-slate-400">Often left to the client</td>
                    <td className="p-5 text-slate-400">Varies by agency</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Process */}
          <section className="py-16 flex flex-col gap-12" id="process">
            <div className="flex flex-col gap-3">
              <p className="text-primary text-xs font-bold tracking-wider uppercase">
                How We Build
              </p>
              <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight text-white">
                Our Mobile App Development Process
              </h2>
              <p className="text-slate-300 text-base leading-relaxed max-w-2xl">
                Predictable, sprint-based delivery that keeps scope under control and gets your app
                to launch without surprises.
              </p>
            </div>
            <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <li className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 flex flex-col gap-4 relative">
                <span className="text-primary font-black text-3xl font-mono">01</span>
                <h3 className="text-xl font-bold text-white">Discovery &amp; Wireframing</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  We map user journeys, check technical feasibility and produce interactive Figma
                  prototypes tested against iOS and Android conventions.
                </p>
              </li>
              <li className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 flex flex-col gap-4 relative">
                <span className="text-primary font-black text-3xl font-mono">02</span>
                <h3 className="text-xl font-bold text-white">Architecture &amp; Development</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Our mobile app developers build clean, tested code in Flutter, React Native or
                  native, with API gateways, offline caching and CI/CD pipelines.
                </p>
              </li>
              <li className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 flex flex-col gap-4 relative">
                <span className="text-primary font-black text-3xl font-mono">03</span>
                <h3 className="text-xl font-bold text-white">QA &amp; Device Testing</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Integration tests, performance and battery profiling, security testing and
                  checks across real iOS and Android devices.
                </p>
              </li>
              <li className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 flex flex-col gap-4 relative">
                <span className="text-primary font-black text-3xl font-mono">04</span>
                <h3 className="text-xl font-bold text-white">Store Launch &amp; Support</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Google Play and App Store submission, analytics setup, and post-launch
                  maintenance and support plans.
                </p>
              </li>
            </ol>
          </section>

          {/* FAQ */}
          <section className="py-16 flex flex-col gap-10" id="faq">
            <div className="flex flex-col gap-3 max-w-2xl">
              <p className="text-primary text-xs font-bold tracking-wider uppercase">
                Got Questions?
              </p>
              <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight text-white">
                Mobile App Development: Frequently Asked Questions
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                Answers about hiring app developers, choosing Flutter or native, timelines, and store
                approval.
              </p>
            </div>
            <div className="flex flex-col gap-4 max-w-4xl">
              {faqs.map((faq, idx) => (
                <details
                  key={idx}
                  className="group p-6 rounded-2xl bg-surface border border-border open:bg-surface-container transition-all"
                >
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <h3 className="text-lg font-bold text-white leading-tight pr-4">
                      {faq.q}
                    </h3>
                    <span
                      className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform shrink-0"
                      aria-hidden="true"
                    >
                      expand_more
                    </span>
                  </summary>
                  <p className="text-sm text-slate-300 leading-relaxed pt-4">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section
            className="mt-8 mb-4 p-8 lg:p-14 rounded-3xl bg-surface-container border border-outline-variant/40 relative overflow-hidden text-center flex flex-col items-center gap-8 shadow-2xl"
            id="contact-quote"
          >
            <div id="contact" />
            <div className="absolute -top-32 -left-32 w-80 h-80 bg-primary-container/20 blur-3xl rounded-full pointer-events-none" />
            <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-tertiary-container/20 blur-3xl rounded-full pointer-events-none" />
            <div className="relative z-10 flex flex-col items-center gap-4 max-w-3xl">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black leading-tight text-white text-balance">
                Ready to Build Your App with{" "}
                <span className="text-primary">Mobile App Developers</span> in Lagos?
              </h2>
              <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl">
                Book a free consultation with our lead mobile application developers. We will review
                your concept, recommend the right approach (native vs Flutter development) and send a
                clear written estimate.
              </p>
            </div>
            <div className="relative z-10 flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                className="inline-flex items-center gap-3 px-9 py-4 rounded-xl bg-primary text-white font-bold text-base tracking-wide shadow-xl hover:bg-primary/90 active:scale-[0.98] transition-all"
                href="/quote"
              >
                <span className="material-symbols-outlined text-lg" aria-hidden="true">
                  rocket_launch
                </span>
                <span>Request a Mobile App Quote</span>
              </Link>
              <a
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-surface border border-border text-white font-bold text-base hover:bg-surface-variant transition-colors"
                href="https://wa.me/2349068954455"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-primary text-lg" aria-hidden="true">
                  chat
                </span>
                <span>Chat with an App Developer</span>
              </a>
            </div>
            <ul className="relative z-10 flex flex-wrap items-center justify-center gap-6 pt-6 text-xs text-outline font-mono border-t border-outline-variant/20 w-full max-w-xl">
              <li className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-primary text-sm" aria-hidden="true">
                  lock
                </span>
                <span>NDA available on request</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-primary text-sm" aria-hidden="true">
                  description
                </span>
                <span>Clear written quote</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-primary text-sm" aria-hidden="true">
                  key
                </span>
                <span>You own the code</span>
              </li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}
