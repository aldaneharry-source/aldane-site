"use client";

import { useState } from "react";

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      business: formData.get("business"),
      service: formData.get("service"),
      budget: formData.get("budget"),
      timeline: formData.get("timeline"),
      message: formData.get("message"),
      privacyConsent: formData.get("privacyConsent") === "on",
      marketingConsent: formData.get("marketingConsent") === "on",
    };

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        setSubmitted(true);
        form.reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch {
      alert("Network error. Please try again.");
    } finally {
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-3xl border border-blue-500/30 bg-blue-600/10 p-10 text-center shadow-2xl">
        <h2 className="text-3xl font-bold text-white">
          Thank You for Your Submission
        </h2>

        <p className="mt-4 text-slate-300">
          Your quote request has been received. We will review your project
          details and get back to you as soon as possible.
        </p>

        <p className="mt-3 text-sm text-slate-400">
          For urgent matters, email us directly at{" "}
          <span className="text-blue-400">inquiry@aldanesystems.com</span>.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur md:p-10">
      <form onSubmit={handleSubmit} className="grid gap-6">
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

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-200">
            Contact Number
          </label>
          <input
            type="tel"
            name="phone"
            required
            className="w-full rounded-xl border border-white/10 bg-[#0b1020] px-4 py-3 text-white outline-none focus:border-blue-500"
            placeholder="e.g. (123) 456-7890"
          />
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
              <option value="Website Development">Website Development</option>
              <option value="Web & App Development">
                Web & App Development
              </option>
              <option value="Business Automation">Business Automation</option>
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
              communications from Aldane Systems. I understand this is optional.
            </span>
          </label>
        </div>

        <button
          type="submit"
          disabled={sending}
          className="rounded-xl bg-blue-600 px-6 py-4 text-base font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {sending ? "Sending Request..." : "Submit Quote Request"}
        </button>
      </form>
    </div>
  );
}
