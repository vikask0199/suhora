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
      size: ["2xl", "3xl", "4xl", "5xl"],
      weight: "bold",
    },
    subHeading: {
      size: ["md", "lg", "xl", "2xl", "3xl"],
      weight: "bold",
    },
    subHeadingSecond: {
      size: ["sm", "md", "lg"],
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
  carouselBgColor: {
    bg: "#2D3748"
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