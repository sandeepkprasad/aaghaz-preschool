"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  item: any;
};

export default function FacilityPlaygroundCard({ item }: Props) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="
        group
        overflow-hidden
        rounded-[40px]
        bg-emerald-50
        p-8
      "
    >
      <div className="relative mb-6 h-56 overflow-hidden rounded-3xl">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="
            object-cover
            transition-transform
            duration-700
            group-hover:scale-110
          "
        />
      </div>

      <Icon className="mb-4 h-10 w-10 text-emerald-600" />

      <h3 className="mb-3 text-2xl font-bold text-emerald-700">{item.title}</h3>

      <p className="leading-7 text-slate-600">{item.description}</p>
    </motion.div>
  );
}
