"use client";

import ProgramHeader from "./ProgramHeader";
import ProgramCard from "./ProgramCard";
import ProgramFeatureCard from "./ProgramFeatureCard";
import { Leaf, Baby } from "lucide-react";
import { motion } from "framer-motion";

import { programs } from "./program-data";

export default function ProgramCards() {
  return (
    <section className="relative overflow-hidden bg-stone-50 px-6 py-32">
      <motion.div
        animate={{
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
    absolute
    right-10
    top-20
    opacity-10
  "
      >
        <Leaf className="h-28 w-28 text-orange-500" />
      </motion.div>

      <motion.div
        animate={{
          rotate: [0, -12, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="
    absolute
    bottom-20
    left-10
    opacity-10
  "
      >
        <Baby className="h-24 w-24 text-emerald-500" />
      </motion.div>

      <div className="mx-auto max-w-7xl">
        <ProgramHeader />

        <div className="grid gap-8 lg:grid-cols-3">
          {programs.map((item, index) =>
            item.featured ? (
              <div
                key={item.title}
                className="
                  rounded-[40px]
                  border-2
                  border-dashed
                  border-orange-300
                  p-12
                  text-center
                  text-slate-400
                "
              >
                <ProgramFeatureCard item={item} />
              </div>
            ) : (
              <ProgramCard key={item.title} item={item} index={index} />
            ),
          )}
        </div>
      </div>
    </section>
  );
}
