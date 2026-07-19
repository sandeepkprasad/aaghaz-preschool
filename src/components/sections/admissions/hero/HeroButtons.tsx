"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";

const MotionLink = motion.create(Link);

export default function HeroButtons() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.4,
        duration: 0.6,
      }}
      className="
        flex
        flex-wrap
        justify-center
        gap-4
      "
    >
      <MotionLink
        href="/contact"
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{
          scale: 0.97,
        }}
        className="
          inline-flex
          items-center
          gap-2
          rounded-full
          bg-[#EC2129]
          px-8
          py-4
          font-semibold
          text-white
          shadow-xl
        "
      >
        Connect With Us
        <ArrowRight size={18} />
      </MotionLink>

      <MotionLink
        href="#process"
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{
          scale: 0.97,
        }}
        className="
          inline-flex
          items-center
          gap-2
          rounded-full
          border-2
          border-[#EC2129]/30
          bg-white
          px-8
          py-4
          font-semibold
          text-[#EC2129]
          transition-all
          hover:bg-orange-50
        "
      >
        <FileText size={18} />
        View Process
      </MotionLink>
    </motion.div>
  );
}
