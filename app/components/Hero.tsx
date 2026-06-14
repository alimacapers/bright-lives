"use client";


export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16"
      style={{ backgroundColor: "#1a4731" }}
      aria-label="Hero section"
    >
      {/* Subtle large concentric circles — background texture */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 pointer-events-none select-none"
        aria-hidden="true"
      >
        <svg width="700" height="700" viewBox="0 0 700 700" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-spin-slow">
          <circle cx="350" cy="350" r="320" stroke="#f0e6c8" strokeWidth="0.5" opacity="0.06" />
          <circle cx="350" cy="350" r="260" stroke="#f0e6c8" strokeWidth="0.5" opacity="0.06" />
          <circle cx="350" cy="350" r="200" stroke="#f0e6c8" strokeWidth="0.5" opacity="0.06" />
          <circle cx="350" cy="350" r="140" stroke="#f0e6c8" strokeWidth="0.5" opacity="0.07" />
          <circle cx="350" cy="350" r="80" stroke="#f0e6c8" strokeWidth="0.5" opacity="0.08" />
          <circle cx="350" cy="350" r="30" fill="#f0e6c8" opacity="0.05" />
          {[0,45,90,135,180,225,270,315].map((angle, i) => (
            <line
              key={i}
              x1={350 + Math.cos(angle * Math.PI / 180) * 84}
              y1={350 + Math.sin(angle * Math.PI / 180) * 84}
              x2={350 + Math.cos(angle * Math.PI / 180) * 320}
              y2={350 + Math.sin(angle * Math.PI / 180) * 320}
              stroke="#f0e6c8"
              strokeWidth="0.5"
              opacity="0.05"
            />
          ))}
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 py-28">
        {/* Eyebrow */}
        <div className="animate-fade-up delay-100 flex items-center gap-3 mb-10">
          <span
            className="block w-8 h-px"
            style={{ backgroundColor: "#4a7a5a" }}
            aria-hidden="true"
          />
          <span
            className="text-xs font-semibold tracking-[0.22em] uppercase"
            style={{ color: "#7ab891", fontFamily: "Montserrat, sans-serif" }}
          >
            DBHDS Licensed · Provider #18771
          </span>
        </div>

        {/* Headline */}
        <h1
          className="animate-fade-up delay-200 font-serif leading-[1.05] mb-8"
          style={{
            color: "#f0e6c8",
            fontSize: "clamp(3rem, 8vw, 7rem)",
            fontWeight: 600,
          }}
        >
          Real community.
          <br />
          Real{" "}
          <em className="italic" style={{ color: "#a8d4b8" }}>
            lives.
          </em>
        </h1>

        {/* Divider */}
        <div
          className="animate-fade-up delay-250 w-16 h-px mb-8"
          style={{ backgroundColor: "#2d6347" }}
          aria-hidden="true"
        />

        {/* Subheading */}
        <p
          className="animate-fade-up delay-300 text-base sm:text-lg max-w-lg leading-relaxed mb-12"
          style={{ color: "#a8d4b8", fontFamily: "Montserrat, sans-serif", fontWeight: 300 }}
        >
          DBHDS-licensed day support for adults with developmental disabilities
          in Alexandria, VA — grounded in community, driven by your individual
          support plan.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up delay-400 flex flex-wrap gap-4 mb-20">
          <a
            href="#cta"
            className="px-8 py-3.5 text-sm font-semibold tracking-wide transition-all duration-200 hover:brightness-110"
            style={{
              backgroundColor: "#f0e6c8",
              color: "#1a4731",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            Get started today
          </a>
          <a
            href="#about"
            className="px-8 py-3.5 text-sm font-semibold tracking-wide border transition-all duration-200 hover:bg-white/10"
            style={{
              borderColor: "#4a7a5a",
              color: "#a8d4b8",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            Learn more
          </a>
        </div>

        {/* Stats row — clean ruled, not cards */}
        <div
          className="animate-fade-up delay-500 border-t pt-8"
          style={{ borderColor: "#2d6347" }}
        >
          <div className="flex flex-wrap gap-12 lg:gap-20">
            {[
              { stat: "100%", label: "ISP-Driven" },
              { stat: "HCBS", label: "Compliant" },
              { stat: "NoVA", label: "Community Based" },
            ].map(({ stat, label }) => (
              <div key={stat}>
                <div
                  className="font-serif mb-1"
                  style={{ color: "#f0e6c8", fontSize: "2rem", fontWeight: 500 }}
                >
                  {stat}
                </div>
                <div
                  className="text-xs font-medium tracking-widest uppercase"
                  style={{ color: "#4a7a5a", fontFamily: "Montserrat, sans-serif" }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
