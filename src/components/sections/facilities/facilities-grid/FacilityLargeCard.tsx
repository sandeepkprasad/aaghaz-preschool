"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  item: any;
};

export default function FacilityLargeCard({ item }: Props) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -40,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      viewport={{
        once: true,
      }}
      whileHover={{
        rotate: 0,
      }}
      className="
        group
        relative
        overflow-hidden
        scrapbook-left
      "
    >
      <div className="relative h-[400px]">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/70
            via-black/20
            to-transparent
          "
        />

        <div
          className="
            absolute
            bottom-0
            left-0
            p-8
            text-white
          "
        >
          <Icon
            className="
              mb-4
              h-10
              w-10
              text-emerald-300
            "
          />

          <h3 className="mb-2 text-3xl font-bold">{item.title}</h3>

          <p className="max-w-md leading-7 text-white/90">{item.description}</p>
        </div>
      </div>
    </motion.div>
  );
}
