"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPinned, School } from "lucide-react";

import { locationInfo } from "./location-data";

export default function MapOverlay() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.9,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      whileHover={{
        y: -8,
        rotate: 0,
      }}
      className="
        relative
        z-20
        mx-6
        max-w-sm
        rotate-2
        rounded-[32px]
        border-4
        border-[#EC2129]/20
        bg-white
        p-8
        shadow-[0_30px_70px_rgba(0,0,0,.18)]
        transition-all
        duration-500
      "
    >
      {/* Header */}

      <div
        className="
  absolute
  inset-0
  -z-10
  -rotate-2
  translate-x-4
  -translate-y-4
  rounded-[32px]
  border-4
  border-orange-200/40
"
      />

      <div className="mb-6 flex items-center gap-4">
        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            bg-orange-100
          "
        >
          <School
            className="
              h-8
              w-8
              text-[#EC2129]
            "
          />
        </div>

        <h3
          className="
            text-3xl
            font-bold
            text-slate-900
          "
        >
          {locationInfo.title}
        </h3>
      </div>

      {/* Description */}

      <p
        className="
          mb-8
          leading-7
          text-slate-600
        "
      >
        {locationInfo.description}
      </p>

      {/* CTA */}

      <Link
        href={locationInfo.button.href}
        target="_blank"
        rel="noopener noreferrer"
        className="
          flex
          w-full
          items-center
          justify-center
          gap-3
          rounded-2xl
          bg-[#EC2129]
          px-6
          py-4
          font-semibold
          text-white
          shadow-lg
          transition-all
          duration-300
          hover:-translate-y-1
          hover:bg-[#EC2129]
          hover:shadow-xl
          active:translate-y-0
        "
      >
        <MapPinned className="h-5 w-5" />

        {locationInfo.button.title}
      </Link>
    </motion.div>
  );
}
