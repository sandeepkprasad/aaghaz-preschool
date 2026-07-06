"use client";

import { motion } from "framer-motion";

type Props = {
  item: any;
  index: number;
};

export default function PhilosophyCard({ item, index }: Props) {
  const Icon = item.icon;

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
        rotate: index % 2 === 0 ? -1 : 1,
        y: -8,
      }}
      className={`
        rounded-3xl
        p-10
        shadow-sm
        transition-all
        duration-500
        ${item.background}
      `}
    >
      <Icon
        className={`
          mb-6
          h-10
          w-10
          ${item.textColor}
        `}
      />

      <h3
        className={`
          mb-4
          text-2xl
          font-bold
          ${item.textColor}
        `}
      >
        {item.title}
      </h3>

      <p
        className={`
          leading-8
          ${item.descriptionColor || "text-slate-600"}
        `}
      >
        {item.description}
      </p>
    </motion.div>
  );
}
