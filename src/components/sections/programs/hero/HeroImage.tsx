"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import HeroStatsCard from "./HeroStatsCard";

export default function HeroImage() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 70,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      className="relative"
    >
      {/* Background Blob */}

      <motion.div
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
          absolute
          -left-12
          -top-12
          -z-10
          h-40
          w-40
          rounded-full
          bg-emerald-100/50
          blur-3xl
        "
      />

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="
          absolute
          -bottom-12
          -right-12
          -z-10
          h-60
          w-60
          rounded-full
          bg-orange-100/50
          blur-3xl
        "
      />

      {/* Image */}

      <motion.div
        whileHover={{
          scale: 1.02,
          rotate: -1,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
        }}
        className="relative h-[500px] overflow-hidden rounded-[40px] scrapbook-right"
      >
        <Image
          src="/images/programs/hero.jpg"
          alt="Programs Hero"
          fill
          priority
          className="
            object-cover
            transition-transform
            duration-700
            hover:scale-105
          "
        />
      </motion.div>

      <HeroStatsCard />
    </motion.div>
  );
}
