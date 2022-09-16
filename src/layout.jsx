import { useContext } from "react";
import React from "react";
import ThemeContext from "./themes";
//import { useState } from "react";

const Layout = () => {
  const theme = useContext(ThemeContext);
  return <div style={theme}>Componente Layout</div>;
};
export default Layout;
//
