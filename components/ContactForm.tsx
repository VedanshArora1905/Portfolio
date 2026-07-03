"use client";

import { FormEvent, useRef, useState } from "react";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setShowSuccess(true);
      setIsSubmitting(false);
      formRef.current?.reset();
    }, 1500);
  };

  return (
    <>
      <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
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
        <button
          className="brutal-btn px-8 py-4 text-sm w-full md:w-auto"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Processing..." : "Send Message →"}
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
