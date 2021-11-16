import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import FeatureCard from "./FeatureCard";

export type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
  linkTo: string;
};

export default function HomepageFeatures(): JSX.Element {
  return (
    <Grid
      container
      xs={12}
      lg={9}
      md={10}
      spacing={3}
      direction="row"
      justifyContent="center"
      alignItems="center"
      display="flex"
      sx={{ m: "auto", textAlign: "center" }}
    >
      {FeatureList.map((props, idx) => (
        <Grid item sm={12} md={6} xl={4}>
          <FeatureCard key={props.title} {...props} />
        </Grid>
      ))}
    </Grid>
  );
}

const FeatureList: FeatureItem[] = [
  {
    title: "Introduction",
    image: "/img/information.svg",
    description: (
      <>
        Learn about Switchboard and how it enables the community to dictate what
        data lives on-chain
      </>
    ),
    linkTo: "/about",
  },
  {
    title: "Architecture",
    image: "/img/blueprint.svg",
    description: (
      <>
        Learn about the different Switchboard components and how they interact
      </>
    ),
    linkTo: "/architecture",
  },
  {
    title: "On-Chain",
    image: "/img/solana-gradient.svg",
    description: (
      <>
        Learn how to read Switchboard data on-chain and resolve data feed
        updates
      </>
    ),
    linkTo: "/reading-a-data-feed",
  },
  {
    title: "Oracle",
    image: "/img/atom.svg",
    description: (
      <>Learn how to contribute to the network and process data feed updates</>
    ),
    linkTo: "/oracle",
  },
  {
    title: "Develop",
    image: "/img/package.svg",
    description: <>Learn how to develop with Switchboard and use the APIs</>,
    linkTo: "/developers",
  },
  {
    title: "Explore",
    image: "/img/search.svg",
    description: <>Explore what data Switchboard currently provides on-chain</>,
    linkTo: "https://switchboard.xyz/explorer",
  },
];
