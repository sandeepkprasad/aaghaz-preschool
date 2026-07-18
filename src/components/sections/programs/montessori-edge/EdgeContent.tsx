"use client";

import { motion } from "framer-motion";

import EdgeFeature from "./EdgeFeature";
import { edgeFeatures } from "./edge-data";

export default function EdgeContent() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 60,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      viewport={{
        once: true,
      }}
      className="space-y-10"
    >
      <h2 className="text-5xl font-bold text-[#EC2129]">
        The Montessori Edge
      </h2>

      <div className="space-y-8">
        {edgeFeatures.map((feature, index) => (
          <EdgeFeature key={feature.title} feature={feature} index={index} />
        ))}
      </div>
    </motion.div>
  );
}
