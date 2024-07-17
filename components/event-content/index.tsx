"use client";

import EventContentCard from "../event-contet-card";
import { EVENT_CONTENT } from "@/data/event-data";

export function EventContent() {
  return (
    <section
      id="event-content"
      className="py-8 md:px-8 lg:py-10 bg-gradient-to-b from-orange-300 to-orange-700"
    >
      <div className="mx-auto flex justify-center flex-wrap gap-6">
        {EVENT_CONTENT.map((props, idx) => (
          <EventContentCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default EventContent;
