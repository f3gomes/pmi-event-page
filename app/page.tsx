import AboutEvent from "@/components/about/about";
import EventContent from "@/components/event-content/event-contet";
import Footer from "@/components/footer/footer";
import Hero from "@/components/hero/hero";
import Navbar from "@/components/navbar/navbar";
import { TimerContent } from "@/components/timer-content/timer-content";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutEvent />
      <EventContent />
      <TimerContent />
      <Footer />
    </>
  );
}
