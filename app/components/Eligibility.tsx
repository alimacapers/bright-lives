import { ClipboardCheck, MessageCircle, Route } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Connect with us",
    body: "Tell us about the person seeking services, their interests, support needs, and the outcomes they want to pursue.",
  },
  {
    icon: ClipboardCheck,
    title: "Review eligibility",
    body: "We review the referral, authorized service, Individual Support Plan, and whether our community-based model is an appropriate fit.",
  },
  {
    icon: Route,
    title: "Build a community plan",
    body: "Together, we shape purposeful activities around ISP goals, personal choice, local opportunities, and the right level of support.",
  },
];

export default function Eligibility() {
  return (
    <section id="eligibility" className="py-28 bg-[#1a4731]" aria-labelledby="eligibility-heading">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid lg:grid-cols-[0.85fr_1.4fr] gap-16 lg:gap-24">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] uppercase mb-5 text-[#7ab891]">
              Getting Started
            </p>
            <h2 id="eligibility-heading" className="font-serif leading-tight text-[#f0e6c8] font-semibold text-[clamp(2rem,4vw,3.5rem)] mb-6">
              Support begins with the right fit
            </h2>
            <p className="text-sm leading-relaxed text-[#a8d4b8] font-light">
              Bright Lives provides non-center-based community engagement. Services are individualized—not a one-size-fits-all program or a day spent inside a facility.
            </p>
          </div>

          <ol className="divide-y divide-[#2d6347] border-y border-[#2d6347]">
            {steps.map(({ icon: Icon, title, body }, index) => (
              <li key={title} className="grid sm:grid-cols-[3rem_1fr] gap-5 py-8">
                <div className="flex sm:flex-col items-center sm:items-start gap-3 text-[#7ab891]">
                  <span className="text-xs font-semibold tracking-widest">0{index + 1}</span>
                  <Icon size={20} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-[#f0e6c8] mb-2">{title}</h3>
                  <p className="text-sm leading-relaxed text-[#a8d4b8] font-light">{body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
