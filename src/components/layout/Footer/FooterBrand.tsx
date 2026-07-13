"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { preschoolInfo } from "@/constants/footer";

export default function FooterBrand() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="space-y-5"
    >
      {/* <Link
        href="/"
        className="inline-block text-3xl font-bold tracking-tight text-slate-900"
      >
        {preschoolInfo.name}
      </Link> */}

      <Link
        href="/"
        aria-label="Aaghaz Preschool"
        className="flex items-center"
      >
        <Image
          src="/logo/logo.png"
          alt="Aaghaz Preschool Logo"
          width={160}
          height={160}
          priority
          className="h-16 w-auto object-contain"
        />
      </Link>

      <p className="max-w-sm leading-8 text-slate-700">
        {preschoolInfo.description}
      </p>
    </motion.div>
  );
}
