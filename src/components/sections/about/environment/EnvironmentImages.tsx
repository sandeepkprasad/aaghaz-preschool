"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function EnvironmentImages() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -50,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      viewport={{ once: true }}
      className="grid grid-cols-2 gap-5"
    >
      <motion.div
        whileHover={{
          y: -10,
          rotate: -2,
        }}
        className="
    relative
    aspect-square
    overflow-hidden
    rounded-[40px]
    shadow-xl
  "
      >
        <video
          src="/images/about/cctv_video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="
      h-full
      w-full
      object-cover
    "
        />
      </motion.div>

      <motion.div
        whileHover={{
          y: -10,
          rotate: 2,
        }}
        className="
          relative
          mt-8
          aspect-square
          overflow-hidden
          rounded-[40px]
          shadow-xl
        "
      >
        <Image
          src="/images/common/classroom_activity_3.png"
          alt="children_playing"
          fill
          className="object-cover"
        />
      </motion.div>
    </motion.div>
  );
}
