"use client";

import ContactCard from "./ContactCard";
import SocialLinks from "./SocialLinks";
import { contactCards } from "./contact-data";

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      {contactCards.map((item) => (
        <ContactCard key={item.title} item={item} />
      ))}

      <SocialLinks />
    </div>
  );
}
