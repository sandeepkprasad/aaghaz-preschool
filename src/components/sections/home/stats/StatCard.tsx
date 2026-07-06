"use client";

import { motion } from "framer-motion";

type Props = {
  stat: {
    number: string;
    title: string;
    color: string;
  };
  index: number;
};

export default function StatCard({ stat, index }: Props) {
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
        duration: 0.7,
        delay: index * 0.15,
      }}
      viewport={{ once: true }}
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      className="space-y-3"
    >
      <h2 className={`text-5xl font-extrabold lg:text-6xl ${stat.color}`}>
        {stat.number}
      </h2>

      <p
        className="
          text-xs
          font-semibold
          uppercase
          italic
          tracking-[0.25em]
          text-slate-600
        "
      >
        {stat.title}
      </p>
    </motion.div>
  );
}
