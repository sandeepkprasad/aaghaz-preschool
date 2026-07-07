"use client";

import RoomsContent from "./RoomsContent";
import RoomsImage from "./RoomsImage";

export default function SpecializedRooms() {
  return (
    <section className="relative overflow-hidden bg-orange-50 py-32">
      {/* Wavy Divider */}

      <div className="absolute left-0 top-0 w-full rotate-180 overflow-hidden leading-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="block h-[60px] w-full"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,
            172-41.86c82.39-16.72,168.19-17.73,
            250.45-.39C823.78,31,906.67,72,
            985.66,92.83c70.05,18.48,
            146.53,26.09,214.34,3V0H0V27.35A600.21,
            600.21,0,0,0,321.39,56.44Z"
            fill="#FFF7ED"
          />
        </svg>
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-24 px-6 lg:grid-cols-2">
        <RoomsImage />

        <RoomsContent />
      </div>
    </section>
  );
}
