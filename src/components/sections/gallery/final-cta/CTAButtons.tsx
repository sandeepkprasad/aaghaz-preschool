"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

const MotionLink = motion.create(Link);

export default function CTAButtons() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <MotionLink
        href="/contact"
        whileHover={{ scale: 1.05, y: -3 }}
        whileTap={{ scale: 0.96 }}
        className="
          inline-flex
          items-center
          gap-2
          rounded-full
          bg-orange-600
          px-10
          py-4
          font-semibold
          text-white
          shadow-xl
        "
      >
        Book a Campus Tour
        <ArrowRight size={18} />
      </MotionLink>

      <MotionLink
        href="/brochure.pdf"
        target="_blank"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        className="
          inline-flex
          items-center
          gap-2
          rounded-full
          border-2
          border-orange-600
          px-10
          py-4
          font-semibold
          text-orange-600
          hover:bg-orange-50
          transition-all
        "
      >
        <Download size={18} />
        Download Brochure
      </MotionLink>
    </div>
  );
}
