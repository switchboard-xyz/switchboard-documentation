import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageFeatures from "../components/HomepageFeatures";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Box } from "@mui/material";
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
let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <ThemeProvider theme={theme}>
      <Layout
        title={`${siteConfig.title}`}
        description="Documentation for Switchboard V2"
      >
        <main>
          <HomepageFeatures />
          <Box sx={{ height: 20 }} />
        </main>
      </Layout>
    </ThemeProvider>
  );
}
