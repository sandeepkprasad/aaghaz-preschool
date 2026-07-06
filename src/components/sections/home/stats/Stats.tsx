"use client";

import { motion } from "framer-motion";
import { Palette, Shapes } from "lucide-react";

import { stats } from "./stats-data";
import StatCard from "./StatCard";

export default function Stats() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-violet-50/60
        px-6
        py-24
      "
    >
      <div className="mx-auto max-w-7xl">
        {/* Decorative Icons */}

        <motion.div
          animate={{
            rotate: [0, 12, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
          className="
            absolute
            left-10
            top-10
            opacity-10
          "
        >
          <Palette size={90} className="text-orange-400" />
        </motion.div>

        <motion.div
          animate={{
            rotate: [0, -12, 0],
            y: [0, 10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
          }}
          className="
            absolute
            bottom-10
            right-10
            opacity-10
          "
        >
          <Shapes size={90} className="text-emerald-400" />
        </motion.div>

        <div
          className="
            grid
            grid-cols-2
            gap-10
            text-center
            lg:grid-cols-4
          "
        >
          {stats.map((stat, index) => (
            <StatCard key={stat.title} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
