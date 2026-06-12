import { Phone, Mail, Globe } from "lucide-react";

export default function CTA() {
  return (
    <section
      id="cta"
      className="relative py-28 overflow-hidden"
      style={{ backgroundColor: "#1a4731" }}
      aria-labelledby="cta-heading"
    >
      {/* Subtle background grid */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#ffffff" strokeWidth="0.3" opacity="0.05" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="max-w-xl">
          <p
            className="text-xs font-semibold tracking-[0.22em] uppercase mb-6"
            style={{ color: "#7ab891", fontFamily: "Montserrat, sans-serif" }}
          >
            Get In Touch
          </p>
          <h2
            id="cta-heading"
            className="font-serif leading-tight mb-6"
            style={{ color: "#f0e6c8", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 600 }}
          >
            Ready to get started?
          </h2>
          <p
            className="text-sm leading-relaxed mb-12"
            style={{ color: "#7ab891", fontFamily: "Montserrat, sans-serif", fontWeight: 300 }}
          >
            Reach out to our team. We&apos;ll walk you through the enrollment
            process, answer questions about eligibility, and help you understand
            how Bright Lives can support your goals.
          </p>
        </div>

        {/* Contact items */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-6 mb-12">
          <a
            href="tel:7038530363"
            className="flex items-center gap-3 group"
            aria-label="Call us at 703-853-0363"
          >
            <Phone
              size={14}
              aria-hidden="true"
              style={{ color: "#7ab891" }}
            />
            <span
              className="text-sm font-medium transition-colors duration-200 group-hover:text-[#f0e6c8]"
              style={{ color: "#a8d4b8", fontFamily: "Montserrat, sans-serif" }}
            >
              703-853-0363
            </span>
          </a>

          <span style={{ color: "#2d6347" }} className="hidden sm:block">·</span>

          <a
            href="mailto:admin@brightlivesllc.com"
            className="flex items-center gap-3 group"
            aria-label="Email us at admin@brightlivesllc.com"
          >
            <Mail
              size={14}
              aria-hidden="true"
              style={{ color: "#7ab891" }}
            />
            <span
              className="text-sm font-medium transition-colors duration-200 group-hover:text-[#f0e6c8]"
              style={{ color: "#a8d4b8", fontFamily: "Montserrat, sans-serif" }}
            >
              admin@brightlivesllc.com
            </span>
          </a>

          <span style={{ color: "#2d6347" }} className="hidden sm:block">·</span>

          <a
            href="https://brightlivesllc.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group"
            aria-label="Visit our website at brightlivesllc.com (opens in new tab)"
          >
            <Globe
              size={14}
              aria-hidden="true"
              style={{ color: "#7ab891" }}
            />
            <span
              className="text-sm font-medium transition-colors duration-200 group-hover:text-[#f0e6c8]"
              style={{ color: "#a8d4b8", fontFamily: "Montserrat, sans-serif" }}
            >
              brightlivesllc.com
            </span>
          </a>
        </div>

        <a
          href="mailto:admin@brightlivesllc.com"
          className="inline-block px-8 py-3.5 text-xs font-semibold tracking-[0.12em] uppercase transition-all duration-200 hover:brightness-110"
          style={{
            backgroundColor: "#f0e6c8",
            color: "#1a4731",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          Send us a message
        </a>
      </div>
    </section>
  );
}
