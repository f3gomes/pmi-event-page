import Image from "next/image";

const EventLocation = () => {
  return (
    <section
      id="location"
      className="flex items-center justify-center gap-10 flex-col py-12 px-4 scroll-mt-20"
    >
      <h1 className="block antialiased tracking-normal text-3xl font-semibold leading-snug text-inherit text-center">
        Local do Evento
      </h1>

      <div className="flex gap-6 flex-wrap justify-center max-w-full">
        <div>
          <div className="">
            <iframe
              width="720"
              height="480"
              className="max-w-full"
              src="https://maps.google.com/maps?width=72025&amp;height=600&amp;hl=en&amp;q=Hotel%20Oasis%20atlantico+(Congresso%20Regional)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        </div>

        <div>
          <Image
            width={720}
            height={600}
            alt="hotel"
            src={"/img/page/hotel.jpeg"}
            className="max-w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default EventLocation;
