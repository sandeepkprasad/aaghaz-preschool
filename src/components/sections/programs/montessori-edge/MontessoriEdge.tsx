"use client";

import EdgeContent from "./EdgeContent";
import EdgeImages from "./EdgeImages";

export default function MontessoriEdge() {
  return (
    <section className="overflow-hidden px-6 py-32">
      <div
        className="
          mx-auto
          grid
          max-w-7xl
          items-center
          gap-24
          lg:grid-cols-2
        "
      >
        <EdgeImages />

        <EdgeContent />
      </div>
    </section>
  );
}
