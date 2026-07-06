"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function FounderImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative group"
    >
      <motion.div
        whileHover={{
          scale: 1.04,
        }}
        className="
          relative
          overflow-hidden
          rounded-[100px]
          shadow-2xl
        "
      >
        <Image
          src="/images/about/founder.jpg"
          alt="Founder"
          width={600}
          height={750}
          className="
            aspect-[4/5]
            w-full
            object-cover
          "
        />
      </motion.div>

      <div
        className="
          absolute
          inset-0
          -z-10
          -translate-x-4
          -translate-y-4
          rounded-[100px]
          border-[12px]
          border-violet-200/40
          transition-all
          duration-500
          group-hover:translate-x-0
          group-hover:translate-y-0
        "
      />
    </motion.div>
  );
}
