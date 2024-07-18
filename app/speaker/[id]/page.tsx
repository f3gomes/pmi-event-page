import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import SpeakerDetails from "@/components/speaker-card-details";

interface SpeakerPageProps {
  params: {
    id: string;
  };
}

const SpeakerPage = ({ params: { id } }: SpeakerPageProps) => {
  return (
    <>
      <Navbar home={false} />
      <div className="h-72 mt-28 -mb-96 xl:-mb-[25rem] rounded-b-3xl bg-gradient-to-b from-event-300 via-event-200 to-event-400"></div>
      <div className="h-6"></div>
      <SpeakerDetails speakerId={id} />
      <Footer />
    </>
  );
};

export default SpeakerPage;

// bg-gradient-to-b from-event-300 via-event-200 to-event-400
