import { DoorOpen, Camera, Trees, Puzzle } from "lucide-react";

export const facilities = [
  {
    title: "Montessori Learning Environment",
    description:
      "Thoughtfully designed spaces filled with interactive materials that encourage independent learning, creativity, and joyful exploration.",
    image: "/images/gallery/activity.png",
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
    title: "Indoor Play Area",

    description:
      "Designed for active play and joyful exploration, our indoor play area encourages movement, creativity, and meaningful interactions in a safe environment.",

    image: "/images/gallery/play_room.png",

    icon: Trees,

    type: "playground",
  },

  {
    title: "Moments of Discovery",

    description:
      "From creative art and sensory exploration to collaborative play and early learning, every moment at Aaghaz is designed to spark curiosity and joyful growth.",

    image: "/images/gallery/children_activity.png",

    icon: Puzzle,

    tags: ["Art & Craft", "Group Learning", "Creative Exploration"],

    type: "lab",
  },
];
