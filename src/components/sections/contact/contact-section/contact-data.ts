import { Phone, MapPin, Mail } from "lucide-react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa6";

import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";

export type AppIcon = LucideIcon | IconType;

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
  icon: AppIcon;

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
    icon: FaWhatsapp,
    href: "https://wa.me/919667865010",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/aaghaz_preschool/",
  },
  {
    icon: Mail,
    href: "mailto:contact@aaghaz.co.in",
  },
];
