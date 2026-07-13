"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

type Props = {
  href: string;
  label: string;
};

export default function NavItem({ href, label }: Props) {
  const pathname = usePathname();

  const active = pathname === href;

  return (
    <Link
      href={href}
      className={clsx(
        "relative py-2 text-sm font-semibold transition-colors duration-300",
        active ? "text-[#EC2129]" : "text-slate-700 hover:text-[#EC2129]",
      )}
    >
      {label}

      <span
        className={clsx(
          "absolute left-0 -bottom-1 h-0.5 rounded-full bg-[#EC2129] transition-all duration-300",
          active ? "w-full" : "w-0",
        )}
      />
    </Link>
  );
}
