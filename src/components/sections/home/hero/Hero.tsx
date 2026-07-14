"use client";

import HeroContent from "./HeroContent";

import HeroImages from "./HeroImages";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#DAF1F9] px-6 py-24 lg:min-h-[920px] lg:px-12">
      

      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-emerald-100/40 blur-3xl" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <HeroContent />

        <HeroImages />
      </div>
    </section>
  );
}
