import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Data Megathos",
  description:
    "Data Megathos Engineering privacy policy and data protection protocols.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="flex-grow w-full max-w-container-max mx-auto px-gutter py-section-gap">
      <header className="mb-section-gap border-b border-surface-container-high pb-8">
        <h1 className="font-display text-display text-primary-fixed mb-4">
          Privacy Policy
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          Last Updated: October 24, 2024. This document outlines how Data
          Megathos Engineering collects, uses, and protects your technical data
          and personal information during our engagements.
        </p>
      </header>
      <div className="flex flex-col md:flex-row gap-12">
        {/* Table of Contents (Sticky Side Nav for Document) */}
        <aside className="w-full md:w-64 flex-shrink-0 hidden md:block">
          <nav className="sticky top-24 bg-surface-container-low p-6 border border-surface-container-high rounded-lg shadow-lg">
            <h3 className="font-label-sm text-label-sm text-primary uppercase mb-6 tracking-widest">
              Contents
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
                  href="#data-collection"
                >
                  1. Data Collection
                </a>
              </li>
              <li>
                <a
                  className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
                  href="#data-usage"
                >
                  2. Data Usage
                </a>
              </li>
              <li>
                <a
                  className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
                  href="#data-protection"
                >
                  3. Protection Protocols
                </a>
              </li>
              <li>
                <a
                  className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
                  href="#third-party"
                >
                  4. Third-Party Access
                </a>
              </li>
              <li>
                <a
                  className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
                  href="#contact"
                >
                  5. Contact Information
                </a>
              </li>
            </ul>
          </nav>
        </aside>
        
        {/* Document Content */}
        <article className="flex-grow space-y-12">
          <section
            className="bg-surface p-card-padding border border-surface-container-high rounded-lg relative overflow-hidden group"
            id="data-collection"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/5 rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-150"></div>
            <div className="flex items-center gap-4 mb-6">
              <span
                className="material-symbols-outlined text-primary text-3xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                database
              </span>
              <h2 className="font-h2 text-h2 text-inverse-surface">
                1. Data Collection
              </h2>
            </div>
            <div className="space-y-4 text-on-surface-variant">
              <p>
                At Data Megathos, we engineer robust solutions requiring specific
                technical telemetry and operational data. We collect information
                primarily through automated infrastructure monitoring and direct
                client provision during discovery phases.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Infrastructure Telemetry:</strong> Server logs,
                  performance metrics, and API utilization rates necessary for
                  maintaining system integrity.
                </li>
                <li>
                  <strong>Client Provisioned Data:</strong> Architectural
                  blueprints, access credentials (stored in encrypted vaults),
                  and specific dataset samples required for engineering models.
                </li>
                <li>
                  <strong>Interaction Data:</strong> Usage patterns within our
                  proprietary CMS and client portals to optimize user experience
                  and platform stability.
                </li>
              </ul>
            </div>
          </section>

          <section
            className="bg-surface p-card-padding border border-surface-container-high rounded-lg relative overflow-hidden group"
            id="data-usage"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/5 rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-150"></div>
            <div className="flex items-center gap-4 mb-6">
              <span
                className="material-symbols-outlined text-primary text-3xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                memory
              </span>
              <h2 className="font-h2 text-h2 text-inverse-surface">
                2. Data Usage
              </h2>
            </div>
            <div className="space-y-4 text-on-surface-variant">
              <p>
                The data we collect is strictly utilized for executing
                engineering mandates and ensuring operational continuity. We do
                not monetize client telemetry or functional data.
              </p>
              <p>Specific use cases include:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Executing technical audits and identifying architectural
                  bottlenecks.
                </li>
                <li>
                  Training bespoke machine learning models exclusively for the
                  providing client&apos;s operational use.
                </li>
                <li>
                  Proactive threat detection and infrastructure scaling based on
                  predictive telemetry analysis.
                </li>
              </ul>
            </div>
          </section>

          <section
            className="bg-surface p-card-padding border border-surface-container-high rounded-lg relative overflow-hidden group"
            id="data-protection"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/5 rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-150"></div>
            <div className="flex items-center gap-4 mb-6">
              <span
                className="material-symbols-outlined text-primary text-3xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                shield_lock
              </span>
              <h2 className="font-h2 text-h2 text-inverse-surface">
                3. Protection Protocols
              </h2>
            </div>
            <div className="space-y-4 text-on-surface-variant">
              <p>
                Technical superiority demands uncompromising security. Data
                Megathos employs enterprise-grade cryptographic standards across
                all operational vectors.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Encryption at Rest &amp; Transit:</strong> All datasets
                  are encrypted using AES-256 at rest and TLS 1.3 during
                  transmission across our networks.
                </li>
                <li>
                  <strong>Zero-Trust Architecture:</strong> Internal access to
                  client environments is governed by strict zero-trust
                  protocols, requiring multi-factor authentication and ephemeral
                  credential generation.
                </li>
                <li>
                  <strong>Data Isolation:</strong> Client datasets are strictly
                  segregated at the infrastructure level to prevent
                  cross-contamination or unauthorized internal access.
                </li>
              </ul>
            </div>
          </section>

          <section
            className="bg-surface p-card-padding border border-surface-container-high rounded-lg relative overflow-hidden group"
            id="third-party"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/5 rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-150"></div>
            <div className="flex items-center gap-4 mb-6">
              <span
                className="material-symbols-outlined text-primary text-3xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                api
              </span>
              <h2 className="font-h2 text-h2 text-inverse-surface">
                4. Third-Party Access
              </h2>
            </div>
            <div className="space-y-4 text-on-surface-variant">
              <p>
                We maintain strict control over our operational environments. Third-party access is 
                heavily restricted and governed by rigorous data processing agreements.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Cloud Providers:</strong> We utilize top-tier cloud infrastructure providers (e.g., AWS, GCP) 
                  that comply with stringent security standards (SOC 2, ISO 27001). Data is encrypted before being stored.
                </li>
                <li>
                  <strong>Analytics:</strong> Minimal, anonymized telemetry is collected for platform optimization. 
                  No personally identifiable information (PII) is sold or shared with advertising networks.
                </li>
                <li>
                  <strong>Legal Compliance:</strong> We will only disclose telemetry or data if legally compelled by 
                  a valid court order or subpoena.
                </li>
              </ul>
            </div>
          </section>

          <section
            className="bg-surface p-card-padding border border-surface-container-high rounded-lg relative overflow-hidden group"
            id="contact"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/5 rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-150"></div>
            <div className="flex items-center gap-4 mb-6">
              <span
                className="material-symbols-outlined text-primary text-3xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                contact_support
              </span>
              <h2 className="font-h2 text-h2 text-inverse-surface">
                5. Contact Information
              </h2>
            </div>
            <div className="space-y-4 text-on-surface-variant">
              <p>
                For inquiries regarding data practices, compliance, or to issue a data deletion request, 
                please initiate contact through our secure channels.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Email Protocol:</strong> <a href="mailto:privacy@datamegathos.com" className="text-primary hover:underline">privacy@datamegathos.com</a>
                </li>
                <li>
                  <strong>Direct Inquiry:</strong> Through our secure <Link href="/contact" className="text-primary hover:underline">Contact Form</Link>.
                </li>
              </ul>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}
