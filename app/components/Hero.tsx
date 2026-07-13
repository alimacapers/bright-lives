import Image from "next/image";
import { ArrowDown, ArrowRight, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[96vh] overflow-hidden bg-[#123c2b] pt-16" aria-label="Welcome to Bright Lives">
      <Image
        src="/images/community-market.png"
        alt="Adults enjoying a community farmers market together"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,35,24,.97)_0%,rgba(8,35,24,.88)_34%,rgba(8,35,24,.3)_66%,rgba(8,35,24,.08)_100%)]" />
      <div className="absolute inset-0 hero-grain opacity-20" />

      <div className="relative z-10 mx-auto flex min-h-[calc(96vh-4rem)] max-w-7xl items-center px-6 py-24 sm:px-10 lg:px-16">
        <div className="max-w-2xl">
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[.18em] text-[#d6efde] backdrop-blur-md">
            <MapPin size={13} aria-hidden="true" />
            Alexandria & Northern Virginia
          </div>
          <h1 className="animate-fade-up delay-100 mt-8 font-serif text-[clamp(3.6rem,8vw,7.8rem)] font-semibold leading-[.88] tracking-[-.035em] text-white">
            Life happens
            <span className="mt-2 block italic text-[#f4c76d]">out here.</span>
          </h1>
          <p className="animate-fade-up delay-200 mt-8 max-w-xl text-base font-light leading-8 text-[#d6efde] sm:text-lg">
            Personalized, non-center-based community engagement that helps adults with developmental disabilities build confidence, connection, and a life they choose.
          </p>
          <div className="animate-fade-up delay-300 mt-10 flex flex-wrap gap-4">
            <a href="#contact" className="group inline-flex items-center gap-3 rounded-full bg-[#f4c76d] px-7 py-4 text-sm font-bold text-[#123c2b] shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:bg-white">
              Talk with our team <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#story" className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20">
              See how it works
            </a>
          </div>
          <div className="animate-fade-up delay-400 mt-14 flex flex-wrap gap-x-8 gap-y-3 text-xs font-semibold uppercase tracking-[.14em] text-white/70">
            <span>DBHDS Licensed</span><span>Provider #18771</span><span>HCBS Aligned</span>
          </div>
        </div>
      </div>
      <a href="#about" aria-label="Explore Bright Lives" className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-semibold uppercase tracking-[.2em] text-white/70 md:flex">
        Explore <ArrowDown size={16} className="animate-bounce" />
      </a>
    </section>
  );
}
