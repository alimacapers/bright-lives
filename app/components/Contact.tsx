"use client";

import { useState } from "react";

/*
  MESSAGE FORM SETUP (one-time, free):
  1. Go to https://formspree.io and create a free account.
  2. Create a new form — it gives you a URL like https://formspree.io/f/abcd1234
  3. Paste that URL below, replacing YOUR_FORM_ID.
  Until then, the form falls back to opening the visitor's email app.

  MAP: the iframe below shows Alexandria, VA. To pin your exact address,
  go to Google Maps → search your address → Share → Embed a map → copy the
  src URL from the snippet and replace the iframe src.
*/
const FORMSPREE_URL = "https://formspree.io/f/YOUR_FORM_ID";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const labelStyle = {
    color: "#4a7a5a",
    fontFamily: "Montserrat, sans-serif",
  };
  const inputClass =
    "w-full px-4 py-3 text-sm bg-white border outline-none transition-colors duration-200 focus:border-[#1a4731]";
  const inputStyle = {
    borderColor: "#dceae1",
    color: "#1a4731",
    fontFamily: "Montserrat, sans-serif",
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Fallback to email app if Formspree isn't configured yet
    if (FORMSPREE_URL.includes("YOUR_FORM_ID")) {
      const body = encodeURIComponent(
        `Name: ${data.get("name")}\nPhone: ${data.get("phone")}\n\n${data.get("message")}`
      );
      window.location.href = `mailto:admin@brightlivesllc.com?subject=Website inquiry&body=${body}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="py-28"
      style={{ backgroundColor: "#f4f8f5" }}
      aria-labelledby="contact-heading"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div
          className="mb-16 pb-8 border-b"
          style={{ borderColor: "#dceae1" }}
        >
          <p
            className="text-xs font-semibold tracking-[0.22em] uppercase mb-4"
            style={{ color: "#7ab891", fontFamily: "Montserrat, sans-serif" }}
          >
            Send Us a Message
          </p>
          <h2
            id="contact-heading"
            className="font-serif"
            style={{ color: "#1a4731", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600 }}
          >
            We&apos;d love to hear from you
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <form onSubmit={handleSubmit} aria-label="Contact form">
            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-semibold tracking-[0.1em] uppercase mb-2" style={labelStyle}>
                  Name
                </label>
                <input id="contact-name" name="name" type="text" required className={inputClass} style={inputStyle} />
              </div>
              <div>
                <label htmlFor="contact-phone" className="block text-xs font-semibold tracking-[0.1em] uppercase mb-2" style={labelStyle}>
                  Phone
                </label>
                <input id="contact-phone" name="phone" type="tel" className={inputClass} style={inputStyle} />
              </div>
            </div>
            <div className="mb-5">
              <label htmlFor="contact-email" className="block text-xs font-semibold tracking-[0.1em] uppercase mb-2" style={labelStyle}>
                Email
              </label>
              <input id="contact-email" name="email" type="email" required className={inputClass} style={inputStyle} />
            </div>
            <div className="mb-8">
              <label htmlFor="contact-message" className="block text-xs font-semibold tracking-[0.1em] uppercase mb-2" style={labelStyle}>
                Message
              </label>
              <textarea id="contact-message" name="message" rows={5} required className={inputClass} style={inputStyle} />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="px-8 py-3.5 text-xs font-semibold tracking-[0.12em] uppercase transition-all duration-200 hover:brightness-110 disabled:opacity-60"
              style={{
                backgroundColor: "#1a4731",
                color: "#f0e6c8",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              {status === "sending" ? "Sending…" : "Submit"}
            </button>

            {status === "sent" && (
              <p role="status" className="mt-4 text-sm" style={{ color: "#1a4731", fontFamily: "Montserrat, sans-serif" }}>
                Thank you — your message has been sent. We&apos;ll be in touch soon.
              </p>
            )}
            {status === "error" && (
              <p role="alert" className="mt-4 text-sm" style={{ color: "#8a2b2b", fontFamily: "Montserrat, sans-serif" }}>
                Something went wrong. Please call or email us directly.
              </p>
            )}
          </form>

          {/* Map + details */}
          <div className="flex flex-col">
            <iframe
              title="Bright Lives Community Support location — Alexandria, VA"
              src="https://www.google.com/maps?q=Alexandria,+VA&output=embed"
              className="w-full flex-1 min-h-[320px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <p
              className="mt-4 text-sm leading-relaxed"
              style={{ color: "#4a7a5a", fontFamily: "Montserrat, sans-serif", fontWeight: 300 }}
            >
              Serving Alexandria and Northern Virginia ·{" "}
              <a href="tel:7038530363" className="font-medium underline" style={{ color: "#1a4731" }}>
                703-853-0363
              </a>{" "}
              ·{" "}
              <a href="mailto:admin@brightlivesllc.com" className="font-medium underline" style={{ color: "#1a4731" }}>
                admin@brightlivesllc.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
