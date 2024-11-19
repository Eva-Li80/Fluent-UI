import { MD3DarkTheme as PaperDarkTheme } from "react-native-paper";

const DarkTheme = {
  ...PaperDarkTheme,
  colors: {
    ...PaperDarkTheme.colors,
    primary: "green",
    background: "gray",
    text: "white",
  },
};

export default DarkTheme;
