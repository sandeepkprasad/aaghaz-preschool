"use client";

import { motion } from "framer-motion";

import HeroButtons from "./HeroButtons";

export default function HeroContent() {
  return (
    <div
      className="
        mx-auto
        flex
        max-w-4xl
        flex-col
        items-center
        text-center
      "
    >
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
          bg-white/40
          px-5
          py-2
          text-sm
          font-semibold
          text-orange-700
          backdrop-blur-md
        "
      >
        Limited Seats Available for 2024–25
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
          mb-6
          text-5xl
          font-bold
          leading-tight
          text-slate-900
          lg:text-7xl
        "
      >
        Begin Your Child's
        <br />
        <span className="text-orange-600">Journey of Discovery</span>
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
          duration: 0.7,
        }}
        className="
          mb-10
          max-w-2xl
          text-lg
          leading-8
          text-slate-600
        "
      >
        Join the Aaghaz family where we nurture curiosity through a premium
        Montessori-inspired curriculum designed for holistic development.
      </motion.p>

      <HeroButtons />
    </div>
  );
}
