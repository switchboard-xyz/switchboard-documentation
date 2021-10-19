/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from "@docusaurus/Link";
import {
  Box,
  Card,
  Typography,
  Grid,
  CardActionArea,
  Paper,
} from "@mui/material";
import FeatureCard, { FeatureItem } from "./FeatureCard";

const FeatureList: FeatureItem[] = [
  {
    title: "Introduction",
    image: "/img/undraw_docusaurus_mountain.svg",
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
    image: "/img/undraw_docusaurus_tree.svg",
    description: (
      <>
        Learn about the different Switchboard components and how they interact
      </>
    ),
    linkTo: "/docs/architecture",
  },
  {
    title: "On-Chain",
    image: "/img/undraw_docusaurus_react.svg",
    description: (
      <>
        Learn how to consume Switchboard data on-chain and resolve data feed
        updates
      </>
    ),
    linkTo: "/docs/developers",
  },
  {
    title: "Oracle",
    image: "/img/undraw_docusaurus_react.svg",
    description: (
      <>Learn how to contribute to the network and process data feed updates</>
    ),
    linkTo: "/docs/developers",
  },
  {
    title: "Develop",
    image: "/img/undraw_docusaurus_react.svg",
    description: <>Learn how to develop with Switchboard and use the APIs</>,
    linkTo: "/docs/developers",
  },
  {
    title: "Explore",
    image: "/img/undraw_docusaurus_tree.svg",
    description: <>Explore what data Switchboard currently provides on-chain</>,
    linkTo: "https://switchboard.xyz/explorer",
  },
];

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
      sx={{ m: "auto" }}
    >
      {FeatureList.map((props, idx) => (
        <Grid item xs={11} md={4}>
          <FeatureCard key={props.title} {...props} />
        </Grid>
      ))}
    </Grid>
  );
}
