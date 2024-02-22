import { extendTheme } from "@chakra-ui/react";
const theme = extendTheme({
  colors: {
    light: {
      bg: "white",
      primary: "black",
      shadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    },
    dark: {
      bg: "gray.800",
      primary: "white",
      shadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    },
  },
  fonts: {
    mainHeading: {
      size: ["2xl", "3xl", "4xl", "5xl"],
      weight: "bold",
    },
    subHeading: {
      size: ["md", "lg", "xl", "2xl", "3xl"],
      weight: "bold",
    },
    subHeadingSecond: {
      size: ["sm","md", "lg"],
      weight: "semibold",
    },
    description: "md",
    list: "sm",
  },
  companyTheme: {
    color: {
      primary: "#174773",
      secondry: "#1266A0",
    }
  },
  components: {
    Button: {
      variants: {
        productButton: {
          width: "fit-content",
          px: "8",
          _hover: {
            bg: "teal.500", 
            color: "white", 
          },
        },
      },
    },
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
});
export default theme;