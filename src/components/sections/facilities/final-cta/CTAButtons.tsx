"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

const MotionLink = motion.create(Link);

export default function CTAButtons() {
  return (
    <div className="flex flex-col justify-center gap-4 md:flex-row">
      <MotionLink
        href="/contact"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="
          inline-flex
          items-center
          justify-center
          gap-2
          rounded-full
          bg-[#EC2129]
          px-10
          py-4
          font-semibold
          text-white
          shadow-xl
          transition-all
        "
      >
        Connect With Us
        <ArrowRight size={18} />
      </MotionLink>

      {/* <MotionLink
        href="/brochure.pdf"
        target="_blank"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="
          inline-flex
          items-center
          justify-center
          gap-2
          rounded-full
          border-2
          border-emerald-600
          px-10
          py-4
          font-semibold
          text-emerald-600
          transition-all
          hover:bg-emerald-50
        "
      >
        <Download size={18} />
        Download Brochure
      </MotionLink> */}
    </div>
  );
}
