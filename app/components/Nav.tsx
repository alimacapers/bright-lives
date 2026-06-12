"use client";

import { useState, useEffect } from "react";
import SunMark from "./SunMark";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
      style={{ backgroundColor: "#1a4731" }}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3" aria-label="Bright Lives — home">
            <SunMark size={28} color="#f0e6c8" aria-hidden={true} />
            <span className="flex flex-col leading-tight">
              <span
                className="font-serif text-xl font-semibold tracking-wide"
                style={{ color: "#f0e6c8" }}
              >
                Bright{" "}
                <em className="italic" style={{ color: "#f0e6c8" }}>
                  Lives
                </em>
              </span>
              <span
                className="font-sans text-[9px] font-semibold tracking-[0.18em] uppercase"
                style={{ color: "#7ab891" }}
              >
                Community Support
              </span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {["About", "Services", "Schedule"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-xs font-semibold tracking-[0.18em] uppercase transition-colors duration-200"
                style={{ color: "#7ab891", fontFamily: "Montserrat, sans-serif" }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "#f0e6c8")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "#7ab891")
                }
              >
                {link}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <a
              href="#cta"
              className="px-5 py-2.5 text-xs font-semibold tracking-[0.1em] uppercase transition-all duration-200 hover:brightness-110"
              style={{
                backgroundColor: "#f0e6c8",
                color: "#1a4731",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Get started
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-5 h-px transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
              style={{ backgroundColor: "#f0e6c8" }}
            />
            <span
              className={`block w-5 h-px transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
              style={{ backgroundColor: "#f0e6c8" }}
            />
            <span
              className={`block w-5 h-px transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
              style={{ backgroundColor: "#f0e6c8" }}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t px-6 py-8 flex flex-col gap-6"
          style={{ backgroundColor: "#1a4731", borderColor: "#2d6347" }}
        >
          {["About", "Services", "Schedule"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-xs font-semibold tracking-[0.18em] uppercase"
              style={{ color: "#7ab891", fontFamily: "Montserrat, sans-serif" }}
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="#cta"
            className="mt-2 text-center px-5 py-3 text-xs font-semibold tracking-[0.1em] uppercase"
            style={{ backgroundColor: "#f0e6c8", color: "#1a4731", fontFamily: "Montserrat, sans-serif" }}
            onClick={() => setMenuOpen(false)}
          >
            Get started
          </a>
        </div>
      )}
    </nav>
  );
}
