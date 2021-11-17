import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import FeatureCard from "./FeatureCard";
import { FeatureList } from "./FeatureList";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
  linkTo: string;
};

export default function HomepageFeatures(): JSX.Element {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"), {
    defaultMatches: true,
  });
  return (
    <Grid
      container
      item
      xs={11}
      lg={9}
      md={10}
      spacing={isMobile ? 2 : 6}
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
