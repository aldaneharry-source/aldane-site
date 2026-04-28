export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050B14] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.22),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.14),transparent_35%)]">
        <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-indigo-600/20 blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:44px_44px]"></div>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              Software Development • Websites • Automation
            </p>

            <h2 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
              We Build Websites, Apps, and Automation Systems for{" "}
              <span className="text-blue-500">Growing Businesses.</span>
            </h2>

            <p className="mb-8 max-w-xl text-lg leading-8 text-slate-300">
              Aldane Systems helps businesses launch professional websites,
              custom web applications, and automation tools that save time,
              improve customer experience, and support growth.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/quote"
                className="rounded-lg bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-700"
              >
                Request a Quote →
              </a>

              <a
                href="/services"
                className="rounded-lg border border-slate-500 px-6 py-3 font-semibold transition hover:border-blue-500 hover:bg-blue-600/10"
              >
                View Services
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative flex h-80 w-80 items-center justify-center rounded-full border border-blue-500/20 bg-blue-600/10 shadow-[0_0_90px_rgba(37,99,235,0.38)]">
              <div className="absolute inset-6 rounded-full border border-blue-400/10"></div>
              <div className="absolute inset-12 rounded-full border border-blue-400/10"></div>

              <img
                src="/logo1.png"
                alt="Aldane Systems Logo"
                className="relative z-10 h-72 w-72 object-contain drop-shadow-[0_0_40px_rgba(59,130,246,0.65)]"
              />
            </div>
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
          <div
            key={title}
            className="rounded-xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl"
          >
            <div className="mb-3 text-3xl">{icon}</div>
            <h3 className="mb-2 font-bold">{title}</h3>
            <p className="text-sm text-slate-400">{text}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
