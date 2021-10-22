import React from "react";
import useThemeContext from "@theme/hooks/useThemeContext";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
  createTheme,
  ThemeProvider,
  ThemeOptions,
  responsiveFontSizes,
} from "@mui/material/styles";
import { deepPurple, teal } from "@mui/material/colors";

const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: deepPurple[500],
    },
    secondary: {
      main: teal[500],
    },
    background: {
      default: "#232f3e",
      // paper: "#232f3e",
    },
    text: {
      primary: "rgb(0,0,0)",
    },
  },
};
const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: deepPurple[500],
    },
    text: {
      primary: "rgb(255,255,255)",
    },
  },
};

const lightTheme = responsiveFontSizes(createTheme(lightThemeOptions));
const darkTheme = responsiveFontSizes(createTheme(darkThemeOptions));

export type ThemeProps = {
  children?: React.ReactChild | React.ReactChild[];
};

export default function Theme(props: ThemeProps): JSX.Element {
  const { isDarkTheme } = useThemeContext();
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      {props.children}
    </ThemeProvider>
  );
}
