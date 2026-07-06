"use client";

import GalleryItem from "./GalleryItem";
import { galleryImages } from "./gallery-data";

export default function GalleryGrid() {
  return (
    <div
      className="
        columns-1
        gap-8
        space-y-8
        sm:columns-2
        lg:columns-3
      "
    >
      {galleryImages.map((image, index) => (
        <GalleryItem key={index} image={image} index={index} />
      ))}
    </div>
  );
}
