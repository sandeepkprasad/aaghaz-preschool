"use client";

import VisionCard from "./VisionCard";

import { visionMission } from "./vision-data";

export default function VisionMission() {
  return (
    <section
      className="
        rounded-[100px]
        bg-stone-50
        px-6
        py-32
      "
    >
      <div
        className="
          mx-auto
          grid
          max-w-7xl
          items-start
          gap-24
          lg:grid-cols-2
        "
      >
        <div className="mt-12">
          <VisionCard item={visionMission[0]} index={0} />
        </div>

        <VisionCard item={visionMission[1]} index={1} />
      </div>
    </section>
  );
}
