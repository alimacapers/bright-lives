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
      className="py-28"
      style={{ backgroundColor: "#f4f8f5" }}
      aria-labelledby="services-heading"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 pb-8 border-b" style={{ borderColor: "#dceae1" }}>
          <div>
            <p
              className="text-xs font-semibold tracking-[0.22em] uppercase mb-4"
              style={{ color: "#7ab891", fontFamily: "Montserrat, sans-serif" }}
            >
              What We Offer
            </p>
            <h2
              id="services-heading"
              className="font-serif"
              style={{ color: "#1a4731", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600 }}
            >
              Day support services
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: "#dceae1" }}>
          {services.map(({ icon: Icon, name, description }) => (
            <article
              key={name}
              className="bg-white p-8 transition-all duration-200 hover:bg-[#f4f8f5] group"
            >
              <Icon
                size={18}
                aria-hidden="true"
                className="mb-5"
                style={{ color: "#7ab891" }}
              />
              <h3
                className="font-serif text-lg font-semibold mb-3"
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
