"use client";

import { motion } from "framer-motion";

type Props = {
  item: any;
  index: number;
};

export default function VisionCard({ item, index }: Props) {
  const Icon = item.icon;

  const Decoration = item.decoration;

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
        duration: 0.8,
        delay: index * 0.2,
      }}
      viewport={{ once: true }}
      whileHover={{
        y: -10,
      }}
      className={`
        relative
        overflow-hidden
        rounded-[60px]
        p-12
        transition-all
        duration-500
        ${item.background}
        ${item.cardShadow}
        ${item.translate}
      `}
    >
      <Icon
        className={`
          mb-8
          h-12
          w-12
          ${item.iconColor}
        `}
      />

      <h2
        className={`
          mb-5
          text-3xl
          font-bold
          ${item.text}
        `}
      >
        {item.title}
      </h2>

      <p
        className={`
          leading-8
          ${item.descriptionColor}
        `}
      >
        {item.description}
      </p>

      <Decoration
        className={`
    absolute
    right-6
    top-6
    h-32
    w-32
    opacity-10
    ${item.decorationColor}
  `}
      />
    </motion.div>
  );
}
