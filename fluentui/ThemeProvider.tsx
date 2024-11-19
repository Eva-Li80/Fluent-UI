import React, { createContext, useContext, useState } from "react";
import { Provider as PaperProvider } from "react-native-paper";
import LightTheme from "./components/themes/LightTheme";
import DarkTheme from "./components/themes/DarkTheme";

const ThemeContext = createContext({
  toggleTheme: () => {},
  isDarkTheme: false,
});

export const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => setIsDarkTheme(!isDarkTheme);

  const theme = isDarkTheme ? DarkTheme : LightTheme;

  return (
    <ThemeContext.Provider value={{ toggleTheme, isDarkTheme }}>
      <PaperProvider theme={theme}>{children}</PaperProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
