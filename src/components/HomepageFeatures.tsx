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
import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Typography,
} from "@mui/material";

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
    <Link to={linkTo}>
      <Card
        sx={{
          maxWidth: 345,
          backgroundColor: "inherit",
        }}
        elevation={0}
      >
        <CardActionArea sx={{ alignItems: "center" }}>
          <CardContent>
            <Typography
              color="initial"
              gutterBottom
              variant="h5"
              component="div"
            >
              {title}
            </Typography>
            <Typography variant="body2" color="initial">
              {description}
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            height="275"
            image={useBaseUrl(image)}
            alt="feature card"
            sx={{ width: 200, height: 200 }}
          />
        </CardActionArea>
      </Card>
    </Link>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
