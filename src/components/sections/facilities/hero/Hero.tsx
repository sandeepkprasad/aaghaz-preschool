"use client";

import { motion } from "framer-motion";
import { PencilLine } from "lucide-react";

import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#DAF1F9] px-6 py-28 lg:px-12">
      {/* Decorative Doodle */}

      <motion.div
        animate={{
          rotate: [0, 8, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
          absolute
          -left-12
          -top-10
          hidden
          opacity-10
          md:block
        "
      >
        <PencilLine
          className="
            h-32
            w-32
            text-[#EC2129]
          "
          strokeWidth={1}
        />
      </motion.div>

      <div className="mx-auto max-w-4xl">
        <HeroContent />
      </div>
    </section>
  );
}
