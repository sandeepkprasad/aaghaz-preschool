"use client";

import { motion } from "framer-motion";
import { Flower2 } from "lucide-react";

import CTAButtons from "./CTAButtons";

export default function GalleryCTA() {
  return (
    <section className="relative overflow-hidden bg-orange-50 py-28">
      {/* Wavy Divider */}

      <div className="absolute left-0 top-0 w-full rotate-180 overflow-hidden leading-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="block h-[60px] w-full fill-white"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86c82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="
          relative
          z-10
          mx-auto
          max-w-4xl
          px-6
          text-center
        "
      >
        <h2 className="mb-6 text-5xl font-bold text-orange-600">
          See Your Child
          <br />
          in Our Next Story
        </h2>

        <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-slate-600">
          We invite you to visit our campus and witness the Montessori magic in
          person. Our doors are always open to curious minds and loving hearts.
        </p>

        <CTAButtons />
      </motion.div>

      {/* Floating Decoration */}

      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-12
          right-20
          hidden
          items-end
          gap-2
          opacity-30
          md:flex
        "
      >
        <div className="h-4 w-1 rounded-full bg-emerald-500" />

        <div className="h-8 w-1 rounded-full bg-emerald-500" />

        <div className="relative h-12 w-1 rounded-full bg-emerald-500">
          <Flower2
            className="
              absolute
              -left-2
              -top-7
              h-8
              w-8
              text-orange-500
            "
          />
        </div>
      </motion.div>

      {/* Background Blobs */}

      <div
        className="
          absolute
          -left-24
          bottom-0
          h-64
          w-64
          rounded-full
          bg-orange-100/50
          blur-3xl
        "
      />

      <div
        className="
          absolute
          -right-24
          top-20
          h-72
          w-72
          rounded-full
          bg-emerald-100/40
          blur-3xl
        "
      />
    </section>
  );
}
