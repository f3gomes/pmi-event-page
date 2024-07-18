import { Suspense } from "react";
import Hero from "@/components/hero";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import AboutEvent from "@/components/about";
import TimerContent from "@/components/timer-content";
import SpeakerSection from "@/components/speaker-section";
import Loading from "./loading";

export default function Home() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Navbar home />
        <Hero />
      </Suspense>
      <AboutEvent />
      <SpeakerSection />
      <TimerContent />
      <Footer />
    </>
  );
}
