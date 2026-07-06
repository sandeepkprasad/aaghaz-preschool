"use client";

import JourneyHeader from "./JourneyHeader";
import JourneyTimeline from "./JourneyTimeline";

export default function Journey() {
  return (
    <section className="overflow-hidden px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <JourneyHeader />

        <JourneyTimeline />
      </div>
    </section>
  );
}
