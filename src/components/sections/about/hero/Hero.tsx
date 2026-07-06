"use client";

import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-28 lg:px-12">
      {/* Background Blur */}

      <div
        className="
          absolute
          -left-40
          top-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-orange-100/40
          blur-3xl
        "
      />

      <div
        className="
          absolute
          bottom-0
          right-0
          h-[450px]
          w-[450px]
          rounded-full
          bg-emerald-100/40
          blur-3xl
        "
      />

      <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">
        <HeroContent />

        <HeroImage />
      </div>
    </section>
  );
}
