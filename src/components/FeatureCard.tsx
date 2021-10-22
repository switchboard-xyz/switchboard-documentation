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
import useThemeContext from "@theme/hooks/useThemeContext";

export type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
  linkTo: string;
};

export default function FeatureCard({
  title,
  image,
  description,
  linkTo,
}: FeatureItem) {
  const { isDarkTheme } = useThemeContext();

  return (
    <Button
      component={Link}
      to={linkTo}
      sx={{
        textTransform: "none",
        textDecoration: "none",
        width: "100%",
        height: "100%",
      }}
    >
      <Card
        sx={{
          backgroundColor: "inherit",
          width: "100%",
          height: "100%",
          maxWidth: {
            sm: "100%",
            md: "100%",
            lg: 600,
          },
          minHeight: {
            sm: "100%",
            md: 200,
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
                  width: {
                    xs: 50,
                    sm: 100,
                    md: 200,
                  },
                  height: {
                    xs: 50,
                    sm: 100,
                    md: 200,
                  },
                }}
              />
            </Grid>
            <Grid item xs={8} sm={8}>
              <Typography gutterBottom variant="h5">
                {title}
              </Typography>
              <Typography variant="body2" color="initial">
                {description}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Button>
  );
}
