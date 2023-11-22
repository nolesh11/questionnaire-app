import { createContext } from "react";

export const themes = {
  light: 'light',
  dark: 'dark',
};

const initialState = {
  theme: themes.light,
  tpggleTheme: () => {},
};

export const ThemeContext = createContext(initialState);
