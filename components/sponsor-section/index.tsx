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
    <div
      id="sponsor"
      className="flex items-center justify-center gap-16 flex-col min-h-[26rem] p-6"
    >
      <h1 className="text-4xl font-medium text-center">Patrocinadores</h1>

      <div className="flex gap-6 flex-wrap justify-center">
        {sponsorList
          .map((item) => {
            return (
              <SponsorCard key={item.medal} img={item.logo} fill={item.fill} />
            );
          })
          .reverse()}
      </div>
    </div>
  );
};

export default SponsorSection;
