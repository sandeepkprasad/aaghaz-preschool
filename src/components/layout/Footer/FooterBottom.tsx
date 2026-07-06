"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { footerBottomLinks } from "@/constants/footer";

export default function FooterBottom() {
  return (
    <>
      <div className="my-10 h-px w-full bg-slate-900/10" />

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
          delay: 0.4,
        }}
        viewport={{ once: true }}
        className="
          flex
          flex-col
          items-center
          justify-between
          gap-6
          text-center
          lg:flex-row
          lg:text-left
        "
      >
        <p className="text-sm text-slate-700">
          © {new Date().getFullYear()} Aaghaz Preschool. Nurturing Young Minds
          with Love.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {footerBottomLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="
                text-sm
                text-slate-700
                transition-all
                duration-300
                hover:text-slate-900
                hover:underline
              "
            >
              {item.title}
            </Link>
          ))}
        </div>
      </motion.div>
    </>
  );
}
