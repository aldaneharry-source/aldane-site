export const metadata = {
  title: "Contact | Aldane Systems",
  description:
    "Contact Aldane Systems for websites, applications, automation tools, hosting, maintenance, and software development services.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 text-center">
          <div className="mx-auto mb-4 h-1 w-20 bg-blue-500"></div>

          <h1 className="text-3xl font-bold md:text-5xl">Contact Us</h1>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Ready to build your website or system? Send us a message and we’ll
            get back to you.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-xl font-bold text-blue-400">
              Get In Touch
            </h2>

            <p className="mb-6 text-slate-300">
              Reach out to discuss your project, ask questions, or request a
              quote.
            </p>

            <p className="text-lg font-semibold">Email:</p>

            <a
              href="mailto:inquiry@aldanesystems.com"
              className="text-blue-400 hover:text-blue-300"
            >
              inquiry@aldanesystems.com
            </a>
          </div>

          <form className="space-y-4 rounded-xl border border-slate-800 bg-slate-900/70 p-6">
            <div>
              <label className="mb-1 block text-sm">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-white outline-none focus:border-blue-500"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-white outline-none focus:border-blue-500"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm">Message</label>
              <textarea
                name="message"
                required
                rows={4}
                className="w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-white outline-none focus:border-blue-500"
                placeholder="Tell us about your project..."
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 py-3 font-semibold transition hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
