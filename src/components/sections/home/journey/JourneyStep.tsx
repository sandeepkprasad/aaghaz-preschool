"use client";

import { motion } from "framer-motion";

type Props = {
  step: any;
  index: number;
};

export default function JourneyStep({ step, index }: Props) {
  const Icon = step.icon;

  const reverse = step.align === "right";

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.7,
        delay: index * 0.2,
      }}
      viewport={{ once: true }}
      className="
        relative
        flex
        flex-col
        items-center
        gap-8
        md:flex-row
      "
    >
      {!reverse && (
        <>
          <div className="w-full md:w-1/2 md:pr-20 text-center md:text-right">
            <h3 className={`text-2xl font-bold ${step.color}`}>{step.title}</h3>

            <p className="mt-3 leading-8 text-slate-600">{step.description}</p>
          </div>

          <motion.div
            whileHover={{
              scale: 1.15,
            }}
            className={`
              z-10
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-full
              border-4
              bg-white
              shadow-xl
              ${step.border}
            `}
          >
            <Icon className={`h-7 w-7 ${step.color}`} />
          </motion.div>

          <div className="hidden md:block w-1/2" />
        </>
      )}

      {reverse && (
        <>
          <div className="hidden md:block w-1/2" />

          <motion.div
            whileHover={{
              scale: 1.15,
            }}
            className={`
              z-10
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-full
              border-4
              bg-white
              shadow-xl
              ${step.border}
            `}
          >
            <Icon className={`h-7 w-7 ${step.color}`} />
          </motion.div>

          <div className="w-full md:w-1/2 md:pl-20 text-center md:text-left">
            <h3 className={`text-2xl font-bold ${step.color}`}>{step.title}</h3>

            <p className="mt-3 leading-8 text-slate-600">{step.description}</p>
          </div>
        </>
      )}
    </motion.div>
  );
}
