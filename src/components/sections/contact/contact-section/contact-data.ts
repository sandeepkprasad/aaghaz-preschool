import { Phone, MapPin, Trophy, Camera, Mail } from "lucide-react";

export const contactCards = [
  {
    icon: Phone,

    title: "Phone & WhatsApp",

    color: "orange",

    lines: ["+91 98765 43210 (Admissions)", "+91 98765 43211 (Office)"],

    action: {
      label: "Chat on WhatsApp",

      href: "https://wa.me/919876543210",
    },
  },

  {
    icon: MapPin,

    title: "Our Location",

    color: "emerald",

    lines: [
      "123 Sunshine Lane",

      "Blossom Gardens",

      "Knowledge Park",

      "Bangalore - 560001",
    ],
  },
];

export const socialLinks = [
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
