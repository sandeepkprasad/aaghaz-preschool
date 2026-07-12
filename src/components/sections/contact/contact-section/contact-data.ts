import { Phone, MapPin, Trophy, Camera, Mail } from "lucide-react";

import type { LucideIcon } from "lucide-react";

export type ContactColor = "orange" | "emerald";

export interface ContactCardItem {
  icon: LucideIcon;

  title: string;

  color: ContactColor;

  lines: string[];

  action?: {
    label: string;
    href: string;
  };
}

export interface SocialLinkItem {
  icon: LucideIcon;

  href: string;
}

export const contactCards: ContactCardItem[] = [
  {
    icon: Phone,

    title: "Phone & WhatsApp",

    color: "orange",

    lines: ["+91 96678 65010"],

    action: {
      label: "Chat on WhatsApp",

      href: "https://wa.me/919667865010",
    },
  },

  {
    icon: MapPin,

    title: "Our Location",

    color: "emerald",

    lines: [
      "F3, Ground Floor, Jogabai Extension,",
      "Batla House, Okhla,",
      "New Delhi, Delhi, 110025",
    ],
  },
];

export const socialLinks: SocialLinkItem[] = [
  {
    icon: Trophy,

    href: "#",
  },

  {
    icon: Camera,

    href: "#",
  },

  {
    icon: Mail,

    href: "#",
  },
];
