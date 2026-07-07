"use client";

import { motion } from "framer-motion";

import ProcessStep from "./ProcessStep";
import { processSteps } from "./process-data";

export default function ProcessContent() {
  return (
    <div>
      <motion.h2
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        className="
          mb-10
          text-5xl
          font-bold
          text-orange-600
        "
      >
        Four Steps to Success
      </motion.h2>

      <div className="space-y-10">
        {processSteps.map((item, index) => (
          <ProcessStep key={item.title} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}
