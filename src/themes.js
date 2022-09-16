import React from "react";

export const themes = {
  dark: {
    background: "black",
    color: "white",
    padding: "5px"
  },
  light: {
    background: "red",
    padding: "5px",
    color: "white"
  }
};

const ThemeContext = React.createContext(themes);

export default ThemeContext;
