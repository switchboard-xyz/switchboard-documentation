import React from "react";
import { Grid } from "@mui/material";
import FeatureCard, { FeatureItem } from "./FeatureCard";
import Theme from "../theme";
import useThemeContext from "@theme/hooks/useThemeContext";

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
    linkTo: "/docs",
  },
  {
    title: "Architecture",
    image: "/img/blueprint.svg",
    description: (
      <>
        Learn about the different Switchboard components and how they interact
      </>
    ),
    linkTo: "/docs/architecture",
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
    linkTo: "/docs/reading-a-data-feed",
  },
  {
    title: "Oracle",
    image: "/img/atom.svg",
    description: (
      <>Learn how to contribute to the network and process data feed updates</>
    ),
    linkTo: "/docs/oracle",
  },
  {
    title: "Develop",
    image: "/img/package.svg",
    description: <>Learn how to develop with Switchboard and use the APIs</>,
    linkTo: "/docs/developer-resources",
  },
  {
    title: "Explore",
    image: "/img/search.svg",
    description: <>Explore what data Switchboard currently provides on-chain</>,
    linkTo: "https://switchboard.xyz/explorer",
  },
];

// TO DO: Vertical align cards
export default function HomepageFeatures(): JSX.Element {
  const { isDarkTheme } = useThemeContext();
  return (
    <Theme isDarkTheme={isDarkTheme}>
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
    </Theme>
  );
}
