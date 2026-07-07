"use client";

import { useMemo, useState } from "react";

import FilterChip from "./FilterChip";
import { filters } from "./filter-data";

export default function GalleryFilter() {
  const [activeFilter, setActiveFilter] = useState("All Moments");

  const activeCategory = useMemo(() => activeFilter, [activeFilter]);

  return (
    <section className="px-6 pb-16">
      <div
        className="
          mx-auto
          flex
          max-w-6xl
          flex-wrap
          justify-center
          gap-4
        "
      >
        {filters.map((item, index) => (
          <FilterChip
            key={item.label}
            item={item}
            index={index}
            active={activeCategory === item.label}
            onClick={() => setActiveFilter(item.label)}
          />
        ))}
      </div>
    </section>
  );
}
