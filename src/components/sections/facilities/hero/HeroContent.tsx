"use client";

import { motion } from "framer-motion";

export default function HeroContent() {
  return (
    <div className="relative z-10 text-center">
      {/* Badge */}

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="
          mb-6
          inline-flex
          rounded-full
          bg-emerald-100
          px-5
          py-2
          text-sm
          font-semibold
          uppercase
          tracking-wider
          text-emerald-700
        "
      >
        OUR ENVIRONMENT
      </motion.div>

      {/* Heading */}

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
          text-5xl
          font-bold
          leading-tight
          text-slate-900
          lg:text-7xl
        "
      >
        A Space Designed
        <br />
        for
        <span className="italic text-emerald-600"> Natural Discovery</span>
      </motion.h1>

      {/* Description */}

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
          mx-auto
          mt-8
          max-w-3xl
          text-lg
          leading-8
          text-slate-600
        "
      >
        Every corner of Aaghaz is crafted following the Montessori philosophy,
        prioritizing safety, accessibility, and the curious spirit of childhood.
      </motion.p>
    </div>
  );
}
