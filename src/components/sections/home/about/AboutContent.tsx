"use client";

import { motion } from "framer-motion";
import AboutFeatures from "./AboutFeatures";

export default function AboutContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="space-y-6"
    >
      <span className="tracking-[0.25em] uppercase text-sm font-semibold text-emerald-700">
        The Montessori Method
      </span>

      <h2 className="text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
        Nurturing Young Minds Through{" "}
        <span className="italic underline decoration-orange-400 decoration-4 underline-offset-8 underline-offset-8">
          Child-Led
        </span>{" "}
        Discovery
      </h2>

      <p className="max-w-xl text-lg leading-8 text-slate-600">
        At Aaghaz, we believe every child is a unique seed. Our environment is
        carefully prepared to support the natural development of independence,
        focus, and a lifelong love for learning.
      </p>

      <AboutFeatures />
    </motion.div>
  );
}
