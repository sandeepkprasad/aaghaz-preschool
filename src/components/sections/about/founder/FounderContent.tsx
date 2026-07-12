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
          Every childhood begins somewhere. Mine began at home. I was
          home-schooled until senior secondary, in an environment that was calm,
          personal, and full of care. It gave me the space to learn at my own
          pace and truly enjoy the process. And I never felt like I missed out.
        </p>

        <p>
          If anything, it made me believe that when a child feels secure and
          understood, learning comes naturally.
        </p>

        <p>
          Over time, one thought stayed with me—what if this same warmth could
          exist in a more thoughtfully designed space? One that keeps the
          comfort of home, but brings in better ways of learning and more
          exposure.
        </p>

        <p>
          That thought became <strong>Aaghaz.</strong> A space that feels like
          an extension of home, but is built with intention—to help children
          explore, grow, and enjoy learning in their own way.
        </p>

        <p className="font-semibold not-italic text-slate-800">Why Aaghaz?</p>

        <p>
          Because every foundation quietly shapes brighter futures.
          <br />
          Because beginnings matter.
          <br />
          Because the first experiences stay the longest.
          <br />
          <strong>Aaghaz—where it all truly begins.</strong>
        </p>
      </div>

      <div className="mt-10 border-t pt-6">
        <h4 className="text-2xl font-bold text-orange-600">Saima Parwez</h4>

        <p className="mt-2 text-slate-500">The Founder of Aaaghaz</p>
      </div>
    </motion.div>
  );
}
