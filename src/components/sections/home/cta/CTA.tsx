"use client";

import { motion } from "framer-motion";
import CTAButtons from "./CTAButtons";

export default function CTA() {
  return (
    <section className="mb-32 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{
            opacity: 0,
            y: 80,
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
          className="
            relative
            overflow-hidden
            rounded-[60px]
            bg-[#8D4B17]
            px-8
            py-16
            text-center
            shadow-[0_30px_70px_rgba(0,0,0,.18)]
            lg:px-24
            lg:py-24
          "
        >
          {/* Background Pattern */}

          <div
            className="
              absolute
              inset-0
              opacity-10
              [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)]
              [background-size:24px_24px]
            "
          />

          {/* Decorative Blob */}

          <div
            className="
              absolute
              -left-24
              -top-24
              h-72
              w-72
              rounded-full
              bg-white/5
              blur-3xl
            "
          />

          <div
            className="
              absolute
              -bottom-28
              -right-28
              h-96
              w-96
              rounded-full
              bg-orange-500/20
              blur-3xl
            "
          />

          <div className="relative z-10 mx-auto max-w-2xl space-y-8">
            <h2 className="text-4xl font-bold text-white lg:text-5xl">
              Ready to Begin the Journey?
            </h2>

            <p className="text-lg leading-8 text-orange-100">
              Admissions for the upcoming academic year are now open. Schedule a
              personalized tour of our campus today.
            </p>

            <CTAButtons />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
