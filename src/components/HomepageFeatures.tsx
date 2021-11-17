import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import FeatureCard from "./FeatureCard";
import { FeatureList } from "./FeatureList";

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
      item
      xs={11}
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
        <Grid item key={props.title} sm={12} md={6} xl={4}>
          <FeatureCard {...props} />
        </Grid>
      ))}
    </Grid>
  );
}
