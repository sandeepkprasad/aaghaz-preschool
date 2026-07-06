import { HandHelping, Palette, Languages, Globe2 } from "lucide-react";

export const philosophy = [
  {
    title: "Practical Life",
    description:
      "Empowering children to take care of themselves and their environment, fostering independence and fine motor control.",
    icon: HandHelping,
    image: "/images/about/philosophy/practical-life.jpg",
    imageCard: true,
    background: "bg-white",
    textColor: "text-slate-900",
    hover: "group-hover:text-emerald-600",
    span: "md:col-span-8",
    reverse: false,
  },

  {
    title: "Sensorial",
    description:
      "Refining the senses to explore dimensions, colors, textures, and sounds with precision.",
    icon: Palette,
    imageCard: false,
    background: "bg-violet-600",
    textColor: "text-white",
    descriptionColor: "text-violet-100",
    span: "md:col-span-4",
  },

  {
    title: "Language",
    description:
      "Developing vocabulary and literacy through phonetic awareness and tactile letters.",
    icon: Languages,
    imageCard: false,
    background: "bg-emerald-100",
    textColor: "text-slate-900",
    descriptionColor: "text-slate-600",
    span: "md:col-span-4",
  },

  {
    title: "Cultural Discovery",
    description:
      "Connecting children to the world through geography, biology, music, and art, nurturing global empathy.",
    icon: Globe2,
    image: "/images/about/philosophy/cultural.jpg",
    imageCard: true,
    background: "bg-white",
    textColor: "text-slate-900",
    hover: "group-hover:text-orange-500",
    span: "md:col-span-8",
    reverse: true,
  },
];
