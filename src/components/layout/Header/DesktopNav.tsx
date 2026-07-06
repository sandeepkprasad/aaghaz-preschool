"use client";

import { motion } from "framer-motion";

import { NAVIGATION } from "@/constants/navigation";
import NavItem from "./NavItem";

export default function DesktopNav() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.2,
        duration: 0.5,
      }}
      aria-label="Desktop Navigation"
      className="hidden items-center gap-8 lg:flex"
    >
      {NAVIGATION.map((item) => (
        <NavItem key={item.href} href={item.href} label={item.label} />
      ))}
    </motion.nav>
  );
}
