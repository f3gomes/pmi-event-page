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
      <Navbar />
      <SpeakerDetails speakerId={id} />
      <Footer />
    </>
  );
};

export default SpeakerPage;
