"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const MotionLink = motion.create(Link);

export default function EnrollButton() {
  return (
    <MotionLink
      href="/admissions"
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 18,
      }}
      className="
        group
        inline-flex
        items-center
        gap-2
        rounded-full
        bg-[#EC2129]
        px-6
        py-3
        text-sm
        font-semibold
        text-white
        shadow-md
        transition-colors
        duration-300
        hover:bg-[#EC2129]
        hover:shadow-xl
      "
    >
      <span>Enroll Now</span>

      <motion.span
        className="flex items-center"
        animate={{ x: [0, 3, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <ArrowRight size={18} />
      </motion.span>
    </MotionLink>
  );
}
