"use client";

import { motion } from "framer-motion";

import { features } from "./environment-data";
import FeatureItem from "./FeatureItem";

export default function EnvironmentContent() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 50,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      viewport={{ once: true }}
    >
      <h2 className="mb-10 text-5xl font-bold">
        Safe, Nurturing &
        <br />
        Premium
      </h2>

      <ul className="space-y-10">
        {features.map((feature, index) => (
          <FeatureItem key={feature.title} feature={feature} index={index} />
        ))}
      </ul>
    </motion.div>
  );
}
