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
      <div className="h-72 w-full mt-28 absolute -z-50 rounded-b-3xl bg-gradient-to-b from-event-300 via-event-200 to-event-400"></div>
      <SpeakerDetails speakerId={id} />
      <Footer />
    </>
  );
};

export default SpeakerPage;
