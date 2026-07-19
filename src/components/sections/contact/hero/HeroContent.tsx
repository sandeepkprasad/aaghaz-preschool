"use client";

import { motion } from "framer-motion";

export default function HeroContent() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.7,
      }}
      className="
        relative
        z-10
        mx-auto
        max-w-4xl
        text-center
      "
    >
      <motion.h1
        initial={{
          opacity: 0,
          y: 35,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
        }}
        className="
    mb-6
    text-5xl
    font-bold
    text-[#EC2129]
    lg:text-7xl
  "
      >
        Let's Connect
      </motion.h1>

      <motion.p
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
          duration: 0.8,
        }}
        className="
    mx-auto
    max-w-2xl
    text-lg
    leading-8
    text-slate-600
  "
      >
        We'd love to hear from you! Whether you have questions about our
        Montessori programs or want to schedule a visit, our team is here to
        help nurture your child's journey.
      </motion.p>
    </motion.div>
  );
}
