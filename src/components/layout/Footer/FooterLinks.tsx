"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { footerLinks } from "@/constants/footer";

export default function FooterLinks() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: 0.15,
      }}
      viewport={{ once: true }}
      className="space-y-5"
    >
      <h3 className="text-lg font-semibold">Explore</h3>

      <ul className="space-y-4">
        {footerLinks.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="
              text-slate-700
              transition-all
              duration-300
              hover:text-slate-900
              hover:underline
              "
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
