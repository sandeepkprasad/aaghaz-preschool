"use client";

import { motion } from "framer-motion";

type Props = {
  item: any;
  index: number;
};

export default function ProgramCard({ item, index }: Props) {
  const Icon = item.icon;

  const theme = {
    emerald: {
      bg: "bg-emerald-100",
      text: "text-emerald-700",
      border: "border-emerald-500",
      hover: "hover:bg-emerald-600",
      buttonText: "text-emerald-600",
      buttonHover: "hover:text-white",
      dot: "bg-emerald-500",
    },

    orange: {
      bg: "bg-orange-100",
      text: "text-orange-700",
      border: "border-orange-500",
      hover: "hover:bg-orange-600",
      buttonText: "text-orange-600",
      buttonHover: "hover:text-white",
      dot: "bg-orange-500",
    },

    violet: {
      bg: "bg-violet-100",
      text: "text-violet-700",
      border: "border-violet-500",
      hover: "hover:bg-violet-600",
      buttonText: "text-violet-600",
      buttonHover: "hover:text-white",
      dot: "bg-violet-500",
    },

    slate: {
      bg: "bg-slate-800",
      text: "text-white",
      border: "border-slate-800",
      hover: "hover:bg-slate-700",
      buttonText: "text-slate-700",
      buttonHover: "hover:text-white",
      dot: "bg-slate-500",
    },
  };

  const color = theme[item.color as keyof typeof theme] ?? theme.orange;

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
        delay: index * 0.15,
      }}
      viewport={{
        once: true,
      }}
      whileHover={{
        y: -10,
        rotate: index % 2 === 0 ? -1 : 1,
      }}
      className="
        group
        relative
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-[40px]
        bg-white
        p-8
        shadow-sm
        transition-all
        duration-500
        hover:shadow-xl
      "
    >
      {/* Decorative Blob */}

      <div
        className={`
          absolute
          -right-10
          -top-10
          h-32
          w-32
          rounded-full
          ${color.bg}
          opacity-30
          blur-xl
          transition-all
          duration-500
          group-hover:scale-125
        `}
      />

      {/* Icon */}

      <div
        className={`
          relative
          mb-6
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          ${color.bg}
        `}
      >
        <Icon
          className={`
            h-8
            w-8
            ${color.text}
          `}
        />
      </div>

      {/* Title */}

      <h3
        className={`
          mb-2
          text-2xl
          font-bold
          transition-colors
          duration-300
          ${color.text}
        `}
      >
        {item.title}
      </h3>

      {/* Age */}

      <p className="mb-6 text-slate-500">{item.age}</p>

      <div className="flex-grow space-y-5">
        <div>
          <h4
            className={`
              mb-2
              text-sm
              font-bold
              uppercase
              ${color.text}
            `}
          >
            {item.heading}
          </h4>

          <p className="leading-7 text-slate-600">{item.description}</p>
        </div>

        <div>
          <h4
            className={`
              mb-3
              text-sm
              font-bold
              uppercase
              ${color.text}
            `}
          >
            {item.listTitle}
          </h4>

          <ul className="space-y-2">
            {item.items.map((text: string) => (
              <li key={text} className="flex items-center gap-2">
                <span
                  className={`
                    h-2
                    w-2
                    rounded-full
                    ${color.dot}
                  `}
                />

                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Button */}

      <button
        className={`
          mt-8
          w-full
          rounded-2xl
          border-2
          py-3
          font-semibold
          transition-all
          duration-300
          ${color.border}
          ${color.buttonText}
          ${color.hover}
          ${color.buttonHover}
        `}
      >
        {item.button}
      </button>
    </motion.div>
  );
}
