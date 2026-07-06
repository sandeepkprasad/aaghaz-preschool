"use client";

import AboutContent from "./AboutContent";
import AboutImage from "./AboutImage";

export default function About() {
  return (
    <section className="relative overflow-hidden bg-[#DDF5EA] py-28">
      <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-white/40 blur-3xl" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-orange-100/40 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2 lg:px-8">
        <AboutImage />

        <AboutContent />
      </div>
    </section>
  );
}
