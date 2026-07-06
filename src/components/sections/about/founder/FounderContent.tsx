"use client";

import { motion } from "framer-motion";

export default function FounderContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <span
        className="
          mb-5
          block
          text-sm
          font-bold
          uppercase
          tracking-[0.35em]
          text-violet-600
        "
      >
        A Message from our Heart
      </span>

      <h2 className="mb-8 text-5xl font-bold">Letter from Saima</h2>

      <div
        className="
          space-y-6
          text-lg
          italic
          leading-9
          text-slate-600
        "
      >
        <p>
          "Aaghaz began as a dream to create a space where education feels like
          a gentle invitation rather than a rigid instruction. Having spent
          decades studying the child's mind, I realized that true potential is
          unlocked when a child feels safe, seen, and supported."
        </p>

        <p>
          "My promise to you is that at Aaghaz, your child will be treated with
          the same tenderness and respect we give to our own. We don't just
          prepare them for school; we prepare them for life."
        </p>
      </div>

      <div className="mt-10 border-t pt-6">
        <h4 className="text-2xl font-bold text-orange-600">Saima Khan</h4>

        <p className="mt-2 text-slate-500">Founder & Educational Director</p>
      </div>
    </motion.div>
  );
}
