import { DoorOpen, Camera, Trees, Puzzle } from "lucide-react";

export const facilities = [
  {
    title: "Sun-Drenched Classrooms",
    description:
      "Designed with low-set windows and non-toxic materials for a healthy learning environment.",
    image: "/images/facilities/classroom.jpg",
    icon: DoorOpen,
    type: "large",
  },

  {
    title: "Secured with Care",
    description:
      "Full-campus CCTV monitoring with secure parent access for peace of mind, every second of the day.",
    icon: Camera,
    type: "cctv",
  },

  {
    title: "Organic Play Zone",

    description:
      "Soft-impact flooring and wooden climbing frames designed to build motor skills naturally.",

    image: "/images/facilities/playground.jpg",

    icon: Trees,

    type: "playground",
  },

  {
    title: "Montessori Lab",

    description:
      "Authentic Montessori materials encouraging tactile exploration, mathematical logic and sensory refinement.",

    image: "/images/facilities/materials.jpg",

    icon: Puzzle,

    tags: ["Sensory Brushes", "Pink Tower", "Golden Beads"],

    type: "lab",
  },
];
