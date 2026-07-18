"use client";

import { motion } from "framer-motion";
import { Leaf, Palette, BookOpen } from "lucide-react";

import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <header className="relative overflow-hidden bg-[#DAF1F9] px-6 pb-16 pt-32 lg:px-12">
      {/* Floating Leaf */}

      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="
          absolute
          right-[10%]
          top-20
          hidden
          md:block
        "
      >
        <Leaf
          className="
            h-14
            w-14
            text-emerald-400/20
          "
        />
      </motion.div>

      {/* Floating Palette */}

      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-10
          left-[5%]
          hidden
          md:block
        "
      >
        <Palette
          className="
            h-12
            w-12
            text-orange-400/20
          "
        />
      </motion.div>

      {/* Floating Book */}

      <motion.div
        animate={{
          y: [0, -12, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
          absolute
          left-[15%]
          top-40
          hidden
          md:block
        "
      >
        <BookOpen
          className="
            h-10
            w-10
            text-violet-400/20
          "
        />
      </motion.div>

      <div className="mx-auto max-w-4xl">
        <HeroContent />
      </div>
    </header>
  );
}
