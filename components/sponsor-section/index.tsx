import SponsorCard from "../sponsor-card";

const sponsorList = [
  {
    logo: "/logo/makevalue-bronze.png",
    medal: "bronze",
    fill: "#CD7F32",
    text: "text-[#CD7F32]",
    bg: "bg-[#CD7F32]",
  },
  {
    logo: "/logo/hub-prata.png",
    medal: "prata",
    fill: "#C0C0C0",
    text: "text-[#C0C0C0]",
    bg: "bg-[#C0C0C0]",
  },
  {
    logo: "/logo/tecnovetti-ouro.png",
    medal: "ouro",
    fill: "#FFD700",
    text: "text-[#FFD700]",
    bg: "bg-[#FFD700]",
  },
  {
    logo: "/logo/unifor-ouro.png",
    medal: "ouro",
    fill: "#FFD700",
    text: "text-[#FFD700]",
    bg: "bg-[#FFD700]",
  },
  {
    logo: "/logo/moldsoft-diamante.png",
    medal: "diamante",
    fill: "#87a2d3",
    text: "text-[#87a2d3]",
    bg: "bg-[#87a2d3]",
  },
];

const SponsorSection = () => {
  return (
    <section
      id="sponsor"
      className="flex items-center mx-auto justify-center gap-8 flex-col px-6 py-14 scroll-mt-20"
    >
      <h1 className="block antialiased tracking-normal text-3xl font-semibold leading-snug text-inherit text-center">
        Patrocinadores
      </h1>

      <div className="flex gap-6 flex-wrap justify-center">
        {sponsorList
          .map((item) => {
            return (
              <SponsorCard
                bg={item.bg}
                key={item.medal}
                img={item.logo}
                medal={item.medal}
                text={item.text}
              />
            );
          })
          .reverse()}
      </div>
    </section>
  );
};

export default SponsorSection;
