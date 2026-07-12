"use client";

import { motion } from "framer-motion";

//import HeroBadge from "./HeroBadge";
import HeroButtons from "./HeroButtons";

export default function HeroContent() {
  return (
    <div className="space-y-8">
      {/* <HeroBadge /> */}

      <motion.h1
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.15,
          duration: 0.7,
        }}
        className="
          text-5xl
          font-bold
          leading-tight
          text-slate-900
          lg:text-7xl
        "
      >
        Ilm Ki Pehli
        <br />
        <span className="italic text-emerald-600">Seedhi</span>
        {/* <br />
        &amp; Care */}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.3,
          duration: 0.7,
        }}
        className="
          max-w-xl
          text-lg
          leading-8
          text-slate-600
        "
      >
        Nurturing the natural curiosity of children through a bespoke Montessori
        approach. We create a home away from home for your little wonders.
      </motion.p>

      <HeroButtons />
    </div>
  );
}
