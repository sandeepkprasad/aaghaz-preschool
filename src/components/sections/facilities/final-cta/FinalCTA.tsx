"use client";

import { motion } from "framer-motion";

import CTAButtons from "./CTAButtons";

export default function FinalCTA() {
  return (
    <section className="px-6 pb-32">
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
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
        className="relative mx-auto max-w-3xl rounded-[50px] bg-[#DAF1F9] px-8 py-16 text-center"
      >
        {/* Decorative Blob */}

        <div
          className="
            absolute
            -left-20
            -top-20
            h-56
            w-56
            rounded-full
            bg-orange-100/50
            blur-3xl
          "
        />

        <div
          className="
            absolute
            -bottom-24
            -right-24
            h-64
            w-64
            rounded-full
            bg-emerald-100/50
            blur-3xl
          "
        />

        <div className="relative z-10">
          <motion.h2
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
            }}
            viewport={{
              once: true,
            }}
            className="
              mb-10
              text-4xl
              font-bold
              leading-tight
              text-[#EC2129]
              lg:text-5xl
            "
          >
            Ready to see
            <br />
            Aaghaz in person?
          </motion.h2>

          <CTAButtons />
        </div>
      </motion.div>
    </section>
  );
}
