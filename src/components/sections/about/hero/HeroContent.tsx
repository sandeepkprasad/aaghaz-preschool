"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroContent() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -50,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      className="z-10"
    >
      {/* Label */}

      {/* <motion.span
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.1,
        }}
        className="
          mb-5
          block
          text-sm
          font-bold
          uppercase
          tracking-[0.35em]
          text-orange-600
        "
      >
        The Heart of Learning
      </motion.span> */}

      {/* Heading */}

      <motion.h1
        initial={{
          opacity: 0,
          y: 25,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.2,
        }}
        className="flex justify-center lg:justify-start"
      >
        <Image
          src="/images/common/aaghaz_text.png"
          alt="Aaghaz Preschool"
          width={700}
          height={180}
          priority
          className="h-auto w-full max-w-[650px]"
        />
      </motion.h1>

      {/* Description */}

      <motion.p
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 0.35,
        }}
        className="
          mt-8
          max-w-xl
          text-lg
          leading-8
          text-slate-600
        "
      >
        At Aaghaz, we don't just teach; we nurture the innate curiosity of every
        child through a curated Montessori environment designed for joy and
        discovery.
      </motion.p>
    </motion.div>
  );
}
