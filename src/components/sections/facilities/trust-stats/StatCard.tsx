"use client";

import { motion } from "framer-motion";

type Props = {
  item: {
    value: string;
    label: string;
  };
  index: number;
};

export default function StatCard({ item, index }: Props) {
  return (
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
        delay: index * 0.15,
        duration: 0.6,
      }}
      viewport={{
        once: true,
      }}
      whileHover={{
        y: -8,
        scale: 1.05,
      }}
      className="space-y-3"
    >
      <h3 className="text-5xl font-bold text-orange-600 lg:text-6xl">
        {item.value}
      </h3>

      <p
        className="
          text-xs
          font-semibold
          uppercase
          tracking-[0.25em]
          text-slate-500
        "
      >
        {item.label}
      </p>
    </motion.div>
  );
}
