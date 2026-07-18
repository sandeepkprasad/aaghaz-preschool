"use client";

import { motion } from "framer-motion";

type Props = {
  item: any;
  index: number;
};

export default function ProcessStep({ item, index }: Props) {
  const colors = {
    orange: "bg-[#EC2129] text-white",
    emerald: "bg-emerald-500 text-white",
    violet: "bg-violet-500 text-white",
    amber: "bg-amber-400 text-slate-900",
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 40,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        delay: index * 0.15,
        duration: 0.6,
      }}
      className="
        group
        relative
        flex
        gap-6
      "
    >
      {/* Number Box */}

      <div
        className={`
          relative
          flex
          h-14
          w-14
          shrink-0
          items-center
          justify-center
          rounded-2xl
          text-lg
          font-bold
          shadow-lg
          transition-all
          duration-500
          group-hover:-rotate-6
          group-hover:scale-110

          ${colors[item.color as keyof typeof colors]}
        `}
      >
        {item.number}

        {/* Timeline Connector */}

        {index !== 3 && (
          <div
            className="
              absolute
              left-1/2
              top-full
              hidden
              h-16
              w-[2px]
              -translate-x-1/2
              bg-orange-200
              lg:block
            "
          />
        )}
      </div>

      {/* Content */}

      <div className="flex-1">
        <h3
          className="
            mb-2
            text-2xl
            font-bold
            text-slate-900
            transition-colors
            duration-300
            group-hover:text-[#EC2129]
          "
        >
          {item.title}
        </h3>

        <p
          className="
            leading-7
            text-slate-600
          "
        >
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}
