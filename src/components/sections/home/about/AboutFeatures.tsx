"use client";

import { motion } from "framer-motion";
import { aboutFeatures } from "./about-data";

export default function AboutFeatures() {
  return (
    <div className="grid grid-cols-2 gap-5 pt-8">
      {aboutFeatures.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.15,
              duration: 0.6,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
            className="
              rounded-3xl
              bg-white/60
              p-6
              backdrop-blur-md
              shadow-xl
              transition-shadow
              hover:shadow-xl
              border
              border-white/60
            "
          >
            <Icon className={`mb-4 h-9 w-9 ${item.color}`} />

            <h4 className="font-semibold text-slate-900">{item.title}</h4>
          </motion.div>
        );
      })}
    </div>
  );
}
