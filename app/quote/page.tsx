export const metadata = {
  title: "Request a Quote | Aldane Systems",
  description:
    "Request a custom project quote from Aldane Systems for websites, applications, automation tools, hosting, and maintenance.",
};

export default function QuotePage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Aldane Systems
          </p>

          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Request a Quote
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300">
            Tell us what you need built. We will review your project details and
            provide a clear direction, timeline, and estimated cost.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur md:p-10">
          <form className="grid gap-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full rounded-xl border border-white/10 bg-[#0b1020] px-4 py-3 text-white outline-none focus:border-blue-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-xl border border-white/10 bg-[#0b1020] px-4 py-3 text-white outline-none focus:border-blue-500"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">
                  Business / Project Name
                </label>
                <input
                  type="text"
                  name="business"
                  className="w-full rounded-xl border border-white/10 bg-[#0b1020] px-4 py-3 text-white outline-none focus:border-blue-500"
                  placeholder="Company or project name"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">
                  Service Needed
                </label>
                <select
                  name="service"
                  required
                  className="w-full rounded-xl border border-white/10 bg-[#0b1020] px-4 py-3 text-white outline-none focus:border-blue-500"
                >
                  <option value="">Select a service</option>
                  <option value="Website Development">
                    Website Development
                  </option>
                  <option value="Web & App Development">
                    Web & App Development
                  </option>
                  <option value="Business Automation">
                    Business Automation
                  </option>
                  <option value="Hosting & Maintenance">
                    Hosting & Maintenance
                  </option>
                  <option value="AI / Software Consulting">
                    AI / Software Consulting
                  </option>
                </select>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">
                  Budget Range
                </label>
                <select
                  name="budget"
                  className="w-full rounded-xl border border-white/10 bg-[#0b1020] px-4 py-3 text-white outline-none focus:border-blue-500"
                >
                  <option value="">Select budget range</option>
                  <option value="$500 - $1,000">$500 - $1,000</option>
                  <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                  <option value="$3,000 - $5,000">$3,000 - $5,000</option>
                  <option value="$5,000+">$5,000+</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">
                  Desired Timeline
                </label>
                <select
                  name="timeline"
                  className="w-full rounded-xl border border-white/10 bg-[#0b1020] px-4 py-3 text-white outline-none focus:border-blue-500"
                >
                  <option value="">Select timeline</option>
                  <option value="ASAP">ASAP</option>
                  <option value="2 - 4 weeks">2 - 4 weeks</option>
                  <option value="1 - 2 months">1 - 2 months</option>
                  <option value="Flexible">Flexible</option>
                </select>
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">
                Project Details
              </label>
              <textarea
                name="message"
                required
                rows={6}
                className="w-full rounded-xl border border-white/10 bg-[#0b1020] px-4 py-3 text-white outline-none focus:border-blue-500"
                placeholder="Briefly describe what you need built..."
              />
            </div>

            <div className="space-y-3">
              <label className="flex items-start gap-3 text-sm text-slate-400">
                <input
                  type="checkbox"
                  name="privacyConsent"
                  required
                  className="mt-1 h-4 w-4 accent-blue-600"
                />

                <span>
                  I agree to the{" "}
                  <a
                    href="/privacy"
                    className="text-blue-400 underline hover:text-blue-300"
                  >
                    Privacy Policy
                  </a>{" "}
                  and consent to being contacted by Aldane Systems regarding my
                  quote request.
                </span>
              </label>

              <label className="flex items-start gap-3 text-sm text-slate-400">
                <input
                  type="checkbox"
                  name="marketingConsent"
                  className="mt-1 h-4 w-4 accent-blue-600"
                />

                <span>
                  I agree to receive occasional updates, offers, and marketing
                  communications from Aldane Systems. I understand this is
                  optional.
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="rounded-xl bg-blue-600 px-6 py-4 text-base font-semibold text-white transition hover:bg-blue-500"
            >
              Submit Quote Request
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
