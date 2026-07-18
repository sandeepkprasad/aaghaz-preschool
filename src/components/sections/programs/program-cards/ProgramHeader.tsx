"use client";

import { motion } from "framer-motion";

export default function ProgramHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="mb-16 text-center"
    >
      <h2 className="text-5xl font-bold text-[#EC2129]">
        Discover Our Programs
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
        A curated range of programs for every developmental milestone.
      </p>
    </motion.div>
  );
}
