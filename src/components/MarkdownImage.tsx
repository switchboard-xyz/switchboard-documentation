import React from "react";
import { Box } from "@mui/material";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useThemeContext from "@theme/hooks/useThemeContext";

interface MarkdownImageProps {
  img: string;
  unstyled?: boolean;
  lightBg?: string;
  darkBg?: string;
  sx?: any;
}

const MarkdownImage = (props: MarkdownImageProps) => {
  const { isDarkTheme } = useThemeContext();

  let backgroundColor = "inherit";
  if (props.lightBg && !isDarkTheme) backgroundColor = props.lightBg;
  if (props.darkBg && isDarkTheme) backgroundColor = props.darkBg;

  let sx: any = {};
  if (!props.unstyled) {
    sx = {
      backgroundColor,
      width: "100%",
      textAlign: "center",
      borderRadius: 10,
      boxShadow:
        "0px 3px 1px -2px pink,0px 2px 2px 0px rgb(99, 91, 255),0px 1px 5px 0px rgb(99, 91, 255)",
    };
  }
  if (props.sx) {
    sx = {
      ...sx,
      ...props.sx,
    };
  }

  return (
    <Box sx={sx}>
      <img src={useBaseUrl(props.img)} />
    </Box>
  );
};

export default MarkdownImage;
