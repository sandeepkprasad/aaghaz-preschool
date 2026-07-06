"use client";

import TestimonialsHeader from "./TestimonialsHeader";
import TestimonialCard from "./TestimonialCard";

import { testimonials } from "./testimonials-data";

export default function Testimonials() {
  return (
    <section className="overflow-hidden px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-20 lg:grid-cols-3">
          <TestimonialsHeader />

          <div className="grid gap-8 lg:col-span-2 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.name}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
