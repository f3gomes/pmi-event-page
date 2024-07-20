import SponsorCard from "../sponsor-card";

const sponsorList = [
  {
    logo: "/logo/makevalue-bronze.png",
    medal: "bronze",
    fill: "#CD7F32",
  },
  {
    logo: "/logo/hub-prata.png",
    medal: "prata",
    fill: "#C0C0C0",
  },
  {
    logo: "/logo/unifor-ouro.png",
    medal: "ouro",
    fill: "#FFD700",
  },
  {
    logo: "/logo/moldsoft-diamante.png",
    medal: "diamante",
    fill: "#C6D9FD",
  },
];

const SponsorSection = () => {
  return (
    <section
      id="sponsor"
      className="flex items-center mx-auto justify-center gap-16 flex-col px-6 py-12 scroll-mt-20"
    >
      <h1 className="block antialiased tracking-normal font-sans text-3xl font-semibold leading-snug text-inherit text-center">
        Patrocinadores
      </h1>

      <div className="flex gap-6 flex-wrap justify-center">
        {sponsorList
          .map((item) => {
            return (
              <SponsorCard key={item.medal} img={item.logo} fill={item.fill} />
            );
          })
          .reverse()}
      </div>
    </section>
  );
};

export default SponsorSection;
