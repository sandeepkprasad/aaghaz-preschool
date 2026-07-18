"use client";

import { motion } from "framer-motion";

import CTAButtons from "./CTAButtons";

export default function CTA() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
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
          className="
            relative
            overflow-hidden
            rounded-[60px]
            bg-[#0F587F]
            px-8
            py-16
            text-center
            lg:px-20
            lg:py-20
          "
        >
          {/* Texture */}

          <div
            className="
              absolute
              inset-0
              opacity-5
              [background-image:url('https://www.transparenttextures.com/patterns/cubes.png')]
            "
          />

          {/* Blob */}

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

          {/** <div
            className="
              absolute
              -bottom-24
              -right-24
              h-96
              w-96
              rounded-full
              bg-orange-300/20
              blur-3xl
            "
          /> */}

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
                text-5xl
                font-bold
                text-white
                lg:text-6xl
              "
            >
              Ready to start the journey?
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
                mt-6
                max-w-2xl
                text-lg
                leading-8
                text-orange-100
              "
            >
              Join the Aaghaz family today. Schedule a campus tour or speak with
              our admissions counselor to find the perfect program for your
              child.
            </motion.p>

            <div className="mt-10">
              <CTAButtons />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
