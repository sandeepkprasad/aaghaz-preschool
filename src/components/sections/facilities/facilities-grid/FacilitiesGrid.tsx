"use client";

import { motion } from "framer-motion";
import { facilities } from "./facility-data";

import FacilityLargeCard from "./FacilityLargeCard";
import FacilityInfoCard from "./FacilityInfoCard";
import FacilityPlaygroundCard from "./FacilityPlaygroundCard";
import FacilityWideCard from "./FacilityWideCard";

export default function FacilitiesGrid() {
  return (
    <section className="relative px-6 py-28 overflow-hidden">
      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute left-10 top-32"
      >
        <div className="rounded-full bg-orange-100 p-4 shadow-xl">🌿</div>
      </motion.div>

      <motion.div
        animate={{
          y: [0, 15, 0],
          rotate: [0, 15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute right-10 bottom-24"
      >
        <div className="rounded-full bg-emerald-100 p-4 shadow-xl">🍃</div>
      </motion.div>

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <FacilityLargeCard item={facilities[0]} />
          </div>

          <div className="lg:col-span-4">
            <FacilityInfoCard item={facilities[1]} />
          </div>

          <div className="lg:col-span-4">
            <FacilityPlaygroundCard item={facilities[2]} />
          </div>

          <div className="lg:col-span-8">
            <FacilityWideCard item={facilities[3]} />
          </div>
        </div>
      </div>
    </section>
  );
}
