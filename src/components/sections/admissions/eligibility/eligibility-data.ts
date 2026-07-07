import { Leaf, Palette, Calculator } from "lucide-react";

export const eligibilityPrograms = [
  {
    title: "Toddler Nest",

    age: "1.5 - 2.5 Years",

    description:
      "Focusing on sensory exploration and social-emotional growth in a safe, warm environment.",

    icon: Leaf,

    color: "emerald",

    features: ["Language Immersion", "Motor Skill Dev"],
  },

  {
    title: "Young Creators",

    age: "2.5 - 3.5 Years",

    description:
      "Encouraging independence through Montessori practical life activities and creative arts.",

    icon: Palette,

    color: "orange",

    featured: true,

    features: ["Practical Life Skills", "Phonetic Awareness"],
  },

  {
    title: "Kindergarten",

    age: "3.5 - 5.5 Years",

    description:
      "Preparing students for academic excellence with a focus on logic, numeracy and empathy.",

    icon: Calculator,

    color: "violet",

    features: ["STEM Foundation", "Critical Thinking"],
  },
];
