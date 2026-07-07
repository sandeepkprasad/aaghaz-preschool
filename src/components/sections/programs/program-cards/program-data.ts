import { Baby, Palette, BookOpen, House, Sun } from "lucide-react";

export const programs = [
  {
    title: "Playgroup",
    age: "Age: 1.5 - 2.5 Years",

    icon: Baby,

    color: "emerald",

    heading: "Focus",

    description:
      "Sensory exploration, motor skill development, and social interaction through play.",

    listTitle: "Daily Routine",

    items: ["Circle Time", "Sensory Play", "Storytelling"],

    button: "Learn More",

    featured: false,
  },

  {
    title: "Preschool (Nursery)",

    age: "Age: 2.5 - 3.5 Years",

    icon: Palette,

    color: "orange",

    heading: "Activities",

    description:
      "Phonics introduction, basic arithmetic and creative expression through messy art.",

    listTitle: "Benefits",

    items: [
      "Language Proficiency",
      "Cognitive Development",
      "Self-Help Skills",
    ],

    button: "Enroll Now",

    featured: true,
  },

  {
    title: "Kindergarten",

    age: "Age: 3.5 - 5.5 Years",

    icon: BookOpen,

    color: "violet",

    heading: "Learning Focus",

    description:
      "Advanced phonics, environmental science and foundational mathematics.",

    listTitle: "Daily Routine",

    items: ["Science Lab", "Library Time", "Public Speaking"],

    button: "Learn More",

    featured: false,
  },

  {
    title: "Daycare",

    age: "8:00 AM - 6:00 PM",

    icon: House,

    color: "emerald",

    heading: "Environment",

    description:
      "A home-away-from-home with nutritious meals and safe play areas.",

    listTitle: "Features",

    items: ["Live CCTV Access", "Nutritious Meals", "Safe Pickup"],

    button: "Learn More",

    featured: false,
  },

  {
    title: "Summer Camp",

    age: "Up to 10 Years",

    icon: Sun,

    color: "slate",

    heading: "Adventures",

    description:
      "Robotics, sports, outdoor activities and creativity workshops.",

    listTitle: "Special Benefit",

    items: ["Industry Experts", "Creative Workshops", "Outdoor Learning"],

    button: "Join the Fun",

    featured: false,
  },
];
