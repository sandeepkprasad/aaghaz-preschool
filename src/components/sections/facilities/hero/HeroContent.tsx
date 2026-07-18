"use client";

import { motion } from "framer-motion";

import AboutImage from "../../home/about/AboutImage";

export default function HeroContent() {
  return (
    <div
      className="
        relative
        z-10
        flex
        flex-col
        items-center
        gap-16
        lg:flex-row
        lg:items-center
        lg:justify-between
      "
    >
      {/* Left Image */}

      <AboutImage />

      {/* Right Content */}

      <div className="max-w-2xl">
        <motion.h1
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.15,
            duration: 0.7,
          }}
          className="
    text-center
    text-3xl
    font-bold
    leading-tight
    text-slate-900
    lg:text-left
    lg:text-5xl
  "
        >
          <span className="whitespace-nowrap">A Space Designed for</span>
          <br />
          <span className="italic text-[#EC2129]">Natural Discovery</span>
        </motion.h1>

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.35,
          }}
          className="
            mt-8
            text-center
            text-lg
            leading-8
            text-slate-600
            lg:text-left
          "
        >
          Every corner of Aaghaz is crafted following the Montessori philosophy,
          prioritizing safety, accessibility, and the curious spirit of
          childhood.
        </motion.p>
      </div>
    </div>
  );
}
