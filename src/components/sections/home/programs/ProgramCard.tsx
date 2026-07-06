"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type Props = {
  program: any;
  index: number;
};

export default function ProgramCard({ program, index }: Props) {
  const Icon = program.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 60,
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
        y: -16,
        scale: 1.02,
      }}
      className={`
        group
        relative
        overflow-hidden
        rounded-[42px]
        p-8
        transition-all
        duration-700
        shadow-xl
        hover:shadow-[0_35px_70px_rgba(0,0,0,.14)]
        ${program.background}
        ${program.featured ? "lg:-translate-y-10" : ""}
      `}
    >
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-14 -top-14 h-48 w-48 rounded-full bg-white/20 blur-sm"
      />

      <div className="mb-12 flex items-start justify-between">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
          <Icon className={`h-9 w-9 ${program.text}`} />
        </div>

        <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold">
          {program.age}
        </span>
      </div>

      <h3 className="mb-4 text-2xl font-bold text-slate-900">
        {program.title}
      </h3>

      <p className="mb-10 leading-8 text-slate-600">{program.description}</p>

      <button
        className={`flex w-full items-center justify-center gap-2 rounded-2xl bg-white py-4 font-semibold transition-all duration-500 hover:scale-[1.03] hover:text-white shadow-md ${program.button} ${program.hover}`}
      >
        Details
        <ArrowRight size={18} />
      </button>
    </motion.div>
  );
}
