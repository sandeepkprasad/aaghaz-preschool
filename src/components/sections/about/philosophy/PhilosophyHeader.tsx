"use client";

import { motion } from "framer-motion";

export default function PhilosophyHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="mx-auto mb-20 max-w-3xl text-center"
    >
      <h2 className="text-4xl font-bold lg:text-5xl">The Montessori Way</h2>

      <p className="mt-6 text-lg leading-8 text-slate-600">
        Our curriculum is built on the four pillars of the Montessori
        philosophy, adapted for the modern world.
      </p>
    </motion.div>
  );
}
