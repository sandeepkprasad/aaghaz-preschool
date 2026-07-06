"use client";

import { motion } from "framer-motion";

export default function ProgramsHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mx-auto mb-20 max-w-2xl text-center"
    >
      <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
        Our Tailored Programs
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-600">
        Carefully curated experiences designed for every developmental
        milestone.
      </p>
    </motion.div>
  );
}
