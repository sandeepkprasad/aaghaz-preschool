"use client";

import { motion } from "framer-motion";

import CTAButtons from "./CTAButtons";

export default function CTA() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{
            opacity: 0,
            y: 70,
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
            rounded-[80px]
            bg-orange-700
            px-8
            py-16
            text-center
            shadow-[0_35px_80px_rgba(0,0,0,.18)]
            lg:px-24
            lg:py-24
          "
        >
          {/* Dot Pattern */}

          <div
            className="
              absolute
              inset-0
              opacity-10
              [background-image:radial-gradient(circle_at_20%_30%,white_1px,transparent_1px)]
              [background-size:50px_50px]
            "
          />

          {/* Decorative Blob */}

          <div
            className="
              absolute
              -left-20
              -top-20
              h-80
              w-80
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
              bg-orange-400/20
              blur-3xl
            "
          />

          <div className="relative z-10 mx-auto max-w-3xl">
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
                mb-6
                text-5xl
                font-bold
                text-white
                lg:text-6xl
              "
            >
              Begin Their Story Today
            </motion.h2>

            <motion.p
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              transition={{
                delay: 0.35,
              }}
              viewport={{
                once: true,
              }}
              className="
                mx-auto
                mb-10
                max-w-2xl
                text-lg
                leading-8
                text-orange-100
              "
            >
              Join the Aaghaz family and watch your child flourish in an
              environment built on love and wisdom.
            </motion.p>

            <CTAButtons />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
