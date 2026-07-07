"use client";

import { motion } from "framer-motion";

import HeroButtons from "./HeroButtons";

export default function HeroContent() {
  return (
    <div className="space-y-8">
      {/* Badge */}

      <motion.span
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
          inline-flex
          rounded-full
          bg-emerald-100
          px-5
          py-2
          text-sm
          font-semibold
          text-emerald-700
        "
      >
        Tailored Learning Journeys
      </motion.span>

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
        Nurturing curiosity
        <br />
        from their very
        <br />
        first step.
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
          delay: 0.3,
        }}
        className="
          max-w-xl
          text-lg
          leading-8
          text-slate-600
        "
      >
        Our Montessori-inspired programs are designed to empower children with
        independence, confidence, and a lifelong love for discovery.
      </motion.p>

      <HeroButtons />
    </div>
  );
}
