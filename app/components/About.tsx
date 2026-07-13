import Image from "next/image";
import { Check } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="overflow-hidden bg-[#fffaf0] py-28" aria-labelledby="about-heading">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 sm:px-10 lg:grid-cols-2 lg:px-16">
        <div className="relative reveal">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-2xl shadow-[#123c2b]/15">
            <Image src="/images/transit-planning.png" alt="A participant leading the planning of a community transit trip" fill sizes="(min-width: 1024px) 45vw, 90vw" className="object-cover" />
          </div>
          <div className="absolute -bottom-8 -right-4 max-w-[15rem] rounded-3xl bg-[#f4c76d] p-6 shadow-xl sm:right-[-2rem]">
            <p className="font-serif text-2xl font-semibold leading-tight text-[#123c2b]">Choice leads the way.</p>
            <p className="mt-2 text-xs leading-5 text-[#365c48]">Every outing begins with personal goals, interests, and voice.</p>
          </div>
          <div className="absolute -left-10 -top-10 -z-0 h-40 w-40 rounded-full border-[28px] border-[#e2775d]/20" />
        </div>

        <div className="reveal lg:pl-8">
          <p className="eyebrow">Not a building. A bigger life.</p>
          <h2 id="about-heading" className="mt-5 font-serif text-[clamp(2.7rem,5vw,4.8rem)] font-semibold leading-[.98] tracking-[-.025em] text-[#123c2b]">
            Community is not where we visit. <em className="text-[#e2775d]">It&apos;s where we belong.</em>
          </h2>
          <p className="mt-7 text-base font-light leading-8 text-[#496757]">
            Bright Lives supports adults with developmental disabilities in the places where everyday life actually happens—parks, libraries, shops, volunteer sites, transit, and neighborhood events.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {["Individualized to each ISP", "Small groups and real attention", "Skills practiced in real settings", "Connection built through shared interests"].map((item) => (
              <div key={item} className="flex items-start gap-3 text-sm font-medium text-[#254d39]">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#dcefe2]"><Check size={14} /></span>{item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
