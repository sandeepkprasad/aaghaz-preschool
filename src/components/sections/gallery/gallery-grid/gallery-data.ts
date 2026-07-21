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
    category: "Play",
    image: "/images/gallery/montessori_classroom.png",
    ratio: "auto",
    rotate: "left",
    icon: Heart,
  },

  {
    title: "Indoor Play Room",
    category: "Play Area",
    image: "/images/gallery/play_room.png",
    ratio: "auto",
    rotate: "right",
    icon: Sparkles,
  },

  {
    title: "Little Artists Workshop",
    category: "Activities",
    image: "/images/gallery/children_playing.png",
    ratio: "square",
  },

  {
    title: "Summer Outdoor Exploration",
    category: "Events",
    image: "/images/gallery/playing.png",
    ratio: "auto",
    rotate: "left",
  },

  {
    title: "Happy Little Learner",
    category: "Student Life",
    image: "/images/gallery/child_closeup.png",
    ratio: "portrait",
    rotate: "right",
    icon: Search,
  },

  {
    title: "Creative Learning Activities",
    category: "Classroom Activities",
    image: "/images/common/classroom_activity_4.png",
    ratio: "square",
  },
];
