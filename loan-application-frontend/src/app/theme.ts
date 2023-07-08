import { Theme, createTheme } from "@nextui-org/react";

const makeTheme = <T extends Theme>(t: T) => t;

const theme = makeTheme({
  type: "light",
  theme: {
    colors: {
      primaryLight: "$green300",
      primaryLightHover: "$green400",
      primaryLightActive: "$green500",
      primaryLightContrast: "$green700",
      primary: "#4ADE7B",
      primaryBorder: "$green500",
      primaryBorderHover: "$green600",
      primarySolidHover: "$green700",
      primarySolidContrast: "$white",
      primaryShadow: "$green500",

      gradient: "linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)",
      link: "#5E1DAD",
    },
  },
});

export type ExactTheme = typeof theme;

const defaultTheme = createTheme(theme) as ExactTheme;

export default defaultTheme;
