"use client";

import { Leaf } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="
        inline-flex
        items-center
        gap-2
        rounded-full
        bg-emerald-100
        px-5
        py-3
        font-semibold
        text-emerald-700
      "
    >
      <Leaf className="h-5 w-5" fill="currentColor" />

      <span>EST. 2012</span>
    </motion.div>
  );
}
