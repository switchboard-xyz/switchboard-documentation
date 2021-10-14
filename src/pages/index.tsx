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
import { Box, Divider, Paper, Typography } from "@mui/material";
import useThemeContext from "@theme/hooks/useThemeContext";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs">
            ◎ Switchboard Docs ◎
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomePageHeader() {
  const { isDarkTheme } = useThemeContext();
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: isDarkTheme
          ? "rgba(99, 91, 255, 0.75)"
          : "rgba(99, 91, 255, 1)",
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
    </Paper>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Documentation for Switchboard V2"
    >
      <main>
        <HomePageHeader />
        <Box sx={{ m: 4 }}>
          <Divider sx={{ my: 2 }} />
          <HomepageFeatures />
        </Box>
      </main>
    </Layout>
  );
}
