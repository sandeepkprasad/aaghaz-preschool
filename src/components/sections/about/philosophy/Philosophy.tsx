"use client";

import PhilosophyHeader from "./PhilosophyHeader";
import PhilosophyImageCard from "./PhilosophyImageCard";
import PhilosophyCard from "./PhilosophyCard";
import { philosophy } from "./philosophy-data";

export default function Philosophy() {
  return (
    <section className="relative overflow-hidden rounded-[100px] bg-emerald-50/40 px-6 py-32">
      <div className="absolute -left-32 top-16 h-80 w-80 rounded-full bg-emerald-100/40 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-orange-100/40 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        <PhilosophyHeader />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          {philosophy.map((item, index) => (
            <div key={item.title} className={item.span}>
              {item.imageCard ? (
                <PhilosophyImageCard item={item} index={index} />
              ) : (
                <PhilosophyCard item={item} index={index} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
