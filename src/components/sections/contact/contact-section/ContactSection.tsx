"use client";

import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section
      className="
        mb-32
        px-margin-mobile
        md:px-margin-desktop
      "
    >
      <div
        className="
          mx-auto
          grid
          max-w-7xl
          gap-8
          lg:grid-cols-12
        "
      >
        <div className="lg:col-span-5">
          <ContactInfo />
        </div>

        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
