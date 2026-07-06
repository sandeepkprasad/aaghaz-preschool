"use client";

import { motion } from "framer-motion";
import { Quote } from "./testimonials-data";

type Props = {
  testimonial: any;
  index: number;
};

export default function TestimonialCard({ testimonial, index }: Props) {
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
        delay: index * 0.15,
      }}
      viewport={{ once: true }}
      whileHover={{
        y: -10,
        rotate: 1,
      }}
      className={`
        relative
        rounded-[32px]
        border-4
        bg-white
        p-10
        shadow-xl
        transition-all
        duration-500
        ${testimonial.border}
        ${testimonial.margin}
      `}
    >
      <Quote
        className={`
          absolute
          -left-4
          -top-4
          h-16
          w-16
          ${testimonial.quote}
        `}
      />

      <p className="mb-8 italic leading-8 text-slate-600">
        "{testimonial.message}"
      </p>

      <div className="flex items-center gap-4">
        <div
          className={`
            h-12
            w-12
            rounded-full
            ${testimonial.avatar}
          `}
        />

        <div>
          <h4 className={`font-bold ${testimonial.color}`}>
            {testimonial.name}
          </h4>

          <p className="text-xs uppercase tracking-wider text-slate-500">
            {testimonial.role}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
