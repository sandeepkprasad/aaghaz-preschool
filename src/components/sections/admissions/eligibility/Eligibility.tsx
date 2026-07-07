"use client";

import { motion } from "framer-motion";

import EligibilityCard from "./EligibilityCard";
import { eligibilityPrograms } from "./eligibility-data";

export default function Eligibility() {
  return (
    <section className="relative overflow-hidden px-6 py-28">
      {/* Background Blob */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          rotate: [0, 8, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="
          absolute
          -left-40
          top-20
          -z-10
          h-[450px]
          w-[450px]
          rounded-full
          bg-orange-100/40
          blur-[120px]
        "
      />

      <motion.div
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
        }}
        className="
          absolute
          -right-40
          bottom-0
          -z-10
          h-[500px]
          w-[500px]
          rounded-full
          bg-emerald-100/40
          blur-[120px]
        "
      />

      {/* Floating Decorations */}

      <motion.div
        animate={{
          y: [0, -12, 0],
          rotate: [0, 12, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute left-12 top-28"
      >
        <div className="rounded-full bg-orange-100 p-4 shadow-xl">🌼</div>
      </motion.div>

      <motion.div
        animate={{
          y: [0, 15, 0],
          rotate: [0, -12, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute right-12 bottom-28"
      >
        <div className="rounded-full bg-emerald-100 p-4 shadow-xl">🍃</div>
      </motion.div>

      {/* Heading */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto mb-16 max-w-3xl text-center"
      >
        <h2 className="mb-4 text-5xl font-bold text-orange-600">
          Program Eligibility
        </h2>

        <p className="text-lg leading-8 text-slate-600">
          Finding the right fit for your little learner's age and stage.
        </p>
      </motion.div>

      {/* Cards */}

      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
        {eligibilityPrograms.map((item, index) => (
          <EligibilityCard key={item.title} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}
