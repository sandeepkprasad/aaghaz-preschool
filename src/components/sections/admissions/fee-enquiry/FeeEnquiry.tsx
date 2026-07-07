"use client";

import { motion } from "framer-motion";
import { ReceiptText } from "lucide-react";

import FeeForm from "./FeeForm";

export default function FeeEnquiry() {
  return (
    <section id="fee-enquiry" className="py-28 px-6">
      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        className="
          mx-auto
          max-w-4xl
          rounded-[60px]
          border-4
          border-dashed
          border-orange-200
          bg-white
          p-8
          shadow-sm
          md:p-16
        "
      >
        <div className="mb-12 text-center">
          <div
            className="
              mb-6
              inline-flex
              rounded-full
              bg-orange-100
              p-5
            "
          >
            <ReceiptText
              className="
                h-12
                w-12
                text-orange-600
              "
            />
          </div>

          <h2 className="mb-4 text-5xl font-bold text-orange-600">
            Request Fee Structure
          </h2>

          <p className="mx-auto max-w-xl text-slate-600">
            Fill out the form below and our admissions team will share the
            complete fee structure with you.
          </p>
        </div>

        <FeeForm />
      </motion.div>
    </section>
  );
}
