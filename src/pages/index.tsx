import React from "react";
import Layout from "@theme/Layout";
import { SwitchboardApplication } from "@switchboard-xyz/sdl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageFeatures from "../components/HomepageFeatures";
import { Box } from "@mui/material";
import { styled } from "@mui/system";
import useThemeContext from "@theme/hooks/useThemeContext";

const StyledMain = styled("main")<{ dark: boolean }>(({ theme, dark }) => ({
  backgroundColor: dark ? "#1f354b" : theme.palette.pageBackground.secondary,
  padding: "50px 32px 90px",
  width: "100vw",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down(966)]: {
    padding: "50px 32px 90px",
  },
}));

const Main = () => {
  const { isDarkTheme } = useThemeContext();
  return (
    <StyledMain dark={isDarkTheme}>
      <HomepageFeatures />
      <Box sx={{ height: 20 }} />
    </StyledMain>
  );
};

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <SwitchboardApplication>
      <Layout
        title={`${siteConfig.title}`}
        description="Documentation for Switchboard V2"
      >
        <Main />
      </Layout>
    </SwitchboardApplication>
  );
}
