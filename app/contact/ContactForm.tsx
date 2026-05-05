"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      privacyConsent: formData.get("privacyConsent") === "on",
      marketingConsent: formData.get("marketingConsent") === "on",
    };

    try {
      const res = await fetch("/api/contact", {
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
    }
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-blue-500/30 bg-blue-600/10 p-8 text-center shadow-2xl">
        <h2 className="text-2xl font-bold">Thank You for Contacting Us</h2>

        <p className="mt-4 text-slate-300">
          Your message has been received. We will review your inquiry and get
          back to you as soon as possible.
        </p>

        <p className="mt-3 text-sm text-slate-400">
          For urgent matters, email us directly at{" "}
          <span className="text-blue-400">inquiry@aldanesystems.com</span>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-xl border border-slate-800 bg-slate-900/70 p-6">
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

      <div className="space-y-3 pt-2">
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
            inquiry.
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
        className="w-full rounded-lg bg-blue-600 py-3 font-semibold transition hover:bg-blue-700"
      >
        Send Message
      </button>
    </form>
  );
}
