"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { rooms } from "./rooms-data";
import RoomsFeature from "./RoomsFeatures";

export default function RoomsContent() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 60,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      viewport={{
        once: true,
      }}
    >
      <h2 className="mb-8 text-5xl font-bold leading-tight text-orange-600">
        Nurturing the
        <br />
        <span className="italic text-emerald-600">Inner Spirit</span>
      </h2>

      <div className="space-y-8">
        {rooms.map((room, index) => (
          <RoomsFeature key={room.title} room={room} index={index} />
        ))}
      </div>

      <Link
        href="/contact"
        className="
          mt-12
          inline-flex
          items-center
          gap-3
          rounded-full
          bg-orange-600
          px-8
          py-4
          font-semibold
          text-white
          shadow-xl
          transition-all
          hover:scale-105
        "
      >
        Request a Campus Tour
        <ArrowRight size={18} />
      </Link>
    </motion.div>
  );
}
