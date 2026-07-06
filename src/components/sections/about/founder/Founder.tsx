"use client";

import FounderContent from "./FounderContent";
import FounderImage from "./FounderImage";

export default function Founder() {
  return (
    <section className="overflow-hidden px-6 py-32">
      <div
        className="
          mx-auto
          grid
          max-w-7xl
          items-center
          gap-20
          lg:grid-cols-3
        "
      >
        <div className="lg:col-span-1">
          <FounderImage />
        </div>

        <div className="lg:col-span-2">
          <FounderContent />
        </div>
      </div>
    </section>
  );
}
