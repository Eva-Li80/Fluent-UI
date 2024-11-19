import { DefaultTheme } from "react-native-paper";

const LightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "purple",
    background: "white",
    text: "black",
  },
};

export default LightTheme;
