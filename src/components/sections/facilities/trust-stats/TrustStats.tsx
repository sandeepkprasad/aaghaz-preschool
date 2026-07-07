"use client";

import { motion } from "framer-motion";

import StatCard from "./StatCard";
import { stats } from "./stats-data";

export default function TrustStats() {
  return (
    <section className="px-6 py-28">
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
        }}
        viewport={{
          once: true,
        }}
        className="
          relative
          mx-auto
          max-w-6xl
          overflow-hidden
          rounded-[60px]
          bg-orange-50
          px-8
          py-16
          lg:px-20
          lg:py-20
        "
      >
        {/* Decorative Blobs */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
          className="absolute left-8 top-8 text-3xl"
        >
          🌿
        </motion.div>

        <motion.div
          animate={{
            y: [0, 10, 0],
            rotate: [0, 15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute right-10 bottom-10 text-3xl"
        >
          ✨
        </motion.div>

        <div
          className="
            absolute
            -left-20
            -top-20
            h-60
            w-60
            rounded-full
            bg-orange-100/60
            blur-3xl
          "
        />

        <div
          className="
            absolute
            -bottom-20
            -right-20
            h-72
            w-72
            rounded-full
            bg-emerald-100/60
            blur-3xl
          "
        />

        <div className="relative z-10 grid grid-cols-2 gap-10 text-center lg:grid-cols-4">
          {stats.map((item, index) => (
            <StatCard key={item.label} item={item} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
