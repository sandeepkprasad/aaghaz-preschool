"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  item: any;
  index: number;
};

export default function GalleryCard({ item, index }: Props) {
  const Icon = item.icon;

  const aspect = {
    auto: "",
    portrait: "aspect-[3/4]",
    square: "aspect-square",
    video: "aspect-video",
  };

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
      viewport={{
        once: true,
      }}
      transition={{
        delay: index * 0.12,
      }}
      whileHover={{
        y: -8,
      }}
      className={`
        break-inside-avoid
        mb-8
        group
        ${
          item.rotate === "left"
            ? "-rotate-2"
            : item.rotate === "right"
              ? "rotate-2"
              : ""
        }
      `}
    >
      <div
        className="
          overflow-hidden
          rounded-3xl
          bg-white
          p-4
          shadow-lg
          transition-all
          duration-500
          group-hover:shadow-2xl
        "
      >
        <div
          className={`
            relative
            overflow-hidden
            rounded-2xl
            ${aspect[item.ratio]}
          `}
        >
          <Image
            src={item.image}
            alt={item.title}
            width={700}
            height={700}
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-700
              group-hover:scale-110
            "
          />
        </div>

        <div className="mt-5">
          <div className="flex items-start justify-between">
            <div>
              <p
                className="
                  mb-1
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-orange-600
                "
              >
                {item.category}
              </p>

              <h3
                className="
                  text-xl
                  font-bold
                  text-slate-900
                "
              >
                {item.title}
              </h3>
            </div>

            {Icon && (
              <Icon
                className="
                  h-6
                  w-6
                  text-slate-300
                "
              />
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
