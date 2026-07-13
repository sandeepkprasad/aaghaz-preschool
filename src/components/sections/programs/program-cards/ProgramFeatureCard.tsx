"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

type Props = {
  item: any;
};

export default function ProgramFeatureCard({ item }: Props) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.9,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      transition={{
        duration: 0.7,
      }}
      viewport={{
        once: true,
      }}
      whileHover={{
        y: -10,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-[40px]
        border-2
        border-orange-200
        bg-white
        p-8
        shadow-xl
        lg:-translate-y-4
        lg:scale-105
      "
    >
      {/* Organic Blob */}

      <div
        className="
          absolute
          -right-12
          -top-12
          h-40
          w-40
          rounded-full
          bg-orange-100/60
          blur-2xl
          transition-all
          duration-500
          group-hover:scale-125
        "
      />

      {/* Badge */}

      <span
        className="
          absolute
          right-8
          top-8
          rounded-full
          bg-orange-600
          px-3
          py-1
          text-[10px]
          font-bold
          uppercase
          tracking-widest
          text-white
        "
      >
        Most Popular
      </span>

      {/* Icon */}

      <div
        className="
          mb-6
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-orange-100
        "
      >
        <Icon className="h-8 w-8 text-orange-600" />
      </div>

      <h3 className="mb-2 text-2xl font-bold text-orange-700">{item.title}</h3>

      <p className="mb-6 text-slate-500">{item.age}</p>

      <div className="space-y-5">
        <div>
          <h4 className="mb-2 text-sm font-bold uppercase text-orange-600">
            {item.heading}
          </h4>

          <p className="leading-7 text-slate-600">{item.description}</p>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-bold uppercase text-orange-600">
            {item.listTitle}
          </h4>

          <ul className="space-y-3">
            {item.items.map((text: string) => (
              <li key={text} className="flex items-center gap-2">
                <CheckCircle
                  className="
                    h-5
                    w-5
                    text-orange-600
                  "
                />

                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <button
        className="
          mt-8
          w-full
          rounded-2xl
          bg-[#EC2129]
          py-3
          font-semibold
          text-white
          shadow-lg
          transition-all
          hover:-translate-y-1
        "
      >
        Enroll Now
      </button>
    </motion.div>
  );
}
