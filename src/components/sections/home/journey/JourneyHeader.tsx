"use client";

import { motion } from "framer-motion";

export default function JourneyHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="mb-24 text-center"
    >
      <h2 className="text-4xl font-bold text-slate-900 lg:text-5xl">
        The Aaghaz Journey
      </h2>

      <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-orange-300" />
    </motion.div>
  );
}
