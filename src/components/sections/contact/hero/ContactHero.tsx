"use client";

//import { motion } from "framer-motion";
import HeroContent from "./HeroContent";
import FloatingCards from "./FloatingCards";

export default function ContactHero() {
  return (
    <section
      className="
    relative
    overflow-hidden
    bg-[#DAF1F9]
    px-margin-mobile
    md:px-margin-desktop
    pt-36
    md:pt-40
    pb-24
    mb-section-gap
  "
    >
      {/* Background Blob */}

      {/* <motion.div
        animate={{
          scale: [1, 1.08, 1],
          x: [0, 20, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
        }}
        className="
    absolute
    left-1/4
    top-0
    h-64
    w-64
    rounded-full
    bg-orange-100/50
    blur-[90px]
  "
      />

      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          x: [0, -25, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
        }}
        className="
    absolute
    bottom-0
    right-1/4
    h-96
    w-96
    rounded-full
    bg-emerald-100/50
    blur-[120px]
  "
      /> */}

      <HeroContent />

      <FloatingCards />
    </section>
  );
}
