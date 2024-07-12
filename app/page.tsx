import AboutEvent from "@/components/about";
import EventContent from "@/components/event-content";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import TimerContent from "@/components/timer-content";

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
