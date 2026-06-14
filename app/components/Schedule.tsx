"use client";

import { useEffect, useRef, useState } from "react";

const timeSlots = [
  {
    time: "9:00 AM",
    name: "Morning Arrival & Community Check-In",
    description:
      "Participants arrive, review the day's goals, and connect with peers and staff before heading into the community.",
  },
  {
    time: "10:00 AM",
    name: "ISP Skill Building",
    description:
      "Structured activities targeting individual ISP goals — social skills practice, independent living tasks, or pre-employment exercises.",
  },
  {
    time: "12:00 PM",
    name: "Community Lunch Outing",
    description:
      "Lunch in a community setting — restaurants, markets, or parks — practicing social skills, money management, and community navigation.",
  },
  {
    time: "2:00 PM",
    name: "Afternoon Community Activity",
    description:
      "Group or individual community participation — volunteering, recreation, cultural events, or workplace exploration trips.",
  },
  {
    time: "4:00 PM",
    name: "Reflection & Goal Review",
    description:
      "Wrap-up session reviewing progress toward ISP goals, celebrating wins, and preparing for tomorrow with staff and peers.",
  },
];

export default function Schedule() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="schedule"
      className="py-28 bg-white"
      aria-labelledby="schedule-heading"
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="mb-16 pb-8 border-b" style={{ borderColor: "#eef5f0" }}>
          <p
            className="text-xs font-semibold tracking-[0.22em] uppercase mb-4"
            style={{ color: "#7ab891", fontFamily: "Montserrat, sans-serif" }}
          >
            A Typical Day
          </p>
          <h2
            id="schedule-heading"
            className="font-serif"
            style={{ color: "#1a4731", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600 }}
          >
            7 Days a Week, 9AM–5PM
          </h2>
          <p
            className="mt-4 text-sm leading-relaxed max-w-md"
            style={{ color: "#4a7a5a", fontFamily: "Montserrat, sans-serif", fontWeight: 300 }}
          >
            No two days look the same — but every day is purposeful,
            community-based, and tied to your ISP goals.
          </p>
        </div>

        {/* Timeline */}
        <div ref={containerRef} className="relative">
          {/* Vertical rule */}
          <div
            className="absolute left-[4.5rem] sm:left-20 top-0 bottom-0 w-px"
            style={{ backgroundColor: "#eef5f0" }}
            aria-hidden="true"
          />

          <ol className="space-y-0">
            {timeSlots.map(({ time, name, description }, idx) => (
              <li
                key={time}
                className={`relative flex gap-8 sm:gap-12 pb-12 last:pb-0 ${
                  visible ? `slide-in slide-in-delay-${idx + 1}` : "opacity-0"
                }`}
              >
                {/* Time label + dot */}
                <div className="shrink-0 w-16 sm:w-20 text-right relative" aria-label={time}>
                  <span
                    className="text-xs font-semibold tabular-nums"
                    style={{ color: "#7ab891", fontFamily: "Montserrat, sans-serif" }}
                  >
                    {time}
                  </span>
                  {/* Small dot on the line */}
                  <div
                    className="absolute right-[-5px] top-[7px] w-2.5 h-2.5 rounded-full border-2 bg-white"
                    style={{ borderColor: "#7ab891" }}
                    aria-hidden="true"
                  />
                </div>

                {/* Content */}
                <div className="pt-0.5 pb-2 pl-4">
                  <h3
                    className="font-serif text-xl font-semibold mb-2"
                    style={{ color: "#1a4731" }}
                  >
                    {name}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#4a7a5a", fontFamily: "Montserrat, sans-serif", fontWeight: 300 }}
                  >
                    {description}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          {/* End marker */}
          <div className="flex gap-8 sm:gap-12 mt-12 items-center">
            <div className="shrink-0 w-16 sm:w-20 text-right relative">
              <span
                className="text-xs font-semibold"
                style={{ color: "#4a7a5a", fontFamily: "Montserrat, sans-serif" }}
              >
                5:00 PM
              </span>
              <div
                className="absolute right-[-5px] top-[7px] w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: "#7ab891" }}
                aria-hidden="true"
              />
            </div>
            <span
              className="pl-4 font-serif text-lg italic"
              style={{ color: "#a8d4b8" }}
            >
              See you tomorrow
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
