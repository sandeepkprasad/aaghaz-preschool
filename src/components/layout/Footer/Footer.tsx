"use client";

import { motion } from "framer-motion";

import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterContact from "./FooterContact";
import FooterBottom from "./FooterBottom";

export default function Footer() {
  return (
    <footer
      className="
        mt-32
        rounded-t-[100px]
        bg-[#9df0cc]
        px-6
        py-24
      "
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
            grid
            gap-14
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          <FooterBrand />

          <FooterLinks />

          <FooterContact />
        </motion.div>

        <FooterBottom />
      </div>
    </footer>
  );
}
