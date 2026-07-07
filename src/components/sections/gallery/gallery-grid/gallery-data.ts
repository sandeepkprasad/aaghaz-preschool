import { Heart, Search, Sparkles } from "lucide-react";

export type GalleryRatio = "auto" | "portrait" | "square" | "video";

export interface GalleryItem {
  image: string;
  title: string;
  category: string;
  ratio: GalleryRatio;
  rotate?: "left" | "right";
  icon?: React.ComponentType<{
    className?: string;
  }>;
}

export const gallery: GalleryItem[] = [
  {
    title: "Morning Sensorial Play",
    category: "Classroom",
    image: "/images/gallery/gallery-1.jpg",
    ratio: "auto",
    rotate: "left",
    icon: Heart,
  },

  {
    title: "Annual Graduation Day",
    category: "Celebrations",
    image: "/images/gallery/gallery-2.jpg",
    ratio: "portrait",
    rotate: "right",
    icon: Sparkles,
  },

  {
    title: "Little Artists Workshop",
    category: "Activities",
    image: "/images/gallery/gallery-3.jpg",
    ratio: "square",
  },

  {
    title: "Summer Outdoor Exploration",
    category: "Events",
    image: "/images/gallery/gallery-4.jpg",
    ratio: "video",
    rotate: "left",
  },

  {
    title: "Science & Nature Discovery",
    category: "Classroom",
    image: "/images/gallery/gallery-5.jpg",
    ratio: "portrait",
    rotate: "right",
    icon: Search,
  },

  {
    title: "Monthly Birthday Festivities",
    category: "Celebrations",
    image: "/images/gallery/gallery-6.jpg",
    ratio: "square",
  },
];
