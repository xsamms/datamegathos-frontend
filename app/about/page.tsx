

const teamMembers = [
  {
    name: "Samuel Williams",
    role: "CEO & Founder",
    image:
      "/images/sam-web.png",
  },
  {
    name: "Amarachi Okoro",
    role: "CTO",
    image:
      "/images/amarachi_data.jpg",
  },
  {
    name: "Tolu Johnson",
    role: "Lead Developer",
    image:
      "/images/tolu_data.jpg",
  },
  {
    name: "Hammed Musa",
    role: "UX/UI Designer",
    image:
      "/images/hammed_data.jpg",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-10 px-4 py-12">
      {/* Page Header Banner */}
      <div className="flex flex-wrap justify-between gap-3 p-4 bg-slate-800/50 rounded-xl">
        <div className="flex min-w-72 flex-col gap-4">
          <p className="text-4xl font-black leading-tight tracking-[-0.033em]">
            About Data Megathos
          </p>
          <p className="text-slate-400 text-lg font-normal leading-relaxed max-w-[720px]">
            We are a team of passionate software developers dedicated to
            building high-quality digital products that drive business
            growth and innovation.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="flex flex-col gap-6 p-4">
        <h1 className="text-[32px] font-bold leading-tight sm:text-4xl sm:font-black sm:tracking-[-0.033em] max-w-[720px] text-primary">
          Our Story
        </h1>
        <p className="text-base font-normal leading-relaxed max-w-[800px] text-slate-300">
          Founded in 2020, Data Megathos started with a simple idea: to
          help businesses grow through scalable and robust technology
          solutions. What began as a small team of three developers has
          grown into a full-service agency. Today, we&apos;re proud to
          be a trusted partner for companies around the world, delivering
          solutions that range from complex enterprise systems to
          intuitive mobile applications.
        </p>
      </div>

      {/* Mission / Vision / Values */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 p-4">
        <div className="flex flex-1 gap-4 rounded-xl border border-slate-700 bg-slate-900 p-6 flex-col hover:shadow-lg transition-shadow">
          <div className="text-primary bg-primary/20 w-12 h-12 flex items-center justify-center rounded-lg">
            <span className="material-symbols-outlined text-3xl">
              rocket_launch
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold leading-tight">Mission</h2>
            <p className="text-slate-400 text-base font-normal leading-relaxed">
              To deliver innovative, reliable, and scalable software
              solutions that solve real-world problems and empower
              businesses to achieve their full potential.
            </p>
          </div>
        </div>
        <div className="flex flex-1 gap-4 rounded-xl border border-slate-700 bg-slate-900 p-6 flex-col hover:shadow-lg transition-shadow">
          <div className="text-primary bg-primary/20 w-12 h-12 flex items-center justify-center rounded-lg">
            <span className="material-symbols-outlined text-3xl">
              visibility
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold leading-tight">Vision</h2>
            <p className="text-slate-400 text-base font-normal leading-relaxed">
              To be the globally recognized leading software development
              agency known for technical excellence, creative
              problem-solving, and unwavering integrity.
            </p>
          </div>
        </div>
        <div className="flex flex-1 gap-4 rounded-xl border border-slate-700 bg-slate-900 p-6 flex-col hover:shadow-lg transition-shadow">
          <div className="text-primary bg-primary/20 w-12 h-12 flex items-center justify-center rounded-lg">
            <span className="material-symbols-outlined text-3xl">
              stars
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold leading-tight">
              Core Values
            </h2>
            <ul className="text-slate-400 text-base font-normal leading-relaxed list-disc list-inside">
              <li>
                Continuous{" "}
                <strong className="text-primary font-semibold">
                  Innovation
                </strong>
              </li>
              <li>
                Uncompromising{" "}
                <strong className="text-primary font-semibold">
                  Quality
                </strong>
              </li>
              <li>
                Absolute{" "}
                <strong className="text-primary font-semibold">
                  Integrity
                </strong>
              </li>
              <li>
                Seamless{" "}
                <strong className="text-primary font-semibold">
                  Collaboration
                </strong>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Why Work With Us */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 p-4">
        <div className="flex flex-1 gap-4 rounded-xl border border-slate-700 bg-slate-900 p-6 flex-col hover:shadow-lg transition-shadow">
          <div className="text-primary bg-primary/20 w-12 h-12 flex items-center justify-center rounded-lg">
            <span className="material-symbols-outlined text-3xl">
              speed
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold leading-tight">
              Agile Development
            </h2>
            <p className="text-slate-400 text-base font-normal leading-relaxed">
              We iterate rapidly, ensuring your product evolves with
              market feedback. Our sprints are designed for high-velocity
              delivery without sacrificing code quality.
            </p>
          </div>
        </div>
        <div className="flex flex-1 gap-4 rounded-xl border border-slate-700 bg-slate-900 p-6 flex-col hover:shadow-lg transition-shadow">
          <div className="text-primary bg-primary/20 w-12 h-12 flex items-center justify-center rounded-lg">
            <span className="material-symbols-outlined text-3xl">
              psychology
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold leading-tight">
              Lean Methodology
            </h2>
            <p className="text-slate-400 text-base font-normal leading-relaxed">
              We focus on what matters most. By eliminating waste and
              focusing on core value propositions, we help you launch
              faster and scale efficiently.
            </p>
          </div>
        </div>
        <div className="flex flex-1 gap-4 rounded-xl border border-slate-700 bg-slate-900 p-6 flex-col hover:shadow-lg transition-shadow">
          <div className="text-primary bg-primary/20 w-12 h-12 flex items-center justify-center rounded-lg">
            <span className="material-symbols-outlined text-3xl">
              handshake
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold leading-tight">
              Growth Partnership
            </h2>
            <p className="text-slate-400 text-base font-normal leading-relaxed">
              We are more than vendors; we are strategic partners. Your
              success is our primary metric, and we align our technical
              strategy with your business goals.
            </p>
          </div>
        </div>
      </div>

      {/* Meet the Team */}
      <div className="flex flex-col gap-6 pt-8">
        <div className="px-4">
          <h2 className="text-[32px] font-bold leading-tight tracking-[-0.015em] text-primary pb-2">
            Meet the Team
          </h2>
          <p className="text-slate-400 text-base max-w-[600px]">
            The brilliant minds behind our successful projects.
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-8 p-4">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="flex flex-col gap-4 pb-3 group"
            >
              <div
                className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-xl shadow-md overflow-hidden relative"
                style={{
                  backgroundImage: `url('${member.image}')`,
                }}
              >
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a className="text-white hover:text-slate-200" href="#">
                    <span className="material-symbols-outlined text-2xl">
                      mail
                    </span>
                  </a>
                  <a className="text-white hover:text-slate-200" href="#">
                    <span className="material-symbols-outlined text-2xl">
                      link
                    </span>
                  </a>
                </div>
              </div>
              <div>
                <p className="text-lg font-bold leading-normal">
                  {member.name}
                </p>
                <p className="text-primary text-sm font-medium leading-normal uppercase tracking-wider">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
