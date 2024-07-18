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
    <div className="flex flex-col">
      <Navbar />

      <div className="flex justify-center mt-28 h-screen bg-gradient-to-b from-event-300 via-event-200 to-event-400">
        <SpeakerDetails speakerId={id} />
      </div>

      <div className="-mt-28">
        <Footer />
      </div>
    </div>
  );
};

export default SpeakerPage;
