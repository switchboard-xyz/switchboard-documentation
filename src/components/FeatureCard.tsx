import Link from "@docusaurus/Link";
import { useColorMode } from "@docusaurus/theme-common";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { Card, CardContent, Divider, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/system";
import React from "react";
import { FeatureItem } from "./FeatureList";

const StyledCard = styled(Card)<{ dark: number }>(({ theme, dark }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "stretch",
  textAlign: "left",
  backgroundColor: dark ? theme.palette.footer.background : theme.palette.white,
  position: "relative",
  borderRadius: "13.2px",
  boxShadow: `0 6px 7px 5px rgba(${dark ? "107 107 107" : "86, 86, 86"}, 0.03)`,
  [theme.breakpoints.down(300)]: {
    paddingLeft: "",
  },
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
  whiteSpace: "nowrap",
  fontSize: 22,
  marginLeft: "22px",
  fontWeight: 600,
  letterSpacing: "0.16px",

  [theme.breakpoints.down(300)]: {
    marginLeft: "10px",
  },
}));

const StyledDescription = styled(Typography)(({ theme }) => ({
  fontSize: 18.5,
  margin: "20px 0px 0px",
  height: "110px",
  lineHeight: 1.29,
  letterSpacing: "0.44px",
  [theme.breakpoints.down(400)]: {
    fontSize: "17px",
  },
  [theme.breakpoints.down(300)]: {
    fontSize: 13,
  },
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  padding: "21px",
  [theme.breakpoints.down(300)]: {
    paddingLeft: "10px",
    paddingRight: "10px",
  },
}));

export function FeatureCard({
  title,
  image,
  description,
  linkTo,
}: FeatureItem) {
  const { colorMode } = useColorMode();
  const theme = useTheme();

  return (
    <StyledCard dark={colorMode === "dark" ? 1 : 0}>
      <StyledCardContent>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              backgroundColor: "#4c6fff",
              borderRadius: "8px",
              height: 48,
              width: 48,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={useBaseUrl(image)}
              alt="feature card"
              height={26}
              width={26}
            />
          </div>
          <StyledTitle
            sx={{
              color: colorMode === "dark" ? "#dbdbdb" : "#0b3863",
            }} /* sx={{ color: isDarkTheme ? "#dbdbdb" : "#0b3863" }} */
          >
            {title}
          </StyledTitle>
        </div>
        <StyledDescription
          variant="body2"
          sx={{
            color: colorMode === "dark" ? "#dbdbdb" : "#313e79",
          }}
          /* sx={{ color: isDarkTheme ? "#dbdbdb" : "#313e79" }} */
        >
          {description}
        </StyledDescription>
        <div
          style={{
            width: "100%",
            height: "31px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Divider
            sx={{
              margin: "0px -21px 15px",
              borderColor: colorMode === "dark" ? "gray" : "Active Border",
              /* borderColor: isDarkTheme ? "gray" : "Active Border", */
            }}
          />
          <Link
            to={linkTo}
            style={{
              fontWeight: "bold",
              alignSelf: "flex-end",
              fontSize: 14,
              marginRight: "21px",
            }}
          >
            View More
          </Link>
        </div>
      </StyledCardContent>
    </StyledCard>
  );
}
