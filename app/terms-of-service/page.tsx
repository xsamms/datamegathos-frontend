import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Data Megathos",
  description: "Terms of Service and User Agreements for Data Megathos.",
};

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col pt-16">
      {/* Header Section */}
      <header className="w-full max-w-[1200px] mx-auto px-6 py-16 border-b border-brand-border">
        <div className="max-w-3xl">
          <h1 className="text-display text-on-surface mb-6">Terms of Service</h1>
          <p className="text-body-lg text-on-surface-variant">
            Last Updated: October 24, 2024
          </p>
          <p className="text-body-lg text-on-surface-variant mt-4">
            These Terms of Service (&quot;Terms&quot;) govern your access to and use
            of Data Megathos services, software, and websites (collectively, the
            &quot;Services&quot;). Please read them carefully.
          </p>
        </div>
      </header>

      {/* Document Content */}
      <article className="w-full max-w-[1200px] mx-auto px-6 py-16 flex-grow flex gap-12 relative">
        {/* Sticky Table of Contents (Desktop) */}
        <aside className="hidden lg:block w-64 flex-shrink-0 sticky top-24 h-fit">
          <nav className="p-6 bg-surface-container rounded-lg border border-brand-border">
            <h3 className="text-label-sm text-primary mb-4 uppercase tracking-widest">
              Contents
            </h3>
            <ul className="space-y-3 text-body-md text-on-surface-variant">
              <li>
                <a className="hover:text-primary transition-colors" href="#acceptance">
                  1. Acceptance of Terms
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#services">
                  2. Description of Services
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#obligations">
                  3. User Obligations
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#intellectual-property">
                  4. Intellectual Property
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#liability">
                  5. Limitation of Liability
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#termination">
                  6. Termination
                </a>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Legal Text */}
        <div className="max-w-3xl flex-grow space-y-12">
          <section id="acceptance" className="scroll-mt-24">
            <h2 className="text-h2 text-on-surface mb-4 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">gavel</span>
              1. Acceptance of Terms
            </h2>
            <div className="prose-dark space-y-4 text-body-lg">
              <p>
                By accessing or using our Services, you agree to be bound by
                these Terms and our Privacy Policy. If you do not agree to these
                Terms, you may not access or use the Services.
              </p>
              <p>
                If you are accessing or using the Services on behalf of a
                company or other legal entity, you represent and warrant that
                you have the authority to bind that entity to these Terms. In
                that case, &quot;you&quot; and &quot;your&quot; will refer to that entity.
              </p>
            </div>
          </section>

          <section id="services" className="scroll-mt-24">
            <h2 className="text-h2 text-on-surface mb-4 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">dns</span>
              2. Description of Services
            </h2>
            <div className="prose-dark space-y-4 text-body-lg">
              <p>
                Data Megathos provides high-performance engineering
                infrastructure, data management platforms, and associated
                technical consulting services. We reserve the right to modify,
                suspend, or discontinue the Services (or any part thereof) at
                any time, with or without notice.
              </p>

              <div className="bg-surface-container p-6 rounded-lg border border-brand-border mt-6">
                <h4 className="text-label-sm text-on-surface mb-2">
                  Service Level Agreements (SLA)
                </h4>
                <p className="text-sm">
                  Specific uptime guarantees and technical support response
                  times are governed by your individual enterprise agreement and
                  are not covered under these general terms.
                </p>
              </div>
            </div>
          </section>

          <section id="obligations" className="scroll-mt-24">
            <h2 className="text-h2 text-on-surface mb-4 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">
                shield_person
              </span>
              3. User Obligations
            </h2>
            <div className="prose-dark space-y-4 text-body-lg">
              <p>
                You agree to use the Services only for lawful purposes and in
                accordance with these Terms. You agree not to use the Services:
              </p>
              <ul className="list-disc pl-6 space-y-2 marker:text-primary">
                <li>
                  In any way that violates any applicable national or
                  international law or regulation.
                </li>
                <li>
                  To transmit, or procure the sending of, any advertising or
                  promotional material, including any &quot;junk mail&quot;, &quot;chain
                  letter&quot;, &quot;spam&quot;, or any other similar solicitation.
                </li>
                <li>
                  To impersonate or attempt to impersonate Data Megathos, a Data
                  Megathos employee, another user, or any other person or
                  entity.
                </li>
                <li>
                  To engage in any other conduct that restricts or inhibits
                  anyone&apos;s use or enjoyment of the Services, or which, as
                  determined by us, may harm Data Megathos or users of the
                  Services.
                </li>
              </ul>
            </div>
          </section>

          <section id="intellectual-property" className="scroll-mt-24">
            <h2 className="text-h2 text-on-surface mb-4 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">
                architecture
              </span>
              4. Intellectual Property
            </h2>
            <div className="prose-dark space-y-4 text-body-lg">
              <p>
                The Services and their entire contents, features, and
                functionality (including but not limited to all information,
                software, text, displays, images, video, and audio, and the
                design, selection, and arrangement thereof) are owned by Data
                Megathos, its licensors, or other providers of such material and
                are protected by international copyright, trademark, patent,
                trade secret, and other intellectual property or proprietary
                rights laws.
              </p>
            </div>
          </section>

          <section id="liability" className="scroll-mt-24">
            <h2 className="text-h2 text-on-surface mb-4 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">
                warning
              </span>
              5. Limitation of Liability
            </h2>
            <div className="prose-dark space-y-4 text-body-lg">
              <p className="font-bold text-on-surface uppercase text-sm tracking-wider">
                To the fullest extent provided by law, in no event will Data
                Megathos, its affiliates, or their licensors, service providers,
                employees, agents, officers, or directors be liable for damages
                of any kind, under any legal theory, arising out of or in
                connection with your use, or inability to use, the services, any
                websites linked to it, any content on the services or such other
                websites, including any direct, indirect, special, incidental,
                consequential, or punitive damages.
              </p>
            </div>
          </section>

          <section id="termination" className="scroll-mt-24 pb-16">
            <h2 className="text-h2 text-on-surface mb-4 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">
                block
              </span>
              6. Termination
            </h2>
            <div className="prose-dark space-y-4 text-body-lg">
              <p>
                We may terminate or suspend your access to all or part of the
                Services immediately, without prior notice or liability, for any
                reason whatsoever, including without limitation if you breach
                the Terms.
              </p>
              <p>
                All provisions of the Terms which by their nature should survive
                termination shall survive termination, including, without
                limitation, ownership provisions, warranty disclaimers,
                indemity and limitations of liability.
              </p>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}
