"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  image: {
    image: string;
    alt: string;
    rotation: string;
  };
  index: number;
};

export default function GalleryItem({ image, index }: Props) {
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
        delay: index * 0.12,
        duration: 0.7,
      }}
      viewport={{ once: true }}
      whileHover={{
        y: -8,
      }}
      className={`
        group
        relative
        mb-8
        cursor-pointer
        overflow-hidden
        rounded-[40px]
        ${image.rotation}
      `}
    >
      <Image
        src={image.image}
        alt={image.alt}
        width={800}
        height={900}
        className="
          h-auto
          w-full
          object-cover
          transition-all
          duration-700
          group-hover:scale-110
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/40
          via-transparent
          to-transparent
          opacity-0
          transition-all
          duration-500
          group-hover:opacity-100
        "
      />
    </motion.div>
  );
}
