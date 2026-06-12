export default function About() {
  const pillars = [
    {
      title: "Real settings, real outcomes",
      body: "We work where life happens — grocery stores, parks, libraries, transit, and workplaces. Outcomes are measured in skills gained and independence built, not hours logged in a building.",
    },
    {
      title: "ISP-driven, always",
      body: "Every activity, goal, and support strategy flows directly from your Individual Support Plan. Your plan is the curriculum — we just make it come alive in the community.",
    },
    {
      title: "Small team, full attention",
      body: "Low caseloads mean every participant gets genuine, personalized attention. We know your name, your goals, your family — and we show up for all of it.",
    },
  ];

  return (
    <section
      id="about"
      className="py-28 bg-white"
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left col: heading + intro */}
          <div>
            <p
              className="text-xs font-semibold tracking-[0.22em] uppercase mb-5"
              style={{ color: "#7ab891", fontFamily: "Montserrat, sans-serif" }}
            >
              Who We Are
            </p>
            <h2
              id="about-heading"
              className="font-serif leading-tight mb-8"
              style={{ color: "#1a4731", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 600 }}
            >
              Community life —{" "}
              <em className="italic" style={{ color: "#4a7a5a" }}>
                not a day room
              </em>
            </h2>
            <p
              className="text-sm leading-relaxed mb-10"
              style={{ color: "#4a7a5a", fontFamily: "Montserrat, sans-serif", fontWeight: 300 }}
            >
              Bright Lives Community Support LLC is a DBHDS-licensed day support
              provider built on one idea: adults with developmental disabilities
              deserve a real life in their real community — not a segregated
              program space.
            </p>

            {/* On-brand geometric illustration */}
            <div
              className="w-full overflow-hidden"
              role="img"
              aria-label="Abstract illustration representing community and connection"
            >
              <svg
                viewBox="0 0 480 260"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full"
                aria-hidden="true"
              >
                <rect width="480" height="260" fill="#f8faf9" />

                {/* Horizontal rule */}
                <line x1="0" y1="130" x2="480" y2="130" stroke="#d4e9db" strokeWidth="1" />

                {/* Large thin circle */}
                <circle cx="240" cy="130" r="100" stroke="#c8e0d0" strokeWidth="1" fill="none" />
                <circle cx="240" cy="130" r="70" stroke="#c8e0d0" strokeWidth="0.5" fill="none" />

                {/* Sun mark — centered, restrained */}
                <g transform="translate(240, 130)">
                  <circle cx="0" cy="0" r="12" fill="#1a4731" opacity="0.18" />
                  <circle cx="0" cy="0" r="5" fill="#1a4731" opacity="0.35" />
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                    <line
                      key={i}
                      x1={Math.cos((angle * Math.PI) / 180) * 16}
                      y1={Math.sin((angle * Math.PI) / 180) * 16}
                      x2={Math.cos((angle * Math.PI) / 180) * 24}
                      y2={Math.sin((angle * Math.PI) / 180) * 24}
                      stroke="#1a4731"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      opacity="0.25"
                    />
                  ))}
                </g>

                {/* Left vertical line */}
                <line x1="80" y1="40" x2="80" y2="220" stroke="#d4e9db" strokeWidth="1" />
                {/* Right vertical line */}
                <line x1="400" y1="40" x2="400" y2="220" stroke="#d4e9db" strokeWidth="1" />

                {/* Small accent dots */}
                <circle cx="80" cy="130" r="3" fill="#7ab891" opacity="0.5" />
                <circle cx="400" cy="130" r="3" fill="#7ab891" opacity="0.5" />
                <circle cx="240" cy="30" r="3" fill="#7ab891" opacity="0.3" />
                <circle cx="240" cy="230" r="3" fill="#7ab891" opacity="0.3" />

                {/* Corner marks */}
                <rect x="20" y="20" width="20" height="1" fill="#a8d4b8" opacity="0.5" />
                <rect x="20" y="20" width="1" height="20" fill="#a8d4b8" opacity="0.5" />
                <rect x="440" y="20" width="20" height="1" fill="#a8d4b8" opacity="0.5" />
                <rect x="459" y="20" width="1" height="20" fill="#a8d4b8" opacity="0.5" />
                <rect x="20" y="239" width="20" height="1" fill="#a8d4b8" opacity="0.5" />
                <rect x="20" y="220" width="1" height="20" fill="#a8d4b8" opacity="0.5" />
                <rect x="440" y="239" width="20" height="1" fill="#a8d4b8" opacity="0.5" />
                <rect x="459" y="220" width="1" height="20" fill="#a8d4b8" opacity="0.5" />

                {/* Label */}
                <text x="240" y="252" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontSize="7" fill="#7ab891" opacity="0.6" letterSpacing="4">
                  BRIGHT LIVES COMMUNITY SUPPORT
                </text>
              </svg>
            </div>
          </div>

          {/* Right col: pillars */}
          <div className="flex flex-col divide-y" style={{ borderColor: "#eef5f0" }}>
            {pillars.map(({ title, body }, i) => (
              <div key={title} className="py-8 first:pt-0">
                <div className="flex items-start gap-6">
                  <span
                    className="text-xs font-semibold tracking-widest mt-1 shrink-0"
                    style={{ color: "#a8d4b8", fontFamily: "Montserrat, sans-serif" }}
                    aria-hidden="true"
                  >
                    0{i + 1}
                  </span>
                  <div>
                    <h3
                      className="font-serif text-xl font-semibold mb-3"
                      style={{ color: "#1a4731" }}
                    >
                      {title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "#4a7a5a", fontFamily: "Montserrat, sans-serif", fontWeight: 300 }}
                    >
                      {body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
