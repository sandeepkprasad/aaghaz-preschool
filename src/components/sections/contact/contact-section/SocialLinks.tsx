"use client";

import Link from "next/link";

import { socialLinks } from "./contact-data";

export default function SocialLinks() {
  return (
    <div
      className="
        rounded-3xl
        border
        border-orange-100
        bg-orange-50
        p-8
      "
    >
      <h3
        className="
          mb-6
          text-2xl
          font-bold
          text-orange-600
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
                  hover:bg-orange-500
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
