export type FeatureItem = {
  title: string;
  image: string;
  description: string;
  linkTo: string;
};

export const FeatureList: FeatureItem[] = [
  {
    title: "Introduction",
    image: "/img/info.png",
    description:
      "Learn about Switchboard and how it enables the community to dictate what data lives on-chain.",
    linkTo: "/introduction",
  },
  {
    title: "Architecture",
    image: "/img/arc.png",
    description:
      "Learn about the different Switchboard components and how they interact.",

    linkTo: "/architecture",
  },
  {
    title: "On-Chain",
    image: "/img/sol.png",
    description:
      "Learn how to read Switchboard data on-chain and resolve data feed updates.",

    linkTo: "/developers/js",
  },
  {
    title: "Oracle",
    image: "/img/oracle.png",
    description:
      "Learn how to contribute to the network and process data feed updates.",
    linkTo: "/oracle",
  },
  {
    title: "Develop",
    image: "/img/developers.png",
    description: "Learn how to develop with Switchboard and use the APIs.",
    linkTo: "/developers",
  },
  {
    title: "Explore",
    image: "/img/explore.png",
    description: "Explore what data Switchboard currently provides on-chain.",
    linkTo: "https://switchboard.xyz/explorer",
  },
];
