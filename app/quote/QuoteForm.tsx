"use client";

import { useState } from "react";

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

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
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch {
      alert("Network error. Please try again.");
    }
  }

  // SUCCESS STATE
  if (submitted) {
    return (
      <div className="rounded-3xl border border-blue-500/30 bg-blue-600/10 p-10 text-center shadow-2xl">
        <h2 className="text-3xl font-bold text-white">
          Thank You for Your Submission
        </h2>

        <p className="mt-4 text-slate-300">
          Your request has been received. We will review your project details
          and get back to you within 24 hours.
        </p>

        <p className="mt-2 text-sm text-slate-400">
          If your request is urgent, you may also contact us directly at{" "}
          <span className="text-blue-400">
            inquiry@aldanesystems.com
          </span>
        </p>
      </div>
    );
  }

  // FORM STATE
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur md:p-10">
      <form onSubmit={handleSubmit} className="grid gap-6">

        {/* KEEP ALL YOUR EXISTING INPUTS EXACTLY AS THEY ARE */}

        <button
          type="submit"
          className="rounded-xl bg-blue-600 px-6 py-4 text-base font-semibold text-white transition hover:bg-blue-500"
        >
          Submit Quote Request
        </button>
      </form>
    </div>
  );
}
