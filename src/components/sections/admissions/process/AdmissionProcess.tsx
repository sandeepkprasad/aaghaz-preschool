"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import ProcessContent from "./ProcessContent";

export default function AdmissionProcess() {
  return (
    <section
      id="process"
      className="
        relative
        overflow-hidden
        bg-orange-50
        px-6
        py-28
      "
    >
      {/* Background Blobs */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          rotate: [0, 8, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
        }}
        className="
          absolute
          -left-44
          top-10
          h-[420px]
          w-[420px]
          rounded-full
          bg-orange-200/30
          blur-[120px]
        "
      />

      <motion.div
        animate={{
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
        }}
        className="
          absolute
          -right-40
          bottom-0
          h-[520px]
          w-[520px]
          rounded-full
          bg-emerald-200/30
          blur-[130px]
        "
      />

      {/* Floating Flower */}

      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="
          absolute
          left-16
          top-32
          hidden
          md:block
        "
      >
        <div className="rounded-full bg-orange-100 p-4 shadow-xl">🌼</div>
      </motion.div>

      {/* Floating Leaf */}

      <motion.div
        animate={{
          y: [0, 18, 0],
          rotate: [0, -15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
          absolute
          right-20
          bottom-20
          hidden
          md:block
        "
      >
        <div className="rounded-full bg-emerald-100 p-4 shadow-xl">🍃</div>
      </motion.div>

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          max-w-7xl
          items-center
          gap-20
          lg:grid-cols-2
        "
      >
        {/* LEFT IMAGE */}

        <motion.div
          initial={{
            opacity: 0,
            x: -60,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          className="relative"
        >
          {/* Decorative Blob */}

          <div
            className="
              absolute
              -left-10
              -top-10
              h-48
              w-48
              rounded-full
              bg-orange-200/30
              blur-3xl
            "
          />

          <div
            className="
              relative
              h-[520px]
              overflow-hidden
              rounded-[60px]
              scrapbook-left
            "
          >
            <Image
              src="/images/admissions/process.jpg"
              alt="Admission Process"
              fill
              className="object-cover"
            />
          </div>

          {/* Floating Card */}

          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="
              absolute
              -bottom-6
              -right-6
              rounded-[30px]
              bg-white
              p-6
              shadow-2xl
            "
          >
            <h3 className="text-5xl font-bold text-orange-600">98%</h3>

            <p className="mt-2 text-sm text-slate-500">
              Parent Satisfaction
              <br />
              Rate
            </p>
          </motion.div>
        </motion.div>

        <ProcessContent />
      </div>
    </section>
  );
}
