"use client";

import { motion } from "framer-motion";

export default function HeroStatsCard() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.8,
        y: 30,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      transition={{
        delay: 0.6,
        duration: 0.6,
      }}
      whileHover={{
        scale: 1.05,
        rotate: -2,
      }}
      className="
        absolute
        -bottom-6
        -left-6
        max-w-[220px]
        rounded-2xl
        bg-white
        p-5
        shadow-2xl
        -rotate-2
      "
    >
      <h3 className="text-4xl font-bold text-orange-600">98%</h3>

      <p
        className="
          mt-2
          text-xs
          font-semibold
          uppercase
          tracking-wider
          text-slate-500
        "
      >
        Parent Satisfaction Rate
      </p>
    </motion.div>
  );
}
