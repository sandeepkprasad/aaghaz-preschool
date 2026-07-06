"use client";

import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";

import { preschoolInfo } from "@/constants/footer";

export default function FooterContact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: 0.3,
      }}
      viewport={{ once: true }}
      className="space-y-5"
    >
      <h3 className="text-lg font-semibold">Contact Us</h3>

      <div className="space-y-5">
        <div className="flex items-start gap-3">
          <MapPin size={18} className="mt-1 shrink-0" />

          <div className="space-y-1 text-slate-700">
            {preschoolInfo.address.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3 font-semibold">
          <Phone size={18} />

          <span>{preschoolInfo.phone}</span>
        </div>
      </div>
    </motion.div>
  );
}
