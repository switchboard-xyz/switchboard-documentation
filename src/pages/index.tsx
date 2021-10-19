import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import useThemeContext from "@theme/hooks/useThemeContext";
import {
  createTheme,
  ThemeProvider,
  ThemeOptions,
  responsiveFontSizes,
} from "@mui/material/styles";
import { deepPurple, teal } from "@mui/material/colors";

// export const themeOptions: ThemeOptions = {
//   palette: {
//     mode: "light",
//     primary: {
//       main: deepPurple[500],
//     },
//     secondary: {
//       main: teal[500],
//     },
//     background: {
//       default: "#232f3e",
//       // paper: "#232f3e",
//     },
//   },
// };
// let theme = createTheme(themeOptions);
// theme = responsiveFontSizes(theme);

function HomePageHeader() {
  const { isDarkTheme } = useThemeContext();
  const bgColor = isDarkTheme
    ? "rgba(99, 91, 255, 0.75)"
    : "rgba(99, 91, 255, 1)";
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: bgColor,
      }}
      elevation={0}
      className={clsx("hero hero--primary", styles.heroBanner)}
    >
      <Typography color="initial" variant="h2">
        Switchboard
      </Typography>
      <Typography
        sx={{ textAlign: "center", md: { maxWidth: "50%" } }}
        variant="body1"
        color="initial"
      >
        Community-driven, decentralized oracle network built on Solana that
        allows anyone to publish on-chain data for smart contract developers to
        reliably build upon
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Button
        component={Link}
        variant="contained"
        to="/docs"
        color="secondary"
        size="large"
      >
        ◎ Switchboard Docs ◎
      </Button>
    </Paper>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    // <ThemeProvider theme={theme}>
    <Layout
      title={`${siteConfig.title}`}
      description="Documentation for Switchboard V2"
    >
      <main>
        <HomepageFeatures />
        <Box sx={{ height: 20 }} />
      </main>
    </Layout>
    // </ThemeProvider>
  );
}
