"use client";

import JourneyStep from "./JourneyStep";
import { journeySteps } from "./journey-data";

export default function JourneyTimeline() {
  return (
    <div className="relative mx-auto max-w-5xl">
      <svg
        className="
          absolute
          left-1/2
          top-0
          hidden
          h-full
          w-full
          -translate-x-1/2
          opacity-20
          md:block
        "
        viewBox="0 0 400 800"
        fill="none"
      >
        <path
          d="M200 0C200 200 50 200 50 400C50 600 350 600 350 800"
          stroke="#8E4E14"
          strokeWidth="4"
          strokeDasharray="8 8"
        />
      </svg>

      <div className="space-y-24">
        {journeySteps.map((step, index) => (
          <JourneyStep key={step.title} step={step} index={index} />
        ))}
      </div>
    </div>
  );
}
