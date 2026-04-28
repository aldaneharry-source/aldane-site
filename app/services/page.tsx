export const metadata = {
  title: "Services | Aldane Systems",
  description:
    "Explore Aldane Systems services including website development, web and app development, business automation, hosting, and maintenance.",
};

export default function ServicesPage() {
  const services = [
    {
      icon: "🖥️",
      title: "Website Development",
      text: "Modern websites that help businesses look credible and convert visitors.",
      link: "#website-development",
    },
    {
      icon: "📦",
      title: "Web & App Development",
      text: "Custom applications built to manage users, data, bookings, and workflows.",
      link: "#web-app-development",
    },
    {
      icon: "⚙️",
      title: "Business Automation",
      text: "Automation systems that reduce manual work and improve response time.",
      link: "#business-automation",
    },
    {
      icon: "☁️",
      title: "Hosting & Maintenance",
      text: "Reliable hosting, updates, support, and ongoing maintenance.",
      link: "#hosting-maintenance",
    },
  ];

  return (
    <main className="min-h-screen bg-[#050B14] text-white">
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 text-center">
          <div className="mx-auto mb-4 h-1 w-20 bg-blue-500"></div>

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Aldane Systems
          </p>

          <h1 className="text-3xl font-bold md:text-5xl">Our Services</h1>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            We provide practical digital solutions that help businesses build a
            stronger online presence, improve operations, and scale with better
            systems.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl"
            >
              <div className="mb-5 text-4xl">{service.icon}</div>

              <h2 className="mb-3 text-lg font-bold">{service.title}</h2>

              <p className="mb-5 text-sm text-slate-400">{service.text}</p>

              <a
                href={service.link}
                className="text-sm font-semibold text-blue-400 hover:text-blue-300"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Service Details
          </p>

          <h2 className="text-3xl font-bold">
            What We Can Build For Your Business
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Each service is built around practical business outcomes: stronger
            visibility, better systems, smoother operations, and reliable
            support.
          </p>
        </div>

        <div className="space-y-10">
          <ServiceBlock
            id="website-development"
            title="Website Development"
            description="We create modern, responsive websites that help businesses look professional, communicate clearly, and turn visitors into leads or customers."
            included={[
              "Homepage design",
              "About and services pages",
              "Contact forms",
              "Mobile responsive layout",
              "Basic SEO structure",
            ]}
            bestFor={[
              "Small businesses",
              "Hotels and rentals",
              "Service providers",
              "Shops and local brands",
            ]}
            outcome="A clean digital presence that builds trust, explains your services, and makes it easier for customers to contact you."
          />

          <ServiceBlock
            id="web-app-development"
            title="Web & App Development"
            description="We build custom web and mobile applications for businesses that need more than a standard website. These systems help organize data, manage users, and support daily operations."
            included={[
              "Customer dashboards",
              "Admin panels",
              "Booking systems",
              "Business portals",
              "Database-connected apps",
            ]}
            bestFor={[
              "Growing businesses",
              "Booking-based services",
              "Internal operations",
              "Businesses needing custom tools",
            ]}
            outcome="A practical system that helps your business manage information, customers, bookings, or internal workflows more efficiently."
          />

          <ServiceBlock
            id="business-automation"
            title="Business Automation"
            description="We help businesses reduce repetitive manual work by creating automated workflows for communication, bookings, forms, customer follow-up, and internal processes."
            included={[
              "Automated email replies",
              "Booking confirmations",
              "Form-to-email workflows",
              "Customer data collection",
              "Internal task notifications",
            ]}
            bestFor={[
              "Businesses using manual follow-up",
              "Service-based companies",
              "Rental and hospitality businesses",
              "Teams losing time on repeated tasks",
            ]}
            outcome="Less manual work, fewer missed opportunities, faster customer response, and smoother day-to-day operations."
          />

          <ServiceBlock
            id="hosting-maintenance"
            title="Hosting & Maintenance"
            description="We provide website hosting and ongoing maintenance so businesses can keep their digital systems secure, updated, and running smoothly without managing the technical side themselves."
            included={[
              "Website hosting setup",
              "Domain connection support",
              "Basic updates",
              "Bug fixes",
              "Performance checks",
            ]}
            bestFor={[
              "Businesses without technical staff",
              "Clients needing ongoing support",
              "Websites that need regular updates",
              "Businesses that want peace of mind",
            ]}
            outcome="A reliable website that stays online, stays updated, and keeps working properly after launch."
          />
        </div>
      </section>
    </main>
  );
}

function ServiceBlock({
  id,
  title,
  description,
  included,
  bestFor,
  outcome,
}: {
  id: string;
  title: string;
  description: string;
  included: string[];
  bestFor: string[];
  outcome: string;
}) {
  return (
    <div
      id={id}
      className="scroll-mt-28 rounded-2xl border border-slate-800 bg-slate-900/70 p-8 shadow-2xl"
    >
      <h3 className="mb-4 text-2xl font-bold text-blue-400">{title}</h3>

      <p className="mb-6 text-slate-300">{description}</p>

      <div className="grid gap-6 md:grid-cols-3">
        <div>
          <h4 className="mb-2 font-semibold">What’s Included</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            {included.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-2 font-semibold">Best For</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            {bestFor.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-2 font-semibold">Business Outcome</h4>
          <p className="text-sm text-slate-400">{outcome}</p>
        </div>
      </div>

      <div className="mt-8">
        <a
          href="/quote"
          className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-700"
        >
          Request Quote
        </a>
      </div>
    </div>
  );
}
