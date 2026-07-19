"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Flower2, Bug } from "lucide-react";

export default function AboutImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative mx-auto flex w-full max-w-md items-center justify-center"
    >
      {/* Organic Blob */}

      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 4, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          h-[430px]
          w-[430px]
          rounded-[45%_55%_60%_40%/45%_35%_65%_55%]
          bg-[#EC2129]/10
          blur-md
        "
      />

      {/* Image */}

      <motion.div
        whileHover={{
          scale: 1.04,
          rotate: 2,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
        }}
        className="relative h-[280px] w-[280px] sm:h-[340px] sm:w-[340px] md:h-[380px] md:w-[380px] lg:h-[420px] lg:w-[420px]"
      >
        <Image
          src="/images/home/about.png"
          alt="Montessori Learning"
          fill
          priority
          className="
            rounded-full
            border-8
            border-white
            object-cover
            shadow-[0_30px_60px_rgba(0,0,0,.18)]
          "
        />
      </motion.div>

      {/* Flower */}

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
          -top-8
          right-0
          rounded-full
          bg-white
          p-4
          shadow-xl
        "
      >
        <Flower2 size={36} className="text-orange-500" />
      </motion.div>

      {/* Bee */}

      <motion.div
        animate={{
          x: [0, 10, 0],
          y: [0, -12, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-6
          right-12
          rounded-full
          bg-yellow-100
          p-3
          shadow-lg
        "
      >
        <Bug size={28} className="text-yellow-600" />
      </motion.div>

      {/* Leaf */}

      <motion.div
        animate={{
          rotate: [0, 12, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="
          absolute
          left-0
          top-20
        "
      >
        <Flower2 size={48} className="text-emerald-400 opacity-70" />
      </motion.div>
    </motion.div>
  );
}
