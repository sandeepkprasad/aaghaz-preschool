"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

type Props = {
  item: any;
  index: number;
};

export default function EligibilityCard({ item, index }: Props) {
  const Icon = item.icon;

  const theme = {
    emerald: {
      iconBg: "bg-emerald-100",
      icon: "text-emerald-600",
      title: "text-emerald-700",
      check: "text-emerald-500",
      border: "border-emerald-200",
    },

    orange: {
      iconBg: "bg-[#EC2129]/10",
      icon: "text-[#EC2129]",
      title: "text-[#EC2129]",
      check: "text-[#EC2129]/90",
      border: "border-[#EC2129]/20",
    },

    violet: {
      iconBg: "bg-violet-100",
      icon: "text-violet-600",
      title: "text-violet-600",
      check: "text-violet-500",
      border: "border-violet-200",
    },
  };

  const color = theme[item.color as keyof typeof theme];

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: index * 0.15,
      }}
      viewport={{
        once: true,
      }}
      whileHover={{
        y: -10,
      }}
      className={`
relative
flex
flex-col
overflow-hidden
rounded-[40px]
border-2
bg-white
p-8
shadow-sm
transition-all
duration-500
hover:-translate-y-3
hover:shadow-2xl

${color.border}

${item.featured ? "scale-105 bg-orange-50 z-10" : ""}

${item.title === "Toddler Nest" ? "scrapbook-left" : ""}

${item.title === "Kindergarten" ? "scrapbook-right" : ""}
`}
    >
      <div
        className="
    absolute
    -right-10
    -top-10
    h-32
    w-32
    rounded-full
    bg-white/30
  "
      />

      <div
        className={`
    mb-6
    flex
    h-16
    w-16
    items-center
    justify-center
    rounded-full
    transition-transform
    duration-500
    group-hover:scale-110

    ${color.iconBg}
  `}
      >
        <Icon className={`h-8 w-8 ${color.icon}`} />
      </div>

      <h3 className={`mb-2 text-2xl font-bold ${color.title}`}>{item.title}</h3>

      <p
        className="
          mb-5
          text-xs
          font-semibold
          uppercase
          tracking-[0.25em]
          text-slate-500
        "
      >
        {item.age}
      </p>

      <p className="mb-8 leading-7 text-slate-600">{item.description}</p>

      <ul className="mt-auto space-y-3">
        {item.features.map((feature: string) => (
          <li key={feature} className="flex items-center gap-3">
            <CheckCircle2 className={`h-5 w-5 ${color.check}`} />

            <span className="text-slate-600">{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
