"use client";

import Image from "next/image";

import MapOverlay from "./MapOverlay";
import FloatingDoodles from "./FloatingDoodles";

import { locationInfo } from "./location-data";

export default function LocationSection() {
  return (
    <section
      className="
        relative
        mt-32
        h-[600px]
        overflow-hidden
      "
    >
      {/* Top Curve */}

      <div className="absolute top-0 left-0 z-30 w-full rotate-180 overflow-hidden leading-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block h-[70px] w-full"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,
      172-41.86,82.39-16.72,168.19-17.73,
      250.45-.39C823.78,31,906.67,72,
      985.66,92.83c70.05,18.48,
      146.53,26.09,214.34,3V0H0V27.35
      A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="white"
          />
        </svg>
      </div>

      <div
        className="
          relative
          flex
          h-full
          items-center
          justify-center
          overflow-hidden
          bg-slate-100
        "
      >
        <Image
          src={locationInfo.image}
          alt="Aaghaz Preschool Map"
          fill
          sizes="100vw"
          className="
            object-cover
            opacity-70
            grayscale-[20%]
          "
        />

        <div className="relative z-20">
          <MapOverlay />
        </div>

        <FloatingDoodles />
      </div>
    </section>
  );
}
