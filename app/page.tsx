import Link from "next/link";

export default function Home() {
  return (
    <>

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
              Transforming Your Business with Advanced AI and Custom
              Software
            </h1>
            <p className="text-slate-200 text-base md:text-lg font-normal leading-relaxed max-w-2xl">
              High-end software development agency specializing in
              mobile app and website development, WordPress website, bespoke software solutions, and
              intelligent AI automation.
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <Link href="/quote" className="flex min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                <span className="truncate">Start Your Project</span>
              </Link>
              <Link href="/portfolio" className="flex min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-surface border border-border text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-surface-variant transition-colors">
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
            <h2 className="text-primary text-sm font-bold tracking-wider uppercase">
              Who We Are
            </h2>
            <h3 className="text-3xl md:text-4xl font-black leading-tight tracking-tight">
              Empowering businesses through innovative technology
            </h3>
            <p className="text-slate-300 text-lg font-normal leading-relaxed">
              Data Megathos is a premier software development agency
              dedicated to delivering cutting-edge digital solutions. We
              combine technical excellence with strategic thinking to build
              bespoke mobile app and web applications, WordPress website, intelligent AI
              automation, and seamless software integrations.
            </p>
          </div>
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            <div className="flex gap-4 rounded-xl border border-border bg-surface p-6 flex-col shadow-lg">
              <div className="text-primary bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">
                  rocket_launch
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-lg font-bold leading-tight">
                  Our Mission
                </h4>
                <p className="text-slate-300 text-sm font-normal leading-relaxed">
                  To deliver innovative, reliable, and scalable software solutions that solve real-world problems and empower businesses to achieve their full potential.
                </p>
              </div>
            </div>
            <div className="flex gap-4 rounded-xl border border-border bg-surface p-6 flex-col shadow-lg">
              <div className="text-primary bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">
                  lightbulb
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-lg font-bold leading-tight">
                  Our Expertise
                </h4>
                <p className="text-slate-300 text-sm font-normal leading-relaxed">
                  Specializing in modern website and mobile app development, WordPress website, AI-driven
                  automation, and custom digital experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Startup */}
      <section className="py-16 border-t border-border/50" id="for-startup">
        <div className="flex flex-col items-center text-center mb-12 gap-4">
          <h2 className="text-primary text-sm font-bold tracking-wider uppercase">
            For Startups
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          <div className="flex flex-col gap-4 rounded-xl border border-border bg-surface p-8">
            <h2 className="text-2xl md:text-3xl font-black leading-tight tracking-tight">
              Launch Your MVP Faster &amp; Scale with Confidence
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              The strategic software partner for startups and SMEs. We build
              robust MVPs, scalable architectures, and intelligent automation
              to power your growth journey.
            </p>
          </div>
          <div className="flex flex-col gap-4 rounded-xl border border-border bg-surface p-8">
            <h2 className="text-2xl md:text-3xl font-black leading-tight tracking-tight">
              High-velocity development for ambitious founders
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              Data Megathos is built for the startup ecosystem. We strip away
              the overhead of traditional agencies to focus on what matters:
              speed-to-market and lean, cost-effective development that scales
              as you grow.
            </p>
          </div>
        </div>
      </section>

      {/* What We're Offering */}
      <section
        className="py-16 border-t border-border/50"
        id="services"
      >
        <div className="flex flex-col items-center text-center mb-12 gap-4">
          <h2 className="text-primary text-sm font-bold tracking-wider uppercase">
            Our Services
          </h2>
          <h3 className="text-3xl md:text-4xl font-black leading-tight tracking-tight">
            What We&apos;re Offering
          </h3>
          <p className="text-slate-300 max-w-2xl">
            Comprehensive digital solutions tailored to elevate your
            business operations and customer experience.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {[
            {
              icon: "smartphone",
              title: "Mobile Apps",
              description:
                "Native and cross-platform mobile applications designed for exceptional user experiences on iOS and Android.",
            },
            {
              icon: "web",
              title: "Web Apps",
              description:
                "Scalable, responsive, and high-performance web applications built with modern frameworks and architectures.",
            },
            {
              icon: "dashboard_customize",
              title: "WordPress",
              description:
                "Custom WordPress theme and plugin development for robust, easily manageable content platforms.",
            },
            {
              icon: "code",
              title: "Custom Development",
              description:
                "Bespoke software solutions engineered specifically to address your unique business challenges and workflows.",
            },
            {
              icon: "smart_toy",
              title: "AI Automation",
              description:
                "Intelligent automation solutions leveraging machine learning and AI to optimize operations and reduce costs.",
            },
            {
              icon: "integration_instructions",
              title: "Software Integrations",
              description:
                "Seamless connection of disparate systems and APIs to create unified, efficient digital ecosystems.",
            },
          ].map((service) => (
            <div
              key={service.title}
              className="group relative flex flex-col gap-4 rounded-xl border border-border bg-surface p-8 hover:border-primary transition-colors cursor-pointer overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 transition-transform group-hover:scale-110" />
              <div className="text-primary mb-2">
                <span className="material-symbols-outlined text-4xl">
                  {service.icon}
                </span>
              </div>
              <h4 className="text-xl font-bold leading-tight">
                {service.title}
              </h4>
              <p className="text-slate-400 text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section
        className="py-16 border-t border-border/50"
        id="testimonials"
      >
        <div className="flex flex-col items-center text-center mb-12 gap-4">
          <h2 className="text-primary text-sm font-bold tracking-wider uppercase">
            Client Success
          </h2>
          <h3 className="text-3xl md:text-4xl font-black leading-tight tracking-tight">
            What Our Partners Say
          </h3>
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
            <div
              key={testimonial.name}
              className="bg-surface border border-border p-8 rounded-xl relative"
            >
              <span className="material-symbols-outlined absolute top-6 right-6 text-primary/20 text-6xl">
                format_quote
              </span>
              <div className="flex gap-1 text-primary mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined text-sm"
                  >
                    star
                  </span>
                ))}
              </div>
              <p className="text-slate-300 italic mb-6 relative z-10">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-variant flex items-center justify-center font-bold text-primary">
                  {testimonial.initials}
                </div>
                <div>
                  <h5 className="font-bold">{testimonial.name}</h5>
                  <p className="text-sm text-slate-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section
        className="py-16 border-t border-border/50"
        id="contact"
      >
        <div className="bg-primary/10 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-primary/20 mx-4">
          <div className="flex flex-col gap-4 text-center md:text-left max-w-xl">
            <h3 className="text-2xl md:text-3xl font-black leading-tight">
              Ready to build something amazing?
            </h3>
            <p className="text-slate-300">
              Let&apos;s discuss how we can help transform your business
              with our custom software solutions.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Link href="/contact" className="flex min-w-[140px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal hover:bg-primary/90 transition-colors">
              <span className="material-symbols-outlined text-xl">
                mail
              </span>
              <span>Contact Us</span>
            </Link>
            <Link href="/pay" className="flex min-w-[140px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-12 px-6 bg-surface border border-border text-white text-base font-bold leading-normal hover:bg-surface-variant transition-colors">
              <span className="material-symbols-outlined text-xl">
                credit_card
              </span>
              <span>Make a Payment</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
