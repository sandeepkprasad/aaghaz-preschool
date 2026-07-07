"use client";

import { motion } from "framer-motion";

type Props = {
  item: {
    label: string;
    color: string;
  };

  index: number;

  active: boolean;

  onClick: () => void;
};

export default function FilterChip({ item, index, active, onClick }: Props) {
  const theme = {
    orange: "hover:border-orange-500 hover:text-orange-600",

    emerald: "hover:border-emerald-500 hover:text-emerald-600",

    violet: "hover:border-violet-500 hover:text-violet-600",
  };

  return (
    <motion.button
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: index * 0.08,
      }}
      viewport={{
        once: true,
      }}
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.97,
      }}
      onClick={onClick}
      className={
        active
          ? `
          rounded-full
          bg-orange-600
          px-6
          py-3
          text-sm
          font-semibold
          text-white
          shadow-lg
          `
          : `
          rounded-full
          border-2
          border-slate-200
          bg-white
          px-6
          py-3
          text-sm
          font-semibold
          text-slate-600
          transition-all
          ${theme[item.color as keyof typeof theme]}
          `
      }
    >
      {item.label}
    </motion.button>
  );
}
