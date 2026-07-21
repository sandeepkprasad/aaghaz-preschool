"use client";

import { motion } from "framer-motion";

import GalleryCard from "./GalleryCard";
//import GalleryPolaroid from "./GalleryPolaroid";
import { gallery } from "./gallery-data";

export default function GalleryGrid() {
  return (
    <section className="relative overflow-hidden px-6 pb-32">
      {/* Large Background Blob */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          rotate: [0, 8, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="
          absolute
          -right-40
          top-40
          -z-10
          h-[650px]
          w-[650px]
          rounded-full
          bg-orange-100/30
          blur-[120px]
        "
      />

      <motion.div
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
        }}
        className="
          absolute
          -left-40
          bottom-0
          -z-10
          h-[500px]
          w-[500px]
          rounded-full
          bg-emerald-100/30
          blur-[120px]
        "
      />

      {/* Floating Decoration */}

      <motion.div
        animate={{
          y: [0, -12, 0],
          rotate: [0, 12, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="
          absolute
          left-12
          top-24
        "
      >
        <div className="rounded-full bg-orange-100 p-4 shadow-xl">🌼</div>
      </motion.div>

      <motion.div
        animate={{
          y: [0, 15, 0],
          rotate: [0, -15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
          absolute
          right-12
          bottom-24
        "
      >
        <div className="rounded-full bg-emerald-100 p-4 shadow-xl">🍃</div>
      </motion.div>

      <div className="mx-auto max-w-7xl">
        {/* Masonry */}

        <div
          className="
            columns-1
            gap-8
            space-y-0
            md:columns-2
            xl:columns-3
          "
        >
          {gallery.map((item, index) => (
            <GalleryCard key={item.title} item={item} index={index} />
          ))}
        </div>

        {/* Bottom Scrapbook */}

        {/*  <GalleryPolaroid /> */}
      </div>
    </section>
  );
}
