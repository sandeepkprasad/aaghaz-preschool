"use client";

import { motion } from "framer-motion";
import { Flower2, Leaf } from "lucide-react";

import GalleryHeader from "./GalleryHeader";
import GalleryGrid from "./GalleryGrid";

export default function Gallery() {
  return (
    <section className="relative overflow-hidden bg-[#FAFAF7] px-6 py-32">
      {/* Background Decorations */}

      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute left-12 top-16 opacity-10"
      >
        <Flower2 size={90} className="text-orange-400" />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute bottom-20 right-16 opacity-10"
      >
        <Leaf size={90} className="text-emerald-500" />
      </motion.div>

      <div className="mx-auto max-w-7xl">
        <GalleryHeader />

        <GalleryGrid />
      </div>
    </section>
  );
}
