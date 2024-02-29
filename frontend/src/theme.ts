import { extendTheme } from "@chakra-ui/react";
const theme = extendTheme({
  colors: {
    light: {
      bg: "white",
      text: "#171923",
    },
    dark: {
      bg: "#1A202C",
      text: "white",
    },
  },
  fonts: {
    mainHeading: {
      size: ["2xl", "3xl", "4xl"],
      weight: "bold",
    },
    subHeading: {
      size: ["md", "lg", "xl", "2xl"],
      weight: "bold",
    },
    subHeadingSecond: {
      size: ["sm", "md", "lg"],
      weight: "semibold",
    },
    subHeadingThird: {
      weight: "normal",
    },
    description: "md",
  },
  companyTheme: {
    color: {
      primary: "#174773",
      secondry: "#1266A0",
      third: "#1767A0"
    }
  },
  aboutIcon: {
    size: [ "3xl", "4xl", "5xl", "6xl"],
    weight: "bold",
    secondry: "#1266A0",
  },

  carouselBgColor: {
    bg: "#2D3748"
  },
  
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
});
export default theme;