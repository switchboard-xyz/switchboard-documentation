import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from "@docusaurus/Link";
import {
  Box,
  Card,
  Typography,
  Grid,
  CardActionArea,
  CardContent,
  Paper,
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
    <Link to={linkTo}>
      <Card
        sx={{
          backgroundColor: "inherit",
          width: "100%",
          minHeight: 250,
          textAlign: "center",
          borderRadius: 10,
          boxShadow:
            "0px 3px 1px -2px red,0px 2px 2px 0px rgb(99, 91, 255),0px 1px 5px 0px rgb(99, 91, 255)",
        }}
        elevation={isDarkTheme ? 15 : 5}
      >
        <CardContent>
          <Grid container alignItems="center" justifyContent="center" xs={12}>
            <Grid item xs={6} md={4}>
              <Box
                component="img"
                src={useBaseUrl(image)}
                alt="feature card"
                sx={{ width: 200, height: 200 }}
              />
            </Grid>
            <Grid item xs={8}>
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
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Link>
  );
}