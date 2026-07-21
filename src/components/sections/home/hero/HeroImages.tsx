"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Flower2, Leaf } from "lucide-react";

export default function HeroImages() {
  return (
    <div className="relative h-[650px] w-full">
      {/* Organic Blob */}

      <motion.div
        animate={{
          scale: [1, 1.06, 1],
          rotate: [0, 6, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-[430px]
          w-[430px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-[45%_55%_60%_40%/45%_35%_65%_55%]
          bg-[#EC2129]/20
          blur-md
        "
      />

      {/* Top Image */}

      <motion.div
        whileHover={{
          scale: 1.03,
          rotate: 1,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
        }}
        className="
          absolute
          right-0
          top-0
          h-[420px]
          w-[320px]
          rotate-6
          overflow-hidden
          rounded-[60px]
          border-8
          border-white
          shadow-[0_25px_60px_rgba(0,0,0,.18)]
        "
      >
        <Image
          src="/images/home/playing.png"
          alt="Children Playing"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Bottom Image */}

      <motion.div
        whileHover={{
          scale: 1.03,
          rotate: -1,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
        }}
        className="
          absolute
          bottom-0
          left-0
          h-[340px]
          w-[280px]
          -rotate-6
          overflow-hidden
          rounded-[50px]
          border-8
          border-white
          shadow-[0_25px_60px_rgba(0,0,0,.18)]
        "
      >
        <Image
          src="/images/home/children.png"
          alt="Creative Learning"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Floating Flower */}

      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="
          absolute
          -right-8
          -top-8
          rounded-full
          bg-white
          p-4
          shadow-xl
        "
      >
        <Flower2 className="h-10 w-10 text-[#EC2129]" />
      </motion.div>

      {/* Floating Leaf */}

      <motion.div
        animate={{
          x: [0, 12, 0],
          y: [0, -12, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-24
          -left-8
          rounded-full
          bg-emerald-100
          p-3
          shadow-lg
        "
      >
        <Leaf className="h-8 w-8 text-emerald-600" />
      </motion.div>
    </div>
  );
}
