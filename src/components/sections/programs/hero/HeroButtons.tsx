"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

const MotionLink = motion.create(Link);

export default function HeroButtons() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.45,
      }}
      className="flex flex-wrap gap-5 pt-2"
    >
      <MotionLink
        href="/programs"
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{
          scale: 0.98,
        }}
        className="
          inline-flex
          items-center
          gap-2
          rounded-full
          bg-orange-600
          px-8
          py-4
          font-semibold
          text-white
          shadow-xl
        "
      >
        Explore Curriculums
        <ArrowRight size={18} />
      </MotionLink>

      <MotionLink
        href="/brochure.pdf"
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{
          scale: 0.98,
        }}
        className="
          inline-flex
          items-center
          gap-2
          rounded-full
          border-2
          border-emerald-600
          px-8
          py-4
          font-semibold
          text-emerald-600
          transition-all
          hover:bg-emerald-50
        "
      >
        <Download size={18} />
        Download Brochure
      </MotionLink>
    </motion.div>
  );
}
