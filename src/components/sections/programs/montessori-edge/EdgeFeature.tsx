"use client";

import { motion } from "framer-motion";

type Props = {
  feature: any;
  index: number;
};

export default function EdgeFeature({ feature, index }: Props) {
  const Icon = feature.icon;

  const theme = {
    orange: {
      bg: "bg-orange-100",
      text: "text-orange-600",
    },

    emerald: {
      bg: "bg-emerald-100",
      text: "text-emerald-600",
    },

    violet: {
      bg: "bg-violet-100",
      text: "text-violet-600",
    },
  };

  const color = theme[feature.color as keyof typeof theme];

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 40,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        delay: index * 0.15,
      }}
      viewport={{
        once: true,
      }}
      whileHover={{
        x: 6,
      }}
      className="flex gap-5"
    >
      <div
        className={`
          ${color.bg}
          flex
          h-14
          w-14
          shrink-0
          items-center
          justify-center
          rounded-xl
        `}
      >
        <Icon
          className={`
            h-7
            w-7
            ${color.text}
          `}
        />
      </div>

      <div>
        <h3
          className={`
            mb-2
            text-xl
            font-bold
            ${color.text}
          `}
        >
          {feature.title}
        </h3>

        <p className="leading-7 text-slate-600">{feature.description}</p>
      </div>
    </motion.div>
  );
}
