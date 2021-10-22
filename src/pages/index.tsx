import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageFeatures from "../components/HomepageFeatures";
import { Box } from "@mui/material";
import Theme from "../theme";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Documentation for Switchboard V2"
    >
      <main>
        <HomepageFeatures />
        <Box sx={{ height: 20 }} />
      </main>
    </Layout>
  );
}
