"use client";

import { motion } from "framer-motion";
import { Baby, BookOpen, Flower2, Sparkles } from "lucide-react";

import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#DAF1F9]
        px-6
        py-16
        lg:px-12
        lg:py-24
      "
    >
      {/* Background Blob */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          rotate: [0, 8, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="
          absolute
          -left-40
          -top-40
          h-[420px]
          w-[420px]
          rounded-full
          bg-orange-200/40
          blur-[110px]
        "
      />

      <motion.div
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
        }}
        className="
          absolute
          -bottom-40
          -right-40
          h-[500px]
          w-[500px]
          rounded-full
          bg-emerald-200/40
          blur-[120px]
        "
      />

      {/* Floating Baby */}

      <motion.div
        animate={{
          y: [0, -18, 0],
          rotate: [0, 8, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="
          absolute
          right-[10%]
          top-20
          hidden
          md:block
        "
      >
        <Baby className="h-16 w-16 text-orange-500/20" />
      </motion.div>

      {/* Floating Book */}

      <motion.div
        animate={{
          y: [0, 15, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-12
          right-24
          hidden
          md:block
        "
      >
        <BookOpen className="h-20 w-20 text-orange-500/20" />
      </motion.div>

      {/* Floating Flower */}

      <motion.div
        animate={{
          y: [0, -12, 0],
          rotate: [0, 12, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
          absolute
          top-40
          left-[14%]
          hidden
          md:block
        "
      >
        <Flower2 className="h-10 w-10 text-emerald-500/20" />
      </motion.div>

      {/* Floating Sparkle */}

      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 20, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-20
          left-[8%]
          hidden
          md:block
        "
      >
        <Sparkles className="h-10 w-10 text-violet-400/20" />
      </motion.div>

      {/* Decorative Circles */}

      <div
        className="
          absolute
          left-16
          top-24
          h-5
          w-5
          rounded-full
          bg-orange-300/40
        "
      />

      <div
        className="
          absolute
          right-24
          bottom-20
          h-4
          w-4
          rounded-full
          bg-emerald-300/40
        "
      />

      {/* Content */}

      <div className="relative z-10 mx-auto max-w-7xl">
        <HeroContent />
      </div>
    </section>
  );
}
