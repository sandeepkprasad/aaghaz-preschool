import { Baby, School, Lightbulb } from "lucide-react";

export const programs = [
  {
    heading: "PLAY GROUP",
    title: "Little Explorers",
    age: "1.5 - 2.5 Yrs",
    description:
      "Fostering independence and motor skill development in a safe, nurturing environment.",
    icon: Baby,
    background: "bg-[#E8F5F1]",
    text: "text-emerald-600",
    button: "text-emerald-600",
    hover: "hover:bg-emerald-600",
  },
  {
    heading: "NURSERY",
    title: "Preschool Path",
    age: "2.5 - 3.5 Yrs",
    description:
      "Building social bridges and academic foundations through hands-on Montessori activities.",
    icon: School,
    background: "bg-[#FFF0E5]",
    text: "text-orange-500",
    button: "text-orange-500",
    hover: "hover:bg-orange-500",
    featured: true,
  },
  {
    heading: "LKG/UKG",
    title: "Bright Futures",
    age: "3.5 - 5 Yrs",
    description:
      "Preparing children for the transition to primary school with confidence and creativity.",
    icon: Lightbulb,
    background: "bg-[#F2EBFF]",
    text: "text-violet-500",
    button: "text-violet-500",
    hover: "hover:bg-violet-500",
  },
];
