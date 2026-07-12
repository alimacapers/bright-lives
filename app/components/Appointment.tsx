import { Calendar } from "lucide-react";

export default function Appointment() {
  return (
    <section
      id="appointment"
      className="py-16"
      style={{ backgroundColor: "#f0e6c8" }}
      aria-labelledby="appointment-heading"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="flex items-start gap-5">
            <Calendar size={22} aria-hidden="true" style={{ color: "#1a4731" }} className="mt-1.5 shrink-0" />
            <div>
              <h2
                id="appointment-heading"
                className="font-serif mb-2"
                style={{ color: "#1a4731", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 600 }}
              >
                Start a conversation
              </h2>
              <p
                className="text-sm leading-relaxed max-w-lg"
                style={{ color: "#4a5a3a", fontFamily: "Montserrat, sans-serif", fontWeight: 300 }}
              >
                Call to discuss goals, eligibility, and how non-center-based
                support can fit into everyday community life.
              </p>
            </div>
          </div>
          <a
            href="tel:7038530363"
            className="inline-block shrink-0 px-8 py-3.5 text-xs font-semibold tracking-[0.12em] uppercase text-center transition-all duration-200 hover:brightness-110"
            style={{
              backgroundColor: "#1a4731",
              color: "#f0e6c8",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            Call 703-853-0363
          </a>
        </div>
      </div>
    </section>
  );
}
