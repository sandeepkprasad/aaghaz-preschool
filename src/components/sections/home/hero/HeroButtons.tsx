"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const MotionLink = motion.create(Link);

export default function HeroButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.4,
        duration: 0.6,
      }}
      className="flex flex-wrap gap-5 pt-3"
    >
      <MotionLink
        href="/contact"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="
          inline-flex
          items-center
          gap-2
          rounded-full
          bg-orange-500
          px-8
          py-4
          font-semibold
          text-white
          shadow-xl
        "
      >
        Book a Visit
        <ArrowRight size={18} />
      </MotionLink>

      <MotionLink
        href="/about"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="
          rounded-full
          border-2
          border-emerald-500
          px-8
          py-4
          font-semibold
          text-emerald-600
        "
      >
        Our Method
      </MotionLink>
    </motion.div>
  );
}
