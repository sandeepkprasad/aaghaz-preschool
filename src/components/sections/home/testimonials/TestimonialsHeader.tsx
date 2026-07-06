"use client";

import { motion } from "framer-motion";

export default function TestimonialsHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <h2 className="mb-6 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
        Voices of Our <span className="text-emerald-600">Aaghaz Family</span>
      </h2>

      <p className="max-w-md text-lg leading-8 text-slate-600">
        See what parents have to say about their children's growth and happiness
        with us.
      </p>

      <div className="mt-10 flex gap-2">
        <span className="h-1 w-12 rounded-full bg-orange-500" />
        <span className="h-1 w-4 rounded-full bg-orange-200" />
        <span className="h-1 w-4 rounded-full bg-orange-200" />
      </div>
    </motion.div>
  );
}
