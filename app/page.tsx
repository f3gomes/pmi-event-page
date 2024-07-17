import AboutEvent from "@/components/about";
import EventContent from "@/components/event-content";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import TimerContent from "@/components/timer-content";
import { Suspense } from "react";
import Loading from "./loading";

export default function Home() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Navbar />
        <Hero />
      </Suspense>
      <AboutEvent />
      <EventContent />
      <TimerContent />
      <Footer />
    </>
  );
}
