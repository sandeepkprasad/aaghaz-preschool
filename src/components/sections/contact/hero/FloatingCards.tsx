"use client";

import { motion } from "framer-motion";

import { floatingCards } from "./hero-data";

export default function FloatingCards() {
  return (
    <>
      {floatingCards.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={index}
            animate={{
              y: [0, -12, 0],
              rotate: item.rotate === "left" ? [-6, -2, -6] : [6, 2, 6],
            }}
            transition={{
              duration: 6 + index,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className={`
              absolute
              hidden
              lg:block
              ${item.position}
            `}
          >
            <motion.div
              whileHover={{
                scale: 1.08,
                rotate: 0,
              }}
              transition={{
                duration: 0.35,
              }}
              className={`
                rounded-2xl
                border
                border-slate-200/70
                bg-white/90
                p-5
                shadow-xl
                backdrop-blur-md

                ${item.rotate === "left" ? "-rotate-6" : "rotate-6"}
              `}
            >
              <Icon
                className={`
                  h-12
                  w-12
                  ${item.color}
                `}
              />
            </motion.div>
          </motion.div>
        );
      })}
    </>
  );
}
