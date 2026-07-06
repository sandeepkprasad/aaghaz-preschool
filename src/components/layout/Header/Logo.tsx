"use client";

import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2"
      aria-label="Aaghaz Preschool"
    >
      <div className="flex flex-col">
        <span className="text-2xl font-bold tracking-tight text-orange-600">
          Aaghaz
        </span>

        <span className="-mt-1 text-xs font-medium uppercase tracking-[0.35em] text-slate-500">
          Preschool
        </span>
      </div>
    </Link>
  );
}
