"use client";

import { motion } from "framer-motion";
import { Cloud, Leaf } from "lucide-react";

export default function FloatingDoodles() {
  return (
    <>
      {/* Leaf */}

      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 8, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-20
          left-10
          hidden
          md:block
          z-20
        "
      >
        <Leaf
          className="
            h-20
            w-20
            text-emerald-500/30
          "
        />
      </motion.div>

      {/* Cloud */}

      <motion.div
        animate={{
          y: [0, 12, 0],
          x: [0, -12, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-10
          top-20
          hidden
          md:block
          z-20
        "
      >
        <Cloud
          className="
            h-24
            w-24
            text-orange-300/40
          "
        />
      </motion.div>
    </>
  );
}
