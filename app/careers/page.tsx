import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers - Data Megathos",
  description: "Join the Data Megathos team.",
};

export default function CareersPage() {
  return (
    <div className="flex flex-col pt-16 pb-16">
      {/* Hero Section */}
      <section className="py-16 px-6 max-w-[1200px] mx-auto text-center mt-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container border border-brand-border rounded-full mb-8">
          <span className="material-symbols-outlined text-primary-container text-sm">
            rocket_launch
          </span>
          <span className="text-label-sm text-on-surface uppercase tracking-wider">
            Join the Team
          </span>
        </div>
        <h1 className="text-display text-on-surface mb-6 max-w-4xl mx-auto">
          Build the future for <span className="text-primary-container">startups &amp; SMEs</span>.
        </h1>
        <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
          We are a collective of engineers, designers, and strategists dedicated
          to delivering technical superiority. Join us in shaping high-velocity
          performance tools for the next generation of businesses.
        </p>
        <div className="flex justify-center gap-4">
          <a
            className="px-8 py-4 bg-primary-container text-on-primary-container font-bold rounded hover:brightness-110 transition-all text-sm uppercase tracking-wider"
            href="#positions"
          >
            View Openings
          </a>
          <a
            className="px-8 py-4 bg-surface-container border border-brand-border text-on-surface font-bold rounded hover:border-primary-container hover:text-primary-container transition-all text-sm uppercase tracking-wider"
            href="#culture"
          >
            Explore Culture
          </a>
        </div>
      </section>

      {/* Image Break */}
      <section className="max-w-[1200px] mx-auto px-6 mb-16">
        <div className="w-full h-64 md:h-96 rounded-lg bg-surface-container-highest border border-brand-border overflow-hidden relative group">
          <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent z-10"></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Team collaborating"
            className="w-full h-full object-cover mix-blend-luminosity opacity-50 group-hover:opacity-70 transition-opacity duration-500"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJcWcWUtOsPTsuLSAHkDt9KGxYuL-lwoKSPRwStB1go6TbiqVLIO2VxwXarJAA-J6fGWZQTK31Wr09Xj_H2gqVtE7NMFC8oh2Sd7WSq54hyJnmMGWO2Wftsx3OFdNDjIeSKOS0RZHM1uU6mCpCfkRFCxG-sGteu9tnUT891v7VDi34xj9geWDDPMBwUol6O6dNtNY48S_y0b3MkPeXWmfKHyaiG5oTWVScv6mxJSlHxCH33LawDmRaK94hmR001_gWwnxUBTKS28VO"
          />
        </div>
      </section>

      {/* Bento Grid: Culture & Benefits */}
      <section className="max-w-[1200px] mx-auto px-6 mb-16" id="culture">
        <div className="mb-12">
          <h2 className="text-h1 text-on-surface mb-4">The Engine Room</h2>
          <p className="text-body-md text-on-surface-variant max-w-2xl">
            Our culture is built on precision, autonomy, and continuous
            deployment of great ideas.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Large Card */}
          <div className="md:col-span-2 bg-brand-surface border border-brand-border rounded-lg p-8 hover:border-primary-container transition-colors group relative overflow-hidden shadow-lg">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary-container/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            <span
              className="material-symbols-outlined text-primary-container text-4xl mb-6 block"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              terminal
            </span>
            <h3 className="text-h2 text-on-surface mb-4">Technical Autonomy</h3>
            <p className="text-body-md text-on-surface-variant">
              We hire smart people and get out of their way. You&apos;ll own your
              projects from architecture to deployment, utilizing cutting-edge
              stacks to solve complex problems for high-growth clients.
            </p>
          </div>

          {/* Small Card 1 */}
          <div className="bg-brand-surface border border-brand-border rounded-lg p-8 hover:border-primary-container transition-colors group relative overflow-hidden shadow-lg">
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary-container/5 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
            <span className="material-symbols-outlined text-primary-container text-3xl mb-4 block">
              schedule
            </span>
            <h3 className="text-body-lg font-bold text-on-surface mb-2">
              Asynchronous First
            </h3>
            <p className="text-body-md text-on-surface-variant text-sm">
              Flexible hours globally. Focus on output, not seat time.
            </p>
          </div>

          {/* Small Card 2 */}
          <div className="bg-brand-surface border border-brand-border rounded-lg p-8 hover:border-primary-container transition-colors group relative overflow-hidden shadow-lg">
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary-container/5 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
            <span className="material-symbols-outlined text-primary-container text-3xl mb-4 block">
              health_and_safety
            </span>
            <h3 className="text-body-lg font-bold text-on-surface mb-2">
              Premium Coverage
            </h3>
            <p className="text-body-md text-on-surface-variant text-sm">
              Top-tier health, dental, and mental wellness stipends.
            </p>
          </div>

          {/* Small Card 3 */}
          <div className="bg-brand-surface border border-brand-border rounded-lg p-8 hover:border-primary-container transition-colors group relative overflow-hidden shadow-lg">
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary-container/5 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
            <span className="material-symbols-outlined text-primary-container text-3xl mb-4 block">
              flight_takeoff
            </span>
            <h3 className="text-body-lg font-bold text-on-surface mb-2">
              Annual Retreats
            </h3>
            <p className="text-body-md text-on-surface-variant text-sm">
              We gather the global team once a year for strategic alignment and
              connection.
            </p>
          </div>

          {/* Small Card 4 */}
          <div className="bg-brand-surface border border-brand-border rounded-lg p-8 hover:border-primary-container transition-colors group relative overflow-hidden shadow-lg">
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-primary-container/5 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
            <span className="material-symbols-outlined text-primary-container text-3xl mb-4 block">
              computer
            </span>
            <h3 className="text-body-lg font-bold text-on-surface mb-2">
              Hardware Setup
            </h3>
            <p className="text-body-md text-on-surface-variant text-sm">
              Generous budget for your ideal home office configuration.
            </p>
          </div>
        </div>
      </section>

      {/* Open Positions List */}
      <section className="max-w-[1200px] mx-auto px-6 mb-16" id="positions">
        <div className="mb-12 border-b border-brand-border pb-6 flex justify-between items-end">
          <div>
            <h2 className="text-h1 text-on-surface mb-2">Open Positions</h2>
            <p className="text-body-md text-on-surface-variant">
              Join our distributed engineering and design teams.
            </p>
          </div>
          <div className="hidden sm:flex gap-2">
            <span className="px-3 py-1 bg-surface-container border border-outline-variant rounded-full text-label-sm text-xs text-on-surface">
              Engineering
            </span>
            <span className="px-3 py-1 bg-surface-container border border-outline-variant rounded-full text-label-sm text-xs text-on-surface">
              Design
            </span>
            <span className="px-3 py-1 bg-surface-container border border-outline-variant rounded-full text-label-sm text-xs text-on-surface">
              Product
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {/* Position Item */}
          <div className="group flex flex-col md:flex-row justify-between items-start md:items-center p-6 bg-surface-container-low border border-brand-border hover:border-primary-container rounded-lg transition-all cursor-pointer shadow-sm hover:shadow-lg hover:bg-surface-container">
            <div>
              <h3 className="text-h2 text-on-surface group-hover:text-primary-container transition-colors mb-1 text-xl">
                Senior Fullstack Engineer
              </h3>
              <div className="flex items-center gap-4 text-on-surface-variant text-body-md text-sm">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">
                    location_on
                  </span>{" "}
                  Remote (US/EU)
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">code</span>{" "}
                  Engineering
                </span>
              </div>
            </div>
            <div className="mt-4 md:mt-0 flex items-center gap-4">
              <span className="text-label-sm text-on-surface group-hover:text-primary-container transition-colors">
                Apply Now
              </span>
              <span className="material-symbols-outlined text-outline-variant group-hover:text-primary-container transition-colors group-hover:translate-x-1">
                arrow_forward
              </span>
            </div>
          </div>

          {/* Position Item */}
          <div className="group flex flex-col md:flex-row justify-between items-start md:items-center p-6 bg-surface-container-low border border-brand-border hover:border-primary-container rounded-lg transition-all cursor-pointer shadow-sm hover:shadow-lg hover:bg-surface-container">
            <div>
              <h3 className="text-h2 text-on-surface group-hover:text-primary-container transition-colors mb-1 text-xl">
                UX/UI Designer
              </h3>
              <div className="flex items-center gap-4 text-on-surface-variant text-body-md text-sm">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">
                    location_on
                  </span>{" "}
                  Remote (Global)
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">
                    design_services
                  </span>{" "}
                  Design
                </span>
              </div>
            </div>
            <div className="mt-4 md:mt-0 flex items-center gap-4">
              <span className="text-label-sm text-on-surface group-hover:text-primary-container transition-colors">
                Apply Now
              </span>
              <span className="material-symbols-outlined text-outline-variant group-hover:text-primary-container transition-colors group-hover:translate-x-1">
                arrow_forward
              </span>
            </div>
          </div>

          {/* Position Item */}
          <div className="group flex flex-col md:flex-row justify-between items-start md:items-center p-6 bg-surface-container-low border border-brand-border hover:border-primary-container rounded-lg transition-all cursor-pointer shadow-sm hover:shadow-lg hover:bg-surface-container">
            <div>
              <h3 className="text-h2 text-on-surface group-hover:text-primary-container transition-colors mb-1 text-xl">
                Technical Project Manager
              </h3>
              <div className="flex items-center gap-4 text-on-surface-variant text-body-md text-sm">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">
                    location_on
                  </span>{" "}
                  Remote (US)
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">
                    account_tree
                  </span>{" "}
                  Product
                </span>
              </div>
            </div>
            <div className="mt-4 md:mt-0 flex items-center gap-4">
              <span className="text-label-sm text-on-surface group-hover:text-primary-container transition-colors">
                Apply Now
              </span>
              <span className="material-symbols-outlined text-outline-variant group-hover:text-primary-container transition-colors group-hover:translate-x-1">
                arrow_forward
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
