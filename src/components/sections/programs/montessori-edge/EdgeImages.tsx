"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function EdgeImages() {
  return (
    <div className="relative">
      {/* Organic Background */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
          absolute
          left-1/2
          top-1/2
          -z-10
          h-[120%]
          w-[120%]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          organic-blob
          bg-emerald-100/30
          blur-3xl
        "
      />

      <div className="grid grid-cols-2 gap-5">
        {/* Image 1 */}

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
            scale: 1.03,
            rotate: -2,
          }}
          className="
            relative
            h-64
            overflow-hidden
            scrapbook-left
          "
        >
          <Image
            src="/images/programs/outdoor-activity.jpg"
            alt="Outdoor Activity"
            fill
            className="
              object-cover
              transition-transform
              duration-700
              hover:scale-110
            "
          />
        </motion.div>

        {/* Image 2 */}

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
            delay: 0.2,
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
          whileHover={{
            scale: 1.03,
            rotate: 2,
          }}
          className="
            relative
            mt-12
            h-64
            overflow-hidden
            scrapbook-right
          "
        >
          <Image
            src="/images/programs/learning-toys.jpg"
            alt="Learning Toys"
            fill
            className="
              object-cover
              transition-transform
              duration-700
              hover:scale-110
            "
          />
        </motion.div>

        <motion.div
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
          className="absolute -left-6 top-16 rounded-full bg-orange-100 p-4 shadow-xl"
        >
          🌱
        </motion.div>

        <motion.div
          animate={{
            y: [0, 15, 0],
            rotate: [0, 15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute -right-8 bottom-12 rounded-full bg-emerald-100 p-4 shadow-xl"
        >
          🍃
        </motion.div>
      </div>
    </div>
  );
}
