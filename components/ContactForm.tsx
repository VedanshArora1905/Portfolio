"use client";

import { FormEvent, useRef, useState } from "react";

const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    if (!ACCESS_KEY) {
      setError("Contact form is not configured. Add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in Vercel.");
      setIsSubmitting(false);
      return;
    }

    const formData = new FormData(e.currentTarget);
    const payload = {
      access_key: ACCESS_KEY,
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      subject: String(formData.get("subject") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
      botcheck: false,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const raw = await response.text();
      let data: { success?: boolean; message?: string } | null = null;
      if (raw) {
        try {
          data = JSON.parse(raw);
        } catch {
          throw new Error("Unexpected response from email service.");
        }
      }

      if (!response.ok || !data?.success) {
        throw new Error(
          data?.message ??
            "Failed to send message. Check Web3Forms domain settings for vedansharora.vercel.app."
        );
      }

      setShowSuccess(true);
      formRef.current?.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
        <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="brutal-label" htmlFor="name">
              Name
            </label>
            <input
              className="brutal-input"
              id="name"
              name="name"
              placeholder="JOHN DOE"
              type="text"
              required
            />
          </div>
          <div>
            <label className="brutal-label" htmlFor="email">
              Email
            </label>
            <input
              className="brutal-input"
              id="email"
              name="email"
              placeholder="john@example.com"
              type="email"
              required
            />
          </div>
        </div>
        <div>
          <label className="brutal-label" htmlFor="subject">
            Subject
          </label>
          <input
            className="brutal-input"
            id="subject"
            name="subject"
            placeholder="NEW PROJECT"
            type="text"
            required
          />
        </div>
        <div>
          <label className="brutal-label" htmlFor="message">
            Message
          </label>
          <textarea
            className="brutal-input resize-none"
            id="message"
            name="message"
            placeholder="Tell me about your vision..."
            rows={5}
            required
          />
        </div>

        {error && (
          <p className="font-mono text-xs text-red-700 border-4 border-red-700 bg-red-50 p-3">
            {error}
          </p>
        )}

        <button
          className="brutal-btn px-8 py-4 text-sm w-full md:w-auto"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message →"}
        </button>
      </form>

      <div
        className={`fixed inset-0 z-[100] flex items-center justify-center bg-brutal-black/90 transition-opacity duration-300 ${
          showSuccess ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!showSuccess}
      >
        <div className="brutal-panel p-10 max-w-md mx-6 text-center bg-brutal-yellow">
          <p className="text-4xl mb-6">✓</p>
          <h2 className="font-headline-xl uppercase mb-4">Message Received</h2>
          <p className="font-mono text-sm mb-8">
            Vedansh usually responds within 24 hours.
          </p>
          <button
            type="button"
            className="brutal-btn px-8 py-3 text-xs"
            onClick={() => setShowSuccess(false)}
          >
            Close →
          </button>
        </div>
      </div>
    </>
  );
}
