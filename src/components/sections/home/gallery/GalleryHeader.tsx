"use client";

import { motion } from "framer-motion";

export default function GalleryHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="mb-20 text-center"
    >
      <h2 className="text-4xl font-bold text-slate-900 lg:text-5xl">
        Snapshots of Joy
      </h2>
    </motion.div>
  );
}
