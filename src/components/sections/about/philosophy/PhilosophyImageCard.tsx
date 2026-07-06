"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  item: any;
  index: number;
};

export default function PhilosophyImageCard({ item, index }: Props) {
  const reverse = item.reverse;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
      }}
      viewport={{
        once: true,
      }}
      whileHover={{
        y: -8,
      }}
      className="
        group
        overflow-hidden
        rounded-3xl
        bg-white
        p-10
        shadow-sm
        transition-all
        duration-500
        hover:shadow-xl
      "
    >
      <div
        className={`
          flex
          flex-col
          items-center
          gap-8
          md:flex-row
          ${reverse ? "md:flex-row-reverse" : ""}
        `}
      >
        {/* Text */}

        <div className="md:w-1/2">
          <h3
            className={`mb-5 text-3xl font-bold transition-all duration-300 group-hover:-translate-y-1 ${item.hover}`}
          >
            {item.title}
          </h3>

          <p className="leading-8 text-slate-600">{item.description}</p>
        </div>

        {/* Image */}

        <motion.div
          whileHover={{
            scale: 1.05,
          }}
          className="
            relative
            h-52
            w-full
            overflow-hidden
            rounded-[24px]
            shadow-lg
            md:w-1/2
          "
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="
              object-cover
              transition-all
              duration-700
              group-hover:scale-110
            "
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
