"use client";

import Link from "next/link";
import type { ContactCardItem } from "./contact-data";

type Props = {
  item: ContactCardItem;
};

export default function ContactCard({ item }: Props) {
  const Icon = item.icon;

  const colors = {
    orange: {
      bg: "bg-[#EC2129]/10",
      text: "text-[#EC2129]",
    },

    emerald: {
      bg: "bg-emerald-100",
      text: "text-emerald-600",
    },
  };

  const color = colors[item.color];

  return (
    <div
      className="
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-8
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      <div className="flex gap-6">
        <div
          className={`
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-2xl

            ${color.bg}
          `}
        >
          <Icon
            className={`
              h-7
              w-7

              ${color.text}
            `}
          />
        </div>

        <div>
          <h3 className="mb-3 text-2xl font-bold">{item.title}</h3>

          <div className="space-y-1">
            {item.lines.map((text: string) => (
              <p
                key={text}
                className="
                    text-slate-600
                  "
              >
                {text}
              </p>
            ))}
          </div>

          {item.action && (
            <Link
              href={item.action.href}
              className="
                mt-5
                inline-flex
                items-center
                gap-2
                font-semibold
                text-[#EC2129]
                hover:underline
              "
            >
              {item.action.label}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
