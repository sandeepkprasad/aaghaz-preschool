"use client";

import Link from "next/link";

import { socialLinks } from "./contact-data";

export default function SocialLinks() {
  return (
    <div
      className="
        rounded-3xl
        border
        border-[#EC2129]/10
        bg-[#EC2129]/5
        p-8
      "
    >
      <h3
        className="
          mb-6
          text-2xl
          font-bold
          text-[#EC2129]
        "
      >
        Social Nest
      </h3>

      <div className="flex gap-4">
        {socialLinks.map((item, index) => {
          const Icon = item.icon;

          return (
            <Link
              key={index}
              href={item.href}
              className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  shadow-md
                  transition-all
                  hover:bg-[#EC2129]
                  hover:text-white
                "
            >
              <Icon className="h-5 w-5" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
