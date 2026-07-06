"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const MotionLink = motion.create(Link);

export default function CTAButtons() {
  return (
    <div className="flex flex-col justify-center gap-5 sm:flex-row">
      <MotionLink
        href="/contact"
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{
          scale: 0.98,
        }}
        className="
          inline-flex
          items-center
          justify-center
          gap-2
          rounded-full
          bg-white
          px-10
          py-4
          text-lg
          font-semibold
          text-[#8D4B17]
          shadow-lg
          transition-all
        "
      >
        Schedule a Tour
        <ArrowRight size={20} />
      </MotionLink>

      <MotionLink
        href="/admissions"
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{
          scale: 0.98,
        }}
        className="
          rounded-full
          border-2
          border-white/40
          px-10
          py-4
          text-lg
          font-semibold
          text-white
          backdrop-blur
          transition-all
          hover:bg-white/10
        "
      >
        Contact Admissions
      </MotionLink>
    </div>
  );
}
