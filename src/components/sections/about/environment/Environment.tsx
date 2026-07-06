"use client";

import EnvironmentImages from "./EnvironmentImages";
import EnvironmentContent from "./EnvironmentContent";

export default function Environment() {
  return (
    <section className="px-6 py-32">
      <div
        className="
          mx-auto
          grid
          max-w-7xl
          items-center
          gap-20
          lg:grid-cols-2
        "
      >
        <div className="order-2 lg:order-1">
          <EnvironmentImages />
        </div>

        <div className="order-1 lg:order-2">
          <EnvironmentContent />
        </div>
      </div>
    </section>
  );
}
