"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function HeroQuote() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.8,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        delay: 0.5,
      }}
      whileHover={{
        rotate: 1,
        scale: 1.04,
      }}
      className="
        absolute
        -bottom-6
        -right-6
        max-w-[220px]
        rounded-2xl
        bg-white
        p-5
        shadow-2xl
        rotate-2
      "
    >
      <Quote
        className="
          mb-3
          h-7
          w-7
          text-emerald-500
        "
      />

      <p
        className="
          text-sm
          font-medium
          leading-6
          text-emerald-700
        "
      >
        "The goal of early childhood education should be to activate the child's
        own natural desire to learn."
      </p>
    </motion.div>
  );
}
