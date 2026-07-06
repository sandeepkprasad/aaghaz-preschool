"use client";

import { motion } from "framer-motion";

import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import EnrollButton from "./EnrollButton";
import { useScroll } from "@/hooks/useScroll";

export default function Header() {
  const scrolled = useScroll();

  return (
    <motion.header
      initial={{
        y: -80,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.6,
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-xl shadow-lg border-b border-slate-200" : "bg-transparent"}`}
    >
      <div
        className={`mx-auto flex ${scrolled ? "h-16" : "h-20"} max-w-7xl items-center justify-between px-6 lg:px-8`}
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Logo />
        </motion.div>

        <DesktopNav />

        <div className="hidden lg:block">
          <EnrollButton />
        </div>

        <MobileNav />
      </div>
    </motion.header>
  );
}
