"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarDays, GraduationCap } from "lucide-react";

const MotionLink = motion.create(Link);

export default function CTAButtons() {
  return (
    <div className="flex flex-col justify-center gap-5 sm:flex-row">
      <MotionLink
        href="/contact"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
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
       {/*  <CalendarDays size={20} /> */}
        Connect With Us
      </MotionLink>

      {/* <MotionLink
        href="/admissions"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className="
          inline-flex
          items-center
          justify-center
          gap-2
          rounded-full
          bg-orange-200
          px-10
          py-4
          font-semibold
          text-orange-900
          transition-all
          hover:bg-orange-100
        "
      >
        <GraduationCap size={20} />
        Online Admission
      </MotionLink> */}
    </div>
  );
}
