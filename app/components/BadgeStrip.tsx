export default function BadgeStrip() {
  const badges = [
    "DBHDS Provider #18771",
    "Alexandria VA",
    "Medicaid DD Waiver",
    "7 Days a Week · 9AM–5PM",
  ];

  return (
    <section
      className="py-5 border-y"
      style={{ backgroundColor: "#f0e6c8", borderColor: "#e0d4b0" }}
      aria-label="Credentials and service information"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2">
          {badges.map((badge, i) => (
            <div key={badge} className="flex items-center gap-8">
              <span
                className="text-xs font-semibold tracking-[0.18em] uppercase"
                style={{ color: "#1a4731", fontFamily: "Montserrat, sans-serif" }}
              >
                {badge}
              </span>
              {i < badges.length - 1 && (
                <span
                  className="hidden sm:block text-xs"
                  style={{ color: "#a8d4b8" }}
                  aria-hidden="true"
                >
                  ·
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
