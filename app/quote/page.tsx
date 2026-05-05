import QuoteForm from "./QuoteForm";

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

        <QuoteForm />
      </section>
    </main>
  );
}
