"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Camera, Heart } from "lucide-react";

export default function GalleryPolaroid() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      viewport={{
        once: true,
      }}
      whileHover={{
        y: -10,
        rotate: 0,
      }}
      className="
        scrapbook-right
        mx-auto
        mt-20
        max-w-sm
        rounded-[30px]
        bg-white
        p-5
        shadow-[0_25px_60px_rgba(0,0,0,.12)]
      "
    >
      <div className="relative overflow-hidden rounded-2xl">
        <Image
          src="/images/gallery/polaroid.jpg"
          alt="Happy Moments"
          width={500}
          height={500}
          className="
            h-72
            w-full
            object-cover
            transition-transform
            duration-700
            hover:scale-110
          "
        />

        <div
          className="
            absolute
            right-4
            top-4
            rounded-full
            bg-white/90
            p-2
            shadow-lg
          "
        >
          <Heart className="h-5 w-5 text-red-500" fill="currentColor" />
        </div>
      </div>

      <div className="mt-5 flex items-center gap-3">
        <Camera className="h-6 w-6 text-orange-600" />

        <div>
          <h3 className="font-bold text-slate-900">Everyday Magic</h3>

          <p className="text-sm text-slate-500">Every smile tells a story.</p>
        </div>
      </div>
    </motion.div>
  );
}
