"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, MapPin, Globe, Mail } from "lucide-react";
import { motion } from "framer-motion";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/Sheet";

import { NAVIGATION } from "@/constants/navigation";
import EnrollButton from "./EnrollButton";

const MotionLink = motion.create(Link);

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <button
            aria-label="Open Menu"
            className="rounded-xl border border-slate-200 p-2 transition hover:bg-slate-100"
          >
            <Menu className="h-6 w-6" />
          </button>
        </SheetTrigger>

        <SheetContent
          side="right"
          className="flex w-[320px] flex-col justify-between p-0"
        >
          <div className="p-6">
            <h2 className="text-2xl font-bold text-orange-600">Aaghaz</h2>

            <p className="mb-8 text-sm text-slate-500">Preschool</p>

            <nav className="space-y-4">
              {NAVIGATION.map((item, index) => (
                <MotionLink
                  key={item.href}
                  href={item.href}
                  initial={{
                    opacity: 0,
                    x: 25,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  className={`block rounded-lg px-3 py-3 text-lg font-semibold transition-all ${
                    pathname === item.href
                      ? "bg-orange-50 text-orange-600"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {item.label}
                </MotionLink>
              ))}
            </nav>

            <div className="mt-8">
              <EnrollButton />
            </div>
          </div>

          <div className="border-t bg-slate-50 p-6">
            <div className="space-y-4 text-sm text-slate-600">
              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>9667865010</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} />
                <span>Patna, Bihar</span>
              </div>
            </div>

            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="rounded-full border p-2 transition hover:bg-orange-500 hover:text-white"
              >
                <Globe size={18} />
              </a>

              <a
                href="#"
                className="rounded-full border p-2 transition hover:bg-orange-500 hover:text-white"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
