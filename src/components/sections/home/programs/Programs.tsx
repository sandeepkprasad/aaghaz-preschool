"use client";

import { motion } from "framer-motion";
import ProgramsHeader from "./ProgramsHeader";
import ProgramCard from "./ProgramCard";

import { programs } from "./programs-data";

export default function Programs() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-32">
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#E8F5F1] blur-3xl opacity-60" />

      <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-[#FFF0E5] blur-3xl opacity-60" />

      <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#F2EBFF] blur-3xl opacity-50" />

      <div className="mx-auto max-w-7xl">
        <ProgramsHeader />

        <div className="grid gap-8 lg:grid-cols-3">
          {programs.map((program, index) => (
            <ProgramCard key={program.title} index={index} program={program} />
          ))}
        </div>
      </div>

      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute left-20 top-44"
      >
        <div className="rounded-full bg-orange-100 p-4 shadow-lg">🌼</div>
      </motion.div>

      <motion.div
        animate={{
          y: [0, 15, 0],
          rotate: [0, 15, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
        className="absolute right-24 bottom-28"
      >
        <div className="rounded-full bg-emerald-100 p-4 shadow-lg">🍃</div>
      </motion.div>
    </section>
  );
}
