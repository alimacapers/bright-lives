import Image from "next/image";
import { ArrowUpRight, HeartHandshake, Sparkles, Users } from "lucide-react";

export default function CommunityStory() {
  return (
    <section id="story" className="bg-white py-28" aria-labelledby="story-heading">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="mb-14 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl reveal">
            <p className="eyebrow">A day with purpose</p>
            <h2 id="story-heading" className="mt-5 font-serif text-[clamp(2.7rem,5vw,4.8rem)] font-semibold leading-none tracking-[-.025em] text-[#123c2b]">More than an outing.<br/><em className="text-[#e2775d]">A chance to grow.</em></h2>
          </div>
          <p className="max-w-sm text-sm font-light leading-7 text-[#496757]">Every experience connects to a meaningful goal—from communication and navigation to friendship, wellness, and self-advocacy.</p>
        </div>

        <div className="group relative min-h-[580px] overflow-hidden rounded-[2.5rem] reveal">
          <Image src="/images/community-garden.png" alt="Adults volunteering together in a community garden" fill sizes="100vw" className="object-cover transition duration-1000 group-hover:scale-[1.03]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#082318]/90 via-[#082318]/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 grid gap-5 p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-xl text-white">
              <span className="inline-flex rounded-full bg-white/15 px-4 py-2 text-[10px] font-semibold uppercase tracking-[.18em] backdrop-blur">Community volunteering</span>
              <h3 className="mt-5 font-serif text-4xl font-semibold sm:text-5xl">Belonging grows when we contribute.</h3>
            </div>
            <a href="#services" className="grid h-14 w-14 place-items-center rounded-full bg-[#f4c76d] text-[#123c2b] transition hover:rotate-12 hover:bg-white" aria-label="Explore services"><ArrowUpRight /></a>
          </div>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {[
            { icon: Users, title: "Connection", copy: "Practice communication and build relationships through shared community experiences." },
            { icon: Sparkles, title: "Confidence", copy: "Turn everyday moments into opportunities to make decisions and try new skills." },
            { icon: HeartHandshake, title: "Contribution", copy: "Discover valued roles through volunteering, civic life, and local partnerships." },
          ].map(({icon: Icon, title, copy}, i) => (
            <article key={title} className={`reveal reveal-delay-${i + 1} rounded-3xl bg-[#f2f7f3] p-8 transition duration-300 hover:-translate-y-2 hover:bg-[#dcefe2]`}>
              <Icon size={23} className="text-[#e2775d]" />
              <h3 className="mt-6 font-serif text-2xl font-semibold text-[#123c2b]">{title}</h3>
              <p className="mt-3 text-sm font-light leading-7 text-[#496757]">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
