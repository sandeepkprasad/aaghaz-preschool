"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

const MotionLink = motion.create(Link);

export default function CTAButtons() {
  return (
    <div className="flex flex-col justify-center gap-5 md:flex-row">
      <MotionLink
        href="/contact"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
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
          text-orange-700
          shadow-xl
          transition-all
        "
      >
        Schedule a Campus Tour
        <ArrowRight size={20} />
      </MotionLink>

      <MotionLink
        href="/brochure.pdf"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className="
          inline-flex
          items-center
          justify-center
          gap-2
          rounded-full
          border-2
          border-white
          px-10
          py-4
          text-lg
          font-semibold
          text-white
          transition-all
          hover:bg-white/10
        "
      >
        <Download size={20} />
        Download Brochure
      </MotionLink>
    </div>
  );
}
