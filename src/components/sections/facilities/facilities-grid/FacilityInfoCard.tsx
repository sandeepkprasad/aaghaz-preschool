"use client";

import { motion } from "framer-motion";

type Props = {
  item: any;
};

export default function FacilityInfoCard({ item }: Props) {
  const Icon = item.icon;

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
        duration: 0.8,
      }}
      viewport={{
        once: true,
      }}
      whileHover={{
        y: -8,
      }}
      className="
        flex
        h-full
        flex-col
        justify-between
        overflow-hidden
        rounded-[40px]
        bg-[#EC2129]
        p-8
        text-white
        scrapbook-right
      "
    >
      <div>
        <Icon className="mb-6 h-12 w-12" />

        <h3 className="mb-5 text-3xl font-bold">{item.title}</h3>

        <p className="leading-8 text-orange-100">{item.description}</p>
      </div>

      <div
        className="
          mt-10
          rounded-2xl
          border
          border-white/20
          bg-white/10
          p-5
          backdrop-blur
        "
      >
        <div className="flex items-center gap-3">
          <span className="h-3 w-3 rounded-full bg-red-500 animate-pulse" />

          <span className="font-semibold">Live Stream Active</span>
        </div>
      </div>
    </motion.div>
  );
}
