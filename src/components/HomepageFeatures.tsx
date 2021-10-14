/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import styles from "./HomepageFeatures.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from "@docusaurus/Link";
import { Box, Card, Typography, Grid, CardActionArea } from "@mui/material";

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
  linkTo: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Learn",
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
    title: "Explore",
    image: "/img/undraw_docusaurus_tree.svg",
    description: <>Explore what data Switchboard currently provides on-chain</>,
    linkTo: "https://switchboard.xyz/explorer",
  },
  {
    title: "Develop",
    image: "/img/undraw_docusaurus_react.svg",
    description: (
      <>Learn how to develop with Switchboard and contribute to the network</>
    ),
    linkTo: "/docs/developers",
  },
];

function Feature({ title, image, description, linkTo }: FeatureItem) {
  return (
    <Card sx={{ backgroundColor: "inherit" }} elevation={2}>
      <CardActionArea>
        <Link to={linkTo} style={{ textDecoration: "none" }}>
          <Grid
            container
            xs={12}
            spacing={0}
            direction="column"
            alignItems="center"
            sx={{ marginTop: 3, textAlign: "center" }}
          >
            <Grid item>
              <Typography
                color="initial"
                gutterBottom
                variant="h5"
                component="div"
              >
                {title}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" color="initial">
                {description}
              </Typography>
            </Grid>
            <Grid item>
              <Box
                component="img"
                src={useBaseUrl(image)}
                alt="feature card"
                sx={{ width: 200, height: 200 }}
              />
            </Grid>
          </Grid>
        </Link>
      </CardActionArea>
    </Card>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <Grid
      container
      xs={12}
      spacing={2}
      direction="row"
      justifyContent="space-evenly"
      alignItems="flex-start"
      sx={{ marginTop: 3 }}
    >
      {FeatureList.map((props, idx) => (
        <Grid item md={3} xs={12}>
          <Feature key={idx} {...props} />
        </Grid>
      ))}
    </Grid>
  );
}
