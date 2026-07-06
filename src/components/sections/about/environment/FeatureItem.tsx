"use client";

import { motion } from "framer-motion";

type Props = {
  feature: any;
  index: number;
};

export default function FeatureItem({ feature, index }: Props) {
  const Icon = feature.icon;

  return (
    <motion.li
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
      }}
      viewport={{ once: true }}
      whileHover={{
        x: 6,
      }}
      className="flex items-start gap-6"
    >
      <div
        className={`
          ${feature.bg}
          rounded-full
          p-3
          shrink-0
        `}
      >
        <Icon
          className={`
            h-6
            w-6
            ${feature.color}
          `}
        />
      </div>

      <div>
        <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>

        <p className="leading-8 text-slate-600">{feature.description}</p>
      </div>
    </motion.li>
  );
}
