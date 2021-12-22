export type FeatureItem = {
  title: string;
  image: string;
  description: string;
  linkTo: string;
};

export const FeatureList: FeatureItem[] = [
  {
    title: "Introduction",
    image: "/img/information.svg",
    description:
      "Learn about Switchboard and how it enables the community to dictate what data lives   on-chain",
    linkTo: "/introduction",
  },
  {
    title: "Architecture",
    image: "/img/blueprint.svg",
    description:
      "Learn about the different Switchboard components and how they interact",

    linkTo: "/architecture",
  },
  {
    title: "On-Chain",
    image: "/img/solana-gradient.svg",
    description:
      "Learn how to read Switchboard data on-chain and resolve data feed updates",

    linkTo: "/reading-a-data-feed",
  },
  {
    title: "Oracle",
    image: "/img/atom.svg",
    description:
      "Learn how to contribute to the network and process data feed updates",
    linkTo: "/oracle",
  },
  {
    title: "Develop",
    image: "/img/package.svg",
    description: "Learn how to develop with Switchboard and use the APIs",
    linkTo: "/developers",
  },
  {
    title: "Explore",
    image: "/img/search.svg",
    description: "Explore what data Switchboard currently provides on-chain",
    linkTo: "https://switchboard.xyz/explorer",
  },
];
