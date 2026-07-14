"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import HeroQuote from "./HeroQuote";

export default function HeroImage() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 80,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      className="relative"
    >
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
          -left-10
          -top-10
          -z-10
          h-64
          w-64
          rounded-[60%_40%_30%_70%/60%_30%_70%_40%]
          bg-emerald-100/60
          blur-sm
        "
      />

      {/* Image */}

      <motion.div
        whileHover={{
          scale: 1.03,
          rotate: -0.5,
        }}
        transition={{
          type: "spring",
          stiffness: 220,
        }}
        className="
relative
h-[500px]
overflow-hidden
rounded-[40px]
border-8
border-white
shadow-[0_25px_60px_rgba(0,0,0,.18)]
-rotate-2
before:absolute
before:inset-0
before:rounded-[40px]
before:ring-1
before:ring-black/5
"
      >
        <Image
          src="/images/about/montessori_classroom.png"
          alt="Montessori Classroom"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </motion.div>

      <HeroQuote />
    </motion.div>
  );
}
