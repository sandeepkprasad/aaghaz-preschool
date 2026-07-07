"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HeartHandshake } from "lucide-react";

export default function RoomsImage() {
  return (
    <div className="relative">
      {/* Organic Background */}

      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="
          absolute
          left-1/2
          top-1/2
          -z-10
          h-[110%]
          w-[110%]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-emerald-100/40
          blur-3xl
        "
      />

      {/* Main Image */}

      <motion.div
        initial={{
          opacity: 0,
          x: -60,
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
        whileHover={{
          scale: 1.02,
        }}
        className="
          relative
          aspect-square
          overflow-hidden
          rounded-[80px]
          organic-shape
          border-8
          border-white
          shadow-[0_30px_80px_rgba(0,0,0,.15)]
        "
      >
        <Image
          src="/images/facilities/meditation-room.jpg"
          alt="Meditation Room"
          fill
          className="
            object-cover
            transition-transform
            duration-700
            hover:scale-105
          "
        />
      </motion.div>

      {/* Floating Card */}

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.4,
        }}
        viewport={{
          once: true,
        }}
        whileHover={{
          y: -8,
          rotate: 0,
        }}
        className="
          scrapbook-right
          absolute
          -bottom-6
          -right-6
          max-w-xs
          rounded-3xl
          bg-white
          p-6
          shadow-2xl
        "
      >
        <HeartHandshake className="mb-3 h-9 w-9 text-orange-600" />

        <h3 className="mb-2 text-2xl font-bold text-orange-600">
          Mindfulness Corner
        </h3>

        <p className="leading-6 text-slate-600">
          A dedicated space for morning meditation and emotional regulation
          exercises.
        </p>
      </motion.div>

      {/* Floating Decoration */}

      <motion.div
        animate={{
          y: [0, -12, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
        className="
          absolute
          -left-8
          top-16
        "
      >
        <div className="rounded-full bg-orange-100 p-4 shadow-xl">🌼</div>
      </motion.div>
    </div>
  );
}
