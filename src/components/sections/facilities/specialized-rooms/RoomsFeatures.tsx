"use client";

import { motion } from "framer-motion";

type Props = {
  room: any;
  index: number;
};

export default function RoomsFeature({ room, index }: Props) {
  const Icon = room.icon;

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
        className="
          flex
          h-14
          w-14
          shrink-0
          items-center
          justify-center
          rounded-xl
          bg-orange-100
        "
      >
        <Icon className="h-7 w-7 text-orange-600" />
      </div>

      <div>
        <h3 className="mb-2 text-xl font-bold text-slate-900">{room.title}</h3>

        <p className="leading-7 text-slate-600">{room.description}</p>
      </div>
    </motion.div>
  );
}
