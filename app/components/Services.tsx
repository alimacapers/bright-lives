"use client";

import {
  Users,
  Home,
  MapPin,
  Briefcase,
  Megaphone,
  Heart,
} from "lucide-react";

const services = [
  {
    icon: Users,
    name: "Social Skills",
    description:
      "Building meaningful relationships, communication strategies, and confidence in community settings through guided, real-world practice.",
  },
  {
    icon: Home,
    name: "Independent Living",
    description:
      "Developing day-to-day skills — cooking, budgeting, home management, and self-care — that support greater independence at home.",
  },
  {
    icon: MapPin,
    name: "Community Participation",
    description:
      "Active engagement in local activities, civic spaces, recreation, and cultural events as a full member of the Alexandria community.",
  },
  {
    icon: Briefcase,
    name: "Pre-Employment",
    description:
      "Resume building, interview preparation, workplace etiquette, and job exploration to prepare for competitive integrated employment.",
  },
  {
    icon: Megaphone,
    name: "Self-Advocacy",
    description:
      "Empowering participants to understand and communicate their rights, make informed decisions, and speak for themselves.",
  },
  {
    icon: Heart,
    name: "Health & Wellness",
    description:
      "Physical activity, nutrition awareness, mental health supports, and healthy lifestyle skills woven into everyday community life.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-28 bg-[#fffaf0]"
      aria-labelledby="services-heading"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="reveal flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <p
              className="text-xs font-semibold tracking-[0.22em] uppercase mb-4"
              style={{ color: "#7ab891", fontFamily: "Montserrat, sans-serif" }}
            >
              Possibilities in motion
            </p>
            <h2
              id="services-heading"
              className="font-serif"
              style={{ color: "#1a4731", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600 }}
            >
              Skills for a fuller life
            </h2>
          </div>
          <p
            className="text-sm leading-relaxed max-w-xs"
            style={{ color: "#4a7a5a", fontFamily: "Montserrat, sans-serif", fontWeight: 300 }}
          >
            Every service is delivered in the community, aligned to your ISP,
            and guided by HCBS settings-rule principles.
          </p>
        </div>

        {/* Service list — refined, not card grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ icon: Icon, name, description }, index) => (
            <article
              key={name}
              className={`reveal reveal-delay-${(index % 3) + 1} bg-white p-8 rounded-3xl border border-[#e7eee9] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#123c2b]/10 group`}
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#dcefe2] transition group-hover:rotate-6 group-hover:bg-[#f4c76d]"><Icon size={20} aria-hidden="true" className="text-[#123c2b]" /></span>
              <h3
                className="font-serif text-2xl font-semibold mb-3 mt-7"
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
