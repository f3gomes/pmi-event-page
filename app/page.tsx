import { Suspense } from "react";
import Hero from "@/components/hero";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import AboutEvent from "@/components/about";
import TimerContent from "@/components/timer-content";
import SpeakerSection from "@/components/speaker-section";
import Loading from "./loading";
import SponsorSection from "@/components/sponsor-section";
import EventLocation from "@/components/event-location";

export default function Home() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Navbar home />
        <Hero />
      </Suspense>
      <AboutEvent />
      <SpeakerSection />
      <SponsorSection />
      <TimerContent />
      <EventLocation />
      <Footer />
    </>
  );
}
