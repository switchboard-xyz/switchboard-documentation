import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from "@docusaurus/Link";
import {
  Box,
  Button,
  Card,
  Typography,
  Grid,
  CardContent,
} from "@mui/material";
import { FeatureItem } from "./HomepageFeatures";
import useThemeContext from "@theme/hooks/useThemeContext";

const XS_ICON = 75;
const SM_ICON = 100;
const MD_ICON = 100;
const LG_ICON = 125;
const XL_ICON = 150;

export default function FeatureCard({
  title,
  image,
  description,
  linkTo,
}: FeatureItem) {
  const { isDarkTheme } = useThemeContext();
  return (
    <Link to={linkTo}>
      <Card
        sx={{
          backgroundColor: isDarkTheme
            ? "rgba(238, 238, 238, 0.1)"
            : "transparent",
          color: isDarkTheme ? "rgb(225, 229, 235)" : "rgb(23, 23, 23)",
          width: "100%",
          height: "100%",
          maxWidth: {
            md: "100%",
            lg: 500,
          },
          minHeight: {
            sm: "100%",
            md: MD_ICON,
            lg: LG_ICON,
            xl: XL_ICON,
          },
          textAlign: "center",
          borderRadius: 10,
          "&:hover": {
            backgroundColor: "rgba(99, 91, 255, 0.2)",
          },
          boxShadow:
            "0px 3px 1px -2px pink,0px 2px 2px 0px rgb(99, 91, 255),0px 1px 5px 0px rgb(99, 91, 255)",
        }}
      >
        <CardContent>
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            spacing={2}
          >
            <Grid item md={4}>
              <Box
                component="img"
                src={useBaseUrl(image)}
                alt="feature card"
                sx={{
                  height: {
                    xs: XS_ICON,
                    sm: SM_ICON,
                    md: MD_ICON,
                    lg: LG_ICON,
                    xl: XL_ICON,
                  },
                  width: {
                    xs: XS_ICON,
                    sm: SM_ICON,
                    md: MD_ICON,
                    lg: LG_ICON,
                    xl: XL_ICON,
                  },
                }}
              />
            </Grid>
            <Grid item xs={8} sm={8}>
              <Typography gutterBottom variant="h5">
                {title}
              </Typography>
              <Typography variant="body2">{description}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Link>
  );
}
