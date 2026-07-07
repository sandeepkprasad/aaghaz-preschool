"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  item: any;
};

export default function FacilityWideCard({ item }: Props) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 50,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      whileHover={{
        rotate: 0,
      }}
      className="
        group
        overflow-hidden
        scrapbook-left
        bg-stone-50
      "
    >
      <div className="grid h-full md:grid-cols-2">
        {/* Left */}

        <div className="p-10">
          <Icon className="mb-5 h-10 w-10 text-orange-600" />

          <h3 className="mb-4 text-3xl font-bold text-orange-700">
            {item.title}
          </h3>

          <p className="leading-7 text-slate-600">{item.description}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            {item.tags.map((tag: string) => (
              <span
                key={tag}
                className="
                  rounded-full
                  border
                  border-orange-200
                  bg-white
                  px-4
                  py-2
                  text-sm
                  font-medium
                  text-orange-700
                "
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Image */}

        <div className="relative min-h-[320px]">
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
        </div>
      </div>
    </motion.div>
  );
}
