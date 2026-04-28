export default function Home() {
  const services = [
    {
      icon: "🖥️",
      title: "Website Development",
      text: "Modern websites that convert visitors.",
      link: "#website-development",
    },
    {
      icon: "📦",
      title: "Web & App Development",
      text: "Custom applications built for performance.",
      link: "#web-app-development",
    },
    {
      icon: "⚙️",
      title: "Business Automation",
      text: "Automate workflows and processes.",
      link: "#business-automation",
    },
    {
      icon: "☁️",
      title: "Hosting & Maintenance",
      text: "Reliable hosting and support.",
      link: "#hosting-maintenance",
    },
  ];

  return (
    <main className="min-h-screen bg-[#050B14] text-white">
      <nav className="sticky top-0 z-50 border-b border-slate-800 bg-[#050B14]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <img
              src="/logo1.png"
              alt="Aldane Systems Logo"
              className="h-12 w-12 object-contain"
            />

            <div>
              <h1 className="text-xl font-bold tracking-wide">ALDANE</h1>
              <p className="text-xs tracking-[0.35em] text-slate-300">
                SYSTEMS
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-8 text-sm md:flex">
            <a className="text-blue-400" href="#">
              Home
            </a>
            <a href="#about">About</a>
            <a href="/services">Services</a>
            <a href="/pricing">Pricing</a>
            <a
              href="/contact"
              className="rounded-lg border border-blue-500 px-4 py-2"
            >
              Contact Us
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2">
        <div>
          <h2 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            We Build Digital Solutions That Move Your Business{" "}
            <span className="text-blue-500">Forward.</span>
          </h2>

          <p className="mb-8 max-w-xl text-slate-300">
            Aldane Systems creates modern websites, powerful applications, and
            smart automation systems designed to drive growth, streamline
            operations, and build a strong, scalable digital presence.
          </p>

          <div className="flex gap-4">
            <a
              href="/contact"
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700"
            >
              Get In Touch →
            </a>

            <a
              href="/services"
              className="rounded-lg border border-slate-500 px-6 py-3 font-semibold hover:border-blue-500"
            >
              View Services
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative flex h-80 w-80 items-center justify-center rounded-full bg-blue-600/10 shadow-[0_0_80px_rgba(37,99,235,0.35)]">
            <img
              src="/logo1.png"
              alt="Aldane Systems Logo"
              className="h-72 w-72 object-contain drop-shadow-[0_0_40px_rgba(59,130,246,0.6)]"
            />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="mx-auto max-w-7xl scroll-mt-24 px-6 py-20"
      >
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              About Aldane Systems
            </p>

            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              Practical software built for real business needs.
            </h2>

            <p className="mb-5 text-slate-300">
              Aldane Systems is a software development company focused on
              helping businesses improve how they operate, communicate, and
              serve customers through modern digital tools.
            </p>

            <p className="mb-5 text-slate-300">
              We build websites, web applications, booking systems, dashboards,
              and automation tools for small and growing businesses that need
              technology to be simple, reliable, and useful.
            </p>

            <p className="text-slate-300">
              Our goal is to build digital systems that support growth, improve
              customer experience, improve efficiency, and make daily business
              operations easier to manage.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-8 shadow-2xl">
            <h3 className="mb-6 text-2xl font-bold">What We Focus On</h3>

            <div className="space-y-5">
              <div>
                <h4 className="font-semibold text-blue-400">
                  Business-First Development
                </h4>
                <p className="text-sm text-slate-400">
                  We build around the business problem first.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-blue-400">
                  Clean Digital Presence
                </h4>
                <p className="text-sm text-slate-400">
                  We help businesses look professional and credible online.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-blue-400">
                  Systems That Save Time
                </h4>
                <p className="text-sm text-slate-400">
                  Tools designed to reduce manual work and improve operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-12 md:grid-cols-4">
        {[
          ["⚡", "Fast & Reliable", "High performance websites built for speed."],
          ["🛡️", "Secure & Scalable", "Built with security in mind."],
          ["📱", "Mobile Friendly", "Perfect on all devices."],
          ["🎧", "Support You Can Trust", "Ongoing support when needed."],
        ].map(([icon, title, text]) => (
          <div key={title} className="rounded-xl bg-slate-900/80 p-6">
            <div className="mb-3 text-3xl">{icon}</div>
            <h3 className="mb-2 font-bold">{title}</h3>
            <p className="text-sm text-slate-400">{text}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
