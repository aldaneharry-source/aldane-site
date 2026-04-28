export const metadata = {
  title: "Pricing | Aldane Systems",
  description:
    "Explore pricing for websites, applications, and custom software solutions built by Aldane Systems.",
};

export default function PricingPage() {
  const plans = [
    {
      name: "Starter Website",
      price: "From $500",
      description:
        "For small businesses that need a clean, professional website.",
      features: [
        "One-page business website",
        "Mobile responsive design",
        "Basic contact section",
        "Business email link",
        "Basic SEO structure",
      ],
    },
    {
      name: "Business Website Plus",
      price: "From $1,200",
      description:
        "For businesses that need more pages, stronger structure, and lead capture.",
      features: [
        "Multi-section or multi-page website",
        "Services and About sections",
        "Contact form setup",
        "Domain connection support",
        "Basic analytics setup",
      ],
    },
    {
      name: "Custom Web/App System",
      price: "Custom Quote",
      description:
        "For booking systems, dashboards, portals, and business automation tools.",
      features: [
        "Custom web application",
        "Dashboard or admin panel",
        "Booking or form workflows",
        "Database integration",
        "Hosting and maintenance options",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 text-center">
          <div className="mx-auto mb-4 h-1 w-20 bg-blue-500"></div>

          <h1 className="text-3xl font-bold md:text-5xl">Pricing</h1>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Simple starting prices for businesses that need a professional
            digital presence. Final pricing depends on project scope.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-8 shadow-2xl"
            >
              <h2 className="mb-3 text-2xl font-bold">{plan.name}</h2>

              <p className="mb-5 text-slate-400">{plan.description}</p>

              <p className="mb-6 text-3xl font-bold text-blue-400">
                {plan.price}
              </p>

              <ul className="mb-8 space-y-3 text-sm text-slate-300">
                {plan.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>

              <a
                href="/quote"
                className="block rounded-lg bg-blue-600 px-6 py-3 text-center font-semibold transition hover:bg-blue-700"
              >
                Request Quote
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">
          Hosting and maintenance are available as monthly add-ons.
        </p>
      </section>
    </main>
  );
}
