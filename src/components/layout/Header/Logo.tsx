"use client";

import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" aria-label="Aaghaz Preschool" className="flex items-center">
      <Image
        src="/logo/logo.png"
        alt="Aaghaz Preschool Logo"
        width={160}
        height={160}
        priority
        className="h-16 w-auto object-contain"
      />
    </Link>
  );
}
