"use client";

import { EVENT_CONTENT } from "@/data/event-data";
import SpeakerCard from "../speaker-card";

const SpeakerSection = () => {
  return (
    <section
      id="speakers"
      className="py-12 md:px-8 scroll-mt-20 bg-gradient-to-b from-event-300 via-event-200 to-event-400"
    >
      <div className="mx-auto flex justify-center flex-wrap gap-6 gap-y-6">
        {EVENT_CONTENT.map((props) => (
          <SpeakerCard key={props.id} {...props} />
        ))}
      </div>
    </section>
  );
};

export default SpeakerSection;
