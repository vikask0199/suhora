import { StyleFunctionProps, extendTheme } from "@chakra-ui/react";
const theme = extendTheme({
  colors: {
    light: {
      bg: "white",
      primary: "black",
    },
    dark: {
      bg: "gray.800",
      primary: "white",
    },
  },
//   styles: {
//     global: (props: StyleFunctionProps) => ({
//       body: {
//         bg: props.colorMode === "dark" ? "gray.800" : "white",
//         color: props.colorMode === "dark" ? "white" : "black",
//       },
//     }),
//   },
  components: {
    // Container: {
    //   baseStyle: {
    //     bg: "primary",
    //     color: "secondary",
    //   },
    // },
    // Button: {
    //   variants: {
    //     solid: (props: StyleFunctionProps) => ({
    //       bg: props.colorMode === "dark" ? "red" : "yellow",
    //       color: props.colorMode === "dark" ? "green" : "pink",
    //       _hover: {
    //         bg: props.colorMode === "dark" ? "primary.400" : "primary.600",
    //       },
    //     }),
    //   },
    // },
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
});
export default theme;